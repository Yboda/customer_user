import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

export default function ByGenderAndMedicalInstitutionType({detailOpt}) {
  const dataListToRender = dataList.filter(data => detailOpt.yearList.includes(data.year));
  return (
    <Table
      sx={{
        border: '1px solid #000',
        '& .MuiTableCell-root': {
          borderColor: '#000',
          borderRight: '1px solid #000',
          textAlign: 'center',
        },
      }}
    >
      <TableHead>
        <TableRow>
          {Object.values(COLUMN_NAME).map(head => (
            <TableCell key={head} sx={{fontSize: '1.2rem'}}>
              {head}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody
        sx={{
          borderTop: '2px solid #000',
          '&:first-of-type': {
            borderTop: 'none',
          },
        }}
      >
        {dataListToRender.map(data => (
          <>
            <TableCell sx={{fontSize: '1.2rem'}} rowSpan={data.totalLength}>
              {data.year}
            </TableCell>
            {Object.keys(GENDER_TYPES).map(genderKey => (
              <TableCell
                key={genderKey}
                sx={{fontSize: '1.2rem'}}
                rowSpan={Object.keys(data.data[genderKey]).length}
              >
                {GENDER_TYPES[genderKey]}
              </TableCell>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
}

const COLUMN_NAME = {
  year: '시점',
  gender: '성별',
  hospitalTypes: '의료기관 종별(1)',
  medicalInstitutionsCtn: '처방기관수 (개소)',
  doctorsCtn: '처방의사수 (명)',
  patientsCtn: '환자수 (명)',
  prescriptionsCtn: '처방건수 (건)',
  prescriptionsAmount: '처방량 (개/정)',
};

const GENDER_TYPES = {
  total: '합계',
  man: '남자',
  woman: '여자',
  etc: '기타',
};

const HOSPITAL_TYPES = {
  total: '계',
  general: '종합병원',
  normal: '일반병원',
  nursing: '요양병원',
  dental: '치과병원',
  koreanMedicine: '한방병원',
  normalClinic: '일반의원',
  dentalClinic: '치과의원',
  publicHealthCare: '공중보건의료업',
};

const dataList = [
  {
    id: 1,
    year: '2023',
    totalLength: 20,
    data: {
      total: {
        total: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
      },
      man: {
        total: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        general: {
          medicalInstitutionsCtn: 386,
          doctorsCtn: 42737,
          patientsCtn: 6598385,
          prescriptionsCtn: 34852510,
          prescriptionsAmount: 462734089,
        },
        normal: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        nursing: {
          medicalInstitutionsCtn: 386,
          doctorsCtn: 42737,
          patientsCtn: 6598385,
          prescriptionsCtn: 34852510,
          prescriptionsAmount: 462734089,
        },
        dental: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        koreanMedicine: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        normalClinic: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        dentalClinic: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        publicHealthCare: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
      },
      woman: {
        total: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        general: {
          medicalInstitutionsCtn: 386,
          doctorsCtn: 42737,
          patientsCtn: 6598385,
          prescriptionsCtn: 34852510,
          prescriptionsAmount: 462734089,
        },
        normal: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        nursing: {
          medicalInstitutionsCtn: 386,
          doctorsCtn: 42737,
          patientsCtn: 6598385,
          prescriptionsCtn: 34852510,
          prescriptionsAmount: 462734089,
        },
        dental: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        koreanMedicine: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        normalClinic: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        dentalClinic: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
        publicHealthCare: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
      },
      etc: {
        total: {
          medicalInstitutionsCtn: 41242,
          doctorsCtn: 108325,
          patientsCtn: 19906120,
          prescriptionsCtn: 103458692,
          prescriptionsAmount: 1894113909,
        },
      },
    },
  },
];
