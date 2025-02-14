import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface SessionContent {
	id?: number;
    password: string
}

export default function getSession() {
	return getIronSession<SessionContent>(cookies(), {
		cookieName: 'delicious-eggplant',
		password: process.env.COOKIE_PASSWORD })
}