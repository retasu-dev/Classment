/* eslint-disable no-unused-vars */
export interface RecipientObjects {
  type: string;
  audienceGroupId: number;
}

export const enum DemographicTypes {
  Gender = 'gender',
  Age = 'age',
  AppType = 'appType',
  Area = 'area',
  SubscriptionPeriod = 'subscriptionPeriod',
}

export const enum GenderTypes {
  Male = 'male',
  Female = 'famale',
}

export const enum AgeTypes {
  Age_15 = 'age_15',
  Age_20 = 'age_20',
  Age_25 = 'age_25',
  Age_30 = 'age_30',
  Age_35 = 'age_35',
  Age_40 = 'age_40',
  Age_45 = 'age_45',
  Age_50 = 'age_50',
  Age_55 = 'age_55',
  Age_60 = 'age_60',
  Age_65 = 'age_65',
  Age_70 = 'age_70',
}

export const enum AppTypes {
  IOS = 'ios',
  Android = 'android',
}

export const enum AreaTypes {
  Hokkaido = 'jp_01',
  Aomori = 'jp_02',
  Iwate = 'jp_03',
  Miyagi = 'jp_04',
  Akita = 'jp_05',
  Yamagata = 'jp_06',
  Fukushima = 'jp_07',
  Ibaraki = 'jp_08',
  Tochigi = 'jp_09',
  Gunma = 'jp_10',
  Saitama = 'jp_11',
  Chiba = 'jp_12',
  Tokyo = 'jp_13',
  Kanagawa = 'jp_14',
  Niigata = 'jp_15',
  Toyama = 'jp_16',
  Ishikawa = 'jp_17',
  Fukui = 'jp_18',
  Yamanashi = 'jp_19',
  Nagano = 'jp_20',
  Gifu = 'jp_21',
  Shizuoka = 'jp_22',
  Aichi = 'jp_23',
  Mie = 'jp_24',
  Shiga = 'jp_25',
  Kyoto = 'jp_26',
  Osaka = 'jp_27',
  Hyougo = 'jp_28',
  Nara = 'jp_29',
  Wakayama = 'jp_30',
  Tottori = 'jp_31',
  Shimane = 'jp_32',
  Okayama = 'jp_33',
  Hiroshima = 'jp_34',
  Yamaguchi = 'jp_35',
  Tokushima = 'jp_36',
  Kagawa = 'jp_37',
  Ehime = 'jp_38',
  Kouchi = 'jp_39',
  Fukuoka = 'jp_40',
  Saga = 'jp_41',
  Nagasaki = 'jp_42',
  Kumamoto = 'jp_43',
  Oita = 'jp_44',
  Miyazaki = 'jp_45',
  Kagoshima = 'jp_46',
  Okinawa = 'jp_47',
  TaipeiCity = 'tw_01',
  NewTaipeiCity = 'tw_02',
  TaoyuanCity = 'tw_03',
  TaichungCity = 'tw_04',
  TainanCity = 'tw_05',
  KaohsiungCity = 'tw_06',
  KeelungCity = 'tw_07',
  HsinchuCity = 'tw_08',
  ChiayiCity = 'tw_09',
  HsinchuCounty = 'tw_10',
  MiaoliCounty = 'tw_11',
  ChanghuaCounty = 'tw_12',
  NantouCounty = 'tw_13',
  YunlinCounty = 'tw_14',
  ChiayiCounty = 'tw_15',
  PingtungCounty = 'tw_16',
  YilanCounty = 'tw_17',
  HualienCounty = 'tw_18',
  TaitungCounty = 'tw_19',
  PenghuCounty = 'tw_20',
  KinmenCounty = 'tw_21',
  LienchiangCounty = 'tw_22',
  Bangkok = 'th_01',
  Pattaya = 'th_02',
  Northern = 'th_03',
  Central = 'th_04',
  Southern = 'th_05',
  Eastern = 'th_06',
  NorthEastern = 'th_07',
  Western = 'th_08',
}

export interface DemographicObjects {
  type: DemographicTypes;
}

export interface LimitObjects {
    max: number
    upToRemainingQuota: boolean
}
