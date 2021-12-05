import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const Icon = ({prefix,iconName})=>{
    library.add(fas,fab)
    const IconRequest = icon({prefix,iconName})
}
export default Icon