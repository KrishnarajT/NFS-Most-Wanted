
def get_blob(link):
    # get blob from link
    return "This is a blob from a link"

def make_blob_by_scrapping(links):
    # get blob from links
    blob = ""
    for link in links:
        blob += get_blob(link)
    return blob