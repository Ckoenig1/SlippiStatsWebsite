import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  posts: Array<Post>;
  post?: Maybe<Post>;
  me?: Maybe<User>;
  online: Scalars['Boolean'];
  getFriendRequests: Array<FriendRequest>;
  invitations: Array<Invitation>;
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};


export type QueryOnlineArgs = {
  username: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  username: Scalars['String'];
  userCode: Scalars['String'];
  online: Scalars['Boolean'];
  friendRequests: Array<FriendRequest>;
  invitations: Array<Invitation>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  id: Scalars['Float'];
  requester: Scalars['String'];
  requestee: Scalars['String'];
  status: Scalars['Float'];
  users: Array<User>;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Invitation = {
  __typename?: 'Invitation';
  id: Scalars['Float'];
  requester: Scalars['String'];
  matchType: Scalars['Float'];
  requestee: Scalars['String'];
  status: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  updatePost: Post;
  deletePost: Scalars['Boolean'];
  register: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  respondToFriendRequest: FriendResponse;
  createFriendRequest: FriendResponse;
  updateStats: MatchupStats;
  respondToInvitation: InvitationResponse;
  createInvitation: InvitationResponse;
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  title?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationRegisterArgs = {
  userCode: Scalars['String'];
  options: UsernamePasswordInput;
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationRespondToFriendRequestArgs = {
  response: Scalars['Boolean'];
  requestId: Scalars['Float'];
};


export type MutationCreateFriendRequestArgs = {
  username: Scalars['String'];
};


export type MutationUpdateStatsArgs = {
  stats: Stats;
};


export type MutationRespondToInvitationArgs = {
  response: Scalars['Boolean'];
  requestId: Scalars['Float'];
};


export type MutationCreateInvitationArgs = {
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type FriendResponse = {
  __typename?: 'FriendResponse';
  errors?: Maybe<Array<FieldError>>;
  friendRequest?: Maybe<FriendRequest>;
};

export type MatchupStats = {
  __typename?: 'MatchupStats';
  id: Scalars['Float'];
  charId: Scalars['Float'];
  opponentCode: Scalars['String'];
  stageID: Scalars['Float'];
  wins: Scalars['Float'];
  losses: Scalars['Float'];
  totalGames: Scalars['Float'];
  incompleteGames: Scalars['Float'];
  timePlayed: Scalars['Float'];
  kills: Scalars['Float'];
  deaths: Scalars['Float'];
  selfDestructs: Scalars['Float'];
  killDeath: Scalars['Float'];
  averageSDs: Scalars['Float'];
  apm: Scalars['Float'];
  openingsPerKill: Scalars['Float'];
  avgKillPercent: Scalars['Float'];
  comeBack2: Scalars['Float'];
  comeBack3: Scalars['Float'];
  comeBack4: Scalars['Float'];
  fourStocks: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Stats = {
  charId: Scalars['Float'];
  opponentCode: Scalars['String'];
  stageID: Scalars['Float'];
  wins: Scalars['Float'];
  losses: Scalars['Float'];
  totalGames: Scalars['Float'];
  incompleteGames: Scalars['Float'];
  timePlayed: Scalars['Float'];
  kills: Scalars['Float'];
  deaths: Scalars['Float'];
  selfDestructs: Scalars['Float'];
  killDeath: Scalars['Float'];
  averageSDs: Scalars['Float'];
  apm: Scalars['Float'];
  openingsPerKill: Scalars['Float'];
  avgKillPercent: Scalars['Float'];
  comeBack2: Scalars['Float'];
  comeBack3: Scalars['Float'];
  comeBack4: Scalars['Float'];
  fourStocks: Scalars['Float'];
};

export type InvitationResponse = {
  __typename?: 'InvitationResponse';
  errors?: Maybe<Array<FieldError>>;
  invitation?: Maybe<Invitation>;
};

export type RegularUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username'>
);

export type CreateFriendRequestMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type CreateFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & { createFriendRequest: (
    { __typename?: 'FriendResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, friendRequest?: Maybe<(
      { __typename?: 'FriendRequest' }
      & Pick<FriendRequest, 'id' | 'requester' | 'requestee' | 'status'>
    )> }
  ) }
);

export type CreateInvitationMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type CreateInvitationMutation = (
  { __typename?: 'Mutation' }
  & { createInvitation: (
    { __typename?: 'InvitationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, invitation?: Maybe<(
      { __typename?: 'Invitation' }
      & Pick<Invitation, 'id' | 'createdAt' | 'status' | 'requester' | 'requestee'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  userCode: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & RegularUserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type RespondToFriendRequestMutationVariables = Exact<{
  response: Scalars['Boolean'];
  requestId: Scalars['Float'];
}>;


export type RespondToFriendRequestMutation = (
  { __typename?: 'Mutation' }
  & { respondToFriendRequest: (
    { __typename?: 'FriendResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, friendRequest?: Maybe<(
      { __typename?: 'FriendRequest' }
      & Pick<FriendRequest, 'requester' | 'requestee' | 'status'>
    )> }
  ) }
);

export type RespondToInvitationMutationVariables = Exact<{
  requestId: Scalars['Float'];
  response: Scalars['Boolean'];
}>;


export type RespondToInvitationMutation = (
  { __typename?: 'Mutation' }
  & { respondToInvitation: (
    { __typename?: 'InvitationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, invitation?: Maybe<(
      { __typename?: 'Invitation' }
      & Pick<Invitation, 'id' | 'requester' | 'requestee' | 'createdAt' | 'status'>
    )> }
  ) }
);

export type GetFriendRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFriendRequestsQuery = (
  { __typename?: 'Query' }
  & { getFriendRequests: Array<(
    { __typename?: 'FriendRequest' }
    & Pick<FriendRequest, 'id' | 'requester' | 'requestee' | 'status'>
  )> }
);

export type InvitationsQueryVariables = Exact<{ [key: string]: never; }>;


export type InvitationsQuery = (
  { __typename?: 'Query' }
  & { invitations: Array<(
    { __typename?: 'Invitation' }
    & Pick<Invitation, 'requester' | 'requestee' | 'createdAt' | 'status'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & RegularUserFragment
  )> }
);

export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  username
}
    `;
export const CreateFriendRequestDocument = gql`
    mutation createFriendRequest($username: String!) {
  createFriendRequest(username: $username) {
    errors {
      field
      message
    }
    friendRequest {
      id
      requester
      requestee
      status
    }
  }
}
    `;

export function useCreateFriendRequestMutation() {
  return Urql.useMutation<CreateFriendRequestMutation, CreateFriendRequestMutationVariables>(CreateFriendRequestDocument);
};
export const CreateInvitationDocument = gql`
    mutation createInvitation($username: String!) {
  createInvitation(username: $username) {
    errors {
      field
      message
    }
    invitation {
      id
      createdAt
      status
      requester
      requestee
    }
  }
}
    `;

export function useCreateInvitationMutation() {
  return Urql.useMutation<CreateInvitationMutation, CreateInvitationMutationVariables>(CreateInvitationDocument);
};
export const LoginDocument = gql`
    mutation Login($options: UsernamePasswordInput!) {
  login(options: $options) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $userCode: String!) {
  register(
    userCode: $userCode
    options: {username: $username, password: $password}
  ) {
    user {
      ...RegularUser
    }
    errors {
      field
      message
    }
  }
}
    ${RegularUserFragmentDoc}`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const RespondToFriendRequestDocument = gql`
    mutation respondToFriendRequest($response: Boolean!, $requestId: Float!) {
  respondToFriendRequest(response: $response, requestId: $requestId) {
    errors {
      field
      message
    }
    friendRequest {
      requester
      requestee
      status
    }
  }
}
    `;

export function useRespondToFriendRequestMutation() {
  return Urql.useMutation<RespondToFriendRequestMutation, RespondToFriendRequestMutationVariables>(RespondToFriendRequestDocument);
};
export const RespondToInvitationDocument = gql`
    mutation respondToInvitation($requestId: Float!, $response: Boolean!) {
  respondToInvitation(requestId: $requestId, response: $response) {
    errors {
      field
      message
    }
    invitation {
      id
      requester
      requestee
      createdAt
      status
    }
  }
}
    `;

export function useRespondToInvitationMutation() {
  return Urql.useMutation<RespondToInvitationMutation, RespondToInvitationMutationVariables>(RespondToInvitationDocument);
};
export const GetFriendRequestsDocument = gql`
    query getFriendRequests {
  getFriendRequests {
    id
    requester
    requestee
    status
  }
}
    `;

export function useGetFriendRequestsQuery(options: Omit<Urql.UseQueryArgs<GetFriendRequestsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetFriendRequestsQuery>({ query: GetFriendRequestsDocument, ...options });
};
export const InvitationsDocument = gql`
    query invitations {
  invitations {
    requester
    requestee
    createdAt
    status
  }
}
    `;

export function useInvitationsQuery(options: Omit<Urql.UseQueryArgs<InvitationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<InvitationsQuery>({ query: InvitationsDocument, ...options });
};
export const MeDocument = gql`
    query me {
  me {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};