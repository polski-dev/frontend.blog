require("dotenv").config();
import lodash from "lodash";

export default async function handler(req: any, res: any) {
  const { q } = req.query;

  const start = new Date();
  start.setDate(start.getDate() - 2);
  const startDate = `${start.getFullYear()}-${start.getMonth() + 1 < 10 ? `0${start.getMonth() + 1}` : start.getMonth() + 1}-${
    start.getDate() < 10 ? `0${start.getDate()}` : start.getDate()
  }`;

  const end = new Date();
  end.setDate(end.getDate() - 1);
  const endDate = `${end.getFullYear()}-${end.getMonth() + 1 < 10 ? `0${end.getMonth() + 1}` : end.getMonth() + 1}-${
    end.getDate() < 10 ? `0${end.getDate()}` : end.getDate()
  }`;

  const response = await fetch(
    `${process.env.URL_API}/api/article?pagination[page]=${q}&pagination[pageSize]=10&populate=cover&populate=tags&populate=author&filters[waitingroom][$eq]=false&sort[1]=views%3Adesc&filters[createdAt][$gt]=${startDate}&filters[createdAt][$lt]=${endDate}`
  );
  const data = response.json();
  data.then((response) => res.status(200).json(response));
  data.catch((err) => res.status(500).json({ err: "Internal Server Error" }));
}
