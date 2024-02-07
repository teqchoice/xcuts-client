import { baseSplitApi } from './baseApi'

export const eventsApi = baseSplitApi.injectEndpoints({
  endpoints: builder => ({
    findAllPageAndCat: builder.query({
      query: limit => `get-all-category/`,
      providesTags: ['PageAndCat']
      // keepUnusedDataFor: 5,
      // refetchOnMountOrArgChange: 10
    }),
    findByPageId: builder.query({
      query: limit => `get-content-query/page=${limit}/`,
      providesTags: ['PageContent'],
      keepUnusedDataFor: 5
      // refetchOnMountOrArgChange: 10
    }),
    createPage: builder.mutation({
      query: body => ({
        url: `add-category/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['PageAndCat']
    }),
    updatePage: builder.mutation({
      query: body => ({
        url: `update-category/${body.id}/`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['PageAndCat']
    }),
    removePage: builder.mutation({
      query: body => ({
        url: `Delete-category/${body.id}/`,
        method: 'DELETE',
        body
      }),
      invalidatesTags: ['PageAndCat']
    }),
    createContent: builder.mutation({
      query: body => ({
        url: `add-content/`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['PageContent']
    }),
    updateContent: builder.mutation({
      query: body => ({
        url: `update-content/${body.id}/`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['PageContent']
    }),
    removeContent: builder.mutation({
      query: body => ({
        url: `Delete-content/${body.id}/`,
        method: 'DELETE',
        body
      }),
      invalidatesTags: ['PageContent']
    })
  })
})

export const {
  useFindAllPageAndCatQuery,
  useFindByPageIdQuery,
  useRemoveContentMutation,
  useCreateContentMutation,
  useCreatePageMutation,
  useRemovePageMutation,
  useUpdatePageMutation,
  useUpdateContentMutation
} = eventsApi
