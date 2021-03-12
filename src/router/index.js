import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store'

// Home
import Home from '@/views/Home.vue'

// Auth
import Login from '@/views/auth/login.vue'

// Users
import Users from '@/views/users/UserList.vue'
import UserCreate from '@/views/users/UserCreate.vue'

// Inspectors
import Inspectors from '@/views/inspectors/InspectorList.vue'
import InspectorCreate from '@/views/inspectors/InspectorCreate.vue'
import InspectorEdit from '@/views/inspectors/InspectorEdit.vue'

// QHSSE
import Manuals from '@/views/manuals/ManualList.vue'
import ManualCreate from '@/views/manuals/ManualCreate.vue'
import ManualEdit from '@/views/manuals/ManualEdit.vue'

import Procedures from '@/views/procedures/ProcedureList.vue'
import ProcedureCreate from '@/views/procedures/ProcedureCreate.vue'
import ProcedureEdit from '@/views/procedures/ProcedureEdit.vue'

import Forms from '@/views/forms/FormList.vue'
import FormCreate from '@/views/forms/FormCreate.vue'
import FormEdit from '@/views/forms/FormEdit.vue'

import AuditReports from '@/views/audit-reports/AuditReportList.vue'
import AuditReportCreate from '@/views/audit-reports/AuditReportCreate.vue'
import AuditReportEdit from '@/views/audit-reports/AuditReportEdit.vue'

import Circulars from '@/views/circulars/CircularList.vue'
import CircularCreate from '@/views/circulars/CircularCreate.vue'
import CircularEdit from '@/views/circulars/CircularEdit.vue'

import Campaigns from '@/views/campaigns/CampaignList.vue'
import CampaignCreate from '@/views/campaigns/CampaignCreate.vue'
import CampaignEdit from '@/views/campaigns/CampaignEdit.vue'

import IncidentReports from '@/views/incident-reports/IncidentReportList.vue'
import IncidentReportCreate from '@/views/incident-reports/IncidentReportCreate.vue'
import IncidentReportEdit from '@/views/incident-reports/IncidentReportEdit.vue'

import GoodPractices from '@/views/good-practices/GoodPracticeList.vue'
import GoodPracticeCreate from '@/views/good-practices/GoodPracticeCreate.vue'
import GoodPracticeEdit from '@/views/good-practices/GoodPracticeEdit.vue'

import RiskAssessments from '@/views/risk-assessments/RiskAssessmentList.vue'
import RiskAssessmentCreate from '@/views/risk-assessments/RiskAssessmentCreate.vue'
import RiskAssessmentEdit from '@/views/risk-assessments/RiskAssessmentEdit.vue'

import Libraries from '@/views/libraries/LibraryList.vue'
import LibraryCreate from '@/views/libraries/LibraryCreate.vue'
import LibraryEdit from '@/views/libraries/LibraryEdit.vue'

import Records from '@/views/records/RecordList.vue'
import RecordCreate from '@/views/records/RecordCreate.vue'
import RecordEdit from '@/views/records/RecordEdit.vue'

import ObservationSheets from '@/views/observation-sheets/ObservationSheetList.vue'
import ObservationSheetCreate from '@/views/observation-sheets/ObservationSheetCreate.vue'
import ObservationSheetEdit from '@/views/observation-sheets/ObservationSheetEdit.vue'

import SireReports from '@/views/sire-reports/SireReportList.vue'
import SireReportCreate from '@/views/sire-reports/SireReportCreate.vue'
import SireReportEdit from '@/views/sire-reports/SireReportEdit.vue'

import Trainings from '@/views/trainings/TrainingList.vue'
import TrainingCreate from '@/views/trainings/TrainingCreate.vue'
import TrainingEdit from '@/views/trainings/TrainingEdit.vue'

import Kpis from '@/views/kpis/KpiList.vue'
import KpiCreate from '@/views/kpis/KpiCreate.vue'
import KpiEdit from '@/views/kpis/KpiEdit.vue'

import Screenings from '@/views/screenings/ScreeningList.vue'
import ScreeningCreate from '@/views/screenings/ScreeningCreate.vue'
import ScreeningEdit from '@/views/screenings/ScreeningEdit.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    // Home
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    // Users
    {
      path: '/users',
      name: 'users',
      component: Users,
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Users',
            active: true,
          },
        ],
      },
    },
    {
      path: '/users/create',
      name: 'userCreate',
      component: UserCreate,
      meta: {
        pageTitle: 'Users',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Users',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    // Inspectors
    {
      path: '/inspectors',
      name: 'inspectors',
      component: Inspectors,
      meta: {
        pageTitle: 'Inspectors',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Inspectors',
            active: true,
          },
        ],
      },
    },
    {
      path: '/inspectors/create',
      name: 'inspectorCreate',
      component: InspectorCreate,
      meta: {
        pageTitle: 'Create Inspectors',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Inspectors',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    // Manuals
    {
      path: '/manuals',
      name: 'manuals',
      component: Manuals,
      meta: {
        pageTitle: 'IMS Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IMS Manuals',
            active: true,
          },
        ],
      },
    },
    {
      path: '/manuals/create',
      name: 'manualCreate',
      component: ManualCreate,
      meta: {
        pageTitle: 'Create IMS Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IMS Manuals',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/manuals/:manualId',
      name: 'manualEdit',
      component: ManualEdit,
      meta: {
        pageTitle: 'Edit IMS Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IMS Manuals',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    // Procedures
    {
      path: '/procedures',
      name: 'procedures',
      component: Procedures,
      meta: {
        pageTitle: 'Procedure Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Procedure Manuals',
            active: true,
          },
        ],
      },
    },
    {
      path: '/procedures/create',
      name: 'procedureCreate',
      component: ProcedureCreate,
      meta: {
        pageTitle: 'Create Procedure Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Procedure Manuals',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/procedures/:procedureId',
      name: 'procedureEdit',
      component: ProcedureEdit,
      meta: {
        pageTitle: 'Edit Procedure Manuals',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Procedure Manuals',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    // Forms
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
      meta: {
        pageTitle: 'Forms',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Forms',
            active: true,
          },
        ],
      },
    },
    {
      path: '/forms/create',
      name: 'formCreate',
      component: FormCreate,
      meta: {
        pageTitle: 'Create Form',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Forms',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/forms/:formId',
      name: 'formEdit',
      component: FormEdit,
      meta: {
        pageTitle: 'Edit Form',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Forms',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    // AuditReports
    {
      path: '/audit-reports',
      name: 'audit-reports',
      component: AuditReports,
      meta: {
        pageTitle: 'Audit Reports',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Audit Reports',
            active: true,
          },
        ],
      },
    },
    {
      path: '/audit-reports/create',
      name: 'auditReportCreate',
      component: AuditReportCreate,
      meta: {
        pageTitle: 'Create Audit Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Audit Reports',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/audit-reports/:auditReportId',
      name: 'auditReportEdit',
      component: AuditReportEdit,
      meta: {
        pageTitle: 'Edit Audit Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Audit Reports',
          },
          {
            text: 'Edit',
            active: true,
          },
        ],
      },
    },
    // Circulars
    {
      path: '/circulars',
      name: 'circulars',
      component: Circulars,
      meta: {
        pageTitle: 'Circulars',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Circulars',
            active: true,
          },
        ],
      },
    },
    {
      path: '/circulars/create',
      name: 'circularCreate',
      component: CircularCreate,
      meta: {
        pageTitle: 'Create Circular',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Circulars',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/circulars/:circularId',
      name: 'circularEdit',
      component: CircularEdit,
      meta: {
        pageTitle: 'Edit Circular',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Circulars',
          },
          {
            text: 'Circular Edit',
            active: true,
          },
        ],
      },
    },
    // Campaigns
    {
      path: '/campaigns',
      name: 'campaigns',
      component: Campaigns,
      meta: {
        pageTitle: 'Campaigns',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Campaigns',
            active: true,
          },
        ],
      },
    },
    {
      path: '/campaigns/create',
      name: 'campaignCreate',
      component: CampaignCreate,
      meta: {
        pageTitle: 'Create Campaign',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Campaigns',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/campaigns/:campaignId',
      name: 'campaignEdit',
      component: CampaignEdit,
      meta: {
        pageTitle: 'Edit Campaign',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Campaigns',
          },
          {
            text: 'Campaign Edit',
            active: true,
          },
        ],
      },
    },
    // IncidentReports
    {
      path: '/incident-reports',
      name: 'incident-reports',
      component: IncidentReports,
      meta: {
        pageTitle: 'Incident Reports',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IncidentReports',
            active: true,
          },
        ],
      },
    },
    {
      path: '/incident-reports/create',
      name: 'incidentReportCreate',
      component: IncidentReportCreate,
      meta: {
        pageTitle: 'Create Incident Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IncidentReports',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/incident-reports/:incidentReportId',
      name: 'incidentReportEdit',
      component: IncidentReportEdit,
      meta: {
        pageTitle: 'Edit Incident Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'IncidentReports',
          },
          {
            text: 'IncidentReport Edit',
            active: true,
          },
        ],
      },
    },
    // GoodPractices
    {
      path: '/good-practices',
      name: 'good-practices',
      component: GoodPractices,
      meta: {
        pageTitle: 'Best Practices',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Best Practices',
            active: true,
          },
        ],
      },
    },
    {
      path: '/good-practices/create',
      name: 'goodPracticeCreate',
      component: GoodPracticeCreate,
      meta: {
        pageTitle: 'Create Best Practice',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Best Practices',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/good-practices/:goodPracticeId',
      name: 'goodPracticeEdit',
      component: GoodPracticeEdit,
      meta: {
        pageTitle: 'Edit Best Practice',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Best Practices',
          },
          {
            text: 'Best Practice Edit',
            active: true,
          },
        ],
      },
    },
    // RiskAssessments
    {
      path: '/risk-assessments',
      name: 'risk-assessments',
      component: RiskAssessments,
      meta: {
        pageTitle: 'Risk Assessments',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Risk Assessments',
            active: true,
          },
        ],
      },
    },
    {
      path: '/risk-assessments/create',
      name: 'riskAssessmentCreate',
      component: RiskAssessmentCreate,
      meta: {
        pageTitle: 'Create Risk Assessment',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Risk Assessments',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/risk-assessments/:riskAssessmentId',
      name: 'riskAssessmentEdit',
      component: RiskAssessmentEdit,
      meta: {
        pageTitle: 'Edit Risk Assessment',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Risk Assessments',
          },
          {
            text: 'Risk Assessment Edit',
            active: true,
          },
        ],
      },
    },
    // Libraries
    {
      path: '/libraries',
      name: 'libraries',
      component: Libraries,
      meta: {
        pageTitle: 'Libraries',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Libraries',
            active: true,
          },
        ],
      },
    },
    {
      path: '/libraries/create',
      name: 'libraryCreate',
      component: LibraryCreate,
      meta: {
        pageTitle: 'Create Library',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Libraries',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/libraries/:libraryId',
      name: 'libraryEdit',
      component: LibraryEdit,
      meta: {
        pageTitle: 'Edit Library',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Libraries',
          },
          {
            text: 'Library Edit',
            active: true,
          },
        ],
      },
    },
    // Records
    {
      path: '/records',
      name: 'records',
      component: Records,
      meta: {
        pageTitle: 'Records',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Records',
            active: true,
          },
        ],
      },
    },
    {
      path: '/records/create',
      name: 'recordCreate',
      component: RecordCreate,
      meta: {
        pageTitle: 'Create Record',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Records',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/records/:recordId',
      name: 'recordEdit',
      component: RecordEdit,
      meta: {
        pageTitle: 'Edit Record',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Records',
          },
          {
            text: 'Record Edit',
            active: true,
          },
        ],
      },
    },
    // ObservationSheets
    {
      path: '/observation-sheets',
      name: 'observation-sheets',
      component: ObservationSheets,
      meta: {
        pageTitle: 'Observation Sheets',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Observation Sheets',
            active: true,
          },
        ],
      },
    },
    {
      path: '/observation-sheets/create',
      name: 'observationSheetCreate',
      component: ObservationSheetCreate,
      meta: {
        pageTitle: 'Create Observation Sheet',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Observation Sheets',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/observation-sheets/:observationSheetId',
      name: 'observationSheetEdit',
      component: ObservationSheetEdit,
      meta: {
        pageTitle: 'Edit Observation Sheet',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Observation Sheets',
          },
          {
            text: 'Observation Sheet Edit',
            active: true,
          },
        ],
      },
    },
    // SireReports
    {
      path: '/sire-reports',
      name: 'sire-reports',
      component: SireReports,
      meta: {
        pageTitle: 'Sire Reports',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Sire Reports',
            active: true,
          },
        ],
      },
    },
    {
      path: '/sire-reports/create',
      name: 'sireReportCreate',
      component: SireReportCreate,
      meta: {
        pageTitle: 'Create Sire Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Sire Reports',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/sire-reports/:sireReportId',
      name: 'sireReportEdit',
      component: SireReportEdit,
      meta: {
        pageTitle: 'Edit Sire Report',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Sire Reports',
          },
          {
            text: 'Sire Report Edit',
            active: true,
          },
        ],
      },
    },
    // Trainings
    {
      path: '/trainings',
      name: 'trainings',
      component: Trainings,
      meta: {
        pageTitle: 'Trainings',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Trainings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/trainings/create',
      name: 'trainingCreate',
      component: TrainingCreate,
      meta: {
        pageTitle: 'Create Training',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Trainings',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/trainings/:trainingId',
      name: 'trainingEdit',
      component: TrainingEdit,
      meta: {
        pageTitle: 'Edit Training',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Trainings',
          },
          {
            text: 'Training Edit',
            active: true,
          },
        ],
      },
    },
    // Kpis
    {
      path: '/kpis',
      name: 'kpis',
      component: Kpis,
      meta: {
        pageTitle: 'Kpis',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Kpis',
            active: true,
          },
        ],
      },
    },
    {
      path: '/kpis/create',
      name: 'kpiCreate',
      component: KpiCreate,
      meta: {
        pageTitle: 'Create Kpi',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Kpis',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/kpis/:kpiId',
      name: 'kpiEdit',
      component: KpiEdit,
      meta: {
        pageTitle: 'Edit Kpi',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Kpis',
          },
          {
            text: 'Kpi Edit',
            active: true,
          },
        ],
      },
    },
    // Screenings
    {
      path: '/screenings',
      name: 'screenings',
      component: Screenings,
      meta: {
        pageTitle: 'Screenings',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Screenings',
            active: true,
          },
        ],
      },
    },
    {
      path: '/screenings/create',
      name: 'screeningCreate',
      component: ScreeningCreate,
      meta: {
        pageTitle: 'Create Screening',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Screenings',
          },
          {
            text: 'Create',
            active: true,
          },
        ],
      },
    },
    {
      path: '/screenings/:screeningId',
      name: 'screeningEdit',
      component: ScreeningEdit,
      meta: {
        pageTitle: 'Edit Screening',
        breadcrumb: [
          {
            text: 'Home',
          },
          {
            text: 'Screenings',
          },
          {
            text: 'Screening Edit',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// router.beforeEach((to, from, next) => {
//   if (to.name === 'login' || to.name === 'register' || to.name === 'forgotpassword') {
//     if (store.getters['auth/authenticated']) {
//       return next({
//         name: 'home',
//       })
//     }
//     next()
//   } else if (!store.getters['auth/authenticated']) {
//     return next({
//       name: 'login',
//     })
//   }
//   return next()
// })

export default router
