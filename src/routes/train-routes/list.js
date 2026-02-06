import { getAllRoutes, getListOfRegions, getListOfSeasons } from '../../models/model.js';

export default async (req, res) => {
    // Default to empty object if no query exists
    console.log('Detailed Query:', JSON.stringify(req.query, null, 2));
    
    const query = req.query || {};
    
    const regions = await getListOfRegions();
    const seasons = await getListOfSeasons();
    
    // This will now return everything if query is empty
    const routes = await getAllRoutes(query);
    

    res.render('routes/list', { 
        title: 'Scenic Train Routes',
        regions,
        routes,
        seasons
    });
};