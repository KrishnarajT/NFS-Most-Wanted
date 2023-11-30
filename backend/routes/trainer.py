from typing import Optional
from fastapi.responses import HTMLResponse
from fastapi import APIRouter
from pydantic import BaseModel

# import models, trainers and scrappers.
from trainers.train_field_classifier import train_field_classifier
from trainers.run_field_classifier import get_profession_from_blob
from trainers.run_guess_gender import guess_gender

from web_scrappers.dork_sites import get_google_links
from web_scrappers.get_google_images import get_google_images
from web_scrappers.github_scrapper import get_github_info, get_github_people_images
from web_scrappers.make_blob_by_scrapping import make_blob_by_scrapping
from web_scrappers.breachdirApi import get_breach_info

router = APIRouter(
        prefix = "/train",
        tags = [ "Train" ]
)

class TrainModelInputModel( BaseModel ) :
    first_name: str
    last_name: str
    city: str
    email: Optional[ str ] | None = None
    github: Optional[ str ] | None = None
    workplace: Optional[ str ] | None = None

@router.post( "/train_models" )
def start_train_dork_sites( Data: TrainModelInputModel ) :
    # get names from request
    first_name = Data.first_name
    last_name = Data.last_name
    city = Data.city
    email = Data.email
    github = Data.github
    workplace = Data.workplace
    
    # print everything
    print( f"First name: {first_name}" )
    print( f"Last name: {last_name}" )
    print( f"City: {city}" )
    print( f"Email: {email}" )
    print( f"Github: {github}" )
    print( f"Workplace: {workplace}" )
    
    try :
        
        print( "Training classifier" )
        train_field_classifier()
        
        # get google links
        # google_links = get_google_links( first_name, last_name, city, workplace, email, github )
        # print( f"Google links: {google_links}" )
        
        # get images links
        # images_links = get_google_images( first_name, last_name, city, workplace, email, github )
        
        # get github stuff
        [ followers, following, join_year, active_years ] = get_github_info( github )
        
        associated_people = following + followers
        
        # get github people images
        # images_links += get_github_people_images( associated_people )
        
        # make blob from scrapping all links we got from google
        # blob = make_blob_by_scrapping( google_links )
        
        # get profession from blob
        # profession = get_profession_from_blob( blob )
        
        # get gender from model
        gender = guess_gender( first_name )
        
        # get breaches
        breaches = get_breach_info( email )
        images_links = []
        
        # print everything
        print( f"Images links: {images_links}" )
        print( f"Followers: {followers}" )
        print( f"Following: {following}" )
        print( f"Join year: {join_year}" )
        print( f"Active years: {active_years}" )
        print( f"Associated people: {associated_people}" )
        # print( f"Profession: {profession}" )
        # print( f"Google links: {google_links}" )
        
        
        # send a message with 200 status code, and a dictionary
        return HTMLResponse( content = {
            # "google_links" : google_links,
            "images_links" : images_links,
            "people" : associated_people,
            "active_years" : active_years,
            "join_year" : join_year,
            "gender" : gender,
            # "profession" : profession,
            "breaches" : breaches
        }, status_code = 200 )
    
    except Exception as e :
        print( f"An error occurred: {e}" )
        return HTMLResponse( content = f"An error occurred: {e}", status_code = 500 )
