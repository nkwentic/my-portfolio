import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Core Compentence</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Network Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in designing, deploying, and managing secure network infrastructures.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in ensuring high availability and performance</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in configuring and optimizing firewalls (Palo Alto, Cisco), VPNs, and load balancers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skilled in troubleshooting complex network issues, improving network resilience.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Cloud Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skilled in cloud architecture design and deployment across AWS and Azure platforms.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in automating infrastructure using Terraform and CloudFormation.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in implementing cloud security best practices and policies.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong experience with cloud networking, storage, and compute services.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>DevOps Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proficient in designing and automating CI/CD pipelines using Jenkins, GitLab, and Docker.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Expertise in infrastructure provisioning with Ansible, Terraform, and Kubernetes.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Skilled in container orchestration, monitoring, and performance optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Strong focus on collaboration, security integration, and continuous improvement practices.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
