import { Request, Response } from "express"

const ApiNodeCorreios = require("node-correios")
const correios = new ApiNodeCorreios()


export const postCeps = async (req: Request, res: Response) => {
    const { cep } = req.body
    correios.consultaCEP({ cep }).then(result => {
        return res.json(result)
    }).catch(error => {
        return res.json(error)
    })
}

export const buscaCep = async (req: Request, res: Response) => {
    const { cep } = req.body

}

(async () => {
  const browser = await puppeteer.launch( { headless: false});
  const page = await browser.newPage();
  await page.goto('https://www2.correios.com.br/sistemas/buscacep/buscaEndereco.cfm');

  await page.type('[id="cep"]', " 07051000")

  await page.click('[type="submit"]')

  // await browser.close();
})(); 