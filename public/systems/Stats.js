import Stats from 'stats.js'
 
function createStats() {
    const stats = new Stats()
  
    
    document.body.appendChild(stats.dom)
    console.log(stats)

    stats.tick = () => {
        stats.update();
    };
    return stats;
}

export { createStats };

