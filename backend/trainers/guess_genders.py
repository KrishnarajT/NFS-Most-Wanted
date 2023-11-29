import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
import os


def train_gender_classifier( csv_file ) :
    # Load data from CSV file
    df = pd.read_csv( csv_file )
    
    # Create a pipeline with CountVectorizer and Multinomial Naive Bayes
    model = make_pipeline( CountVectorizer(), MultinomialNB() )
    
    # Train the model
    model.fit( df[ 'name' ], df[ 'gender' ] )
    
    # Return the trained model
    return model

def predict_gender( model, name ) :
    # Predict the gender for the given name
    predicted_gender = model.predict( [ name ] )
    
    # Return the predicted gender
    return predicted_gender[ 0 ]

# Example usage:
csv_file_path = os.path.join( os.path.dirname( __file__ ), '../data/names_genders.csv' )  # Replace with the path to your CSV file
trained_model = train_gender_classifier( csv_file_path )

# Test the predict_gender function
input_name = input( "Enter a name: " )
predicted_gender = predict_gender( trained_model, input_name )
print( f"Predicted Gender: {predicted_gender}" )
