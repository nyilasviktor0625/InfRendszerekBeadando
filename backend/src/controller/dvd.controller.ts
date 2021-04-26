import { getRepository } from "typeorm";
import { DVD } from "../entity/DVD";
import { Controller } from "./controller";

export class DVDController extends Controller {
    repository = getRepository(DVD);

    getAll = async (req, res) => {
        const search = req.query.search || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('dvd')
                .where("dvd.title LIKE CONCAT('%', :search, '%')", { search: search })
                .leftJoinAndSelect('dvd.user', 'user')
                .leftJoinAndSelect('dvd.categories', 'category')
                .getMany();
            res.json(entities);
        } catch (err) {
            console.error(err);
            this.handleError(res);
        }
    }
}
