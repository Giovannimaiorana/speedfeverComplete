import { reactive } from "vue"

export const store = reactive({
    loading: true,
    sliderElements: {

        'Live Telemetry': {
            'description': 'La vita degli pneumatici è importante, questo widget aiuta a gestirli.',
            'descriptionEn':'Tire life is important; this widget helps manage it.',
            'img': 'TELEMETRYLIVE 1.svg',
            'index':'1'
        },
        'Traction Circle': {
            'description': `Il diagramma dell'accelerazione gravitazionale ti aiuta a capire i limiti: dell'auto, del setup e te stesso.`,
            'descriptionEn':'The gravitational acceleration diagram helps you understand the limits: of the car, the setup, and yourself.',
            'img': 'TRACTIONCIRCLE.svg',
            'index':'2'
        },
        'Sector Time': {
            'description': 'Visualizza il tuo tempo sul giro diviso in tre settori.',
            'descriptionEn':'View your lap time divided into three sectors.',
            'img': 'sectorTimeTwo.svg',
            'index':'3'
        },
        'Brake Wear': {
            'description': 'Gestisci al meglio i freni nei tuoi stint monitorando l\'usura e il tempo di utilizzo.',
            'descriptionEn':'Optimize brake management during your stints by monitoring wear and usage time.',
            'img': 'BRAKEWEAR3.svg',
            'index':'4'
        },
        'Live timing': {
            'description': 'Questo widget visualizza i dati telemetrici live: Brake, Clutch, throttle, Rpms, Gears, Steering.',
            'descriptionEn':'This widget displays live telemetry data: Brake, Clutch, Throttle, RPMs, Gears, Steering',
            'img': 'livetimeTwo.svg',
            'index':'5'
        },
        'Locking Sensor': {
            'description': 'Intuisci le perdite di aderenza causate da bloccaggi e micro bloccaggi.',
            'descriptionEn':'Identify grip losses caused by lockups and micro-lockups.',
            'img': 'Lockingsensoraction.svg',
            'index':'6'
        },
        'Fuel Calculator': {
            'description': 'Calcola il carburante necessario per finire la gara, o il tuo stint.',
            'descriptionEn':'Calculate the fuel needed to finish the race or your stint.',
            'img': 'Fuelcalculator.svg',
            'index':'7'
        },
        'Delta Time': {
            'description': 'Vedere dove guardagni o perdi tempo è necessario, Il delta time serve proprio a questo.',
            'descriptionEn':'Seeing where you gain or lose time is essential; the delta time is exactly for this.',
            'img': 'Deltatime2positive.svg',
            'index':'8'
        }
    },
})
