module.exports = (req, res, next) => {
    const tenantId = req.header('Multitenand-Id') 
    
    if (!tenantId) {
        return res.status(400).json({ message: 'Tenant ID is required' });
    }
    req.tenantId = tenantId;  
    next();
};
