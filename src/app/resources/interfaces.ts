export interface IClass {
  CLSS_ID: number,
  CLSS_NAME: string,
  CLSS_DESC: string,
  CLSS_YEAR: number
}

export interface IStudent {
  STUD_ID: number,
  STUD_NAME: string,
  STUD_TEL: string,
  STUD_BD: Date,
  STUD_PRNT_TEL: string,
  STUD_CLSS_ID: number,
  STUD_PRNT_TELL: string,
  STUD_PRNT_NAME: string,
  STUD_MNTR_NAME: string,
  STUD_PREV_CLUB: string,
  STUD_BARCODE: string,
  STUD_ACCS_CODE: string,
  STUD_SINCE: Date,
  STUD_FAV_POS: number,
  STUD_WGHT: number,
  STUD_LGTH: number,
  CLSS_YEAR: number,
  POST_NAME: string,
  POST_ABB: string
}

export interface IClassRoute {
  state :  string,
  path  :  string
}

export interface IPosition {
  POST_ID: number,
  POST_NAME: string,
  POST_ABB: string
}

export interface ISession {
  SESS_ID: number,
  SESS_STRT_DATE: Date,
  SESS_DESC: string,
  SESS_END_DATE: Date,
  SESS_USER_ID: number
}

export interface IUser {
  USER_ID: number,
  USER_UNAME: string,
  USER_FNAME: string,
  USER_TEL: string,
}
