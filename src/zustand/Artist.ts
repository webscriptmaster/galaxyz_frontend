import { fakerEN_US as faker } from "@faker-js/faker";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { toast } from "sonner";
import { IArtist, IMerchandising, IReview, ISong } from "@/types/interfaces";

interface ISearchParam {
  keyword?: string;
}

interface IArtistState {
  hasHydrated: boolean;
  loading: boolean;
  artists: IArtist[];

  setHasHydrated: (payload: boolean) => void;
  setLoading: (payload: boolean) => void;
  setArtists: (payload: IArtist[]) => void;

  searchArtistsAction: ({ keyword }: ISearchParam) => void;
}

const useArtistStore = create<IArtistState>()(
  persist(
    (set) => ({
      hasHydrated: false,
      loading: false,
      artists: [],

      setHasHydrated: (payload: boolean) => set({ hasHydrated: payload }),
      setLoading: (payload: boolean) => set({ loading: payload }),
      setArtists: (payload: IArtist[]) => set({ artists: payload }),

      searchArtistsAction: async ({ keyword: _keyword }: ISearchParam) => {
        try {
          set({ loading: true });

          const artists: IArtist[] = [];
          for (let i = 0; i < Math.floor(Math.random() * 10) + 1; i++) {
            const reviews: IReview[] = [];
            for (let r = 0; r < Math.floor(Math.random() * 10) + 1; r++) {
              reviews.push({
                _id: faker.database.mongodbObjectId(),
                reviewer: {
                  avatar: faker.image.avatarLegacy(),
                  firstName: faker.person.firstName(),
                  lastName: faker.person.lastName(),
                  follows: Number(faker.number.int({ min: 0, max: 10000000 }))
                },
                feedback: faker.lorem.sentences()
              });
            }

            const songs: ISong[] = [];
            for (let s = 0; s < Math.floor(Math.random() * 10) + 1; s++) {
              songs.push({
                _id: faker.database.mongodbObjectId(),
                name: faker.music.songName(),
                genre: faker.music.genre()
              });
            }

            const merchandisings: IMerchandising[] = [];
            for (let m = 0; m < Math.floor(Math.random() * 10) + 1; m++) {
              merchandisings.push({
                _id: faker.database.mongodbObjectId(),
                name: faker.commerce.productName(),
                price: Number(faker.commerce.price()),
                img: faker.image.urlLoremFlickr({
                  category: "shirt,merchandising"
                })
              });
            }

            artists.push({
              _id: faker.database.mongodbObjectId(),
              avatar: faker.image.urlLoremFlickr({
                width: 640,
                height: 720,
                category: "song,artist"
              }),
              firstName: faker.person.firstName(),
              lastName: faker.person.lastName(),
              reviews,
              songs,
              merchandisings
            });
          }

          set({ artists });
        } catch (err: any) {
          console.error(err);
          if (
            err &&
            err.response &&
            err.response.data &&
            err.response.data.msg
          ) {
            toast("Error on getting artist", {
              description: err.response.data.msg
            });
          } else {
            toast("Error on getting artist", {
              description: "Something went wrong. Please try again later."
            });
          }
        } finally {
          set({ loading: false });
        }
      }
    }),
    {
      name: "galaxyz-artist",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      }
    }
  )
);

export default useArtistStore;
