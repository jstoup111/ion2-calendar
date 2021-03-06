import { ElementRef } from '@angular/core';
import { NavParams, ViewController, Content } from 'ionic-angular';
export interface CalendarOriginal {
    time: number;
    date: Date;
    year: number;
    month: number;
    firstWeek: number;
    howManyDays: number;
}
export interface CalendarDay {
    time: number;
    selected: boolean;
    disable: boolean;
    title?: string;
    subTitle?: string;
    marked?: boolean;
    style?: {
        title?: string;
        subTitle?: string;
    };
}
export declare class CalendarMonth {
    original: CalendarOriginal;
    days: Array<CalendarDay | void>;
}
export declare class CalendarPage {
    params: NavParams;
    viewCtrl: ViewController;
    content: Content;
    monthsEle: ElementRef;
    title: string;
    cssClass: string;
    closeLabel: string;
    dayTemp: Array<CalendarDay | null>;
    calendarMonths: Array<CalendarMonth>;
    monthTitleFilterStr: string;
    weekdaysTitle: Array<string>;
    toast: any;
    private static options;
    private static defaultDate;
    constructor(params: NavParams, viewCtrl: ViewController);
    ngAfterViewInit(): void;
    init(): void;
    findCssClass(): void;
    dismiss(): void;
    onSelected(item: CalendarDay): void;
    nextMonth(infiniteScroll: any): void;
    static findDayConfig(day: any): any;
    static createOriginalCalendar(time: number): CalendarOriginal;
    static createCalendarDay(time: number): CalendarDay;
    static createCalendarMonth(original: CalendarOriginal): CalendarMonth;
    static createMonthsByPeriod(startTime: number, monthsNum: number): Array<CalendarMonth>;
    static findInitMonthNumber(date: Date): number;
    scrollToDefaultDate(): void;
}
