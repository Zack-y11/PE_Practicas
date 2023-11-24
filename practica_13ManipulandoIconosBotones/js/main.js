document.addEventListener('DOMContentLoaded', ()=>{
    const darkModeButton = document.getElementById('darkModeButton')
    const lightModeButton = document.getElementById('lightModeButton')
    const resetButton = document.getElementById('resetButton')
    
    darkModeButton.addEventListener('click', ()=>{
        toggleMode('dark')
    });
    lightModeButton.addEventListener('click', ()=>{
        toggleMode('light')
    });
    resetButton.addEventListener('click', ()=>{
        toggleMode('reset')
    });
    function toggleMode(mode){
        document.body.classList.remove('dark-mode', 'light-mode', 'reset-mode')
        if(mode === 'dark'){
            document.body.classList.add('dark-mode');
            alert('Modo Oscuro Activado')
        }else if(mode === 'light'){
            document.body.classList.add('light-mode');
            alert('Modo Claro Activado')
        }else if (mode === 'reset'){
            document.body.classList.add('reset-mode');
            alert('Modo Reiniciado')
        }
    }
});