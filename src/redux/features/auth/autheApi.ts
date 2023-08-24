import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ILogin } from '../../../routes/auth';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => {
    return {
      loginAdmin: builder.mutation<null, ILogin>({
        query: (data) => {
          return { url: '/login', method: 'POST', body: data };
        },
      }),
    };
  },
});

export const { useLoginAdminMutation } = authApi;
