import { Request, Response } from 'express';

// Controller of the initial page
class IndexController {

    // The home page is rendered
    public index (req: Request, res: Response) {
        res.render("index", {title: 'Welcome to book app'});
    }

}

export const indexController = new IndexController();