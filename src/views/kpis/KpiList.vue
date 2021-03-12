<template>
  <div>
    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

      <div class="m-2">

        <!-- Table Top -->
        <b-row>

          <!-- Search -->
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex">
              <b-button
                variant="primary"
                href="/kpis/create"
              >
                <span class="text-nowrap">Add KPI</span>
              </b-button>
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
        ref="refUserListTable"
        class="position-relative"
        :items="items"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="Loading..."
        :sort-desc.sync="isSortDirDesc"
      >

        <!-- Column: attachment -->
        <template #cell(attachment)="data">
          <a
            :href="mediaUrl + data.item.imagepath"
            class="font-weight-bold d-block text-nowrap"
            target="_blank"
          >
            {{ data.item.imagepath }}
          </a>
        </template>

        <!-- Column: Actions -->
        <template #cell(actions)="data">
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>

            <b-dropdown-item :to="`/kpis/${data.item.id}`">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item
              @click="del(data.item.id)"
            >
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
        </template>

      </b-table>
      <div class="mx-2 mb-2">
        <b-row>

          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-start"
          >
            <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

            <b-pagination
              v-model="currentPage"
              :total-rows="dataMeta.of"
              :per-page="perPage"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon
                  icon="ChevronLeftIcon"
                  size="18"
                />
              </template>
              <template #next-text>
                <feather-icon
                  icon="ChevronRightIcon"
                  size="18"
                />
              </template>
            </b-pagination>

          </b-col>

        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'

export default {
  name: 'KpiList',
  data() {
    return {
      items: [],
      currentPage: 1,
      perPage: 100,
      perPageOptions: [100],
      searchQuery: '',
      loading: false,
      tableColumns: [
        { key: 'actions' },
        { key: 'month', sortable: true },
        { key: 'year', sortable: true },
        { key: 'name', sortable: true },
        { key: 'link', sortable: true },
        { key: 'attachment', sortable: true },
      ],
      sortBy: 'id',
      isSortDirDesc: true,
    }
  },
  computed: {
    dataMeta() {
      const localItemsCount = this.items.length
      return {
        from: this.perPage * (this.currentPage - 1) + (localItemsCount ? 1 : 0),
        to: this.perPage * (this.currentPage - 1) + localItemsCount,
        of: this.items.length,
      }
    },
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.items = []
      this.loading = true
      const items = await axios.get('/kpis')
      this.items = items.data.data
      this.loading = false
    },
    async del(id) {
      const r = window.confirm('Are you sure you want to delete the data?')
      if (r) await axios.delete(`/kpis/${id}`)
      this.getData()
    },
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>
