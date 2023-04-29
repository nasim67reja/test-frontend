import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import dropdown from '../images/dropdown.png'
import cross from '../images/cross.png'
import Image from 'next/image'
import Manager from '../components/Manager'
import NodeJS from '../components/NodeJS'
import ReactFrontend from '../components/ReactFrontend'
import Designer from '../components/Designer'
import { useState } from 'react'

const Carrer = () => {
  const [carrer, setCarrer] = useState('none')
  return (
    <>
      <Navbar />
      <div className="container home-top-margin">
        <div className="help-container">
          <h1>Join the team</h1>
          <div className="help-detail-title carrer-title">
            <div
              className="carrer-flex"
              onClick={() => {
                if (
                  carrer === 'none' ||
                  carrer === 'node' ||
                  carrer === 'frontend' ||
                  carrer === 'designer'
                ) {
                  setCarrer('manager')
                  document.querySelector('.carrer-manager').style.display =
                    'block'
                  document.querySelector('.carrer-node').style.display = 'none'
                  document.querySelector('.carrer-frontend').style.display =
                    'none'
                  document.querySelector('.carrer-designer').style.display =
                    'none'
                } else {
                  document.querySelector('.carrer-manager').style.display =
                    'none'
                  setCarrer('none')
                }
              }}
            >
              <h4>Technical Lead (Engineering Manager)</h4>
              {carrer === 'manager' ? (
                <Image src={cross} alt="icon_image" height={14} width={14} />
              ) : (
                <Image src={dropdown} alt="icon_image" height={11} width={18} />
              )}
            </div>
            <div className="carrer carrer-manager">
              <Manager />
            </div>
          </div>
          <div className="help-detail-title carrer-title">
            <div
              className="carrer-flex"
              onClick={() => {
                if (
                  carrer === 'none' ||
                  carrer === 'manager' ||
                  carrer === 'frontend' ||
                  carrer === 'designer'
                ) {
                  setCarrer('node')
                  document.querySelector('.carrer-node').style.display = 'block'
                  document.querySelector('.carrer-manager').style.display =
                    'none'
                  document.querySelector('.carrer-frontend').style.display =
                    'none'
                  document.querySelector('.carrer-designer').style.display =
                    'none'
                } else {
                  document.querySelector('.carrer-node').style.display = 'none'
                  setCarrer('none')
                }
              }}
            >
              <h4>Sr. Software Engineer (NodeJS)</h4>
              {carrer === 'node' ? (
                <Image src={cross} alt="icon_image" height={14} width={14} />
              ) : (
                <Image src={dropdown} alt="icon_image" height={11} width={18} />
              )}
            </div>
            <div className="carrer carrer-node">
              <NodeJS />
            </div>
          </div>
          <div className="help-detail-title carrer-title">
            <div
              className="carrer-flex"
              onClick={() => {
                if (
                  carrer === 'none' ||
                  carrer === 'manager' ||
                  carrer === 'node' ||
                  carrer === 'designer'
                ) {
                  setCarrer('frontend')
                  document.querySelector('.carrer-frontend').style.display =
                    'block'
                  document.querySelector('.carrer-manager').style.display =
                    'none'
                  document.querySelector('.carrer-node').style.display = 'none'
                  document.querySelector('.carrer-designer').style.display =
                    'none'
                } else {
                  document.querySelector('.carrer-frontend').style.display =
                    'none'
                  setCarrer('none')
                }
              }}
            >
              <h4>Sr. Software Engineer (React Frontend)</h4>
              {carrer === 'frontend' ? (
                <Image src={cross} alt="icon_image" height={14} width={14} />
              ) : (
                <Image src={dropdown} alt="icon_image" height={11} width={18} />
              )}
            </div>
            <div className="carrer carrer-frontend">
              <ReactFrontend />
            </div>
          </div>
          <div className="help-detail-title carrer-title">
            <div
              className="carrer-flex"
              onClick={() => {
                if (
                  carrer === 'none' ||
                  carrer === 'manager' ||
                  carrer === 'node' ||
                  carrer === 'frontend'
                ) {
                  setCarrer('designer')
                  document.querySelector('.carrer-designer').style.display =
                    'block'
                  document.querySelector('.carrer-manager').style.display =
                    'none'
                  document.querySelector('.carrer-node').style.display = 'none'
                  document.querySelector('.carrer-frontend').style.display =
                    'none'
                } else {
                  document.querySelector('.carrer-designer').style.display =
                    'none'
                  setCarrer('none')
                }
              }}
            >
              <h4>Senior Product Designer</h4>
              {carrer === 'designer' ? (
                <Image src={cross} alt="icon_image" height={14} width={14} />
              ) : (
                <Image src={dropdown} alt="icon_image" height={11} width={18} />
              )}
            </div>
            <div className="carrer carrer-designer">
              <Designer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Carrer
