// import MSpinnerSpin from './MSpinnerSpin'
import MSpinnerPulse from './MSpinnerPulse'
import MSpinnerSwirl from './MSpinnerSwirl'
import MSpinnerSignal from './MSpinnerSignal'

export { 
    // MSpinnerSpin, 
    MSpinnerPulse,
    MSpinnerSwirl,
    MSpinnerSignal
}

export default {
    // MSpinnerSpin,
    MSpinnerPulse,
    MSpinnerSwirl,
    MSpinnerSignal,

    install(Vue) {
        // Vue.component(MSpinnerSpin.name, MSpinnerSpin)
        Vue.component(MSpinnerPulse.name, MSpinnerPulse)
        Vue.component(MSpinnerSwirl.name, MSpinnerSwirl)
        Vue.component(MSpinnerSignal.name, MSpinnerSignal)
    }
}