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
  POST_ABB: string,
  STUD_ACTV: number,
  STUD_CSID: string,
  STUD_CLSS_NME: string
}

export interface IClass {
  CLSS_ID: number,
  CLSS_NME: string,
  CLSS_DESC: string,
  CLSS_YEAR: number
}

export interface IAttendance {

  STUD_NAME : number,
  ATTND  : number,
  ATTND_DUR : number,
  CLSS_NME : string,
  STUD_ID : number,
  SESS_ID : number
}

export interface ISubscribers {
  STUD_NAME : string,
  STUD_ID : number,
  STUD_CSID : number,
  Months : number
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

export interface IStudentChart {
  title : string,
  Duration_A: number,
  Duration_T: number,
  Attended: number[],
  Available: number[]
}

export interface IPayment {
  PYMT_ID: number,
  STUD_NAME : string,
  PYMT_NAME: string,
  PYMT_DATE: string,
  PYMT_AMNT: number,
  PYMT_STUD: number,
  PYMT_CLSS: number
}

export interface IClassAttendance {
  StudentName: string,
  session1: number,
  session2: number,
  session3: number,
  session4: number,
  session5: number,
  session6: number,
  session7: number,
  session8: number,
  session9: number,
  session10: number,
  session11: number,
  session12: number,
  session13: number,
  session14: number,
  session15: number,
  session16: number,
  session17: number,
  session18: number,
  session19: number,
  session20: number,
  session21: number,
  session22: number,
  session23: number,
  session24: number,
  session25: number,
  session26: number
}

export interface ISessionNames {
  SESS_ID: string,
  Name: string
}
