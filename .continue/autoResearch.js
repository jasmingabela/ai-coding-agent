const KEYWORDS = ['500 error', 'dependency conflict', 'ECONNREFUSED'];

module.exports = function autoResearchNeeded(errorMsg) {
  return KEYWORDS.some(kw => 
    errorMsg.toLowerCase().includes(kw.toLowerCase())
  );
};