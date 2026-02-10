import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { FreeCaseReview } from '../backend';

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();

  return useQuery<FreeCaseReview[]>({
    queryKey: ['reviews'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllReviews();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetReview(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<FreeCaseReview | null>({
    queryKey: ['review', id],
    queryFn: async () => {
      if (!actor || !id) return null;
      try {
        return await actor.getReview(id);
      } catch (error) {
        console.error('Error fetching review:', error);
        return null;
      }
    },
    enabled: !!actor && !isFetching && !!id,
  });
}
