'use client';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import {FormEvent, useState} from 'react';
import styles from './statusPage.module.css';
import styled from '@emotion/styled';
import ByMedicalInstitutionType from '@/app/statistics/_components/ByMedicalInstitutionType';
import ByGenderAndMedicalInstitutionType from '@/app/statistics/_components/ByGenderAndMedicalInstitutionType';
import ByAgeGroup from '@/app/statistics/_components/ByAgeGroup';
import ByEfficacy from '@/app/statistics/_components/ByEfficacy';

export default function Page() {
  const [isSummary, setIsSummary] = useState(true);
  const [summaryOpt, setSummaryOpt] = useState({
    searchType: 'summary',
    year: '2024',
  });
  const [detailOpt, setDetailOpt] = useState({
    indicator: '100201',
    yearList: ['2023'],
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (summaryOpt.searchType === 'summary') {
      console.log('summaryOpt', summaryOpt);
      setIsSummary(true);
    } else {
      console.log('detailOpt', detailOpt);
      setIsSummary(false);
    }
  };

  const handleChange = (event: SelectChangeEvent<typeof detailOpt>) => {
    const {
      target: {value},
    } = event;
    setDetailOpt(prev => {
      return {...prev, yearList: [...value]};
    });
    console.log(value);
    // console.log(detailOpt);
  };

  const YEAR_LIST = ['2023', '2022', '2021', '2020', '2019'];

  return (
    <>
      {/* search form */}
      <div className={styles.search}>
        <span className={styles.title}>의료용 마약류 조제 투약 현황</span>
        <form onSubmit={handleSubmit}>
          <div className={styles.form}>
            <RadioGroup
              defaultValue='summary'
              name='summary'
              onChange={e => setSummaryOpt({...summaryOpt, searchType: e.target.value})}
              sx={{
                flexDirection: 'row',
                gap: '1rem',
              }}
            >
              <FormControlLabel value='summary' control={<Radio />} label='요약' />
              <Styled.Select
                displayEmpty
                id='select-year'
                label='year'
                defaultValue={YEAR_LIST[0]}
                onChange={e => setSummaryOpt({...summaryOpt, year: e.target.value})}
              >
                {YEAR_LIST.map(year => (
                  <MenuItem key={year} value={year}>
                    {year}
                  </MenuItem>
                ))}
              </Styled.Select>
              <FormControlLabel value='detail' control={<Radio />} label='지표' />
              <Styled.Select
                displayEmpty
                id='select-board'
                label='board'
                defaultValue={'100201'}
                onChange={e => setDetailOpt({...detailOpt, indicator: e.target.value})}
              >
                <MenuItem value='100201'>의료기관 종별 의료용 마약류 처방 현황</MenuItem>
                <MenuItem value='100202'>환자 성별 및 의료기관 종별 의료용 마약류 처방 현황</MenuItem>
                <MenuItem value='100203'>환자 연령대별 의료용 마약류 처방 현황</MenuItem>
                <MenuItem value='100204'>의료용 마약류 효능별·성분별 처방 현황</MenuItem>
              </Styled.Select>
              <Styled.Select
                id='multiple-checkbox'
                multiple
                value={detailOpt.yearList}
                input={<OutlinedInput label='Tag' />}
                onChange={handleChange}
                renderValue={value => value.join(', ')}
              >
                {YEAR_LIST.map((year, i) => (
                  <MenuItem key={i} value={year}>
                    <Checkbox checked={detailOpt.yearList?.indexOf(year) > -1} />
                    <ListItemText primary={year} />
                  </MenuItem>
                ))}
              </Styled.Select>
            </RadioGroup>
            <button type={'submit'}>검색</button>
          </div>
        </form>
      </div>
      {isSummary ? (
        <div>Summary</div>
      ) : (
        <>
          {/* check year */}
          <FormControl component='fieldset'>
            <FormGroup aria-label='position' row>
              {YEAR_LIST.map(year => (
                <FormControlLabel
                  key={year}
                  value={year}
                  control={
                    <Checkbox
                      checked={detailOpt.yearList?.indexOf(year) > -1}
                      onChange={e => {
                        setDetailOpt(prev => {
                          if (prev.yearList.includes(year)) {
                            return {...prev, yearList: [...prev.yearList.filter(item => item !== year)]};
                          } else {
                            return {...prev, yearList: [...prev.yearList, year]};
                          }
                        });
                        console.log();
                      }}
                    />
                  }
                  label={year}
                  labelPlacement='end'
                />
              ))}
            </FormGroup>
          </FormControl>
          {/* result */}
          {detailOpt.indicator === '100201' && <ByMedicalInstitutionType detailOpt={detailOpt} />}
          {detailOpt.indicator === '100202' && <ByGenderAndMedicalInstitutionType detailOpt={detailOpt} />}
          {detailOpt.indicator === '100203' && <ByAgeGroup detailOpt={detailOpt} />}
          {detailOpt.indicator === '100204' && <ByEfficacy detailOpt={detailOpt} />}
        </>
      )}
    </>
  );
}

const Styled = {
  Select: styled(Select)({
    '.MuiOutlinedInput-notchedOutline': {
      top: 0,
      '& legend': {
        display: 'none',
      },
    },
  }),
};
