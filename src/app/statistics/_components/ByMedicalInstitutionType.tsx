import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

type Props = {
  detailOpt: {
    indicator: string;
    yearList: string[];
  };
};

export default function ByMedicalInstitutionType({detailOpt}: Props) {
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
        {dataListToRender.map(data =>
          Object.keys(data.data).map((hospitalKey, hospitalIndex) => (
            <TableRow key={`data-row-${data.id}-${hospitalIndex}`}>
              {Object.keys(COLUMN_NAME).map((colName, index) =>
                colName === 'year' ? (
                  hospitalIndex === 0 && (
                    <TableCell
                      key={`data-cell-year`}
                      sx={{fontSize: '1.2rem'}}
                      rowSpan={Object.keys(HOSPITAL_TYPES).length}
                    >
                      {data['year']}
                    </TableCell>
                  )
                ) : colName === 'hospitalTypes' ? (
                  <TableCell key={`data-cell-hospitalType-${hospitalIndex}`} sx={{fontSize: '1.2rem'}}>
                    {HOSPITAL_TYPES[hospitalKey as keyof typeof HOSPITAL_TYPES]}
                  </TableCell>
                ) : (
                  <TableCell
                    key={`data-cell-${hospitalKey}-${hospitalIndex}-${colName}`}
                    sx={{fontSize: '1.2rem'}}
                  >
                    {data.data[hospitalKey][colName].toLocaleString()}
                  </TableCell>
                ),
              )}
            </TableRow>
          )),
        )}
      </TableBody>
    </Table>
  );
}

const COLUMN_NAME = {
  year: '시점',
  hospitalTypes: '의료기관 종별(1)',
  medicalInstitutionsCtn: '처방기관수 (개소)',
  doctorsCtn: '처방의사수 (명)',
  patientsCtn: '환자수 (명)',
  prescriptionsCtn: '처방건수 (건)',
  prescriptionsAmount: '처방량 (개/정)',
};

const HOSPITAL_TYPES = {
  total: '합계',
  general: '종합병원',
  normal: '일반병원',
  nursing: '요양병원',
  dental: '치과병원',
  koreanMedicine: '한방병원',
  normalClinic: '일반의원',
  dentalClinic: '치과의원',
  publicHealthCare: '공중보건의료업',
};

type TValues = {
  medicalInstitutionsCtn: number;
  doctorsCtn: number;
  patientsCtn: number;
  prescriptionsCtn: number;
  prescriptionsAmount: number;
};

const dataList = [
  {
    id: 1,
    year: '2023',
    data: {
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
  },
  {
    id: 2,
    year: '2022',
    data: {
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
  },
];
