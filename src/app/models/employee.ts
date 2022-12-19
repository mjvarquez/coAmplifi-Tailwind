import { UserKey } from "./user-key";

export class Overtime {
    enabledDailyOverTime: boolean;
    dailyOverTimeTrigger: number;    // set to 24 if no OT
      dailyDoubleTimeTrigger: number; // set to 24 if no DT
      workWeekStart: string; // MONDAY, ..., SUNDAY
      enabledWeeklyOverTime: boolean;
      weeklyOverTimeTrigger: number;  // after deducting daily overtime
      enabled7thDayOverTime: boolean;  // work consecutively for 7 days
}

export class WorkShift {
    workday: boolean;
    startTime: string; // HH:mm  24 hours
    endTime: string; // HH:mm  24 hours
}

export class Employee {
    employeeId: string;
    userKey: UserKey;
    positions: string[];
    status: string;
    postNomials: string;
    aws: boolean;
    partTime: boolean;
    weeklyWorkHours: number;
    workCountry: string;
    workState: string;
    workCountyId: string;
    workCityId: string;
    workZipCode: string;
    exemptStatus: string;
    workTimeZoneId: string;
    dayStart: string; // HH:mm  24 hours, workday boundary in workTimeZoneId
    sunday: WorkShift;
    monday: WorkShift;
    tuesday: WorkShift;
    wednesday: WorkShift;
    thursday: WorkShift;
    friday: WorkShift;
    saturday: WorkShift;
    contractor: boolean;
    eligibleHolidayHours: number;
    otSetting: Overtime;
}