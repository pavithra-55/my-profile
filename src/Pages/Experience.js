import React from "react";
import './css/Experience.css';
import { Container, } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
    const workIcon = <i className="bi bi-briefcase-fill"></i>;
    return (
        <section className="experienceSection">
            <Container>
               <h3 className="mb-2 text-center">Experience</h3> 
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: '#dde3ea', color: 'var(--text)',border:'4px solid var(--accent)',borderRadius:'12px' }}
                        date="sep 2024 - July 2025 "
                        iconStyle={{ background: '#5bc0be', color: '#dde3ea',display:'flex',alignItems:'center',justifyContent:'center' }}
                        contentArrowStyle={{ borderRight: '30px solid  var(--accent)' }}
                        icon={workIcon}
                    >
                        <div className="textColor">
                            <h3 className="vertical-timeline-element-title">Co-Founder @Essen Foods</h3>
                            <h4 className="vertical-timeline-element-subtitle">Home-Based Food Delivery Startup</h4>
                            <p>Managed customer and delivery items manually.</p>
                            <p>Learned real-world problem-solving through direct customer feedback and operations.</p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work "
                        contentStyle={{ background: '#dde3ea', color: 'var(--text)',border:'4px solid var(--accent)',borderRadius:'12px' }}
                        date="sep 2024 - July 2025 "
                        iconStyle={{ background: '#5bc0be', color: '#dde3ea',display:'flex',alignItems:'center',justifyContent:'center' }}
                        contentArrowStyle={{ borderRight: '30px solid  var(--accent)' }}
                        icon={workIcon}
                    >
                        <div className="textColor">
                            <h3 className="vertical-timeline-element-title">Software Engineer @Pragis</h3>
                            <h4 className="vertical-timeline-element-subtitle"></h4>
                            <p>Built and maintained full-stack websites using Laravel + SQL basics.</p>
                            <p>Collaborated with clients to gather requirements and deliver features.</p>
                        </div>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Container>
            
            
        </section>
    );
}