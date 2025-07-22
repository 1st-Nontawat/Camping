exports.listCamping = (_req, res) => {
    try {
        res.send('List of camping sites');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }

}

exports.readCamping = (req, res) => {
    const { id } = req.params;
    try {
        res.send(`Details of camping site with ID: ${id}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

exports.createCamping = (req, res) => {
    const { title, price } = req.body;
    try {
        res.send(`Camping site created with title: ${title} and price: ${price}`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

exports.updateCamping = (req, res) => {
    const { id } = req.params;
    try {
        res.send(`Camping site with ID: ${id} updated`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}

exports.deleteCamping = (req, res) => {
    const { id } = req.params;
    try {
        res.send(`Camping site with ID: ${id} deleted`);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}