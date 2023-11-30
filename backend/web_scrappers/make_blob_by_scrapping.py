def get_blob( link ) :
    # get blob from link
    return "This is a blob from a link"

def make_blob_by_scrapping( links ) :
    # get blob from links
    blob = ""
    for link in links :
        blob += get_blob( link )
    return blob

# example links
links = [ 'https://mitwpu.edu.in/faculty/yogita-shivaji-hande', 'https://in.linkedin.com/in/yogita-hande-a606b245',
          'https://www.healyos.com/team/dr-yogita-hande/', 'https://in.linkedin.com/in/yogitahande/en',
          'https://scholar.google.co.in/citations?user=YqzWWdEAAAAJ&hl=en', 'https://www.facebook.com/yogita.hande.921/',
          'https://twitter.com/HandeYogita', 'https://m.facebook.com/yogita.hande.779/?locale=hi_IN',
          'https://www.coursehero.com/file/101639645/SEMDisplay-LP-Yogitapdf/',
          'https://www.flipkart.com/information-cyber-security-savitribai-phule-pune-university-it-sem-7/p/itmdf88ba4308692',
          'https://moderncoe.edu.in/computer-engineering/faculty-details.aspx' ]
