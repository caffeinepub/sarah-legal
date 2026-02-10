import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface FreeCaseReviewFormData {
  fullName: string;
  email: string;
  phone: string;
  caseType: string;
  description: string;
  consent: boolean;
}

export function useCreateFreeCaseReview() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: FreeCaseReviewFormData) => {
      if (!actor) {
        throw new Error('Backend connection not available. Please try again.');
      }

      if (!formData.consent) {
        throw new Error('You must agree to the terms to submit your case review.');
      }

      // Generate a unique ID for this submission
      const id = `case-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

      // Note: The backend interface doesn't match our form fields exactly.
      // We're mapping our fields to the available backend fields as best as possible.
      // The backend needs to be updated to match the actual requirements.
      const submissionId = await actor.createReview(
        id,
        formData.fullName,
        formData.phone,
        formData.email,
        formData.caseType, // Using address field for case type
        formData.description, // Using carMake field for description
        '', // carModel - empty
        '', // carYear - empty
        formData.consent, // insuranceWithStateFarm - using for consent
        '', // insuranceClaimNumber - empty
        '', // claimState - empty
        false, // hasLawsuit
        false, // eyeInjury
        false, // visionImpaired
        '', // currentEyeglassesPrescription - empty
        false, // underMedicalCare
        false // laserSurgery
      );

      return submissionId;
    },
    onSuccess: () => {
      // Invalidate any queries that might need to be refreshed
      queryClient.invalidateQueries({ queryKey: ['reviews'] });
    },
  });
}
