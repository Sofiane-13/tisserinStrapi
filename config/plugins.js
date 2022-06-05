module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
    },
  },
  email: {
    config: {
      provider: 'sendmail',
      providerOptions: {
        dkim: {
          privateKey: 'MIICXQIBAAKBgQDbmBljcTfoq7wcPcjk+uFMdMvx02V1/g/64trhbT9MyHvxt4hrHPMNj/wub146KeKnVKP+nMz11Ky1Pe8u76i1Pc2P0h4YBM3NZX4xYWYY4xTIq11wMl3yUV7Q6/gN0uJlUlGqIhcXVSBtiddoMBF8Os41VYMuhaLbDL8u1bZfjwIDAQABAoGBANrWPd7i8oOVuZYvYGgJOMM31hK9x+wJb6VntBdZBu8fEJ23eGS+ad2HMxqXc8DlAvIcoH3Zh0wpUKAiA52zylxS5J7k3pp9sYfCec5Cy6KaLM2YH1Mk1Xz4zDRkICgVZleHujQKz4JmMGloCT9Jzd1hZhNpEUUKPsmtmkrh3vxpAkEA+jU9GGMFyicoaUeuPk+FMWhtyKBJ74lPgFnjTo81GEDxeBsOIgBFyi2GQe6Cm389p7BnWoLYZp+vNdalXxW2vQJBAOCtcH9oUCHCvztGX1cGVAPlNxdaeUSglULRxXbKWzjD4y//RZgh5hJLDCffFaHArTMU8WH5KLSUzOkViohnajsCQGajWECcvk9C6OznHq8o57Zw5DgcqLe+WAKK3Rfo3xrn6SYf0xhXjEl3i0+Yi7NF6wDS+FLEwgi3EKTBPG1Y9vECQQCW0NWrMIJZpzhmuZ5V9FGBK+QHMRwmDQUkjVtXmg4R1Kw0E87LiDXAIdBPE1iZ85RPrcc6VN4WGaxS6brMRV7xAkBLi1xJIK9IZIa4SO5V4A5IDi2p/TXNPc4cbbJkVsUQpR1uCYPbyOYVM5+agvYiU31+yy5FRiTvnm9y2Fdlacur',
          keySelector: 'google._domainkey.gmail', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
        },
      },
      settings: {
        defaultFrom: 'tisserinmanoeuvre@gmail.com',
        defaultReplyTo: 'tisserinmanoeuvre@gmail.com',
      },
    },
  },
});