function attachEventsListeners() {
    const ratios = {
        km : 1000,
        m : 1,
        cm : 0.01,
        mm : 0.001,
        mi : 1609.34,
        yrd : 0.9144,
        ft : 0.3048,
        in : 0.0254
    }

    function convert(value, unit){
        const inMeters = value * ratios[unit];
        const inKilometers = value / ratios[unit];

        return{
            km: inMeters,
            m: inMeters / ratios.m,
            cm: inMeters / ratios.cm,
            mm: inMeters / ratios.mm,
            mi : inMeters / ratios.mi,
            yrd: inMeters / ratios.yrd,
            ft: inMeters / ratios.ft,
            in: inMeters / ratios.ft
        }
        
    }

    const inputKm = document.getElementById('km');
        const inputM = document.getElementById('m');
        const inputCm = document.getElementById('cm');
        const inputMm = document.getElementById('mm');
        const inputMi = document.getElementById('mi');
        const inputYrd = document.getElementById('yrd');
        const inputFt = document.getElementById('ft');
        const inputIn = document.getElementById('in');
}