export enum SuccessCode {
    SUCCESS = 'SUCCESS',
    FAIL = "FAIL"
}

export enum LocalConfiguration {
    PROD_AUTH_URL = 'http://localhost:8081',
    PROD_OAUTH_URL = 'http://localhost:8081',
    PROD_COURSE_URL = 'http://localhost:9090',
    PROD_PRICING_URL="https://pricing.expert-works.com"
}

export enum ProdConfiguration {
    PROD_AUTH_URL = 'https://auth.expert-works.com',
    // PROD_OAUTH_URL = 'https://auth-env-1.ap-south-1.elasticbeanstalk.com',
    PROD_OAUTH_URL = 'https://auth.expert-works.com',
    PROD_COURSE_URL = 'https://api.expert-works.com',
    PROD_PRICING_URL="https://pricing.expert-works.com",
    PROD_DASHBOARD_URL="https://dashboard.expert-works.com"

}

export interface BaseResponse {
    responseCode: SuccessCode,
    description?: string,
}

export interface LoginResponse extends BaseResponse {
    jwttoken: string,
}

export interface VideoLinks {
    url: string,
    type: string,
    title: string,
    subtitle: string,
    img: string,
    videoLinks?:any,
    resourceLinks?:any
}

export interface Course {
    teamId: string,
    courseId: string,
    title: string,
    subtitle: string,
    createDate: string,
    img: string,
    videoLinks?: VideoLinks[]
}

export interface CourseSection {

    courseId: string,
    sk: string,
    title: string,
    subtitle: string,
    createDate: string,
    img: string,
    videoLinks?: VideoLinks[]
}

export interface CourseResponse {
    result: Course[]
}

export interface CourseSectionResponse {
    result: CourseSection[]
}

export interface ContactMe {
    firstname: string,
    lastname: string,
    mobile: string,
    company: string,
    email: string,
    course: string,
    message: string
}

export interface ApiResponse {
    status: number,
    message: string,
    result?: any,
}