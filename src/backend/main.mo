import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type FreeCaseReview = {
    id : Text;
    timestamp : Time.Time;
    fullName : Text;
    phoneNumber : Text;
    email : Text;
    address : Text;
    carMake : Text;
    carModel : Text;
    carYear : Text;
    insuranceWithStateFarm : Bool;
    insuranceClaimNumber : Text;
    claimState : Text;
    hasLawsuit : Bool;
    eyeInjury : Bool;
    visionImpaired : Bool;
    currentEyeglassesPrescription : Text;
    underMedicalCare : Bool;
    laserSurgery : Bool;
  };

  let reviews = Map.empty<Text, FreeCaseReview>();

  public query ({ caller }) func getAllReviews() : async [FreeCaseReview] {
    reviews.values().toArray();
  };

  public shared ({ caller }) func createReview(
    id : Text,
    fullName : Text,
    phoneNumber : Text,
    email : Text,
    address : Text,
    carMake : Text,
    carModel : Text,
    carYear : Text,
    insuranceWithStateFarm : Bool,
    insuranceClaimNumber : Text,
    claimState : Text,
    hasLawsuit : Bool,
    eyeInjury : Bool,
    visionImpaired : Bool,
    currentEyeglassesPrescription : Text,
    underMedicalCare : Bool,
    laserSurgery : Bool,
  ) : async Text {
    let review : FreeCaseReview = {
      id;
      timestamp = Time.now();
      fullName;
      phoneNumber;
      email;
      address;
      carMake;
      carModel;
      carYear;
      insuranceWithStateFarm;
      insuranceClaimNumber;
      claimState;
      hasLawsuit;
      eyeInjury;
      visionImpaired;
      currentEyeglassesPrescription;
      underMedicalCare;
      laserSurgery;
    };

    reviews.add(id, review);
    id;
  };

  public query ({ caller }) func getReview(id : Text) : async FreeCaseReview {
    switch (reviews.get(id)) {
      case (null) { Runtime.trap("Review not found") };
      case (?review) { review };
    };
  };
};
