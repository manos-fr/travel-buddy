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
  JSON: { input: any; output: any; }
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

export type Data = {
  __typename?: 'Data';
  error?: Maybe<Scalars['String']['output']>;
  results?: Maybe<Scalars['JSON']['output']>;
  success: Scalars['Boolean']['output'];
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

export type QueryResponse = {
  __typename?: 'QueryResponse';
  data: Data;
};

export type SearchParams = {
  country: Scalars['String']['input'];
  name: Scalars['String']['input'];
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

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "network" */
  delete_network?: Maybe<Network_Mutation_Response>;
  /** delete single row from the table: "network" */
  delete_network_by_pk?: Maybe<Network>;
  /** delete data from the table: "places" */
  delete_places?: Maybe<Places_Mutation_Response>;
  /** delete single row from the table: "places" */
  delete_places_by_pk?: Maybe<Places>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "users_places" */
  delete_users_places?: Maybe<Users_Places_Mutation_Response>;
  /** delete single row from the table: "users_places" */
  delete_users_places_by_pk?: Maybe<Users_Places>;
  /** insert data into the table: "network" */
  insert_network?: Maybe<Network_Mutation_Response>;
  /** insert a single row into the table: "network" */
  insert_network_one?: Maybe<Network>;
  /** insert data into the table: "places" */
  insert_places?: Maybe<Places_Mutation_Response>;
  /** insert a single row into the table: "places" */
  insert_places_one?: Maybe<Places>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "users_places" */
  insert_users_places?: Maybe<Users_Places_Mutation_Response>;
  /** insert a single row into the table: "users_places" */
  insert_users_places_one?: Maybe<Users_Places>;
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
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
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
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
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
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
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
  /** An object relationship */
  network_as_action_user: Users;
  /** An object relationship */
  network_as_user_1: Users;
  /** An object relationship */
  network_as_user_2: Users;
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
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
  network_as_action_user?: InputMaybe<Users_Bool_Exp>;
  network_as_user_1?: InputMaybe<Users_Bool_Exp>;
  network_as_user_2?: InputMaybe<Users_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  network_as_action_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  network_as_user_1?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  network_as_user_2?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  network_as_action_user?: InputMaybe<Users_Order_By>;
  network_as_user_1?: InputMaybe<Users_Order_By>;
  network_as_user_2?: InputMaybe<Users_Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  api_id: Scalars['String']['output'];
  area: Scalars['String']['output'];
  categories?: Maybe<Scalars['jsonb']['output']>;
  country?: Maybe<Scalars['String']['output']>;
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
  api_id?: InputMaybe<String_Comparison_Exp>;
  area?: InputMaybe<String_Comparison_Exp>;
  categories?: InputMaybe<Jsonb_Comparison_Exp>;
  country?: InputMaybe<String_Comparison_Exp>;
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
  /** unique or primary key constraint on columns "api_id" */
  PlacesApiIdKey = 'places_api_id_key',
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
  api_id?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
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
  api_id?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
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
  api_id?: Maybe<Scalars['String']['output']>;
  area?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
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
  api_id?: InputMaybe<Order_By>;
  area?: InputMaybe<Order_By>;
  categories?: InputMaybe<Order_By>;
  country?: InputMaybe<Order_By>;
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
  ApiId = 'api_id',
  /** column name */
  Area = 'area',
  /** column name */
  Categories = 'categories',
  /** column name */
  Country = 'country',
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
  api_id?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
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
  api_id?: InputMaybe<Scalars['String']['input']>;
  area?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Scalars['jsonb']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
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
  ApiId = 'api_id',
  /** column name */
  Area = 'area',
  /** column name */
  Categories = 'categories',
  /** column name */
  Country = 'country',
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
  hello?: Maybe<Scalars['String']['output']>;
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
  search: QueryResponse;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  users_places: Array<Users_Places>;
  /** An aggregate relationship */
  users_places_aggregate: Users_Places_Aggregate;
  /** fetch data from the table: "users_places" using primary key columns */
  users_places_by_pk?: Maybe<Users_Places>;
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


export type Query_RootSearchArgs = {
  params: SearchParams;
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

export type Subscription_Root = {
  __typename?: 'subscription_root';
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
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
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
  network_as_action_user: Array<Network>;
  /** An aggregate relationship */
  network_as_action_user_aggregate: Network_Aggregate;
  /** An array relationship */
  network_as_user_1: Array<Network>;
  /** An aggregate relationship */
  network_as_user_1_aggregate: Network_Aggregate;
  /** An array relationship */
  network_as_user_2: Array<Network>;
  /** An aggregate relationship */
  network_as_user_2_aggregate: Network_Aggregate;
  oid: Scalars['String']['output'];
  profile_picture?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
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
export type UsersNetwork_As_Action_UserArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetwork_As_Action_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetwork_As_User_1Args = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetwork_As_User_1_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetwork_As_User_2Args = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersNetwork_As_User_2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Network_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Network_Order_By>>;
  where?: InputMaybe<Network_Bool_Exp>;
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
  network_as_action_user?: InputMaybe<Network_Bool_Exp>;
  network_as_action_user_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  network_as_user_1?: InputMaybe<Network_Bool_Exp>;
  network_as_user_1_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  network_as_user_2?: InputMaybe<Network_Bool_Exp>;
  network_as_user_2_aggregate?: InputMaybe<Network_Aggregate_Bool_Exp>;
  oid?: InputMaybe<String_Comparison_Exp>;
  profile_picture?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
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
  network_as_action_user?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  network_as_user_1?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  network_as_user_2?: InputMaybe<Network_Arr_Rel_Insert_Input>;
  oid?: InputMaybe<Scalars['String']['input']>;
  profile_picture?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
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
  network_as_action_user_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  network_as_user_1_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  network_as_user_2_aggregate?: InputMaybe<Network_Aggregate_Order_By>;
  oid?: InputMaybe<Order_By>;
  profile_picture?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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

export type GetPlacesQueryVariables = Exact<{
  params: SearchParams;
}>;


export type GetPlacesQuery = { __typename?: 'query_root', search: { __typename?: 'QueryResponse', data: { __typename?: 'Data', error?: string | null, results?: any | null, success: boolean } } };

export type InsertUserPlaceMutationMutationVariables = Exact<{
  user_id: Scalars['Int']['input'];
  area: Scalars['String']['input'];
  categories: Scalars['jsonb']['input'];
  api_id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  country: Scalars['String']['input'];
}>;


export type InsertUserPlaceMutationMutation = { __typename?: 'mutation_root', insert_places_one?: { __typename?: 'places', area: string, country?: string | null, categories?: any | null, id: number, name: string, api_id: string, users_places: Array<{ __typename?: 'users_places', place_id: number, user_id: number }> } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, id: number, name: string }> };


export const GetPlacesDocument = gql`
    query getPlaces($params: SearchParams!) {
  search(params: $params) {
    data {
      error
      results
      success
    }
  }
}
    `;

/**
 * __useGetPlacesQuery__
 *
 * To run a query within a React component, call `useGetPlacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlacesQuery({
 *   variables: {
 *      params: // value for 'params'
 *   },
 * });
 */
export function useGetPlacesQuery(baseOptions: Apollo.QueryHookOptions<GetPlacesQuery, GetPlacesQueryVariables> & ({ variables: GetPlacesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlacesQuery, GetPlacesQueryVariables>(GetPlacesDocument, options);
      }
export function useGetPlacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlacesQuery, GetPlacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlacesQuery, GetPlacesQueryVariables>(GetPlacesDocument, options);
        }
export function useGetPlacesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPlacesQuery, GetPlacesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPlacesQuery, GetPlacesQueryVariables>(GetPlacesDocument, options);
        }
export type GetPlacesQueryHookResult = ReturnType<typeof useGetPlacesQuery>;
export type GetPlacesLazyQueryHookResult = ReturnType<typeof useGetPlacesLazyQuery>;
export type GetPlacesSuspenseQueryHookResult = ReturnType<typeof useGetPlacesSuspenseQuery>;
export type GetPlacesQueryResult = Apollo.QueryResult<GetPlacesQuery, GetPlacesQueryVariables>;
export const InsertUserPlaceMutationDocument = gql`
    mutation insertUserPlaceMutation($user_id: Int!, $area: String!, $categories: jsonb!, $api_id: String!, $name: String!, $country: String!) {
  insert_places_one(
    object: {area: $area, country: $country, categories: $categories, name: $name, api_id: $api_id, users_places: {data: {user_id: $user_id}, on_conflict: {constraint: users_places_pkey, update_columns: []}}}
    on_conflict: {constraint: places_api_id_key, update_columns: []}
  ) {
    area
    country
    categories
    id
    name
    users_places {
      place_id
      user_id
    }
    api_id
  }
}
    `;
export type InsertUserPlaceMutationMutationFn = Apollo.MutationFunction<InsertUserPlaceMutationMutation, InsertUserPlaceMutationMutationVariables>;

/**
 * __useInsertUserPlaceMutationMutation__
 *
 * To run a mutation, you first call `useInsertUserPlaceMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUserPlaceMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUserPlaceMutationMutation, { data, loading, error }] = useInsertUserPlaceMutationMutation({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      area: // value for 'area'
 *      categories: // value for 'categories'
 *      api_id: // value for 'api_id'
 *      name: // value for 'name'
 *      country: // value for 'country'
 *   },
 * });
 */
export function useInsertUserPlaceMutationMutation(baseOptions?: Apollo.MutationHookOptions<InsertUserPlaceMutationMutation, InsertUserPlaceMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUserPlaceMutationMutation, InsertUserPlaceMutationMutationVariables>(InsertUserPlaceMutationDocument, options);
      }
export type InsertUserPlaceMutationMutationHookResult = ReturnType<typeof useInsertUserPlaceMutationMutation>;
export type InsertUserPlaceMutationMutationResult = Apollo.MutationResult<InsertUserPlaceMutationMutation>;
export type InsertUserPlaceMutationMutationOptions = Apollo.BaseMutationOptions<InsertUserPlaceMutationMutation, InsertUserPlaceMutationMutationVariables>;
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