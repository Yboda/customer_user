import {Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

type Props = {
  detailOpt: {
    indicator: string;
    yearList: string[];
  };
};

export default function ByEfficacy({detailOpt}: Props) {
  // const dataListToRender = dataList.filter(data => detailOpt.yearList.includes(data.year));

  return (
    <>
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
            {Object.values(COLUMNS_FOR_NAME).map(column => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(DETAIL_CATEGORY_NAMES).map(([mainKey, mainList], mainIdx) => {
            return Object.entries(mainList).map(([subKey, subList], subIdx) => {
              return Object.entries(subList).map(([detailKey, detail], detailIdx) => (
                <TableRow>
                  {subIdx === 0 && detailIdx === 0 && (
                    <TableCell rowSpan={getTotalLength(mainKey)}>{MAIN_CATEGORY[mainKey]}</TableCell>
                  )}

                  {detailIdx === 0 && (
                    <TableCell rowSpan={Object.keys(subList).length}>{SUB_CATEGORY[subKey]}</TableCell>
                  )}
                  <TableCell>{detail}</TableCell>
                </TableRow>
              ));
            });
          })}
        </TableBody>
      </Table>
      {/* DATA TABLE */}
      <RenderDataTable yearList={detailOpt.yearList} />
    </>
  );
}

const RenderDataTable = ({yearList}: {yearList: string[]}) => {
  return (
    <>
      {/*<Table*/}
      {/*  sx={{*/}
      {/*    border: '1px solid #000',*/}
      {/*    '& .MuiTableCell-root': {*/}
      {/*      borderColor: '#000',*/}
      {/*      borderRight: '1px solid #000',*/}
      {/*      textAlign: 'center',*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <TableHead>*/}
      {/*    <TableRow></TableRow>*/}
      {/*    <TableRow></TableRow>*/}
      {/*  </TableHead>*/}
      {/*  <TableBody>*/}
      {/*    <TableRow></TableRow>*/}
      {/*  </TableBody>*/}
      {/*</Table>*/}
    </>
  );
};

const COLUMNS_FOR_NAME = {
  mainCategory: '효능 및 성분별(1)',
  subCategory: '효능 및 성분별(2)',
  detailCategory: '효능 및 성분별(3)',
};

const COLUMNS = {
  medicalInstitutionsCtn: '처방기관수 (개소)',
  doctorsCtn: '처방의사수 (명)',
  patientsCtn: '환자수 (명)',
  prescriptionsCtn: '처방건수 (건)',
  prescriptionsAmount: '처방량 (개/정)',
};

const MAIN_CATEGORY = {
  analgesic: '진통제',
  antiAnxietyMedicine: '항불안제',
  hypnoticSedative: '최면진정제',
  anesthetic: '마취제',
  AppetiteSuppressant: '식욕억제제',
  coughMedicine: '진해제',
  antiepilepticDrugs: '항뇌전증제',
  ADHDMedicine: 'ADHD치료제',
  antidepressants: '항우울제',
};

const SUB_CATEGORY = {
  total: '소계',
  drugs: '마약',
  psychotropicDrugs: '항정신성의약품',
};

const getTotalLength = mainKey => {
  let totalLength = 0;
  Object.entries(DETAIL_CATEGORY_NAMES[mainKey]).forEach(([key, data]) => {
    totalLength += Object.keys(data).length;
  });
  return totalLength;
};

const DETAIL_CATEGORY_NAMES = {
  analgesic: {
    total: {
      total: '소계',
    },
    drugs: {
      total: '소계',
      dihydrocodeine: '디히드로코데인',
      morphine: '모르핀',
      oxycodone: '옥시코돈',
      tapentadol: '타펜타돌',
      pethidine: '페티딘',
      Hydromorphone: '히드로모르폰',
      hydrocodone: '히드로코돈',
      fentanyl: '펜타닐(주사제 외 제형)',
    },
    psychotropicDrugs: {
      total: '소계',
      nalbuphine: '날부핀',
      butorphanol: '부토르파놀',
      buprenorphine: '부프레노르핀',
      pentazocine: '펜타조신',
    },
  },
  antiAnxietyMedicine: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      diazepam: '디아제팜',
      lorazepam: '로라제팜',
      mexazolam: '멕사졸람',
      bromazepam: '브로마제팜',
      alprazolam: '알프라졸람',
      etizolam: '에티졸람',
      ethylLoflazepate: '에틸로플라제페이트',
      chlordiazepoxide: '클로르디아제폭시드',
      clobazam: '클로바잠',
      clotiazepam: '클로티아제팜',
    },
  },
  hypnoticSedative: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      midazolam: '미다졸람',
      eszopiclone: '에스조피클론',
      zolpidem: '졸피뎀',
      quazepam: '쿠아제팜',
      chloralhydrate: '클로랄히드레이트',
      triazolam: '트리아졸람',
      pentobarbital: '펜토바르비탈',
      flunitrazepam: '플루니트라제팜',
      flurazepam: '플루라제팜',
      zaleplon: '잘레플론',
    },
  },
  anesthetic: {
    total: {total: '소계'},
    drugs: {
      total: '소계',
      remifentanil: '레미펜타닐',
      sufentanil: '서펜타닐',
      alfenil: '알펜타닐',
      fentanyl: '펜타닐(주사제)',
    },
    psychotropicDrugs: {
      total: '소계',
      ketamine: '케타민',
      thiopental: '티오펜탈',
      propofol: '프로포폴',
      remimazolam: '레미마졸람(주사제)',
    },
  },
  AppetiteSuppressant: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      lorcaserin: '로카세린',
      mazindol: '마진돌',
      amfepramone: '암페프라몬',
      phendimetrazine: '펜디메트라진',
      phentermine: '펜터민',
    },
  },
  coughMedicine: {
    total: {total: '소계'},
    drugs: {
      total: '소계',
      codeine: '코데인',
    },
    psychotropicDrugs: {
      total: '소계',
      dextromethorphan: '덱스트로메토르판',
      zipeprol: '지페프롤',
    },
  },
  antiepilepticDrugs: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      clonazepam: '클로나제팜',
      phenobarbital: '페노바르비탈',
    },
  },
  ADHDMedicine: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      methylphenidate: '메틸페니데이트',
    },
  },
  antidepressants: {
    total: {total: '소계'},
    psychotropicDrugs: {
      total: '소계',
      esketamine: '에스케타민',
    },
  },
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
      analgesic: {
        total: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        drugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          dihydrocodeine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          morphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          oxycodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          tapentadol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pethidine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          Hydromorphone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          hydrocodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          fentanyl: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        psychotropicDrugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          nalbuphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          butorphanol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          buprenorphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pentazocine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
      },
      antiAnxietyMedicine: {
        total: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        psychotropicDrugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          nalbuphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          butorphanol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          buprenorphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pentazocine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
      },
      hypnoticSedative: {
        total: {
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
  },
  {
    id: 2,
    year: '2022',
    data: {
      analgesic: {
        total: {
          total: {
            medicalInstitutionsCtn: 12341242,
            doctorsCtn: 123325,
            patientsCtn: 12306120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        drugs: {
          total: {
            medicalInstitutionsCtn: 12342,
            doctorsCtn: 123325,
            patientsCtn: 12306120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          dihydrocodeine: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          morphine: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          oxycodone: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          tapentadol: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pethidine: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          Hydromorphone: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          hydrocodone: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          fentanyl: {
            medicalInstitutionsCtn: 123,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        psychotropicDrugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          nalbuphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          butorphanol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          buprenorphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pentazocine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
      },
      antiAnxietyMedicine: {
        total: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        drugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          dihydrocodeine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          morphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          oxycodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          tapentadol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pethidine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          Hydromorphone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          hydrocodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          fentanyl: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        psychotropicDrugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          nalbuphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          butorphanol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          buprenorphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pentazocine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
      },
      hypnoticSedative: {
        total: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        drugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          dihydrocodeine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          morphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          oxycodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          tapentadol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pethidine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          Hydromorphone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          hydrocodone: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          fentanyl: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
        psychotropicDrugs: {
          total: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          nalbuphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          butorphanol: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          buprenorphine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
          pentazocine: {
            medicalInstitutionsCtn: 41242,
            doctorsCtn: 108325,
            patientsCtn: 19906120,
            prescriptionsCtn: 103458692,
            prescriptionsAmount: 1894113909,
          },
        },
      },
    },
  },
];
