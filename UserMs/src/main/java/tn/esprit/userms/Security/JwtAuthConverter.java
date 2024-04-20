package tn.esprit.userms.Security;

import org.springframework.core.convert.converter.Converter;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;
import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Component
public  class  JwtAuthConverter implements Converter<Jwt,AbstractAuthenticationToken> {
    private final JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter=new JwtGrantedAuthoritiesConverter();


    @Override
    public AbstractAuthenticationToken convert(Jwt jwt) {
        Collection<GrantedAuthority> authorities = Stream.concat(
                jwtGrantedAuthoritiesConverter.convert(jwt).stream(),
                extractResourceRoles(jwt).stream()
        ).collect(Collectors.toSet());
        return new JwtAuthenticationToken(jwt, authorities,jwt.getClaim("preferred_username"));
    }

    private Collection<GrantedAuthority> extractResourceRoles(Jwt jwt) {
        Map<String, Object> realmAccess = jwt.getClaimAsMap("realm_access");
        Collection<String> realmRoles = (Collection<String>) realmAccess.getOrDefault("roles", Collections.emptyList());

        Map<String, Object> resourceAccess = jwt.getClaimAsMap("resource_access");
        // Cast resourceAccess to Map first:
        Map<String, Object> resourceAccessMap = (Map<String, Object>) resourceAccess.getOrDefault("SpringBoot-Client", Collections.emptyMap());
        Collection<String> resourceRoles = (Collection<String>) resourceAccessMap.getOrDefault("roles", Collections.emptyList());

        return Stream.concat(realmRoles.stream(), resourceRoles.stream())
                .map(role -> new SimpleGrantedAuthority(role))
                .collect(Collectors.toSet());
    }


}
/*
JWT :
{
  "exp": 1701102420,
  "iat": 1701102120,
  "jti": "80af2544-ada8-4471-bea1-142a7f5fdf9f",
  "iss": "http://localhost:8080/realms/ebank-realm",
  "aud": "account",
  "sub": "9299e9e4-6cdd-4907-89b5-813d2c6a8c36",
  "typ": "Bearer",
  "azp": "customer-client",
  "session_state": "e085be18-fca8-46bd-b746-80f024ffa535",
  "acr": "1",
  "allowed-origins": [
    "/*"
  ],
  "realm_access": {
    "roles": [
      "offline_access",
      "default-roles-ebank-realm",
      "uma_authorization",
      "ADMIN",
      "USER"
    ]
  },
  "resource_access": {
    "account": {
      "roles": [
        "manage-account",
        "manage-account-links",
        "view-profile"
      ]
    }
  },
  "scope": "email profile",
  "sid": "e085be18-fca8-46bd-b746-80f024ffa535",
  "email_verified": false,
  "name": "Mohamed YOUSSFI",
  "preferred_username": "user1",
  "given_name": "Mohamed",
  "family_name": "YOUSSFI",
  "email": "user1@gmail.com"
}
 */
