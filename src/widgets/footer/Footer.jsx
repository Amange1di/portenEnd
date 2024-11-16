import { Link, NavLink } from "react-router-dom"
import "./footer.scss"
import { useTranslation } from "react-i18next";
const dataCategories = [

  { name: "Watches", path: "/" },
  { name: "Bracelets", path: "/" },
  { name: "Belts", path: "/" },
  { name: "Jewelry", path: "/" },
  { name: "Cufflinks", path: "/" },

]
const Footer = () => {
  const { t  } = useTranslation(); 

  return (
    <div className="">
      <div className="footer ">

        <div className="footer_text">
          <div className="footer_store">
          <h3>{t("About Store")}</h3>
          <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse.")}</p>
      </div>
          <div className="footer_categories">
          <h3>{t("Categories")}</h3>
            <div>
              {dataCategories.map((page) => (
                <Link key={page.name} to={page.path} className="link">
                  {t(page.name)}
                </Link>
              ))}
            </div>
          </div>
          <div className="footer_mailing">
          <h3>{t("Newsletter")}</h3>
          <p>{t("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.")}</p>
        </div>
        </div>
      </div>
      <div className="footer_end">
      <p>{t("© 2020 All rights reserved")}</p>
      <NavLink className="figma">{t("Made by Figma.info")}</NavLink>
      </div>
    </div>
  )
}

export default Footer