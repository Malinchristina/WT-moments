import { rest } from "msw";

const baseURL = "https://whispering-plateau-35247-5ab0a29abf01.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            "pk": 2,
            "username": "test_changes",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 2,
            "profile_image": 
              "https://res.cloudinary.com/dtxscaulc/image/upload/v1/media/../default_profile_yvwtw0",
            })
        );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];