import { paths } from '@/core/api-cms/v1'
import createFetchClient, { type Middleware } from 'openapi-fetch'
import createClient from 'openapi-react-query'
const CMSMiddleware: Middleware = {
  async onRequest({ request }) {
    return request
  },
  async onResponse({ response }) {
    if (response.status === 401) {
    }

    if (response.status === 403) {
      // do something
    }

    if (response.status === 404) {
      // do something
    }

    if (response.status === 500) {
      // do something
    }

    return response
  }
}

export const useCMSRequest = () => {
  const fetchClient = createFetchClient<paths>({
    baseUrl: process.env.NEXT_PUBLIC_CMS_API_URL,
    headers: {
      //   Authorization: `Bearer ${session?.data?.accessToken}`,
    }
  })

  fetchClient.use(CMSMiddleware)

  return createClient(fetchClient)
}
