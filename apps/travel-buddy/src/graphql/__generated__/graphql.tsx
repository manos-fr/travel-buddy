import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "grants" */
export type Grants = {
  __typename?: 'grants';
  amount: Scalars['numeric']['output'];
  areas: Scalars['jsonb']['output'];
  created_at: Scalars['timestamptz']['output'];
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation: Scalars['String']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  interacted_users_ids: Scalars['jsonb']['output'];
  location: Scalars['String']['output'];
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
};


/** columns and relationships of "grants" */
export type GrantsAreasArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "grants" */
export type GrantsInteracted_Users_IdsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "grants" */
export type GrantsUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


/** columns and relationships of "grants" */
export type GrantsUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};

/** aggregated selection of "grants" */
export type Grants_Aggregate = {
  __typename?: 'grants_aggregate';
  aggregate?: Maybe<Grants_Aggregate_Fields>;
  nodes: Array<Grants>;
};

/** aggregate fields of "grants" */
export type Grants_Aggregate_Fields = {
  __typename?: 'grants_aggregate_fields';
  avg?: Maybe<Grants_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Grants_Max_Fields>;
  min?: Maybe<Grants_Min_Fields>;
  stddev?: Maybe<Grants_Stddev_Fields>;
  stddev_pop?: Maybe<Grants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Grants_Stddev_Samp_Fields>;
  sum?: Maybe<Grants_Sum_Fields>;
  var_pop?: Maybe<Grants_Var_Pop_Fields>;
  var_samp?: Maybe<Grants_Var_Samp_Fields>;
  variance?: Maybe<Grants_Variance_Fields>;
};


/** aggregate fields of "grants" */
export type Grants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Grants_Append_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Grants_Avg_Fields = {
  __typename?: 'grants_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "grants". All fields are combined with a logical 'AND'. */
export type Grants_Bool_Exp = {
  _and?: InputMaybe<Array<Grants_Bool_Exp>>;
  _not?: InputMaybe<Grants_Bool_Exp>;
  _or?: InputMaybe<Array<Grants_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  areas?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deadline?: InputMaybe<Timestamptz_Comparison_Exp>;
  foundation?: InputMaybe<String_Comparison_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  interacted_users_ids?: InputMaybe<Jsonb_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  match_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_grants?: InputMaybe<Users_Grants_Bool_Exp>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "grants" */
export enum Grants_Constraint {
  /** unique or primary key constraint on columns "id" */
  GrantsPkey = 'grants_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Grants_Delete_At_Path_Input = {
  areas?: InputMaybe<Array<Scalars['String']['input']>>;
  interacted_users_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Grants_Delete_Elem_Input = {
  areas?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Grants_Delete_Key_Input = {
  areas?: InputMaybe<Scalars['String']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "grants" */
export type Grants_Inc_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "grants" */
export type Grants_Insert_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_grants?: InputMaybe<Users_Grants_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Grants_Max_Fields = {
  __typename?: 'grants_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Grants_Min_Fields = {
  __typename?: 'grants_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  deadline?: Maybe<Scalars['timestamptz']['output']>;
  foundation?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  match_date?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "grants" */
export type Grants_Mutation_Response = {
  __typename?: 'grants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Grants>;
};

/** input type for inserting object relation for remote table "grants" */
export type Grants_Obj_Rel_Insert_Input = {
  data: Grants_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};

/** on_conflict condition type for table "grants" */
export type Grants_On_Conflict = {
  constraint: Grants_Constraint;
  update_columns?: Array<Grants_Update_Column>;
  where?: InputMaybe<Grants_Bool_Exp>;
};

/** Ordering options when selecting data from "grants". */
export type Grants_Order_By = {
  amount?: InputMaybe<Order_By>;
  areas?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deadline?: InputMaybe<Order_By>;
  foundation?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  interacted_users_ids?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  match_date?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Order_By>;
};

/** primary key columns input for table: grants */
export type Grants_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Grants_Prepend_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "grants" */
export enum Grants_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  InteractedUsersIds = 'interacted_users_ids',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "grants" */
export type Grants_Set_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Grants_Stddev_Fields = {
  __typename?: 'grants_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Grants_Stddev_Pop_Fields = {
  __typename?: 'grants_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Grants_Stddev_Samp_Fields = {
  __typename?: 'grants_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "grants" */
export type Grants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Grants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Grants_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  deadline?: InputMaybe<Scalars['timestamptz']['input']>;
  foundation?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  interacted_users_ids?: InputMaybe<Scalars['jsonb']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  match_date?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Grants_Sum_Fields = {
  __typename?: 'grants_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "grants" */
export enum Grants_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Deadline = 'deadline',
  /** column name */
  Foundation = 'foundation',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  InteractedUsersIds = 'interacted_users_ids',
  /** column name */
  Location = 'location',
  /** column name */
  MatchDate = 'match_date',
  /** column name */
  Name = 'name',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Grants_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Grants_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Grants_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Grants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Grants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Grants_Var_Pop_Fields = {
  __typename?: 'grants_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Grants_Var_Samp_Fields = {
  __typename?: 'grants_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Grants_Variance_Fields = {
  __typename?: 'grants_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "lists" */
export type Lists = {
  __typename?: 'lists';
  Creation_date: Scalars['timestamptz']['output'];
  Description?: Maybe<Scalars['String']['output']>;
  Name: Scalars['String']['output'];
  Owner: Scalars['Int']['output'];
  Photo?: Maybe<Scalars['String']['output']>;
  Update_date?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
};

/** aggregated selection of "lists" */
export type Lists_Aggregate = {
  __typename?: 'lists_aggregate';
  aggregate?: Maybe<Lists_Aggregate_Fields>;
  nodes: Array<Lists>;
};

/** aggregate fields of "lists" */
export type Lists_Aggregate_Fields = {
  __typename?: 'lists_aggregate_fields';
  avg?: Maybe<Lists_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Lists_Max_Fields>;
  min?: Maybe<Lists_Min_Fields>;
  stddev?: Maybe<Lists_Stddev_Fields>;
  stddev_pop?: Maybe<Lists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lists_Stddev_Samp_Fields>;
  sum?: Maybe<Lists_Sum_Fields>;
  var_pop?: Maybe<Lists_Var_Pop_Fields>;
  var_samp?: Maybe<Lists_Var_Samp_Fields>;
  variance?: Maybe<Lists_Variance_Fields>;
};


/** aggregate fields of "lists" */
export type Lists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Lists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Lists_Avg_Fields = {
  __typename?: 'lists_avg_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "lists". All fields are combined with a logical 'AND'. */
export type Lists_Bool_Exp = {
  Creation_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  Description?: InputMaybe<String_Comparison_Exp>;
  Name?: InputMaybe<String_Comparison_Exp>;
  Owner?: InputMaybe<Int_Comparison_Exp>;
  Photo?: InputMaybe<String_Comparison_Exp>;
  Update_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  _and?: InputMaybe<Array<Lists_Bool_Exp>>;
  _not?: InputMaybe<Lists_Bool_Exp>;
  _or?: InputMaybe<Array<Lists_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "lists" */
export enum Lists_Constraint {
  /** unique or primary key constraint on columns "id" */
  ListsPkey = 'lists_pkey'
}

/** input type for incrementing numeric columns in table "lists" */
export type Lists_Inc_Input = {
  Owner?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "lists" */
export type Lists_Insert_Input = {
  Creation_date?: InputMaybe<Scalars['timestamptz']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Owner?: InputMaybe<Scalars['Int']['input']>;
  Photo?: InputMaybe<Scalars['String']['input']>;
  Update_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Lists_Max_Fields = {
  __typename?: 'lists_max_fields';
  Creation_date?: Maybe<Scalars['timestamptz']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Owner?: Maybe<Scalars['Int']['output']>;
  Photo?: Maybe<Scalars['String']['output']>;
  Update_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Lists_Min_Fields = {
  __typename?: 'lists_min_fields';
  Creation_date?: Maybe<Scalars['timestamptz']['output']>;
  Description?: Maybe<Scalars['String']['output']>;
  Name?: Maybe<Scalars['String']['output']>;
  Owner?: Maybe<Scalars['Int']['output']>;
  Photo?: Maybe<Scalars['String']['output']>;
  Update_date?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "lists" */
export type Lists_Mutation_Response = {
  __typename?: 'lists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Lists>;
};

/** on_conflict condition type for table "lists" */
export type Lists_On_Conflict = {
  constraint: Lists_Constraint;
  update_columns?: Array<Lists_Update_Column>;
  where?: InputMaybe<Lists_Bool_Exp>;
};

/** Ordering options when selecting data from "lists". */
export type Lists_Order_By = {
  Creation_date?: InputMaybe<Order_By>;
  Description?: InputMaybe<Order_By>;
  Name?: InputMaybe<Order_By>;
  Owner?: InputMaybe<Order_By>;
  Photo?: InputMaybe<Order_By>;
  Update_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: lists */
export type Lists_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "lists" */
export enum Lists_Select_Column {
  /** column name */
  CreationDate = 'Creation_date',
  /** column name */
  Description = 'Description',
  /** column name */
  Name = 'Name',
  /** column name */
  Owner = 'Owner',
  /** column name */
  Photo = 'Photo',
  /** column name */
  UpdateDate = 'Update_date',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "lists" */
export type Lists_Set_Input = {
  Creation_date?: InputMaybe<Scalars['timestamptz']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Owner?: InputMaybe<Scalars['Int']['input']>;
  Photo?: InputMaybe<Scalars['String']['input']>;
  Update_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Lists_Stddev_Fields = {
  __typename?: 'lists_stddev_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Lists_Stddev_Pop_Fields = {
  __typename?: 'lists_stddev_pop_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Lists_Stddev_Samp_Fields = {
  __typename?: 'lists_stddev_samp_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "lists" */
export type Lists_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Lists_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Lists_Stream_Cursor_Value_Input = {
  Creation_date?: InputMaybe<Scalars['timestamptz']['input']>;
  Description?: InputMaybe<Scalars['String']['input']>;
  Name?: InputMaybe<Scalars['String']['input']>;
  Owner?: InputMaybe<Scalars['Int']['input']>;
  Photo?: InputMaybe<Scalars['String']['input']>;
  Update_date?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Lists_Sum_Fields = {
  __typename?: 'lists_sum_fields';
  Owner?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "lists" */
export enum Lists_Update_Column {
  /** column name */
  CreationDate = 'Creation_date',
  /** column name */
  Description = 'Description',
  /** column name */
  Name = 'Name',
  /** column name */
  Owner = 'Owner',
  /** column name */
  Photo = 'Photo',
  /** column name */
  UpdateDate = 'Update_date',
  /** column name */
  Id = 'id'
}

export type Lists_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Lists_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Lists_Set_Input>;
  /** filter the rows which have to be updated */
  where: Lists_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Lists_Var_Pop_Fields = {
  __typename?: 'lists_var_pop_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Lists_Var_Samp_Fields = {
  __typename?: 'lists_var_samp_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Lists_Variance_Fields = {
  __typename?: 'lists_variance_fields';
  Owner?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "grants" */
  delete_grants?: Maybe<Grants_Mutation_Response>;
  /** delete single row from the table: "grants" */
  delete_grants_by_pk?: Maybe<Grants>;
  /** delete data from the table: "lists" */
  delete_lists?: Maybe<Lists_Mutation_Response>;
  /** delete single row from the table: "lists" */
  delete_lists_by_pk?: Maybe<Lists>;
  /** delete data from the table: "network" */
  delete_network?: Maybe<Network_Mutation_Response>;
  /** delete single row from the table: "network" */
  delete_network_by_pk?: Maybe<Network>;
  /** delete data from the table: "places" */
  delete_places?: Maybe<Places_Mutation_Response>;
  /** delete single row from the table: "places" */
  delete_places_by_pk?: Maybe<Places>;
  /** delete data from the table: "somes" */
  delete_somes?: Maybe<Somes_Mutation_Response>;
  /** delete single row from the table: "somes" */
  delete_somes_by_pk?: Maybe<Somes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_grants" */
  delete_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** delete single row from the table: "users_grants" */
  delete_users_grants_by_pk?: Maybe<Users_Grants>;
  /** delete data from the table: "users_places" */
  delete_users_places?: Maybe<Users_Places_Mutation_Response>;
  /** delete single row from the table: "users_places" */
  delete_users_places_by_pk?: Maybe<Users_Places>;
  /** insert data into the table: "grants" */
  insert_grants?: Maybe<Grants_Mutation_Response>;
  /** insert a single row into the table: "grants" */
  insert_grants_one?: Maybe<Grants>;
  /** insert data into the table: "lists" */
  insert_lists?: Maybe<Lists_Mutation_Response>;
  /** insert a single row into the table: "lists" */
  insert_lists_one?: Maybe<Lists>;
  /** insert data into the table: "network" */
  insert_network?: Maybe<Network_Mutation_Response>;
  /** insert a single row into the table: "network" */
  insert_network_one?: Maybe<Network>;
  /** insert data into the table: "places" */
  insert_places?: Maybe<Places_Mutation_Response>;
  /** insert a single row into the table: "places" */
  insert_places_one?: Maybe<Places>;
  /** insert data into the table: "somes" */
  insert_somes?: Maybe<Somes_Mutation_Response>;
  /** insert a single row into the table: "somes" */
  insert_somes_one?: Maybe<Somes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert data into the table: "users_grants" */
  insert_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** insert a single row into the table: "users_grants" */
  insert_users_grants_one?: Maybe<Users_Grants>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_places" */
  insert_users_places?: Maybe<Users_Places_Mutation_Response>;
  /** insert a single row into the table: "users_places" */
  insert_users_places_one?: Maybe<Users_Places>;
  /** update data of the table: "grants" */
  update_grants?: Maybe<Grants_Mutation_Response>;
  /** update single row of the table: "grants" */
  update_grants_by_pk?: Maybe<Grants>;
  /** update multiples rows of table: "grants" */
  update_grants_many?: Maybe<Array<Maybe<Grants_Mutation_Response>>>;
  /** update data of the table: "lists" */
  update_lists?: Maybe<Lists_Mutation_Response>;
  /** update single row of the table: "lists" */
  update_lists_by_pk?: Maybe<Lists>;
  /** update multiples rows of table: "lists" */
  update_lists_many?: Maybe<Array<Maybe<Lists_Mutation_Response>>>;
  /** update data of the table: "network" */
  update_network?: Maybe<Network_Mutation_Response>;
  /** update single row of the table: "network" */
  update_network_by_pk?: Maybe<Network>;
  /** update multiples rows of table: "network" */
  update_network_many?: Maybe<Array<Maybe<Network_Mutation_Response>>>;
  /** update data of the table: "places" */
  update_places?: Maybe<Places_Mutation_Response>;
  /** update single row of the table: "places" */
  update_places_by_pk?: Maybe<Places>;
  /** update multiples rows of table: "places" */
  update_places_many?: Maybe<Array<Maybe<Places_Mutation_Response>>>;
  /** update data of the table: "somes" */
  update_somes?: Maybe<Somes_Mutation_Response>;
  /** update single row of the table: "somes" */
  update_somes_by_pk?: Maybe<Somes>;
  /** update multiples rows of table: "somes" */
  update_somes_many?: Maybe<Array<Maybe<Somes_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "users_grants" */
  update_users_grants?: Maybe<Users_Grants_Mutation_Response>;
  /** update single row of the table: "users_grants" */
  update_users_grants_by_pk?: Maybe<Users_Grants>;
  /** update multiples rows of table: "users_grants" */
  update_users_grants_many?: Maybe<Array<Maybe<Users_Grants_Mutation_Response>>>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "users_places" */
  update_users_places?: Maybe<Users_Places_Mutation_Response>;
  /** update single row of the table: "users_places" */
  update_users_places_by_pk?: Maybe<Users_Places>;
  /** update multiples rows of table: "users_places" */
  update_users_places_many?: Maybe<Array<Maybe<Users_Places_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GrantsArgs = {
  where: Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Grants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ListsArgs = {
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lists_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_NetworkArgs = {
  where: Network_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Network_By_PkArgs = {
  id: Scalars['Int']['input'];
  user_id_1: Scalars['Int']['input'];
  user_id_2: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_PlacesArgs = {
  where: Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Places_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SomesArgs = {
  where: Somes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Somes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_GrantsArgs = {
  where: Users_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Users_PlacesArgs = {
  where: Users_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_Places_By_PkArgs = {
  id: Scalars['Int']['input'];
  place_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GrantsArgs = {
  objects: Array<Grants_Insert_Input>;
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Grants_OneArgs = {
  object: Grants_Insert_Input;
  on_conflict?: InputMaybe<Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ListsArgs = {
  objects: Array<Lists_Insert_Input>;
  on_conflict?: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lists_OneArgs = {
  object: Lists_Insert_Input;
  on_conflict?: InputMaybe<Lists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_NetworkArgs = {
  objects: Array<Network_Insert_Input>;
  on_conflict?: InputMaybe<Network_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Network_OneArgs = {
  object: Network_Insert_Input;
  on_conflict?: InputMaybe<Network_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PlacesArgs = {
  objects: Array<Places_Insert_Input>;
  on_conflict?: InputMaybe<Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Places_OneArgs = {
  object: Places_Insert_Input;
  on_conflict?: InputMaybe<Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SomesArgs = {
  objects: Array<Somes_Insert_Input>;
  on_conflict?: InputMaybe<Somes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Somes_OneArgs = {
  object: Somes_Insert_Input;
  on_conflict?: InputMaybe<Somes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_GrantsArgs = {
  objects: Array<Users_Grants_Insert_Input>;
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Grants_OneArgs = {
  object: Users_Grants_Insert_Input;
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_PlacesArgs = {
  objects: Array<Users_Places_Insert_Input>;
  on_conflict?: InputMaybe<Users_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_Places_OneArgs = {
  object: Users_Places_Insert_Input;
  on_conflict?: InputMaybe<Users_Places_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GrantsArgs = {
  _append?: InputMaybe<Grants_Append_Input>;
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  _inc?: InputMaybe<Grants_Inc_Input>;
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  _set?: InputMaybe<Grants_Set_Input>;
  where: Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Grants_By_PkArgs = {
  _append?: InputMaybe<Grants_Append_Input>;
  _delete_at_path?: InputMaybe<Grants_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Grants_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Grants_Delete_Key_Input>;
  _inc?: InputMaybe<Grants_Inc_Input>;
  _prepend?: InputMaybe<Grants_Prepend_Input>;
  _set?: InputMaybe<Grants_Set_Input>;
  pk_columns: Grants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Grants_ManyArgs = {
  updates: Array<Grants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ListsArgs = {
  _inc?: InputMaybe<Lists_Inc_Input>;
  _set?: InputMaybe<Lists_Set_Input>;
  where: Lists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_By_PkArgs = {
  _inc?: InputMaybe<Lists_Inc_Input>;
  _set?: InputMaybe<Lists_Set_Input>;
  pk_columns: Lists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lists_ManyArgs = {
  updates: Array<Lists_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_NetworkArgs = {
  _inc?: InputMaybe<Network_Inc_Input>;
  _set?: InputMaybe<Network_Set_Input>;
  where: Network_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Network_By_PkArgs = {
  _inc?: InputMaybe<Network_Inc_Input>;
  _set?: InputMaybe<Network_Set_Input>;
  pk_columns: Network_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Network_ManyArgs = {
  updates: Array<Network_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_PlacesArgs = {
  _append?: InputMaybe<Places_Append_Input>;
  _delete_at_path?: InputMaybe<Places_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Places_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Places_Delete_Key_Input>;
  _inc?: InputMaybe<Places_Inc_Input>;
  _prepend?: InputMaybe<Places_Prepend_Input>;
  _set?: InputMaybe<Places_Set_Input>;
  where: Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Places_By_PkArgs = {
  _append?: InputMaybe<Places_Append_Input>;
  _delete_at_path?: InputMaybe<Places_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Places_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Places_Delete_Key_Input>;
  _inc?: InputMaybe<Places_Inc_Input>;
  _prepend?: InputMaybe<Places_Prepend_Input>;
  _set?: InputMaybe<Places_Set_Input>;
  pk_columns: Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Places_ManyArgs = {
  updates: Array<Places_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SomesArgs = {
  _append?: InputMaybe<Somes_Append_Input>;
  _delete_at_path?: InputMaybe<Somes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Somes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Somes_Delete_Key_Input>;
  _inc?: InputMaybe<Somes_Inc_Input>;
  _prepend?: InputMaybe<Somes_Prepend_Input>;
  _set?: InputMaybe<Somes_Set_Input>;
  where: Somes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Somes_By_PkArgs = {
  _append?: InputMaybe<Somes_Append_Input>;
  _delete_at_path?: InputMaybe<Somes_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Somes_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Somes_Delete_Key_Input>;
  _inc?: InputMaybe<Somes_Inc_Input>;
  _prepend?: InputMaybe<Somes_Prepend_Input>;
  _set?: InputMaybe<Somes_Set_Input>;
  pk_columns: Somes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Somes_ManyArgs = {
  updates: Array<Somes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _inc?: InputMaybe<Users_Inc_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _inc?: InputMaybe<Users_Inc_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_GrantsArgs = {
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  _set?: InputMaybe<Users_Grants_Set_Input>;
  where: Users_Grants_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Grants_By_PkArgs = {
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  _set?: InputMaybe<Users_Grants_Set_Input>;
  pk_columns: Users_Grants_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Grants_ManyArgs = {
  updates: Array<Users_Grants_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_PlacesArgs = {
  _inc?: InputMaybe<Users_Places_Inc_Input>;
  _set?: InputMaybe<Users_Places_Set_Input>;
  where: Users_Places_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Places_By_PkArgs = {
  _inc?: InputMaybe<Users_Places_Inc_Input>;
  _set?: InputMaybe<Users_Places_Set_Input>;
  pk_columns: Users_Places_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_Places_ManyArgs = {
  updates: Array<Users_Places_Updates>;
};

/** columns and relationships of "network" */
export type Network = {
  __typename?: 'network';
  action_user_id: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByUserId1: Users;
  /** An object relationship */
  userByUserId2: Users;
  user_id_1: Scalars['Int']['output'];
  user_id_2: Scalars['Int']['output'];
};

/** aggregated selection of "network" */
export type Network_Aggregate = {
  __typename?: 'network_aggregate';
  aggregate?: Maybe<Network_Aggregate_Fields>;
  nodes: Array<Network>;
};

export type Network_Aggregate_Bool_Exp = {
  count?: InputMaybe<Network_Aggregate_Bool_Exp_Count>;
};

export type Network_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Network_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Network_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "network" */
export type Network_Aggregate_Fields = {
  __typename?: 'network_aggregate_fields';
  avg?: Maybe<Network_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Network_Max_Fields>;
  min?: Maybe<Network_Min_Fields>;
  stddev?: Maybe<Network_Stddev_Fields>;
  stddev_pop?: Maybe<Network_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Network_Stddev_Samp_Fields>;
  sum?: Maybe<Network_Sum_Fields>;
  var_pop?: Maybe<Network_Var_Pop_Fields>;
  var_samp?: Maybe<Network_Var_Samp_Fields>;
  variance?: Maybe<Network_Variance_Fields>;
};


/** aggregate fields of "network" */
export type Network_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Network_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "network" */
export type Network_Aggregate_Order_By = {
  avg?: InputMaybe<Network_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Network_Max_Order_By>;
  min?: InputMaybe<Network_Min_Order_By>;
  stddev?: InputMaybe<Network_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Network_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Network_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Network_Sum_Order_By>;
  var_pop?: InputMaybe<Network_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Network_Var_Samp_Order_By>;
  variance?: InputMaybe<Network_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "network" */
export type Network_Arr_Rel_Insert_Input = {
  data: Array<Network_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Network_On_Conflict>;
};

/** aggregate avg on columns */
export type Network_Avg_Fields = {
  __typename?: 'network_avg_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "network" */
export type Network_Avg_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "network". All fields are combined with a logical 'AND'. */
export type Network_Bool_Exp = {
  _and?: InputMaybe<Array<Network_Bool_Exp>>;
  _not?: InputMaybe<Network_Bool_Exp>;
  _or?: InputMaybe<Array<Network_Bool_Exp>>;
  action_user_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByUserId1?: InputMaybe<Users_Bool_Exp>;
  userByUserId2?: InputMaybe<Users_Bool_Exp>;
  user_id_1?: InputMaybe<Int_Comparison_Exp>;
  user_id_2?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "network" */
export enum Network_Constraint {
  /** unique or primary key constraint on columns "id", "user_id_1", "user_id_2" */
  NetworkPkey = 'network_pkey',
  /** unique or primary key constraint on columns "user_id_1", "user_id_2" */
  NetworkUserId_1UserId_2Key = 'network_user_id_1_user_id_2_key',
  /** unique or primary key constraint on columns "user_id_1", "user_id_2" */
  NetworkUserId_2UserId_1Key = 'network_user_id_2_user_id_1_key'
}

/** input type for incrementing numeric columns in table "network" */
export type Network_Inc_Input = {
  action_user_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "network" */
export type Network_Insert_Input = {
  action_user_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId1?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId2?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Network_Max_Fields = {
  __typename?: 'network_max_fields';
  action_user_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "network" */
export type Network_Max_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Network_Min_Fields = {
  __typename?: 'network_min_fields';
  action_user_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "network" */
export type Network_Min_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "network" */
export type Network_Mutation_Response = {
  __typename?: 'network_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Network>;
};

/** on_conflict condition type for table "network" */
export type Network_On_Conflict = {
  constraint: Network_Constraint;
  update_columns?: Array<Network_Update_Column>;
  where?: InputMaybe<Network_Bool_Exp>;
};

/** Ordering options when selecting data from "network". */
export type Network_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByUserId1?: InputMaybe<Users_Order_By>;
  userByUserId2?: InputMaybe<Users_Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** primary key columns input for table: network */
export type Network_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
  user_id_1: Scalars['Int']['input'];
  user_id_2: Scalars['Int']['input'];
};

/** select columns of table "network" */
export enum Network_Select_Column {
  /** column name */
  ActionUserId = 'action_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId_1 = 'user_id_1',
  /** column name */
  UserId_2 = 'user_id_2'
}

/** input type for updating data in table "network" */
export type Network_Set_Input = {
  action_user_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Network_Stddev_Fields = {
  __typename?: 'network_stddev_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "network" */
export type Network_Stddev_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Network_Stddev_Pop_Fields = {
  __typename?: 'network_stddev_pop_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "network" */
export type Network_Stddev_Pop_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Network_Stddev_Samp_Fields = {
  __typename?: 'network_stddev_samp_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "network" */
export type Network_Stddev_Samp_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "network" */
export type Network_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Network_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Network_Stream_Cursor_Value_Input = {
  action_user_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Network_Sum_Fields = {
  __typename?: 'network_sum_fields';
  action_user_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "network" */
export type Network_Sum_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** update columns of table "network" */
export enum Network_Update_Column {
  /** column name */
  ActionUserId = 'action_user_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId_1 = 'user_id_1',
  /** column name */
  UserId_2 = 'user_id_2'
}

export type Network_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Network_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Network_Set_Input>;
  /** filter the rows which have to be updated */
  where: Network_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Network_Var_Pop_Fields = {
  __typename?: 'network_var_pop_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "network" */
export type Network_Var_Pop_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Network_Var_Samp_Fields = {
  __typename?: 'network_var_samp_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "network" */
export type Network_Var_Samp_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Network_Variance_Fields = {
  __typename?: 'network_variance_fields';
  action_user_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "network" */
export type Network_Variance_Order_By = {
  action_user_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "places" */
export type Places = {
  __typename?: 'places';
  area: Scalars['String']['output'];
  categories?: Maybe<Scalars['jsonb']['output']>;
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  photos?: Maybe<Scalars['jsonb']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users_places: Array<Users_Places>;
  /** An aggregate relationship */
  users_places_aggregate: Users_Places_Aggregate;
};


/** columns and relationships of "places" */
export type PlacesCategoriesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "places" */
export type PlacesPhotosArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "places" */
export type PlacesUsers_PlacesArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


/** columns and relationships of "places" */
export type PlacesUsers_Places_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};

/** aggregated selection of "places" */
export type Places_Aggregate = {
  __typename?: 'places_aggregate';
  aggregate?: Maybe<Places_Aggregate_Fields>;
  nodes: Array<Places>;
};

/** aggregate fields of "places" */
export type Places_Aggregate_Fields = {
  __typename?: 'places_aggregate_fields';
  avg?: Maybe<Places_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Places_Max_Fields>;
  min?: Maybe<Places_Min_Fields>;
  stddev?: Maybe<Places_Stddev_Fields>;
  stddev_pop?: Maybe<Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Places_Stddev_Samp_Fields>;
  sum?: Maybe<Places_Sum_Fields>;
  var_pop?: Maybe<Places_Var_Pop_Fields>;
  var_samp?: Maybe<Places_Var_Samp_Fields>;
  variance?: Maybe<Places_Variance_Fields>;
};


/** aggregate fields of "places" */
export type Places_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Places_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Places_Append_Input = {
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  photos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Places_Avg_Fields = {
  __typename?: 'places_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "places". All fields are combined with a logical 'AND'. */
export type Places_Bool_Exp = {
  _and?: InputMaybe<Array<Places_Bool_Exp>>;
  _not?: InputMaybe<Places_Bool_Exp>;
  _or?: InputMaybe<Array<Places_Bool_Exp>>;
  area?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<Jsonb_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  photos?: InputMaybe<Jsonb_Comparison_Exp>;
  rating?: InputMaybe<Numeric_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_places?: InputMaybe<Users_Places_Bool_Exp>;
  users_places_aggregate?: InputMaybe<Users_Places_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "places" */
export enum Places_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlacesPkey = 'places_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Places_Delete_At_Path_Input = {
  categories?: InputMaybe<Array<Scalars['String']['input']>>;
  photos?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Places_Delete_Elem_Input = {
  categories?: InputMaybe<Scalars['Int']['input']>;
  photos?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Places_Delete_Key_Input = {
  categories?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "places" */
export type Places_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "places" */
export type Places_Insert_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Scalars['jsonb']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_places?: InputMaybe<Users_Places_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Places_Max_Fields = {
  __typename?: 'places_max_fields';
  area?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Places_Min_Fields = {
  __typename?: 'places_min_fields';
  area?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "places" */
export type Places_Mutation_Response = {
  __typename?: 'places_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Places>;
};

/** input type for inserting object relation for remote table "places" */
export type Places_Obj_Rel_Insert_Input = {
  data: Places_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Places_On_Conflict>;
};

/** on_conflict condition type for table "places" */
export type Places_On_Conflict = {
  constraint: Places_Constraint;
  update_columns?: Array<Places_Update_Column>;
  where?: InputMaybe<Places_Bool_Exp>;
};

/** Ordering options when selecting data from "places". */
export type Places_Order_By = {
  area?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  photos?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_places_aggregate?: InputMaybe<Users_Places_Aggregate_Order_By>;
};

/** primary key columns input for table: places */
export type Places_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Places_Prepend_Input = {
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  photos?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "places" */
export enum Places_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photos = 'photos',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "places" */
export type Places_Set_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Scalars['jsonb']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Places_Stddev_Fields = {
  __typename?: 'places_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Places_Stddev_Pop_Fields = {
  __typename?: 'places_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Places_Stddev_Samp_Fields = {
  __typename?: 'places_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "places" */
export type Places_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Places_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Places_Stream_Cursor_Value_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  photos?: InputMaybe<Scalars['jsonb']['input']>;
  rating?: InputMaybe<Scalars['numeric']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Places_Sum_Fields = {
  __typename?: 'places_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  rating?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "places" */
export enum Places_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Categories = 'categories',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Notes = 'notes',
  /** column name */
  Photos = 'photos',
  /** column name */
  Rating = 'rating',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Places_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Places_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Places_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Places_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Places_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Places_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Places_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Places_Set_Input>;
  /** filter the rows which have to be updated */
  where: Places_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Places_Var_Pop_Fields = {
  __typename?: 'places_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Places_Var_Samp_Fields = {
  __typename?: 'places_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Places_Variance_Fields = {
  __typename?: 'places_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "grants" */
  grants: Array<Grants>;
  /** fetch aggregated fields from the table: "grants" */
  grants_aggregate: Grants_Aggregate;
  /** fetch data from the table: "grants" using primary key columns */
  grants_by_pk?: Maybe<Grants>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table: "network" */
  network: Array<Network>;
  /** fetch aggregated fields from the table: "network" */
  network_aggregate: Network_Aggregate;
  /** fetch data from the table: "network" using primary key columns */
  network_by_pk?: Maybe<Network>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: Places_Aggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table: "somes" */
  somes: Array<Somes>;
  /** fetch aggregated fields from the table: "somes" */
  somes_aggregate: Somes_Aggregate;
  /** fetch data from the table: "somes" using primary key columns */
  somes_by_pk?: Maybe<Somes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
  /** fetch data from the table: "users_grants" using primary key columns */
  users_grants_by_pk?: Maybe<Users_Grants>;
  /** An array relationship */
  users_places: Array<Users_Places>;
  /** An aggregate relationship */
  users_places_aggregate: Users_Places_Aggregate;
  /** fetch data from the table: "users_places" using primary key columns */
  users_places_by_pk?: Maybe<Users_Places>;
};


export type Query_RootGrantsArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Query_RootGrants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Query_RootGrants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootListsArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Query_RootLists_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootNetworkArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


export type Query_RootNetwork_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


export type Query_RootNetwork_By_PkArgs = {
  id: Scalars['Int']['input'];
  user_id_1: Scalars['Int']['input'];
  user_id_2: Scalars['Int']['input'];
};


export type Query_RootPlacesArgs = {
  distinct_on?: InputMaybe<Array<Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Places_Order_By>>;
  where?: InputMaybe<Places_Bool_Exp>;
};


export type Query_RootPlaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Places_Order_By>>;
  where?: InputMaybe<Places_Bool_Exp>;
};


export type Query_RootPlaces_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootSomesArgs = {
  distinct_on?: InputMaybe<Array<Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Somes_Order_By>>;
  where?: InputMaybe<Somes_Bool_Exp>;
};


export type Query_RootSomes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Somes_Order_By>>;
  where?: InputMaybe<Somes_Bool_Exp>;
};


export type Query_RootSomes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Query_RootUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Query_RootUsers_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Query_RootUsers_PlacesArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


export type Query_RootUsers_Places_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


export type Query_RootUsers_Places_By_PkArgs = {
  id: Scalars['Int']['input'];
  place_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** columns and relationships of "somes" */
export type Somes = {
  __typename?: 'somes';
  amount: Scalars['Int']['output'];
  areas: Scalars['jsonb']['output'];
  id: Scalars['Int']['output'];
};


/** columns and relationships of "somes" */
export type SomesAreasArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "somes" */
export type Somes_Aggregate = {
  __typename?: 'somes_aggregate';
  aggregate?: Maybe<Somes_Aggregate_Fields>;
  nodes: Array<Somes>;
};

/** aggregate fields of "somes" */
export type Somes_Aggregate_Fields = {
  __typename?: 'somes_aggregate_fields';
  avg?: Maybe<Somes_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Somes_Max_Fields>;
  min?: Maybe<Somes_Min_Fields>;
  stddev?: Maybe<Somes_Stddev_Fields>;
  stddev_pop?: Maybe<Somes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Somes_Stddev_Samp_Fields>;
  sum?: Maybe<Somes_Sum_Fields>;
  var_pop?: Maybe<Somes_Var_Pop_Fields>;
  var_samp?: Maybe<Somes_Var_Samp_Fields>;
  variance?: Maybe<Somes_Variance_Fields>;
};


/** aggregate fields of "somes" */
export type Somes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Somes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Somes_Append_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Somes_Avg_Fields = {
  __typename?: 'somes_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "somes". All fields are combined with a logical 'AND'. */
export type Somes_Bool_Exp = {
  _and?: InputMaybe<Array<Somes_Bool_Exp>>;
  _not?: InputMaybe<Somes_Bool_Exp>;
  _or?: InputMaybe<Array<Somes_Bool_Exp>>;
  amount?: InputMaybe<Int_Comparison_Exp>;
  areas?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "somes" */
export enum Somes_Constraint {
  /** unique or primary key constraint on columns "id" */
  SomesPkey = 'somes_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Somes_Delete_At_Path_Input = {
  areas?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Somes_Delete_Elem_Input = {
  areas?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Somes_Delete_Key_Input = {
  areas?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "somes" */
export type Somes_Inc_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "somes" */
export type Somes_Insert_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Somes_Max_Fields = {
  __typename?: 'somes_max_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Somes_Min_Fields = {
  __typename?: 'somes_min_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "somes" */
export type Somes_Mutation_Response = {
  __typename?: 'somes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Somes>;
};

/** on_conflict condition type for table "somes" */
export type Somes_On_Conflict = {
  constraint: Somes_Constraint;
  update_columns?: Array<Somes_Update_Column>;
  where?: InputMaybe<Somes_Bool_Exp>;
};

/** Ordering options when selecting data from "somes". */
export type Somes_Order_By = {
  amount?: InputMaybe<Order_By>;
  areas?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: somes */
export type Somes_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Somes_Prepend_Input = {
  areas?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "somes" */
export enum Somes_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "somes" */
export type Somes_Set_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Somes_Stddev_Fields = {
  __typename?: 'somes_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Somes_Stddev_Pop_Fields = {
  __typename?: 'somes_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Somes_Stddev_Samp_Fields = {
  __typename?: 'somes_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "somes" */
export type Somes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Somes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Somes_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['Int']['input']>;
  areas?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Somes_Sum_Fields = {
  __typename?: 'somes_sum_fields';
  amount?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "somes" */
export enum Somes_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Areas = 'areas',
  /** column name */
  Id = 'id'
}

export type Somes_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Somes_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Somes_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Somes_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Somes_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Somes_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Somes_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Somes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Somes_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Somes_Var_Pop_Fields = {
  __typename?: 'somes_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Somes_Var_Samp_Fields = {
  __typename?: 'somes_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Somes_Variance_Fields = {
  __typename?: 'somes_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "grants" */
  grants: Array<Grants>;
  /** fetch aggregated fields from the table: "grants" */
  grants_aggregate: Grants_Aggregate;
  /** fetch data from the table: "grants" using primary key columns */
  grants_by_pk?: Maybe<Grants>;
  /** fetch data from the table in a streaming manner: "grants" */
  grants_stream: Array<Grants>;
  /** fetch data from the table: "lists" */
  lists: Array<Lists>;
  /** fetch aggregated fields from the table: "lists" */
  lists_aggregate: Lists_Aggregate;
  /** fetch data from the table: "lists" using primary key columns */
  lists_by_pk?: Maybe<Lists>;
  /** fetch data from the table in a streaming manner: "lists" */
  lists_stream: Array<Lists>;
  /** fetch data from the table: "network" */
  network: Array<Network>;
  /** fetch aggregated fields from the table: "network" */
  network_aggregate: Network_Aggregate;
  /** fetch data from the table: "network" using primary key columns */
  network_by_pk?: Maybe<Network>;
  /** fetch data from the table in a streaming manner: "network" */
  network_stream: Array<Network>;
  /** fetch data from the table: "places" */
  places: Array<Places>;
  /** fetch aggregated fields from the table: "places" */
  places_aggregate: Places_Aggregate;
  /** fetch data from the table: "places" using primary key columns */
  places_by_pk?: Maybe<Places>;
  /** fetch data from the table in a streaming manner: "places" */
  places_stream: Array<Places>;
  /** fetch data from the table: "somes" */
  somes: Array<Somes>;
  /** fetch aggregated fields from the table: "somes" */
  somes_aggregate: Somes_Aggregate;
  /** fetch data from the table: "somes" using primary key columns */
  somes_by_pk?: Maybe<Somes>;
  /** fetch data from the table in a streaming manner: "somes" */
  somes_stream: Array<Somes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
  /** fetch data from the table: "users_grants" using primary key columns */
  users_grants_by_pk?: Maybe<Users_Grants>;
  /** fetch data from the table in a streaming manner: "users_grants" */
  users_grants_stream: Array<Users_Grants>;
  /** An array relationship */
  users_places: Array<Users_Places>;
  /** An aggregate relationship */
  users_places_aggregate: Users_Places_Aggregate;
  /** fetch data from the table: "users_places" using primary key columns */
  users_places_by_pk?: Maybe<Users_Places>;
  /** fetch data from the table in a streaming manner: "users_places" */
  users_places_stream: Array<Users_Places>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootGrantsArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootGrants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Grants_Order_By>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootGrants_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGrants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Grants_Stream_Cursor_Input>>;
  where?: InputMaybe<Grants_Bool_Exp>;
};


export type Subscription_RootListsArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Lists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Lists_Order_By>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootLists_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLists_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Lists_Stream_Cursor_Input>>;
  where?: InputMaybe<Lists_Bool_Exp>;
};


export type Subscription_RootNetworkArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


export type Subscription_RootNetwork_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


export type Subscription_RootNetwork_By_PkArgs = {
  id: Scalars['Int']['input'];
  user_id_1: Scalars['Int']['input'];
  user_id_2: Scalars['Int']['input'];
};


export type Subscription_RootNetwork_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Network_Stream_Cursor_Input>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


export type Subscription_RootPlacesArgs = {
  distinct_on?: InputMaybe<Array<Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Places_Order_By>>;
  where?: InputMaybe<Places_Bool_Exp>;
};


export type Subscription_RootPlaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Places_Order_By>>;
  where?: InputMaybe<Places_Bool_Exp>;
};


export type Subscription_RootPlaces_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPlaces_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Places_Stream_Cursor_Input>>;
  where?: InputMaybe<Places_Bool_Exp>;
};


export type Subscription_RootSomesArgs = {
  distinct_on?: InputMaybe<Array<Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Somes_Order_By>>;
  where?: InputMaybe<Somes_Bool_Exp>;
};


export type Subscription_RootSomes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Somes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Somes_Order_By>>;
  where?: InputMaybe<Somes_Bool_Exp>;
};


export type Subscription_RootSomes_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSomes_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Somes_Stream_Cursor_Input>>;
  where?: InputMaybe<Somes_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_Grants_By_PkArgs = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_Grants_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Grants_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


export type Subscription_RootUsers_PlacesArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


export type Subscription_RootUsers_Places_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


export type Subscription_RootUsers_Places_By_PkArgs = {
  id: Scalars['Int']['input'];
  place_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_Places_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Places_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  active: Scalars['Boolean']['output'];
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  friends_list?: Maybe<Scalars['jsonb']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  networks: Array<Network>;
  /** An array relationship */
  networksByUserId1: Array<Network>;
  /** An aggregate relationship */
  networksByUserId1_aggregate: Network_Aggregate;
  /** An array relationship */
  networksByUserId2: Array<Network>;
  /** An aggregate relationship */
  networksByUserId2_aggregate: Network_Aggregate;
  /** An aggregate relationship */
  networks_aggregate: Network_Aggregate;
  oid: Scalars['String']['output'];
  profile_picture?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  users_grants: Array<Users_Grants>;
  /** An aggregate relationship */
  users_grants_aggregate: Users_Grants_Aggregate;
  /** An array relationship */
  users_places: Array<Users_Places>;
  /** An aggregate relationship */
  users_places_aggregate: Users_Places_Aggregate;
};


/** columns and relationships of "users" */
export type UsersFriends_ListArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "users" */
export type UsersNetworksArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetworksByUserId1Args = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetworksByUserId1_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetworksByUserId2Args = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetworksByUserId2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetworks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_GrantsArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_Grants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Grants_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Grants_Order_By>>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_PlacesArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUsers_Places_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Places_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Places_Order_By>>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  friends_list?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  active?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  friends_list?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  networks?: InputMaybe<Network_Bool_Exp>;
  networksByUserId1?: InputMaybe<Network_Bool_Exp>;
  networksByUserId1_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  networksByUserId2?: InputMaybe<Network_Bool_Exp>;
  networksByUserId2_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  networks_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  oid?: InputMaybe<String_Comparison_Exp>;
  profile_picture?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  users_grants?: InputMaybe<Users_Grants_Bool_Exp>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Bool_Exp>;
  users_places?: InputMaybe<Users_Places_Bool_Exp>;
  users_places_aggregate?: InputMaybe<Users_Places_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "oid" */
  UsersOidKey = 'users_oid_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  friends_list?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  friends_list?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  friends_list?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "users_grants" */
export type Users_Grants = {
  __typename?: 'users_grants';
  created_at: Scalars['timestamptz']['output'];
  feedback?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  grant: Grants;
  grant_id: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  relevant?: Maybe<Scalars['Boolean']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "users_grants" */
export type Users_Grants_Aggregate = {
  __typename?: 'users_grants_aggregate';
  aggregate?: Maybe<Users_Grants_Aggregate_Fields>;
  nodes: Array<Users_Grants>;
};

export type Users_Grants_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Grants_Aggregate_Bool_Exp_Count>;
};

export type Users_Grants_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Grants_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Grants_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Grants_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users_grants" */
export type Users_Grants_Aggregate_Fields = {
  __typename?: 'users_grants_aggregate_fields';
  avg?: Maybe<Users_Grants_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Grants_Max_Fields>;
  min?: Maybe<Users_Grants_Min_Fields>;
  stddev?: Maybe<Users_Grants_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Grants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Grants_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Grants_Sum_Fields>;
  var_pop?: Maybe<Users_Grants_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Grants_Var_Samp_Fields>;
  variance?: Maybe<Users_Grants_Variance_Fields>;
};


/** aggregate fields of "users_grants" */
export type Users_Grants_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Grants_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users_grants" */
export type Users_Grants_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Grants_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Grants_Max_Order_By>;
  min?: InputMaybe<Users_Grants_Min_Order_By>;
  stddev?: InputMaybe<Users_Grants_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Grants_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Grants_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Grants_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Grants_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Grants_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Grants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_grants" */
export type Users_Grants_Arr_Rel_Insert_Input = {
  data: Array<Users_Grants_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Grants_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Grants_Avg_Fields = {
  __typename?: 'users_grants_avg_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users_grants" */
export type Users_Grants_Avg_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_grants". All fields are combined with a logical 'AND'. */
export type Users_Grants_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Grants_Bool_Exp>>;
  _not?: InputMaybe<Users_Grants_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Grants_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  feedback?: InputMaybe<String_Comparison_Exp>;
  grant?: InputMaybe<Grants_Bool_Exp>;
  grant_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  relevant?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_grants" */
export enum Users_Grants_Constraint {
  /** unique or primary key constraint on columns "user_id", "id", "grant_id" */
  UsersGrantsPkey = 'users_grants_pkey'
}

/** input type for incrementing numeric columns in table "users_grants" */
export type Users_Grants_Inc_Input = {
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users_grants" */
export type Users_Grants_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant?: InputMaybe<Grants_Obj_Rel_Insert_Input>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Users_Grants_Max_Fields = {
  __typename?: 'users_grants_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "users_grants" */
export type Users_Grants_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Grants_Min_Fields = {
  __typename?: 'users_grants_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  feedback?: Maybe<Scalars['String']['output']>;
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "users_grants" */
export type Users_Grants_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_grants" */
export type Users_Grants_Mutation_Response = {
  __typename?: 'users_grants_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Grants>;
};

/** on_conflict condition type for table "users_grants" */
export type Users_Grants_On_Conflict = {
  constraint: Users_Grants_Constraint;
  update_columns?: Array<Users_Grants_Update_Column>;
  where?: InputMaybe<Users_Grants_Bool_Exp>;
};

/** Ordering options when selecting data from "users_grants". */
export type Users_Grants_Order_By = {
  created_at?: InputMaybe<Order_By>;
  feedback?: InputMaybe<Order_By>;
  grant?: InputMaybe<Grants_Order_By>;
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  relevant?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_grants */
export type Users_Grants_Pk_Columns_Input = {
  grant_id: Scalars['Int']['input'];
  id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** select columns of table "users_grants" */
export enum Users_Grants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  GrantId = 'grant_id',
  /** column name */
  Id = 'id',
  /** column name */
  Relevant = 'relevant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "users_grants_aggregate_bool_exp_bool_and_arguments_columns" columns of table "users_grants" */
export enum Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Relevant = 'relevant'
}

/** select "users_grants_aggregate_bool_exp_bool_or_arguments_columns" columns of table "users_grants" */
export enum Users_Grants_Select_Column_Users_Grants_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Relevant = 'relevant'
}

/** input type for updating data in table "users_grants" */
export type Users_Grants_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Users_Grants_Stddev_Fields = {
  __typename?: 'users_grants_stddev_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users_grants" */
export type Users_Grants_Stddev_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Grants_Stddev_Pop_Fields = {
  __typename?: 'users_grants_stddev_pop_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users_grants" */
export type Users_Grants_Stddev_Pop_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Grants_Stddev_Samp_Fields = {
  __typename?: 'users_grants_stddev_samp_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users_grants" */
export type Users_Grants_Stddev_Samp_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users_grants" */
export type Users_Grants_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Grants_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Grants_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  feedback?: InputMaybe<Scalars['String']['input']>;
  grant_id?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  relevant?: InputMaybe<Scalars['Boolean']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Users_Grants_Sum_Fields = {
  __typename?: 'users_grants_sum_fields';
  grant_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users_grants" */
export type Users_Grants_Sum_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "users_grants" */
export enum Users_Grants_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Feedback = 'feedback',
  /** column name */
  GrantId = 'grant_id',
  /** column name */
  Id = 'id',
  /** column name */
  Relevant = 'relevant',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Users_Grants_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Grants_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Grants_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Grants_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Grants_Var_Pop_Fields = {
  __typename?: 'users_grants_var_pop_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users_grants" */
export type Users_Grants_Var_Pop_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Grants_Var_Samp_Fields = {
  __typename?: 'users_grants_var_samp_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users_grants" */
export type Users_Grants_Var_Samp_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Grants_Variance_Fields = {
  __typename?: 'users_grants_variance_fields';
  grant_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users_grants" */
export type Users_Grants_Variance_Order_By = {
  grant_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  friends_list?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  networks?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  networksByUserId1?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  networksByUserId2?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  oid?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  users_grants?: InputMaybe<Users_Grants_Arr_Rel_Insert_Input>;
  users_places?: InputMaybe<Users_Places_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  oid?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  oid?: Maybe<Scalars['String']['output']>;
  profile_picture?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  active?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  friends_list?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  networksByUserId1_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  networksByUserId2_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  networks_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  oid?: InputMaybe<Order_By>;
  profile_picture?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_grants_aggregate?: InputMaybe<Users_Grants_Aggregate_Order_By>;
  users_places_aggregate?: InputMaybe<Users_Places_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "users_places" */
export type Users_Places = {
  __typename?: 'users_places';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  place: Places;
  place_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "users_places" */
export type Users_Places_Aggregate = {
  __typename?: 'users_places_aggregate';
  aggregate?: Maybe<Users_Places_Aggregate_Fields>;
  nodes: Array<Users_Places>;
};

export type Users_Places_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Places_Aggregate_Bool_Exp_Count>;
};

export type Users_Places_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Places_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Places_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users_places" */
export type Users_Places_Aggregate_Fields = {
  __typename?: 'users_places_aggregate_fields';
  avg?: Maybe<Users_Places_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Places_Max_Fields>;
  min?: Maybe<Users_Places_Min_Fields>;
  stddev?: Maybe<Users_Places_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Places_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Places_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Places_Sum_Fields>;
  var_pop?: Maybe<Users_Places_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Places_Var_Samp_Fields>;
  variance?: Maybe<Users_Places_Variance_Fields>;
};


/** aggregate fields of "users_places" */
export type Users_Places_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Places_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users_places" */
export type Users_Places_Aggregate_Order_By = {
  avg?: InputMaybe<Users_Places_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Places_Max_Order_By>;
  min?: InputMaybe<Users_Places_Min_Order_By>;
  stddev?: InputMaybe<Users_Places_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Users_Places_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Users_Places_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Users_Places_Sum_Order_By>;
  var_pop?: InputMaybe<Users_Places_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Users_Places_Var_Samp_Order_By>;
  variance?: InputMaybe<Users_Places_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users_places" */
export type Users_Places_Arr_Rel_Insert_Input = {
  data: Array<Users_Places_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_Places_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Places_Avg_Fields = {
  __typename?: 'users_places_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "users_places" */
export type Users_Places_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users_places". All fields are combined with a logical 'AND'. */
export type Users_Places_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Places_Bool_Exp>>;
  _not?: InputMaybe<Users_Places_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Places_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  place?: InputMaybe<Places_Bool_Exp>;
  place_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users_places" */
export enum Users_Places_Constraint {
  /** unique or primary key constraint on columns "place_id", "user_id", "id" */
  UsersPlacesPkey = 'users_places_pkey'
}

/** input type for incrementing numeric columns in table "users_places" */
export type Users_Places_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users_places" */
export type Users_Places_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  place?: InputMaybe<Places_Obj_Rel_Insert_Input>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Users_Places_Max_Fields = {
  __typename?: 'users_places_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  place_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "users_places" */
export type Users_Places_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Places_Min_Fields = {
  __typename?: 'users_places_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  place_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "users_places" */
export type Users_Places_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users_places" */
export type Users_Places_Mutation_Response = {
  __typename?: 'users_places_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users_Places>;
};

/** on_conflict condition type for table "users_places" */
export type Users_Places_On_Conflict = {
  constraint: Users_Places_Constraint;
  update_columns?: Array<Users_Places_Update_Column>;
  where?: InputMaybe<Users_Places_Bool_Exp>;
};

/** Ordering options when selecting data from "users_places". */
export type Users_Places_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  place?: InputMaybe<Places_Order_By>;
  place_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users_places */
export type Users_Places_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
  place_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** select columns of table "users_places" */
export enum Users_Places_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "users_places" */
export type Users_Places_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Users_Places_Stddev_Fields = {
  __typename?: 'users_places_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "users_places" */
export type Users_Places_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Places_Stddev_Pop_Fields = {
  __typename?: 'users_places_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "users_places" */
export type Users_Places_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Places_Stddev_Samp_Fields = {
  __typename?: 'users_places_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "users_places" */
export type Users_Places_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "users_places" */
export type Users_Places_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Places_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Places_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  place_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Users_Places_Sum_Fields = {
  __typename?: 'users_places_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  place_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "users_places" */
export type Users_Places_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "users_places" */
export enum Users_Places_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PlaceId = 'place_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Users_Places_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Places_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Places_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Places_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Places_Var_Pop_Fields = {
  __typename?: 'users_places_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "users_places" */
export type Users_Places_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Places_Var_Samp_Fields = {
  __typename?: 'users_places_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "users_places" */
export type Users_Places_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Places_Variance_Fields = {
  __typename?: 'users_places_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  place_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "users_places" */
export type Users_Places_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  place_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  friends_list?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FriendsList = 'friends_list',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Oid = 'oid',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  friends_list?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oid?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  friends_list?: InputMaybe<Scalars['jsonb']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  oid?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FriendsList = 'friends_list',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Oid = 'oid',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type CreateListMutationVariables = Exact<{
  name: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  photo?: InputMaybe<Scalars['String']['input']>;
  owner: Scalars['Int']['input'];
}>;


export type CreateListMutation = { __typename?: 'mutation_root', insert_lists_one?: { __typename?: 'lists', id: number, Name: string, Description?: string | null, Photo?: string | null, Owner: number, Creation_date: any, Update_date?: any | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, id: number, name: string }> };


export const CreateListDocument = gql`
    mutation CreateList($name: String!, $description: String, $photo: String, $owner: Int!) {
  insert_lists_one(
    object: {Name: $name, Description: $description, Photo: $photo, Owner: $owner}
  ) {
    id
    Name
    Description
    Photo
    Owner
    Creation_date
    Update_date
  }
}
    `;
export type CreateListMutationFn = Apollo.MutationFunction<CreateListMutation, CreateListMutationVariables>;

/**
 * __useCreateListMutation__
 *
 * To run a mutation, you first call `useCreateListMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateListMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createListMutation, { data, loading, error }] = useCreateListMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      photo: // value for 'photo'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateListMutation(baseOptions?: Apollo.MutationHookOptions<CreateListMutation, CreateListMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateListMutation, CreateListMutationVariables>(CreateListDocument, options);
      }
export type CreateListMutationHookResult = ReturnType<typeof useCreateListMutation>;
export type CreateListMutationResult = Apollo.MutationResult<CreateListMutation>;
export type CreateListMutationOptions = Apollo.BaseMutationOptions<CreateListMutation, CreateListMutationVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    email
    id
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;