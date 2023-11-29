from fastapi import APIRouter

# import field classifier trainer here.
from trainers.train_field_classifier import train_field_classifier

router = APIRouter(
        prefix="/train",
        tags=["Train"]
)

@router.get("/train_field_classifier")
def start_train_field_classifier():
    train_field_classifier()
    return {"message": "Field Classifier Training done."}