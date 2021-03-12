import { mapGetters } from 'vuex'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BDropdownDivider, BAvatar, BRow, BCol, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BCard, BCardText, BCardTitle, BImg, BForm, BButton, BTable, BDropdown, BPagination,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'

const mixin = {
  install(Vue) {
    Vue.mixin({
      components: {
        BLink,
        BNavbarNav,
        BNavItemDropdown,
        BDropdownItem,
        BDropdownDivider,
        BAvatar,
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BInputGroupAppend,
        BInputGroup,
        BCard,
        BCardText,
        BCardTitle,
        BImg,
        BForm,
        BButton,
        VuexyLogo,
        ValidationProvider,
        ValidationObserver,
        BTable,
        BDropdown,
        BPagination,
        vSelect,
      },
      directives: {
        Ripple,
      },
      computed: {
        ...mapGetters({
          authenticated: 'auth/authenticated',
          user: 'auth/user',
          company: 'auth/company',
          errors: 'errors/getErrors',
          status: 'errors/getStatus',
          mediaUrl: 'settings/getMediaUrl',
          rowsPerPage: 'settings/getRowsPerPage',
        }),
      },
    })
  },
}

export default mixin
