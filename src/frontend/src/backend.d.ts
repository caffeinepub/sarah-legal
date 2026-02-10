import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface FreeCaseReview {
    id: string;
    carModel: string;
    fullName: string;
    email: string;
    insuranceWithStateFarm: boolean;
    eyeInjury: boolean;
    underMedicalCare: boolean;
    address: string;
    timestamp: Time;
    visionImpaired: boolean;
    hasLawsuit: boolean;
    carMake: string;
    carYear: string;
    currentEyeglassesPrescription: string;
    claimState: string;
    insuranceClaimNumber: string;
    phoneNumber: string;
    laserSurgery: boolean;
}
export type Time = bigint;
export interface backendInterface {
    createReview(id: string, fullName: string, phoneNumber: string, email: string, address: string, carMake: string, carModel: string, carYear: string, insuranceWithStateFarm: boolean, insuranceClaimNumber: string, claimState: string, hasLawsuit: boolean, eyeInjury: boolean, visionImpaired: boolean, currentEyeglassesPrescription: string, underMedicalCare: boolean, laserSurgery: boolean): Promise<string>;
    getAllReviews(): Promise<Array<FreeCaseReview>>;
    getReview(id: string): Promise<FreeCaseReview>;
}
