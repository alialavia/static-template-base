var self = module.exports = {
    detail_summary: (title, desc) =>
        `  <details open>
    <summary>${title}</summary>
    ${desc}
  </details>`,
    edu: (year, school, title, desc) => self.detail_summary(`${year} - ${school} - ${title}`, desc),
    work: (year, company, title, desc) => self.detail_summary(`${year} - ${company} - ${title}`, self.ul(...desc)),
    li: (item) => `<li>${item}</li>`,
    ul: (...items) => `<ul>${items.map(self.li).join('')}</ul>`

};