import { Ref } from "vue";

export interface OrderEventPayload {
    position:"upper"|"lower",
    active:Ref<boolean>,
    obj:Record<string,string>
}