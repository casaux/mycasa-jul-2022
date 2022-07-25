(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{vIZi:function(t,e,r){"use strict";r.d(e,"e",(function(){return u})),r.d(e,"a",(function(){return d})),r.d(e,"d",(function(){return U})),r.d(e,"c",(function(){return f})),r.d(e,"b",(function(){return g})),r("2kYt");var i=r("EM62"),n=r("81ol"),o=r("vobO"),s=r("pJFc"),a=r("ke9K"),h=r("4e/d"),c=r("47ST"),b=r("q6bj"),l=r("42YS");let p=(()=>{class t{constructor(t,e,r,i,n,o){this.ssoReauthenticationService=t,this.stateService=e,this.errorStateService=r,this.errorNavigation=i,this.failableErrors=n,this.reauthErrors=o}handleError(t,e){return console.debug("Handling error inside common API error handler"),console.error(e),this.reauthErrors.includes(t.status)?(console.debug("this is an SSO error"),this.ssoReauthenticationService.reauthenticateAgain(),Object(c.a)(e)):(this.failableErrors.includes(t.status)&&(console.debug("this is a failable error"),400===t.status&&this.stateService.resetStore(),this.errorStateService.updateErrorResponse(t.error),this.errorStateService.addAPIErrorMessages(t.error),this.errorNavigation.resolveNavigation(b.a.Error)),Object(c.a)(e))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(l.f),i.Zb(l.c),i.Zb(a.f),i.Zb(b.h),i.Zb("FAILABLE ERRORS"),i.Zb("REAUTH ERRORS"))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(t,e,r,i,n){this.http=t,this.errorService=e,this.common=r,this.baseUrl=i,this.configQuery=n,this.baseUrl=`${this.configQuery.authHost}${this.baseUrl}`}confirmRedirectDestination(t){return this.http.post(`${this.baseUrl}/oauth/oauth20/authorize`,null,{headers:new o.d({params:t})}).pipe(Object(h.a)(t=>this.common.handleError(t,s.b.UnableToConfirmRedirectDestination)))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(o.b),i.Zb(a.f),i.Zb(p),i.Zb("ISAM AUTH BASE URL"),i.Zb(n.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,e,r,i){this.common=t,this.http=e,this.baseUrl=r,this.configQuery=i,this.baseUrl=`${this.configQuery.apiHost}${this.baseUrl}`}getRelyingPartyInfo(t){return this.http.get(`${this.baseUrl}/relyingparty/${t}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.n.UnableToGetRelyingPartyInfo)))}getListOfIdentityProviders(t,e){return this.http.get(`${this.baseUrl}/identityproviders/filter/${t}`,{params:e}).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToGetIdentityProviderInfo)))}authenticateIdpSelection(t){return console.debug("calling idpauthentications with ",t),this.http.post(`${this.baseUrl}/idpauthentications`,t).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToAuthenticateIDPSelection)))}confirmIdpSelectionAuthentication(t){return this.http.get(`${this.baseUrl}/idpauthentications/${t}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.InvalidIdpSelection)))}getRelyingPartyUserClaims(t,e){return this.http.get(`${this.baseUrl}/idpauthentications/${e}/rpauthentications/${t}/userclaims`).pipe(Object(h.a)(t=>this.common.handleError(t,s.n.UnableToGetRelyingPartyUserClaims)))}getAttributeProviderBusinessClaims(t,e){return this.http.get(`${this.baseUrl}/apauthentications/${e}/${t}/businessclaims`).pipe(Object(h.a)(t=>this.common.handleError(t,s.c.UnableToGetBusinessInfo)))}storeRelyingPartyConsent(t,e){return this.http.put(`${this.baseUrl}/rpauthentications/${t}/consent`,e).pipe(Object(h.a)(t=>this.common.handleError(t,s.n.UnableToStoreConsentWithExchange)))}confirmRelyingPartyConsentStore(t){return this.http.get(`${this.baseUrl}/rpauthentications/${t}/finalised`).pipe(Object(h.a)(t=>this.common.handleError(t,s.n.UnableToConfirmConsent)))}retrieveSpecificIdentityProvider(t){return this.http.get(`${this.baseUrl}/identityproviders/${t}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToGetSpecificIdentityProviderInfo)))}authenticateWithIdentityProvider(t){return this.http.post(`${this.baseUrl}/idpauthentications`,t).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToAuthenticateWithIdentityProvider)))}confirmIdentityProviderAuthentication(t){return this.http.get(`${this.baseUrl}/idpauthentications/${t}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToConfirmIdentityProviderAuthentication)))}requestIdentityProviderLocation(t){return this.http.post(t,null).pipe(Object(h.a)(t=>this.common.handleError(t,s.i.UnableToRetriveRedirectLocation)))}requestOutOfContextErrorInformation(t,e){return this.http.get(`${this.baseUrl}/application/rpauthentications/${t}/usermessages/errors/${e}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.f.UnableToRetrieveErrorInformation)))}getAttributeProviderDisplayName(t){return this.http.get(`${this.baseUrl}/attributeproviders/scope/${t}`).pipe(Object(h.a)(t=>this.common.handleError(t,s.n.UnableToGetRelyingPartyInfo)))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(p),i.Zb(o.b),i.Zb("EXCHANGE BASE URL"),i.Zb(n.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=r("ROBh");let U=(()=>{class t{constructor(t,e,r,i,n){this.common=t,this.http=e,this.ssoReauth=r,this.baseUrl=i,this.configQuery=n,this.baseUrl=`${this.configQuery.apiHost}${this.baseUrl}`}getInitialToken(){return this.http.get(`${this.baseUrl}/session`).pipe(Object(h.a)(t=>this.common.handleError(t,s.b.UnableToCreateInitialSession)))}sendAuthInformation(t,e,r){return this.http.post(`${this.baseUrl}/authentication`,{action:t,id:e,params:r}).pipe(Object(h.a)(t=>this.common.handleError(t,s.b.UnableToGenerateTokenAgainstRequest)))}getEscalatedToken(t){return this.http.post(`${this.baseUrl}/authorisation`,{nonce:t}).pipe(Object(h.a)(t=>this.common.handleError(t,s.b.UnableToEscalateToken)))}reestablishSsoSession(t){return this.http.post(`${this.baseUrl}/session-sso`,t,{observe:"response"}).pipe(Object(h.a)(t=>403!==t.status?this.common.handleError(t,s.b.UnableToGenerateSso):(console.debug("OH NO ITS SSO"),this.ssoReauth.reauthenticateAgain(),Object(m.a)(null))))}retrieveAttributeProviderDetails(t){return this.http.post(`${this.baseUrl}/attribute-provider`,{apAuthId:t},{observe:"response"}).pipe(Object(h.a)(t=>this.common.handleError(t,s.b.UnableToRetrieveAttributeProviderDetails)))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(p),i.Zb(o.b),i.Zb(l.f),i.Zb("ISAM BASE URL"),i.Zb(n.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{constructor(t,e,r,i){this.common=t,this.http=e,this.baseUrl=r,this.configQuery=i,this.baseUrl=`${this.configQuery.apiHost}${this.baseUrl}`}getLinkableDetails(t){return this.http.get(`${this.baseUrl}/integration/idp/linkable`,{params:t}).pipe(Object(h.a)(t=>this.common.handleError(t,s.j.UnableToGetLinkablePartyInformation)))}getLinkableUserProgress(t,e){return this.http.get(`${this.baseUrl}/integration/rp/${t}/progress`,{params:e}).pipe(Object(h.a)(t=>this.common.handleError(t,s.j.UnableToRetrieveProgress)))}retrieveLinkableUserClaims(t,e,r){return this.http.get(`${this.baseUrl}/idpauthentications/${e}/rpauthentications/${t}/userclaims`,{params:r}).pipe(Object(h.a)(t=>this.common.handleError(t,s.j.UnableToRetrieveUserClaims)))}provideLinkableConsent(t,e){return this.http.put(`${this.baseUrl}/link/${t}/consent`,e,{observe:"response"}).pipe(Object(h.a)(t=>this.common.handleError(t,s.j.UnableToProvideLinkableConsent)))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(p),i.Zb(o.b),i.Zb("INTEGRATION BASE URL"),i.Zb(n.b))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),g=(()=>{class t{constructor(t,e){this.http=t,this.common=e}getRelyingPartyRedirectLocation(t){return this.http.post(t.toString(),null).pipe(Object(h.a)(t=>this.common.handleError(t,s.h.UnableToRetrieveRedirectLocation)))}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(o.b),i.Zb(p))},t.\u0275prov=i.Lb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);