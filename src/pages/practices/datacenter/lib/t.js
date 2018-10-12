(function(e, t) {
  function F(e, t, n, r, i, s) {
    var o = i.realSize ? i.realSize : i
    t = t || '', t = String(t), e.font = n, e.fillStyle = r, e.strokeStyle = 'gray',
    e.textBaseline = 'middle', e.textAlign = 'center'
    var u = t.split('\n'),
      a = u.length,
      f = o.height / a,
      l = (i.height - o.height) / 2
    for (var c = 0; c < a; c++) {
      var h = y.getTextSize(n, u[c]).width,
        p = i.height,
        d = h / 2
      s == 'right' ? (d = i.width - h / 2, e.textAlign = 'center') : s == 'left' ? (d = h / 2, e.textAlign = 'center', e.textBaseline = 'middle') : s == 'center' && (d = i.width / 2), e.strokeText(u[c], d, f / 2 + c * f + l), e.fillText(u[c], d, f / 2 + c * f + l)
    }
  }

  function q(e, t) {
    var n = 0
    if (e.shadowMatrix) {
      for (var r = 0, i = t.size(); r < i; r++) {
        var s = t.get(r)
        s.refreshShadowUniforms(e, n) && n++
      }
    }
  }

  function R(e, t) {
    var n = 0
    if (e.pShadowMap) {
      for (var r = 0, i = t.size(); r < i; r++) {
        var s = t.get(r)
        s.refreshUniformsPointShadow(e, n) && n++
      }
    }
  }

  function U(e, t, n) {
    t._modelViewMatrix || (t._modelViewMatrix = new l()), n.uniformMatrix4fv(e.modelViewMatrix, !1, t._modelViewMatrix.elements), e.normalMatrix && n.uniformMatrix3fv(e.normalMatrix, !1, t._normalMatrix.elements)
  }

  function z(e, t, n) {
    var r
    return e === 'fragment' ? r = n.createShader(n.FRAGMENT_SHADER) : e === 'vertex' && (r = n.createShader(n.VERTEX_SHADER)), n.shaderSource(r, t), n.compileShader(r), n.getShaderParameter(r, n.COMPILE_STATUS) ? r : (console.log(n.getShaderInfoLog(r)), console.error(t), null)
  }

  function W(e, t) {
    e.ambientLightColor.value = t.ambient, e.directionalLightColor.value = t.directional.colors, e.directionalLightDirection.value = t.directional.positions, e.pointLightColor.value = t.point.colors, e.pointLightPosition.value = t.point.positions, e.pointLightDistance.value = t.point.distances, e.spotLightColor.value = t.spot.colors, e.spotLightPosition.value = t.spot.positions, e.spotLightDistance.value = t.spot.distances, e.spotLightDirection.value = t.spot.directions, e.spotLightAngleCos.value = t.spot.anglesCos, e.spotLightExponent.value = t.spot.exponents, e.hemisphereLightSkyColor.value = t.hemi.skyColors, e.hemisphereLightGroundColor.value = t.hemi.groundColors, e.hemisphereLightDirection.value = t.hemi.positions
  }

  function X(e, t, n, r) {
    e[t] = n.r * r, e[t + 1] = n.g * r, e[t + 2] = n.b * r
  }

  function V(e, t, n, r) {
    e[t] = n.r * n.r * r, e[t + 1] = n.g * n.g * r, e[t + 2] = n.b * n.b * r
  }

  function K(e) {
    var t = e
    P.isNaN(t._renderInterval) && (t._renderInterval = 10), t.__timeOutFunc || (t.__timeOutFunc = function() {
      requestAnimationFrame(t.__timeOutFunc), t.render()
    }), setTimeout(t.__timeOutFunc, t._renderInterval)
  }

  function tt(e, t, n) {
    e != null && (typeof e === 'number' ? this.fromNumber(e, t, n) : t == null && typeof e !== 'string' ? this.fromString(e, 256) : this.fromString(e, t))
  }

  function nt() {
    return new tt(null)
  }

  function rt(e, t, n, r, i, s) {
    while (--s >= 0) {
      var o = t * this[e++] + n[r] + i
      i = Math.floor(o / 67108864), n[r++] = o & 67108863
    }
    return i
  }

  function it(e, t, n, r, i, s) {
    var o = t & 32767,
      u = t >> 15
    while (--s >= 0) {
      var a = this[e] & 32767,
        f = this[e++] >> 15,
        l = u * a + f * o
      a = o * a + ((l & 32767) << 15) + n[r] + (i & 1073741823), i = (a >>> 30) + (l >>> 15) + u * f + (i >>> 30), n[r++] = a & 1073741823
    }
    return i
  }

  function st(e, t, n, r, i, s) {
    var o = t & 16383,
      u = t >> 14
    while (--s >= 0) {
      var a = this[e] & 16383,
        f = this[e++] >> 14,
        l = u * a + f * o
      a = o * a + ((l & 16383) << 14) + n[r] + i, i = (a >> 28) + (l >> 14) + u * f, n[r++] = a & 268435455
    }
    return i
  }

  function ct(e) {
    return ut.charAt(e)
  }

  function ht(e, t) {
    var n = at[e.charCodeAt(t)]
    return n == null ? -1 : n
  }

  function pt(e) {
    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t]
    e.t = this.t, e.s = this.s
  }

  function dt(e) {
    this.t = 1, this.s = e < 0 ? -1 : 0, e > 0 ? this[0] = e : e < -1 ? this[0] = e + DV : this.t = 0
  }

  function vt(e) {
    var t = nt()
    return t.fromInt(e), t
  }

  function mt(e, t) {
    var n
    if (t == 16) n = 4
    else if (t == 8) n = 3
    else if (t == 256) n = 8
    else if (t == 2) n = 1
    else if (t == 32) n = 5
    else {
      if (t != 4) {
        this.fromRadix(e, t)
        return
      }
      n = 2
    }
    this.t = 0, this.s = 0
    var r = e.length,
      i = !1,
      s = 0
    while (--r >= 0) {
      var o = n == 8 ? e[r] & 255 : ht(e, r)
      if (o < 0) {
        e.charAt(r) == '-' && (i = !0)
        continue
      }
      i = !1, s == 0 ? this[this.t++] = o : s + n > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - s) - 1) << s, this[this.t++] = o >> this.DB - s) : this[this.t - 1] |= o << s, s += n, s >= this.DB && (s -= this.DB)
    }
    n == 8 && (e[0] & 128) != 0 && (this.s = -1, s > 0 && (this[this.t - 1] |= (1 << this.DB - s) - 1 << s)), this.clamp(), i && tt.ZERO.subTo(this, this)
  }

  function gt() {
    var e = this.s & this.DM
    while (this.t > 0 && this[this.t - 1] == e) --this.t
  }

  function yt(e) {
    if (this.s < 0) return '-' + this.negate().toString(e)
    var t
    if (e == 16) t = 4
    else if (e == 8) t = 3
    else if (e == 2) t = 1
    else if (e == 32) t = 5
    else {
      if (e != 4) return this.toRadix(e)
      t = 2
    }
    var n = (1 << t) - 1,
      r, i = !1,
      s = '',
      o = this.t,
      u = this.DB - o * this.DB % t
    if (o-- > 0) {
      u < this.DB && (r = this[o] >> u) > 0 && (i = !0, s = ct(r))
      while (o >= 0) u < t ? (r = (this[o] & (1 << u) - 1) << t - u, r |= this[--o] >> (u += this.DB - t)) : (r = this[o] >> (u -= t) & n, u <= 0 && (u += this.DB, --o)), r > 0 && (i = !0), i && (s += ct(r))
    }
    return i ? s : '0'
  }

  function bt() {
    var e = nt()
    return tt.ZERO.subTo(this, e), e
  }

  function wt() {
    return this.s < 0 ? this.negate() : this
  }

  function Et(e) {
    var t = this.s - e.s
    if (t != 0) return t
    var n = this.t
    t = n - e.t
    if (t != 0) return t
    while (--n >= 0) {
      if ((t = this[n] - e[n]) != 0) return t
    }
    return 0
  }

  function St(e) {
    var t = 1,
      n
    return (n = e >>> 16) != 0 && (e = n, t += 16), (n = e >> 8) != 0 && (e = n, t += 8), (n = e >> 4) != 0 && (e = n, t += 4), (n = e >> 2) != 0 && (e = n, t += 2), (n = e >> 1) != 0 && (e = n, t += 1), t
  }

  function xt() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + St(this[this.t - 1] ^ this.s & this.DM)
  }

  function Tt(e, t) {
    var n
    for (n = this.t - 1; n >= 0; --n) t[n + e] = this[n]
    for (n = e - 1; n >= 0; --n) t[n] = 0
    t.t = this.t + e, t.s = this.s
  }

  function Nt(e, t) {
    for (var n = e; n < this.t; ++n) t[n - e] = this[n]
    t.t = Math.max(this.t - e, 0), t.s = this.s
  }

  function Ct(e, t) {
    var n = e % this.DB,
      r = this.DB - n,
      i = (1 << r) - 1,
      s = Math.floor(e / this.DB),
      o = this.s << n & this.DM,
      u
    for (u = this.t - 1; u >= 0; --u) t[u + s + 1] = this[u] >> r | o, o = (this[u] & i) << n
    for (u = s - 1; u >= 0; --u) t[u] = 0
    t[s] = o, t.t = this.t + s + 1, t.s = this.s, t.clamp()
  }

  function kt(e, t) {
    t.s = this.s
    var n = Math.floor(e / this.DB)
    if (n >= this.t) {
      t.t = 0
      return
    }
    var r = e % this.DB,
      i = this.DB - r,
      s = (1 << r) - 1
    t[0] = this[n] >> r
    for (var o = n + 1; o < this.t; ++o) t[o - n - 1] |= (this[o] & s) << i, t[o - n] = this[o] >> r
    r > 0 && (t[this.t - n - 1] |= (this.s & s) << i), t.t = this.t - n, t.clamp()
  }

  function Lt(e, t) {
    var n = 0,
      r = 0,
      i = Math.min(e.t, this.t)
    while (n < i) r += this[n] - e[n], t[n++] = r & this.DM, r >>= this.DB
    if (e.t < this.t) {
      r -= e.s
      while (n < this.t) r += this[n], t[n++] = r & this.DM, r >>= this.DB
      r += this.s
    } else {
      r += this.s
      while (n < e.t) r -= e[n], t[n++] = r & this.DM, r >>= this.DB
      r -= e.s
    }
    t.s = r < 0 ? -1 : 0, r < -1 ? t[n++] = this.DV + r : r > 0 && (t[n++] = r), t.t = n, t.clamp()
  }

  function At(e, t) {
    var n = this.abs(),
      r = e.abs(),
      i = n.t
    t.t = i + r.t
    while (--i >= 0) t[i] = 0
    for (i = 0; i < r.t; ++i) t[i + n.t] = n.am(0, r[i], t, i, 0, n.t)
    t.s = 0, t.clamp(), this.s != e.s && tt.ZERO.subTo(t, t)
  }

  function Ot(e) {
    var t = this.abs(),
      n = e.t = 2 * t.t
    while (--n >= 0) e[n] = 0
    for (n = 0; n < t.t - 1; ++n) {
      var r = t.am(n, t[n], e, 2 * n, 0, 1);
      (e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, r, t.t - n - 1)) >= t.DV && (e[n + t.t] -= t.DV, e[n + t.t + 1] = 1)
    }
    e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1)), e.s = 0, e.clamp()
  }

  function Mt(e, t, n) {
    var r = e.abs()
    if (r.t <= 0) return
    var i = this.abs()
    if (i.t < r.t) {
      t != null && t.fromInt(0), n != null && this.copyTo(n)
      return
    }
    n == null && (n = nt())
    var s = nt(),
      o = this.s,
      u = e.s,
      a = this.DB - St(r[r.t - 1])
    a > 0 ? (r.lShiftTo(a, s), i.lShiftTo(a, n)) : (r.copyTo(s), i.copyTo(n))
    var f = s.t,
      l = s[f - 1]
    if (l == 0) return
    var c = l * (1 << this.F1) + (f > 1 ? s[f - 2] >> this.F2 : 0),
      h = this.FV / c,
      p = (1 << this.F1) / c,
      d = 1 << this.F2,
      v = n.t,
      m = v - f,
      g = t == null ? nt() : t
    s.dlShiftTo(m, g), n.compareTo(g) >= 0 && (n[n.t++] = 1, n.subTo(g, n)), tt.ONE.dlShiftTo(f, g), g.subTo(s, s)
    while (s.t < f) s[s.t++] = 0
    while (--m >= 0) {
      var y = n[--v] == l ? this.DM : Math.floor(n[v] * h + (n[v - 1] + d) * p)
      if ((n[v] += s.am(0, y, n, m, 0, f)) < y) {
        s.dlShiftTo(m, g), n.subTo(g, n)
        while (n[v] < --y) n.subTo(g, n)
      }
    }
    t != null && (n.drShiftTo(f, t), o != u && tt.ZERO.subTo(t, t)), n.t = f, n.clamp(), a > 0 && n.rShiftTo(a, n), o < 0 && tt.ZERO.subTo(n, n)
  }

  function _t(e) {
    var t = nt()
    return this.abs().divRemTo(e, null, t), this.s < 0 && t.compareTo(tt.ZERO) > 0 && e.subTo(t, t), t
  }

  function Dt(e) {
    this.m = e
  }

  function Pt(e) {
    return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
  }

  function Ht(e) {
    return e
  }

  function Bt(e) {
    e.divRemTo(this.m, null, e)
  }

  function jt(e, t, n) {
    e.multiplyTo(t, n), this.reduce(n)
  }

  function Ft(e, t) {
    e.squareTo(t), this.reduce(t)
  }

  function It() {
    if (this.t < 1) return 0
    var e = this[0]
    if ((e & 1) == 0) return 0
    var t = e & 3
    return t = t * (2 - (e & 15) * t) & 15, t = t * (2 - (e & 255) * t) & 255, t = t * (2 - ((e & 65535) * t & 65535)) & 65535, t = t * (2 - e * t % this.DV) % this.DV, t > 0 ? this.DV - t : -t
  }

  function qt(e) {
    this.m = e, this.mp = e.invDigit(), this.mpl = this.mp & 32767, this.mph = this.mp >> 15, this.um = (1 << e.DB - 15) - 1, this.mt2 = 2 * e.t
  }

  function Rt(e) {
    var t = nt()
    return e.abs().dlShiftTo(this.m.t, t), t.divRemTo(this.m, null, t), e.s < 0 && t.compareTo(tt.ZERO) > 0 && this.m.subTo(t, t), t
  }

  function Ut(e) {
    var t = nt()
    return e.copyTo(t), this.reduce(t), t
  }

  function zt(e) {
    while (e.t <= this.mt2) e[e.t++] = 0
    for (var t = 0; t < this.m.t; ++t) {
      var n = e[t] & 32767,
        r = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM
      n = t + this.m.t, e[n] += this.m.am(0, r, e, t, 0, this.m.t)
      while (e[n] >= e.DV) e[n] -= e.DV, e[++n]++
    }
    e.clamp(), e.drShiftTo(this.m.t, e), e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
  }

  function Wt(e, t) {
    e.squareTo(t), this.reduce(t)
  }

  function Xt(e, t, n) {
    e.multiplyTo(t, n), this.reduce(n)
  }

  function Vt() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0
  }

  function $t(e, t) {
    if (e > 4294967295 || e < 1) return tt.ONE
    var n = nt(),
      r = nt(),
      i = t.convert(this),
      s = St(e) - 1
    i.copyTo(n)
    while (--s >= 0) {
      t.sqrTo(n, r)
      if ((e & 1 << s) > 0) t.mulTo(r, i, n)
      else {
        var o = n
        n = r, r = o
      }
    }
    return t.revert(n)
  }

  function Jt(e, t) {
    var n
    return e < 256 || t.isEven() ? n = new Dt(t) : n = new qt(t), this.exp(e, n)
  }

  function Kt() {
    var e = nt()
    return this.copyTo(e), e
  }

  function Qt() {
    if (this.s < 0) {
      if (this.t == 1) return this[0] - this.DV
      if (this.t == 0) return -1
    } else {
      if (this.t == 1) return this[0]
      if (this.t == 0) return 0
    }
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
  }

  function Gt() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24
  }

  function Yt() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16
  }

  function Zt(e) {
    return Math.floor(Math.LN2 * this.DB / Math.log(e))
  }

  function en() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1
  }

  function tn(e) {
    e == null && (e = 10)
    if (this.signum() == 0 || e < 2 || e > 36) return '0'
    var t = this.chunkSize(e),
      n = Math.pow(e, t),
      r = vt(n),
      i = nt(),
      s = nt(),
      o = ''
    this.divRemTo(r, i, s)
    while (i.signum() > 0) o = (n + s.intValue()).toString(e).substr(1) + o, i.divRemTo(r, i, s)
    return s.intValue().toString(e) + o
  }

  function nn(e, t) {
    this.fromInt(0), t == null && (t = 10)
    var n = this.chunkSize(t),
      r = Math.pow(t, n),
      i = !1,
      s = 0,
      o = 0
    for (var u = 0; u < e.length; ++u) {
      var a = ht(e, u)
      if (a < 0) {
        e.charAt(u) == '-' && this.signum() == 0 && (i = !0)
        continue
      }
      o = t * o + a, ++s >= n && (this.dMultiply(r), this.dAddOffset(o, 0), s = 0, o = 0)
    }
    s > 0 && (this.dMultiply(Math.pow(t, s)), this.dAddOffset(o, 0)), i && tt.ZERO.subTo(this, this)
  }

  function rn(e, t, n) {
    if (typeof t === 'number') {
      if (e < 2) this.fromInt(1)
      else {
        this.fromNumber(e, n), this.testBit(e - 1) || this.bitwiseTo(tt.ONE.shiftLeft(e - 1), hn, this), this.isEven() && this.dAddOffset(1, 0)
        while (!this.isProbablePrime(t)) this.dAddOffset(2, 0), this.bitLength() > e && this.subTo(tt.ONE.shiftLeft(e - 1), this)
      }
    } else {
      var r = new Array(),
        i = e & 7
      r.length = (e >> 3) + 1, t.nextBytes(r), i > 0 ? r[0] &= (1 << i) - 1 : r[0] = 0, this.fromString(r, 256)
    }
  }

  function sn() {
    var e = this.t,
      t = new Array()
    t[0] = this.s
    var n = this.DB - e * this.DB % 8,
      r, i = 0
    if (e-- > 0) {
      n < this.DB && (r = this[e] >> n) != (this.s & this.DM) >> n && (t[i++] = r | this.s << this.DB - n)
      while (e >= 0) {
        n < 8 ? (r = (this[e] & (1 << n) - 1) << 8 - n, r |= this[--e] >> (n += this.DB - 8)) : (r = this[e] >> (n -= 8) & 255, n <= 0 && (n += this.DB, --e)), (r & 128) != 0 && (r |= -256), i == 0 && (this.s & 128) != (r & 128) && ++i
        if (i > 0 || r != this.s) t[i++] = r
      }
    }
    return t
  }

  function on(e) {
    return this.compareTo(e) == 0
  }

  function un(e) {
    return this.compareTo(e) < 0 ? this : e
  }

  function an(e) {
    return this.compareTo(e) > 0 ? this : e
  }

  function fn(e, t, n) {
    var r, i, s = Math.min(e.t, this.t)
    for (r = 0; r < s; ++r) n[r] = t(this[r], e[r])
    if (e.t < this.t) {
      i = e.s & this.DM
      for (r = s; r < this.t; ++r) n[r] = t(this[r], i)
      n.t = this.t
    } else {
      i = this.s & this.DM
      for (r = s; r < e.t; ++r) n[r] = t(i, e[r])
      n.t = e.t
    }
    n.s = t(this.s, e.s), n.clamp()
  }

  function ln(e, t) {
    return e & t
  }

  function cn(e) {
    var t = nt()
    return this.bitwiseTo(e, ln, t), t
  }

  function hn(e, t) {
    return e | t
  }

  function pn(e) {
    var t = nt()
    return this.bitwiseTo(e, hn, t), t
  }

  function dn(e, t) {
    return e ^ t
  }

  function vn(e) {
    var t = nt()
    return this.bitwiseTo(e, dn, t), t
  }

  function mn(e, t) {
    return e & ~t
  }

  function gn(e) {
    var t = nt()
    return this.bitwiseTo(e, mn, t), t
  }

  function yn() {
    var e = nt()
    for (var t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t]
    return e.t = this.t, e.s = ~this.s, e
  }

  function bn(e) {
    var t = nt()
    return e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t), t
  }

  function wn(e) {
    var t = nt()
    return e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t), t
  }

  function En(e) {
    if (e == 0) return -1
    var t = 0
    return (e & 65535) == 0 && (e >>= 16, t += 16), (e & 255) == 0 && (e >>= 8, t += 8), (e & 15) == 0 && (e >>= 4, t += 4), (e & 3) == 0 && (e >>= 2, t += 2), (e & 1) == 0 && ++t, t
  }

  function Sn() {
    for (var e = 0; e < this.t; ++e) {
      if (this[e] != 0) return e * this.DB + En(this[e])
    }
    return this.s < 0 ? this.t * this.DB : -1
  }

  function xn(e) {
    var t = 0
    while (e != 0) e &= e - 1, ++t
    return t
  }

  function Tn() {
    var e = 0,
      t = this.s & this.DM
    for (var n = 0; n < this.t; ++n) e += xn(this[n] ^ t)
    return e
  }

  function Nn(e) {
    var t = Math.floor(e / this.DB)
    return t >= this.t ? this.s != 0 : (this[t] & 1 << e % this.DB) != 0
  }

  function Cn(e, t) {
    var n = tt.ONE.shiftLeft(e)
    return this.bitwiseTo(n, t, n), n
  }

  function kn(e) {
    return this.changeBit(e, hn)
  }

  function Ln(e) {
    return this.changeBit(e, mn)
  }

  function An(e) {
    return this.changeBit(e, dn)
  }

  function On(e, t) {
    var n = 0,
      r = 0,
      i = Math.min(e.t, this.t)
    while (n < i) r += this[n] + e[n], t[n++] = r & this.DM, r >>= this.DB
    if (e.t < this.t) {
      r += e.s
      while (n < this.t) r += this[n], t[n++] = r & this.DM, r >>= this.DB
      r += this.s
    } else {
      r += this.s
      while (n < e.t) r += e[n], t[n++] = r & this.DM, r >>= this.DB
      r += e.s
    }
    t.s = r < 0 ? -1 : 0, r > 0 ? t[n++] = r : r < -1 && (t[n++] = this.DV + r), t.t = n, t.clamp()
  }

  function Mn(e) {
    var t = nt()
    return this.addTo(e, t), t
  }

  function _n(e) {
    var t = nt()
    return this.subTo(e, t), t
  }

  function Dn(e) {
    var t = nt()
    return this.multiplyTo(e, t), t
  }

  function Pn() {
    var e = nt()
    return this.squareTo(e), e
  }

  function Hn(e) {
    var t = nt()
    return this.divRemTo(e, t, null), t
  }

  function Bn(e) {
    var t = nt()
    return this.divRemTo(e, null, t), t
  }

  function jn(e) {
    var t = nt(),
      n = nt()
    return this.divRemTo(e, t, n), new Array(t, n)
  }

  function Fn(e) {
    this[this.t] = this.am(0, e - 1, this, 0, 0, this.t), ++this.t, this.clamp()
  }

  function In(e, t) {
    if (e == 0) return
    while (this.t <= t) this[this.t++] = 0
    this[t] += e
    while (this[t] >= this.DV) this[t] -= this.DV, ++t >= this.t && (this[this.t++] = 0), ++this[t]
  }

  function qn() {}

  function Rn(e) {
    return e
  }

  function Un(e, t, n) {
    e.multiplyTo(t, n)
  }

  function zn(e, t) {
    e.squareTo(t)
  }

  function Wn(e) {
    return this.exp(e, new qn())
  }

  function Xn(e, t, n) {
    var r = Math.min(this.t + e.t, t)
    n.s = 0, n.t = r
    while (r > 0) n[--r] = 0
    var i
    for (i = n.t - this.t; r < i; ++r) n[r + this.t] = this.am(0, e[r], n, r, 0, this.t)
    for (i = Math.min(e.t, t); r < i; ++r) this.am(0, e[r], n, r, 0, t - r)
    n.clamp()
  }

  function Vn(e, t, n) {
    --t
    var r = n.t = this.t + e.t - t
    n.s = 0
    while (--r >= 0) n[r] = 0
    for (r = Math.max(t - this.t, 0); r < e.t; ++r) n[this.t + r - t] = this.am(t - r, e[r], n, 0, 0, this.t + r - t)
    n.clamp(), n.drShiftTo(1, n)
  }

  function $n(e) {
    this.r2 = nt(), this.q3 = nt(), tt.ONE.dlShiftTo(2 * e.t, this.r2), this.mu = this.r2.divide(e), this.m = e
  }

  function Jn(e) {
    if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m)
    if (e.compareTo(this.m) < 0) return e
    var t = nt()
    return e.copyTo(t), this.reduce(t), t
  }

  function Kn(e) {
    return e
  }

  function Qn(e) {
    e.drShiftTo(this.m.t - 1, this.r2), e.t > this.m.t + 1 && (e.t = this.m.t + 1, e.clamp()), this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3), this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2)
    while (e.compareTo(this.r2) < 0) e.dAddOffset(1, this.m.t + 1)
    e.subTo(this.r2, e)
    while (e.compareTo(this.m) >= 0) e.subTo(this.m, e)
  }

  function Gn(e, t) {
    e.squareTo(t), this.reduce(t)
  }

  function Yn(e, t, n) {
    e.multiplyTo(t, n), this.reduce(n)
  }

  function Zn(e, t) {
    var n = e.bitLength(),
      r, i = vt(1),
      s
    if (n <= 0) return i
    n < 18 ? r = 1 : n < 48 ? r = 3 : n < 144 ? r = 4 : n < 768 ? r = 5 : r = 6, n < 8 ? s = new Dt(t) : t.isEven() ? s = new $n(t) : s = new qt(t)
    var o = new Array(),
      u = 3,
      a = r - 1,
      f = (1 << r) - 1
    o[1] = s.convert(this)
    if (r > 1) {
      var l = nt()
      s.sqrTo(o[1], l)
      while (u <= f) o[u] = nt(), s.mulTo(l, o[u - 2], o[u]), u += 2
    }
    var c = e.t - 1,
      h, p = !0,
      d = nt(),
      v
    n = St(e[c]) - 1
    while (c >= 0) {
      n >= a ? h = e[c] >> n - a & f : (h = (e[c] & (1 << n + 1) - 1) << a - n, c > 0 && (h |= e[c - 1] >> this.DB + n - a)), u = r
      while ((h & 1) == 0) h >>= 1, --u;
      (n -= u) < 0 && (n += this.DB, --c)
      if (p) o[h].copyTo(i), p = !1
      else {
        while (u > 1) s.sqrTo(i, d), s.sqrTo(d, i), u -= 2
        u > 0 ? s.sqrTo(i, d) : (v = i, i = d, d = v), s.mulTo(d, o[h], i)
      }
      while (c >= 0 && (e[c] & 1 << n) == 0) s.sqrTo(i, d), v = i, i = d, d = v, --n < 0 && (n = this.DB - 1, --c)
    }
    return s.revert(i)
  }

  function er(e) {
    var t = this.s < 0 ? this.negate() : this.clone(),
      n = e.s < 0 ? e.negate() : e.clone()
    if (t.compareTo(n) < 0) {
      var r = t
      t = n, n = r
    }
    var i = t.getLowestSetBit(),
      s = n.getLowestSetBit()
    if (s < 0) return t
    i < s && (s = i), s > 0 && (t.rShiftTo(s, t), n.rShiftTo(s, n))
    while (t.signum() > 0)(i = t.getLowestSetBit()) > 0 && t.rShiftTo(i, t), (i = n.getLowestSetBit()) > 0 && n.rShiftTo(i, n), t.compareTo(n) >= 0 ? (t.subTo(n, t), t.rShiftTo(1, t)) : (n.subTo(t, n), n.rShiftTo(1, n))
    return s > 0 && n.lShiftTo(s, n), n
  }

  function tr(e) {
    if (e <= 0) return 0
    var t = this.DV % e,
      n = this.s < 0 ? e - 1 : 0
    if (this.t > 0) {
      if (t == 0) n = this[0] % e
      else {
        for (var r = this.t - 1; r >= 0; --r) n = (t * n + this[r]) % e
      }
    }
    return n
  }

  function nr(e) {
    var t = e.isEven()
    if (this.isEven() && t || e.signum() == 0) return tt.ZERO
    var n = e.clone(),
      r = this.clone(),
      i = vt(1),
      s = vt(0),
      o = vt(0),
      u = vt(1)
    while (n.signum() != 0) {
      while (n.isEven()) {
        n.rShiftTo(1, n)
        if (t) {
          if (!i.isEven() || !s.isEven()) i.addTo(this, i), s.subTo(e, s)
          i.rShiftTo(1, i)
        } else s.isEven() || s.subTo(e, s)
        s.rShiftTo(1, s)
      }
      while (r.isEven()) {
        r.rShiftTo(1, r)
        if (t) {
          if (!o.isEven() || !u.isEven()) o.addTo(this, o), u.subTo(e, u)
          o.rShiftTo(1, o)
        } else u.isEven() || u.subTo(e, u)
        u.rShiftTo(1, u)
      }
      n.compareTo(r) >= 0 ? (n.subTo(r, n), t && i.subTo(o, i), s.subTo(u, s)) : (r.subTo(n, r), t && o.subTo(i, o), u.subTo(s, u))
    }
    return r.compareTo(tt.ONE) != 0 ? tt.ZERO : u.compareTo(e) >= 0 ? u.subtract(e) : u.signum() < 0 ? (u.addTo(e, u), u.signum() < 0 ? u.add(e) : u) : u
  }

  function sr(e) {
    var t, n = this.abs()
    if (n.t == 1 && n[0] <= rr[rr.length - 1]) {
      for (t = 0; t < rr.length; ++t) {
        if (n[0] == rr[t]) return !0
      }
      return !1
    }
    if (n.isEven()) return !1
    t = 1
    while (t < rr.length) {
      var r = rr[t],
        i = t + 1
      while (i < rr.length && r < ir) r *= rr[i++]
      r = n.modInt(r)
      while (t < i) {
        if (r % rr[t++] == 0) return !1
      }
    }
    return n.millerRabin(e)
  }

  function or(e) {
    var t = this.subtract(tt.ONE),
      n = t.getLowestSetBit()
    if (n <= 0) return !1
    var r = t.shiftRight(n)
    e = e + 1 >> 1, e > rr.length && (e = rr.length)
    var i = nt()
    for (var s = 0; s < e; ++s) {
      i.fromInt(rr[Math.floor(Math.random() * rr.length)])
      var o = i.modPow(r, this)
      if (o.compareTo(tt.ONE) != 0 && o.compareTo(t) != 0) {
        var u = 1
        while (u++ < n && o.compareTo(t) != 0) {
          o = o.modPowInt(2, this)
          if (o.compareTo(tt.ONE) == 0) return !1
        }
        if (o.compareTo(t) != 0) return !1
      }
    }
    return !0
  }

  function ur() {
    this.i = 0, this.j = 0, this.S = new Array()
  }

  function ar(e) {
    var t, n, r
    for (t = 0; t < 256; ++t) this.S[t] = t
    n = 0
    for (t = 0; t < 256; ++t) n = n + this.S[t] + e[t % e.length] & 255, r = this.S[t], this.S[t] = this.S[n], this.S[n] = r
    this.i = 0, this.j = 0
  }

  function fr() {
    var e
    return this.i = this.i + 1 & 255, this.j = this.j + this.S[this.i] & 255, e = this.S[this.i], this.S[this.i] = this.S[this.j], this.S[this.j] = e, this.S[e + this.S[this.i] & 255]
  }

  function lr() {
    return new ur()
  }

  function vr(e) {
    pr[dr++] ^= e & 255, pr[dr++] ^= e >> 8 & 255, pr[dr++] ^= e >> 16 & 255, pr[dr++] ^= e >> 24 & 255, dr >= cr && (dr -= cr)
  }

  function mr() {
    vr((new Date()).getTime())
  }

  function br() {
    if (hr == null) {
      mr(), hr = lr(), hr.init(pr)
      for (dr = 0; dr < pr.length; ++dr) pr[dr] = 0
      dr = 0
    }
    return hr.next()
  }

  function wr(e) {
    var t
    for (t = 0; t < e.length; ++t) e[t] = br()
  }

  function Er() {}

  function Tr(e) {
    var t, n, r = ''
    for (t = 0; t + 3 <= e.length; t += 3) n = parseInt(e.substring(t, t + 3), 16), r += Sr.charAt(n >> 6) + Sr.charAt(n & 63)
    t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16), r += Sr.charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16), r += Sr.charAt(n >> 2) + Sr.charAt((n & 3) << 4))
    while ((r.length & 3) > 0) r += xr
    return r
  }

  function Nr(e) {
    var t = '',
      n, r = 0,
      i
    for (n = 0; n < e.length; ++n) {
      if (e.charAt(n) == xr) break
      v = Sr.indexOf(e.charAt(n))
      if (v < 0) continue
      r == 0 ? (t += ct(v >> 2), i = v & 3, r = 1) : r == 1 ? (t += ct(i << 2 | v >> 4), i = v & 15, r = 2) : r == 2 ? (t += ct(i), t += ct(v >> 2), i = v & 3, r = 3) : (t += ct(i << 2 | v >> 4), t += ct(v & 15), r = 0)
    }
    return r == 1 && (t += ct(i << 2)), t
  }

  function Cr(e) {
    var t = Nr(e),
      n, r = new Array()
    for (n = 0; 2 * n < t.length; ++n) r[n] = parseInt(t.substring(2 * n, 2 * n + 2), 16)
    return r
  }

  function kr(e, t) {
    return new tt(e, t)
  }

  function Lr(e) {
    return e < 16 ? '0' + e.toString(16) : e.toString(16)
  }

  function Ar(e, t) {
    if (t < e.length + 11) return null
    var n = new Array(),
      r = e.length - 1
    while (r >= 0 && t > 0) {
      var i = e.charCodeAt(r--)
      i < 128 ? n[--t] = i : i > 127 && i < 2048 ? (n[--t] = i & 63 | 128, n[--t] = i >> 6 | 192) : (n[--t] = i & 63 | 128, n[--t] = i >> 6 & 63 | 128, n[--t] = i >> 12 | 224)
    }
    n[--t] = 0
    var s = new Er(),
      o = new Array()
    while (t > 2) {
      o[0] = 0
      while (o[0] == 0) s.nextBytes(o)
      n[--t] = o[0]
    }
    return n[--t] = 2, n[--t] = 0, new tt(n)
  }

  function Or() {
    this.n = null, this.e = 0, this.d = null, this.p = null, this.q = null, this.dmp1 = null, this.dmq1 = null, this.coeff = null
  }

  function Mr(e, t) {
    this.n = kr(e, 16), this.e = parseInt(t, 16)
  }

  function _r(e) {
    return e.modPowInt(this.e, this.n)
  }

  function Dr(e) {
    var t = Ar(e, this.n.bitLength() + 7 >> 3)
    if (t == null) return null
    var n = this.doPrivate(t)
    if (n == null) return null
    var r = n.toString(16)
    return (r.length & 1) == 0 ? r : '0' + r
  }

  function Pr(e, t) {
    var n = e.toByteArray(),
      r = 0
    while (r < n.length && n[r] == 0) ++r
    if (n.length - r != t - 1 || n[r] != 2) return null
    ++r
    while (n[r] != 0) {
      if (++r >= n.length) return null
    }
    var i = ''
    while (++r < n.length) {
      var s = n[r] & 255
      s < 128 ? i += String.fromCharCode(s) : s > 191 && s < 224 ? (i += String.fromCharCode((s & 31) << 6 | n[r + 1] & 63), ++r) : (i += String.fromCharCode((s & 15) << 12 | (n[r + 1] & 63) << 6 | n[r + 2] & 63), r += 2)
    }
    return i
  }

  function Hr(e, t, n) {
    this.n = kr(e, 16), this.e = parseInt(t, 16), this.d = kr(n, 16)
  }

  function Br(e, t, n, r, i, s, o, u) {
    this.n = kr(e, 16), this.e = parseInt(t, 16), this.d = kr(n, 16), this.p = kr(r, 16), this.q = kr(i, 16), this.dmp1 = kr(s, 16), this.dmq1 = kr(o, 16), this.coeff = kr(u, 16)
  }

  function jr(e) {
    if (this.p == null || this.q == null) return e.modPow(this.d, this.n)
    var t = e.mod(this.p).modPow(this.dmp1, this.p),
      n = e.mod(this.q).modPow(this.dmq1, this.q)
    while (t.compareTo(n) < 0) t = t.add(this.p)
    return t.subtract(n).multiply(this.coeff).mod(this.p).multiply(this.q).add(n)
  }

  function Fr(e) {
    var t = kr(e, 16),
      n = this.doPublic(t)
    return n == null ? null : Pr(n, this.n.bitLength() + 7 >> 3)
  }

  function Zr(e, t) {
    e.diffuse.value = t.color, e.opacity.value = t.opacity
  }

  function ei(e, t) {
    e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale
  }

  function ii(e, t) {
    e.psColor.value = t.color, e.opacity.value = t.opacity, e.size.value = t.size, e.scale.value = t.scale || 1, e.map.value = t.map
  }

  function hi(e, t) {
    return e.distance - t.distance
  }

  function pi(e, t, r, i, s) {
    (e instanceof n.Node || e instanceof n.Billboard) && vi(e, t, r, i, s)
  }

  function di(e, n, r, i, s) {
    if (e === t) return
    var o = e.getDescendants()
    for (var u = 0, a = o.length; u < a; u++) pi(o[u], n, r, i, s)
  }

  function vi(e, r, i, u, a) {
    if (!u && a.isVisible(e) == 0) return
    if (e instanceof n.Billboard) {
      var f = r.matrixPosition
      f.setFromMatrixPosition(e.worldMatrix)
      var l = r.ray.distanceToPoint(f),
        c = e.material.alignment,
        h = new n.Plane(1, 1)
      if (c.x || c.y) h.setPosition(c.x, c.y, 0), h = n.Utils.transformElement(h, !0)
      h.setPosition(f)
      var p = (new o()).getScaleFromMatrix(e.worldMatrix)
      h.setScale(p.x, p.y, 1)
      var d = r.direction.clone(),
        v = h.getPosition().clone(),
        m = e.material
      m && m.vertical && (d.y = 0), v.sub(d), h.lookAt(v), h.updateWorldMatrix(!0)
      var g = []
      return vi(h, r, g, !0, a), g.length === 0 ? i : (i.push({
        distance: g[0].distance,
        point: e._position,
        face: null,
        object: e,
        element: e
      }), i)
    }
    if (e instanceof n.Line) {
      var y = 1
      y -= 1
      var b = Math.sqrt(r.linePrecision + y),
        w = b * b,
        E = e
      E.boundingSphere == null && E.computeBoundingSphere(), ci.copy(E.boundingSphere), ci.applyMatrix4(e.worldMatrix)
      if (r.ray.isIntersectionSphere(ci) === !1) return i
      ai.getInverse(e.worldMatrix), ui.copy(r.ray).transform(ai)
      var S = E.vertices,
        x = S.length,
        T = new o(),
        N = new o(),
        C = e.type === n.LineStrip ? 1 : 2
      for (var k = 0; k < x - 1; k += C) {
        var L = ui.distanceSqToSegment(S[k], S[k + 1], N, T)
        if (L > w) continue
        var l = ui.origin.distanceTo(N)
        if (l < r.near || l > r.far) continue
        i.push({
          distance: l,
          point: T.clone().applyMatrix4(e.worldMatrix),
          face: null,
          faceIndex: null,
          element: e,
          object: e
        })
      }
      return i
    }
    e.boundingSphere === null && e.computeBoundingSphere(), ci.set(e.worldMatrix.getPosition(), e.boundingSphere.radius * e.worldMatrix.getMaxScaleOnAxis())
    if (!r.ray.isIntersectionSphere(ci)) return i
    var E = e,
      S = E.vertices,
      A = e.material instanceof n.ArrayMaterial,
      O = A === !0 ? e.material.materials : null,
      M = e.material.side,
      _, D, H, B, j, F, I, b = r.precision
    e.rotationWorldMatrix.extractRotation(e.worldMatrix), ai.getInverse(e.worldMatrix), ui.copy(r.ray).transform(ai)
    for (var q = 0, R = E.faces.length; q < R; q++) {
      var U = E.faces[q],
        z = A === !0 ? O[U.materialIndex] : e.material,
        W = a.getOverLoadMaterial(e, z)
      W && (z = W)
      if (z === t || z.visible === !1 || E.visible === !1 && !u) continue
      if (z.transparent && z.opacity == 0) continue
      fi.setFromNormalAndCoplanarPoint(U.normal, S[U.a])
      var X = ui.distanceToPlane(fi)
      if (Math.abs(X) < b) continue
      if (X < 0) continue
      M = z.side
      var V = ui.direction.dot(fi.normal)
      if (M !== n.DoubleSide && !(M === n.FrontSide ? V < 0 : V > 0)) continue
      if (X < r.near || X > r.far) continue
      li = ui.at(X, li)
      var $ = new o(),
        J = U.materialIndex,
        K = !1,
        Q
      a && a._selectTransparencyThreshold > 0 && (K = z.transparent == 1 || z.alphaTest > 0)
      if (U instanceof n.Face3) {
        _ = S[U.a], D = S[U.b], H = S[U.c]
        if (!n.Triangle.containsPoint(li, _, D, H)) continue
        $ = n.Triangle.barycoordFromPoint(li, _, D, H)
      } else {
        if (!(U instanceof n.Face4)) throw Error('face type not supported')
        _ = S[U.a], D = S[U.b], H = S[U.c], B = S[U.d]
        var G = n.Triangle.containsPoint(li, _, D, B),
          Y = n.Triangle.containsPoint(li, D, H, B)
        if (!G && !Y) continue
        G ? $ = n.Triangle.barycoordFromPoint(li, _, D, B) : ($ = n.Triangle.barycoordFromPoint(li, D, H, B), Q = !0)
      }
      var Z = new s(),
        et = $.z,
        tt = $.x,
        nt = $.y
      if (E.uvs && E.uvs[q]) {
        var rt = E.uvs[q]
        U instanceof n.Face3 ? (Z.x = rt[0].x * tt + rt[1].x * nt + rt[2].x * et, Z.y = rt[0].y * tt + rt[1].y * nt + rt[2].y * et) : Q ? (Z.x = rt[1].x * tt + rt[2].x * nt + rt[3].x * et, Z.y = rt[1].y * tt + rt[2].y * nt + rt[3].y * et) : (Z.x = rt[0].x * tt + rt[1].x * nt + rt[3].x * et, Z.y = rt[0].y * tt + rt[1].y * nt + rt[3].y * et)
      }
      var it = 1,
        st
      Z = a.debugUV || Z
      if (K) {
        if (z.opacity < a._selectTransparencyThreshold) continue
        if (z.map == null) it = z.opacity
        else {
          st = z.map._image
          var ot = P.getPixelFromImage(st, Z.x, Z.y)
          it = ot[3] / 255 * (z.opacity == null ? 1 : z.opacity)
        }
        it < z.alphaTest ? it = 0 : z.transparent == 0 && (it = 1)
      }
      if (it < a._selectTransparencyThreshold) continue
      i.push({
        distance: X,
        point: r.ray.at(X),
        face: U,
        uv: Z,
        faceIndex: q,
        element: e,
        object: e,
        side: V > 0 ? 1 : -1
      })
    }
  }

  function Ci(e) {
    if (!Pi[e.id]) {
      Bi = !0, Pi[e.id] = e, e.finish = e.finish == null ? e.delay + e.dur + e.interval : e.finish
      if (e.from == null && e.attr && e.source) {
        var t;
        (t = e.attr.match(/^S[:@](.*)/i)) ? e.from = e.source.getStyle(t[1]) : (t = e.attr.match(/^C[:@](.*)/i)) ? e.from = e.source.getClient(t[1]) : e.from = twaver.Util.getValue(e.source, e.attr)
      }
      ki(e), Li(e)
    }
    return e
  }

  function ki(e) {
    var t = e.type,
      n = e.from,
      r = e.to
    t === 'number' ? (e.from = n || 0, e.to = r || 0) : t === 'point' ? (n ? n.length && (e.from = {
      x: n[0],
      y: n[1]
    }) : e.from = e.attr === 'scale' ? {
      x: 1,
      y: 1
    } : {
      x: 0,
      y: 0
    }, r ? r.length && (e.to = {
        x: r[0],
        y: r[1]
      }) : e.to = e.attr === 'scale' ? {
        x: 1,
        y: 1
      } : {
        x: 0,
        y: 0
      }) : t === 'rect' ? (n ? n.length && (e.from = {
      x: n[0],
      y: n[1],
      w: n[2],
      h: n[3]
    }) : e.from = {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    }, r ? r.length && (e.to = {
        x: r[0],
        y: r[1],
        w: r[2],
        h: r[3]
      }) : e.to = {
        x: 0,
        y: 0,
        w: 0,
        h: 0
      }) : t === 'color' ? (e.from = getColorValue(n), e.to = getColorValue(r)) : t !== 'set' && t === 'group_set', e.current = e.from
  }

  function Li(e) {
    var t = e.type,
      n = e.from,
      r = e.to
    t === 'number' ? e.delta = r - n : t === 'point' ? e.delta = {
      x: r.x - n.x,
      y: r.y - n.y
    } : t === 'rect' ? e.delta = {
      x: r.x - n.x,
      y: r.y - n.y,
      w: r.w - n.w,
      h: r.h - n.h
    } : t === 'color' ? e.delta = {
      r: r.r - n.r,
      g: r.g - n.g,
      b: r.b - n.b,
      a: r.a - n.a
    } : t !== 'set' && t === 'group_set'
  }

  function Ai(e, t) {
    return Pi[e.id] && (t == null && (t = !0), t && Di(e, e.to), e.onStop && e.onStop(), e.time = 0, e.total = 0, e.start = null, e.count = 0, e.started = !1, e.stopped = !1, delete Pi[e.id]), e
  }

  function Oi(e) {
    e == null && (e = !0), Object.keys(Pi).forEach(function(t) {
      var n = Pi[t]
      e && Di(n, n.to), n.onStop && n.onStop()
    }), Pi = {}
  }

  function Mi(e) {
    Object.keys(Pi).forEach(function(t) {
      var n = Pi[t]
      if (!n) return
      n.start == null && (n.start = e), n.total = e - n.start
      if (n.total > n.delay) {
        n.time = n.total - n.delay
        var r = !1
        n.time >= n.dur && (n.time = n.dur, r = !0), !n.stopped && Di(n, _i(n)), n.stopped = r
        if (n.total >= n.finish) {
          n.count++
          if (n.count >= n.repeat) Ai(n, !1), n.onDone && n.onDone()
          else {
            n.time = 0, n.total = 0, n.start = null, n.stopped = !1
            if (n.reverse) {
              var i = n.from
              n.from = n.to, n.to = i, Li(n)
            }
          }
        }
      }!Bi && (Bi = !0)
    })
  }

  function _i(e, t) {
    var n = e.type,
      r = e.delta,
      i = e.from,
      s = e.time,
      o = e.dur,
      u = T[e.easing || 'easeNone']
    return u || (u = T.easeNone), n === 'number' ? t = u(s, i, r, o) : n === 'point' ? t = {
      x: u(s, i.x, r.x, o),
      y: u(s, i.y, r.y, o)
    } : n === 'rect' ? t = {
      x: u(s, i.x, r.x, o),
      y: u(s, i.y, r.y, o),
      w: u(s, i.w, r.w, o),
      h: u(s, i.h, r.h, o)
    } : n === 'color' ? t = 'rgba(' + Math.floor(u(s, i.r, r.r, o)) + ',' + Math.floor(u(s, i.g, r.g, o)) + ',' + Math.floor(u(s, i.b, r.b, o)) + ',' + Math.floor(u(s, i.a, r.a, o)) + ')' : n === 'set' ? e.time && (t = e.to) : n === 'group_set' && (t = e.to[e.groupIndex]), e.current = t, t
  }

  function Di(e, t) {
    e.started || (e.started = !0, e.onPlay && e.onPlay()), e.filter && (t = e.filter(t))
    if (e.attr && e.source) {
      var n;
      (n = e.attr.match(/^S[:@](.*)/i)) ? e.source.setStyle(n[1], t) : (n = e.attr.match(/^C[:@](.*)/i)) ? e.source.setClient(n[1], t) : twaver.Util.setValue(e.source, e.attr, t)
    }
    e.onUpdate && e.onUpdate(t)
  }
  self.Int32Array = self.Int32Array || Array, self.Float32Array = self.Float32Array || Array, Object.create = Object.create || function(e) {
    var t = function() {}
    return t.prototype = e, new t()
  }
  var n = {
    version: '2.0.6',
    _id: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'],
    id: function(e) {
      e = e == null ? '' : e
      var t = []
      for (var n = 0; n < 32; n++) t[n] = this._id[Math.floor(Math.random() * 16)]
      return t[12] = '4', t[16] = this._id[t[16] & 3 | 8], e + t.join('')
    },
    ip: function(e, t, r, i) {
      var s = r + t
      e[n.getter(t, i)] = function() {
        return this[s]
      }, e[n.setter(t)] = function(e) {
        var n = this[s]
        if (n === e) return
        this.setPropertyValue ? this.setPropertyValue(s, e) && (this.onPropertyChange(t, n, e), this.firePropertyChange(t, n, e)) : (this[s] = e, this.onPropertyChange(t, n, e), this.firePropertyChange(t, n, e))
      }
    },
    getter: function(e, t) {
      var n = e.charAt(0).toUpperCase() + e.slice(1),
        r = /ble$/.test(e) || /ed$/.test(e) ? 'is' : 'get'
      return t && t.indexOf(e) != -1 && (r = 'is'), r + n
    },
    setter: function(e) {
      var t = e.charAt(0).toUpperCase() + e.slice(1)
      return 'set' + t
    },
    getValue: function(e, t, n) {
      var r = t.charAt(0).toUpperCase() + t.slice(1),
        i = 'get' + r,
        s = 'is' + r
      return n ? n === 'boolean' ? e[s]() : (e[i] == null && console.log('get Function ' + i + ' not exist'), e[i]()) : e[i] ? e[i]() : e[s] ? e[s]() : e[t]
    },
    setValue: function(e, t, n) {
      e['set' + t.charAt(0).toUpperCase() + t.slice(1)](n)
    },
    clone: function(e) {
      if (!e) return null
      var t = {}
      for (var n in e) t[n] = e[n]
      return t
    },
    addMethod: function(e, t) {
      var n = e.prototype
      for (var r in t) n[r] = t[r]
    },
    classCache: {},
    getClass: function(t) {
      var r = n.classCache[t]
      if (!r) {
        var i = t.split('.'),
          s = i.length
        r = e
        for (var o = 0; o < s; o++) r = r[i[o]]
        n.classCache[t] = r
      }
      return r
    },
    newInstance: function(e) {
      typeof e === 'string' && (e = n.getClass(e), e = e.prototype)
      var t = e.constructor
      if (!t) return null
      var r = arguments.length,
        i = arguments
      if (r === 1) return new t()
      if (r === 2) return new t(i[1])
      if (r === 3) return new t(i[1], i[2])
      if (r === 4) return new t(i[1], i[2], i[3])
      if (r === 5) return new t(i[1], i[2], i[3], i[4])
      if (r === 6) return new t(i[1], i[2], i[3], i[4], i[5])
      if (r === 7) return new t(i[1], i[2], i[3], i[4], i[5], i[6])
      if (r === 8) return new t(i[1], i[2], i[3], i[4], i[5], i[6], i[7])
      throw "don't support args more than 7"
    },
    xml: function(t) {
      if (e.DOMParser) return (new DOMParser()).parseFromString(t, 'text/xml')
      var n = new ActiveXObject('Microsoft.XmlDOM')
      return n.async = !1, n.loadXml(t), n
    }
  }
  e.TGL = n, e.mono = n
  var r = {}
  n.extend = function(e, t, r) {
    if (t) {
      var i = function() {}
      i.prototype = t.prototype, e.prototype = new i(), e.prototype.constructor = e, e.superClass = t.prototype, t.prototype.constructor == Object.prototype.constructor && (t.prototype.constructor = t)
    }
    var s = e.prototype
    if (r) {
      s.getClassName = function() {
        return r.className
      }
      for (var o in r) {
        if (o === '__accessor') {
          var u = r.__accessor,
            a = r.__bool
          for (var f = 0; f < u.length; f++) {
            var l = u[f]
            n.ip(s, l, '', a)
          }
        } else if (o === '___accessor') {
          var u = r.___accessor
          for (var f = 0; f < u.length; f++) {
            var l = u[f]
            n.ip(s, l, '_', a)
          }
        }
        s[o] = r[o]
      }
      r.constructor && (s.newInstance = function() {
        return n.newInstance(this)
      })
    }
  }, n.defaultEulerOrder = 'XYZ', String.prototype.startsWith = String.prototype.startsWith || function(e) {
    return this.slice(0, e.length) === e
  }, String.prototype.endsWith = String.prototype.endsWith || function(e) {
    var t = String(e),
      n = this.lastIndexOf(t)
    return (n > -1 && n) === this.length - t.length
  }, String.prototype.trim = String.prototype.trim || function() {
    return this.replace(/^\s+|\s+$/g, '')
  }, (function() {
    var n = 0,
      r = ['ms', 'moz', 'webkit', 'o']
    for (var i = 0; i < r.length && !e.requestAnimationFrame; ++i) e.requestAnimationFrame = e[r[i] + 'RequestAnimationFrame'], e.cancelAnimationFrame = e[r[i] + 'CancelAnimationFrame'] || e[r[i] + 'CancelRequestAnimationFrame']
    e.requestAnimationFrame === t && (e.requestAnimationFrame = function(t, r) {
      var i = Date.now(),
        s = Math.max(0, 16 - (i - n)),
        o = e.setTimeout(function() {
          t(i + s)
        }, s)
      return n = i + s, o
    }), e.cancelAnimationFrame = e.cancelAnimationFrame || function(t) {
      e.clearTimeout(t)
    }
  }()), n.CullFaceNone = 0, n.CullFaceBack = 1, n.CullFaceFront = 2, n.CullFaceFrontBack = 3, n.FrontFaceDirectionCW = 0, n.FrontFaceDirectionCCW = 1, n.BasicShadowMap = 0, n.PCFShadowMap = 1, n.PCFSoftShadowMap = 2, n.FrontSide = 'front', n.BackSide = 'back', n.DoubleSide = 'both', n.BothSide = 'both', n.NoShading = 0, n.FlatShading = 1, n.SmoothShading = 2, n.NormalTypeFlat = 'flat', n.NormalTypeSmooth = 'smooth', n.NoColors = 0, n.FaceColors = 1, n.VertexColors = 2, n.NoBlending = 0, n.NormalBlending = 1, n.AdditiveBlending = 2, n.SubtractiveBlending = 3, n.MultiplyBlending = 4, n.CustomBlending = 5, n.AddEquation = 100, n.SubtractEquation = 101, n.ReverseSubtractEquation = 102, n.ZeroFactor = 200, n.OneFactor = 201, n.SrcColorFactor = 202, n.OneMinusSrcColorFactor = 203, n.SrcAlphaFactor = 204, n.OneMinusSrcAlphaFactor = 205, n.DstAlphaFactor = 206, n.OneMinusDstAlphaFactor = 207, n.DstColorFactor = 208, n.OneMinusDstColorFactor = 209, n.SrcAlphaSaturateFactor = 210, n.MultiplyOperation = 0, n.MixOperation = 1, n.AddOperation = 2, n.UVMapping = function() {}, n.CubeReflectionMapping = function() {}, n.CubeRefractionMapping = function() {}, n.SphericalReflectionMapping = function() {}, n.SphericalRefractionMapping = function() {}, n.RepeatWrapping = 'repeat', n.ClampToEdgeWrapping = 'clamp', n.MirroredRepeatWrapping = 'mirrored', n.NearestFilter = 1003, n.NearestMipMapNearestFilter = 1004, n.NearestMipMapLinearFilter = 1005, n.LinearFilter = 1006, n.LinearMipMapNearestFilter = 1007, n.LinearMipMapLinearFilter = 1008, n.UnsignedByteType = 1009, n.ByteType = 1010, n.ShortType = 1011, n.UnsignedShortType = 1012, n.IntType = 1013, n.UnsignedIntType = 1014, n.FloatType = 1015, n.UnsignedShort4444Type = 1016, n.UnsignedShort5551Type = 1017, n.UnsignedShort565Type = 1018, n.AlphaFormat = 1019, n.RGBFormat = 1020, n.RGBAFormat = 1021, n.LuminanceFormat = 1022, n.LuminanceAlphaFormat = 1023, n.RGB_S3TC_DXT1_Format = 2001, n.RGBA_S3TC_DXT1_Format = 2002, n.RGBA_S3TC_DXT3_Format = 2003, n.RGBA_S3TC_DXT5_Format = 2004, n.Gradient_Linear_U = 1, n.Gradient_Linear_V = 2, n.Gradient_Linear_UV = 3, n.Gradient_Linear_NUV = 4, n.Gradient_Linear_Radial = 5, n.Gradient_Linear_Sweep = 6, n.Math = {
    clamp: function(e, t, n) {
      return e < t ? t : e > n ? n : e
    },
    isConcave: function(e, t, n) {
      var r = n ? 1 : -1
      return (e.x * t.y - t.x * e.y) * r < 0 ? !0 : !1
    },
    area: function(e, n, r, i) {
      var s = i ? 1 : -1
      if (!e || !n || !r) return t
      var o = -e.x * n.y - n.x * r.y - r.x * e.y + r.x * n.y + n.x * e.y + e.x * r.y
      return o * s
    },
    isClockwise: function(e, t, n) {
      t = t || 'x', n = n || 'y'
      var r = 0,
        i = e.length
      for (var s = 0; s < i; s++) {
        var o = e[s],
          u = e[s + 1 === i ? 0 : s + 1]
        r += (u[t] - o[t]) * (u[n] + o[n])
      }
      return r < 0
    },
    isClockwise3: function(e, t, n) {
      var r = (new mono.Vec3()).crossVectors(e, t),
        i = (new mono.Vec3()).subVectors(t, e),
        s = (new mono.Vec3()).subVectors(t, e)
    },
    clampBottom: function(e, t) {
      return e < t ? t : e
    },
    mapLinear: function(e, t, n, r, i) {
      return r + (e - t) * (i - r) / (n - t)
    },
    random16: function() {
      return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randInt: function(e, t) {
      return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
      return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
      return e * (0.5 - Math.random())
    },
    sign: function(e) {
      return e < 0 ? -1 : e > 0 ? 1 : 0
    },
    degToRad: function(e) {
      return e * n.Math.__d2r
    },
    radToDeg: function(e) {
      return e * n.Math.__r2d
    },
    smoothstep: function(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e))
    },
    smootherstep: function(e, t, n) {
      return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10))
    },
    PI2: Math.PI * 2,
    generateUUID: (function() {
      var e = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
        t = new Array(36),
        n = 0,
        r
      return function() {
        for (var i = 0; i < 36; i++) i == 8 || i == 13 || i == 18 || i == 23 ? t[i] = '-' : i == 14 ? t[i] = '4' : (n <= 2 && (n = 33554432 + Math.random() * 16777216 | 0), r = n & 15, n >>= 4, t[i] = e[i == 19 ? r & 3 | 8 : r])
        return t.join('')
      }
    }())
  }, n.Math.__d2r = Math.PI / 180, n.Math.__r2d = 180 / Math.PI, n.Quat = function(e, n, r, i) {
    this.x = e || 0, this.y = n || 0, this.z = r || 0, this.w = i !== t ? i : 1
  }, n.Quat.prototype = {
    constructor: n.Quat,
    set: function(e, t, n, r) {
      return this.x = e, this.y = t, this.z = n, this.w = r, this
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w, this
    },
    setFromEuler: function(e, n) {
      var r = Math.cos(e.x / 2),
        i = Math.cos(e.y / 2),
        s = Math.cos(e.z / 2),
        o = Math.sin(e.x / 2),
        u = Math.sin(e.y / 2),
        a = Math.sin(e.z / 2)
      return n === t || n === 'XYZ' ? (this.x = o * i * s + r * u * a, this.y = r * u * s - o * i * a, this.z = r * i * a + o * u * s, this.w = r * i * s - o * u * a) : n === 'YXZ' ? (this.x = o * i * s + r * u * a, this.y = r * u * s - o * i * a, this.z = r * i * a - o * u * s, this.w = r * i * s + o * u * a) : n === 'ZXY' ? (this.x = o * i * s - r * u * a, this.y = r * u * s + o * i * a, this.z = r * i * a + o * u * s, this.w = r * i * s - o * u * a) : n === 'ZYX' ? (this.x = o * i * s - r * u * a, this.y = r * u * s + o * i * a, this.z = r * i * a - o * u * s, this.w = r * i * s + o * u * a) : n === 'YZX' ? (this.x = o * i * s + r * u * a, this.y = r * u * s + o * i * a, this.z = r * i * a - o * u * s, this.w = r * i * s - o * u * a) : n === 'XZY' && (this.x = o * i * s - r * u * a, this.y = r * u * s - o * i * a, this.z = r * i * a + o * u * s, this.w = r * i * s + o * u * a), this
    },
    setFromAxisAngle: function(e, t) {
      var n = t / 2,
        r = Math.sin(n)
      return this.x = e.x * r, this.y = e.y * r, this.z = e.z * r, this.w = Math.cos(n), this
    },
    setFromRotationMatrix: function(e) {
      var t = e.elements,
        n = t[0],
        r = t[4],
        i = t[8],
        s = t[1],
        o = t[5],
        u = t[9],
        a = t[2],
        f = t[6],
        l = t[10],
        c = n + o + l,
        h
      return c > 0 ? (h = 0.5 / Math.sqrt(c + 1), this.w = 0.25 / h, this.x = (f - u) * h, this.y = (i - a) * h, this.z = (s - r) * h) : n > o && n > l ? (h = 2 * Math.sqrt(1 + n - o - l), this.w = (f - u) / h, this.x = 0.25 * h, this.y = (r + s) / h, this.z = (i + a) / h) : o > l ? (h = 2 * Math.sqrt(1 + o - n - l), this.w = (i - a) / h, this.x = (r + s) / h, this.y = 0.25 * h, this.z = (u + f) / h) : (h = 2 * Math.sqrt(1 + l - n - o), this.w = (s - r) / h, this.x = (i + a) / h, this.y = (u + f) / h, this.z = 0.25 * h), this
    },
    inverse: function() {
      return this.conjugate().normalize(), this
    },
    conjugate: function() {
      return this.x *= -1, this.y *= -1, this.z *= -1, this
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    normalize: function() {
      var e = this.length()
      return e === 0 ? (this.x = 0, this.y = 0, this.z = 0, this.w = 1) : (e = 1 / e, this.x = this.x * e, this.y = this.y * e, this.z = this.z * e, this.w = this.w * e), this
    },
    multiply: function(e, n) {
      return n !== t ? (console.warn("DEPRECATED: Quat's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, n)) : this.multiplyQuaternions(this, e)
    },
    multiplyQuaternions: function(e, t) {
      var n = e.x,
        r = e.y,
        i = e.z,
        s = e.w,
        o = t.x,
        u = t.y,
        a = t.z,
        f = t.w
      return this.x = n * f + s * o + r * a - i * u, this.y = r * f + s * u + i * o - n * a, this.z = i * f + s * a + n * u - r * o, this.w = s * f - n * o - r * u - i * a, this
    },
    multiplyVector3: function(e) {
      return console.warn("DEPRECATED: Quat's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( Quat ) instead."), e.applyQuaternion(this)
    },
    slerp: function(e, t) {
      var n = this.x,
        r = this.y,
        i = this.z,
        s = this.w,
        o = s * e.w + n * e.x + r * e.y + i * e.z
      o < 0 ? (this.w = -e.w, this.x = -e.x, this.y = -e.y, this.z = -e.z, o = -o) : this.copy(e)
      if (o >= 1) return this.w = s, this.x = n, this.y = r, this.z = i, this
      var u = Math.acos(o),
        a = Math.sqrt(1 - o * o)
      if (Math.abs(a) < 0.001) return this.w = 0.5 * (s + this.w), this.x = 0.5 * (n + this.x), this.y = 0.5 * (r + this.y), this.z = 0.5 * (i + this.z), this
      var f = Math.sin((1 - t) * u) / a,
        l = Math.sin(t * u) / a
      return this.w = s * f + this.w * l, this.x = n * f + this.x * l, this.y = r * f + this.y * l, this.z = i * f + this.z * l, this
    },
    toEuler: function() {
      var e = this.w * this.w,
        t = this.x * this.x,
        n = this.y * this.y,
        r = this.z * this.z,
        i = 180 / Math.PI * Math.atan2(2 * (this.y * this.z + this.x * this.w), -t - n + r + e),
        s = 180 / Math.PI * Math.asin(-2 * (this.x * this.z - this.y * this.w)),
        o = 180 / Math.PI * Math.atan2(2 * (this.x * this.y + this.z * this.w), t - n - r + e)
      return [i, s, o]
    },
    equals: function(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    clone: function() {
      return new n.Quat(this.x, this.y, this.z, this.w)
    }
  }, n.Quat.slerp = function(e, t, n, r) {
    return n.copy(e).slerp(t, r)
  }
  var s = function(e, t) {
    this.x = e || 0, this.y = t || 0
  }
  s.prototype = {
    constructor: s,
    set: function(e, t) {
      return this.x = e, this.y = t, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t
          break
        case 1:
          this.y = t
          break
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x
        case 1:
          return this.y
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this
    },
    add: function(e, n) {
      return n !== t ? (console.warn("DEPRECATED: Vec2's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, n)) : (this.x += e.x, this.y += e.y, this)
    },
    addVectors: function(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this
    },
    sub: function(e, n) {
      return n !== t ? (console.warn("DEPRECATED: Vec2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, n)) : (this.x -= e.x, this.y -= e.y, this)
    },
    subVectors: function(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this
    },
    multiply: function(e) {
      return this.x *= e.x, this.y *= e.y, this
    },
    divideScalar: function(e) {
      return e !== 0 ? (this.x /= e, this.y /= e) : this.set(0, 0), this
    },
    min: function(e) {
      return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this
    },
    max: function(e) {
      return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this
    },
    clamp: function(e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    distanceTo: function(e) {
      return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
      var t = this.x - e.x,
        n = this.y - e.y
      return t * t + n * n
    },
    setLength: function(e) {
      var t = this.length()
      return t !== 0 && e !== t && this.multiplyScalar(e / t), this
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this
    },
    equals: function(e) {
      return e == null ? !1 : e.x === this.x && e.y === this.y
    },
    clone: function() {
      return new s(this.x, this.y)
    }
  }, n.Vec2 = s
  var o = function(e, t, n) {
    this.x = e || 0, this.y = t || 0, this.z = n || 0
  }
  n.Vec3 = o, o.prototype = {
    set: function(e, t, n) {
      return this.x = e, this.y = t, this.z = n, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setZ: function(e) {
      return this.z = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t
          break
        case 1:
          this.y = t
          break
        case 2:
          this.z = t
          break
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x
        case 1:
          return this.y
        case 2:
          return this.z
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    center: function(e, t) {
      return this.x = (e.x + t.x) / 2, this.y = (e.y + t.y) / 2, this.z = (e.z + t.z) / 2, this
    },
    copy: function(e) {
      return (this == null || e == null) && console.log('TGL.Vec3.copy this : ' + this + ' v : ' + e), this.x = e.x, this.y = e.y, this.z = e.z, this
    },
    add: function(e) {
      return (!this || !e) && console.log('TGL.Vec3.add this : ' + this + ' v : ' + e), this.x += e.x, this.y += e.y, this.z += e.z, this
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this.z += e, this
    },
    addVectors: function(e, t) {
      return (!e || !t) && console.log('TGL.Vec3.addVectors a : ' + e + ' b : ' + t), this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this
    },
    sub: function(e) {
      return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
    },
    subVectors: function(e, t) {
      return (e == null || t == null) && console.log('null'), this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this
    },
    multiply: function(e) {
      return this.x *= e.x, this.y *= e.y, this.z *= e.z, this
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this.z *= e, this
    },
    multiplyVectors: function(e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this
    },
    applyMatrix3: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements
      return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this
    },
    applyMatrix4: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements
      return this.x = i[0] * t + i[4] * n + i[8] * r + i[12], this.y = i[1] * t + i[5] * n + i[9] * r + i[13], this.z = i[2] * t + i[6] * n + i[10] * r + i[14], this
    },
    applyProjection: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z,
        i = e.elements,
        s = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15])
      return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * s, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * s, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * s, this
    },
    applyQuaternion: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z,
        i = e.x,
        s = e.y,
        o = e.z,
        u = e.w,
        a = u * t + s * r - o * n,
        f = u * n + o * t - i * r,
        l = u * r + i * n - s * t,
        c = -i * t - s * n - o * r
      return this.x = a * u + c * -i + f * -o - l * -s, this.y = f * u + c * -s + l * -i - a * -o, this.z = l * u + c * -o + a * -s - f * -i, this
    },
    applyEuler: function(e, t) {
      var n = o.__q1.setFromEuler(e, t)
      return this.applyQuaternion(n), this
    },
    applyAxisAngle: function(e, t) {
      var n = o.__q1.setFromAxisAngle(e, t)
      return this.applyQuaternion(n), this
    },
    divide: function(e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this
    },
    divideScalar: function(e) {
      return e !== 0 ? (this.x /= e, this.y /= e, this.z /= e) : (this.x = 0, this.y = 0, this.z = 0), this
    },
    min: function(e) {
      return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this
    },
    max: function(e) {
      return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this
    },
    clamp: function(e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    setLength: function(e) {
      var t = this.length()
      return t !== 0 && e !== t && this.multiplyScalar(e / t), this
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this
    },
    lerpVectors: function(e, t, n) {
      return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this
    },
    cross: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z
      return this.x = n * e.z - r * e.y, this.y = r * e.x - t * e.z, this.z = t * e.y - n * e.x, this
    },
    crossVectors: function(e, t) {
      return this.x = e.y * t.z - e.z * t.y, this.y = e.z * t.x - e.x * t.z, this.z = e.x * t.y - e.y * t.x, this
    },
    angleTo: function(e) {
      return Math.acos(this.dot(e) / this.length() / e.length())
    },
    distanceTo: function(e) {
      return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
      var t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z
      return t * t + n * n + r * r
    },
    getPositionFromMatrix: function(e) {
      return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
    },
    setEulerFromRotationMatrix: function(e, n) {
      function r(e) {
        return Math.min(Math.max(e, -1), 1)
      }
      var i = e.elements,
        s = i[0],
        o = i[4],
        u = i[8],
        a = i[1],
        f = i[5],
        l = i[9],
        c = i[2],
        h = i[6],
        p = i[10]
      return n === t || n === 'XYZ' ? (this.y = Math.asin(r(u)), Math.abs(u) < 0.99999 ? (this.x = Math.atan2(-l, p), this.z = Math.atan2(-o, s)) : (this.x = Math.atan2(h, f), this.z = 0)) : n === 'YXZ' ? (this.x = Math.asin(-r(l)), Math.abs(l) < 0.99999 ? (this.y = Math.atan2(u, p), this.z = Math.atan2(a, f)) : (this.y = Math.atan2(-c, s), this.z = 0)) : n === 'ZXY' ? (this.x = Math.asin(r(h)), Math.abs(h) < 0.99999 ? (this.y = Math.atan2(-c, p), this.z = Math.atan2(-o, f)) : (this.y = 0, this.z = Math.atan2(a, s))) : n === 'ZYX' ? (this.y = Math.asin(-r(c)), Math.abs(c) < 0.99999 ? (this.x = Math.atan2(h, p), this.z = Math.atan2(a, s)) : (this.x = 0, this.z = Math.atan2(-o, f))) : n === 'YZX' ? (this.z = Math.asin(r(a)), Math.abs(a) < 0.99999 ? (this.x = Math.atan2(-l, f), this.y = Math.atan2(-c, s)) : (this.x = 0, this.y = Math.atan2(u, p))) : n === 'XZY' && (this.z = Math.asin(-r(o)), Math.abs(o) < 0.99999 ? (this.x = Math.atan2(h, f), this.y = Math.atan2(u, s)) : (this.x = Math.atan2(-l, p), this.y = 0)), this
    },
    setEulerFromQuaternion: function(e, n) {
      function r(e) {
        return Math.min(Math.max(e, -1), 1)
      }
      var i = e.x * e.x,
        s = e.y * e.y,
        o = e.z * e.z,
        u = e.w * e.w
      return n === t || n === 'XYZ' ? (this.x = Math.atan2(2 * (e.x * e.w - e.y * e.z), u - i - s + o), this.y = Math.asin(r(2 * (e.x * e.z + e.y * e.w))), this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), u + i - s - o)) : n === 'YXZ' ? (this.x = Math.asin(r(2 * (e.x * e.w - e.y * e.z))), this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), u - i - s + o), this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), u - i + s - o)) : n === 'ZXY' ? (this.x = Math.asin(r(2 * (e.x * e.w + e.y * e.z))), this.y = Math.atan2(2 * (e.y * e.w - e.z * e.x), u - i - s + o), this.z = Math.atan2(2 * (e.z * e.w - e.x * e.y), u - i + s - o)) : n === 'ZYX' ? (this.x = Math.atan2(2 * (e.x * e.w + e.z * e.y), u - i - s + o), this.y = Math.asin(r(2 * (e.y * e.w - e.x * e.z))), this.z = Math.atan2(2 * (e.x * e.y + e.z * e.w), u + i - s - o)) : n === 'YZX' ? (this.x = Math.atan2(2 * (e.x * e.w - e.z * e.y), u - i + s - o), this.y = Math.atan2(2 * (e.y * e.w - e.x * e.z), u + i - s - o), this.z = Math.asin(r(2 * (e.x * e.y + e.z * e.w)))) : n === 'XZY' && (this.x = Math.atan2(2 * (e.x * e.w + e.y * e.z), u - i + s - o), this.y = Math.atan2(2 * (e.x * e.z + e.y * e.w), u + i - s - o), this.z = Math.asin(r(2 * (e.z * e.w - e.x * e.y)))), this
    },
    getScaleFromMatrix: function(e) {
      var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
        n = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
        r = this.set(e.elements[8], e.elements[9], e.elements[10]).length()
      return this.x = t, this.y = n, this.z = r, this
    },
    toString: function() {
      return this.x + '_' + this.y + '_' + this.z
    },
    equals: function(e) {
      return e == null ? !1 : e.x === this.x && e.y === this.y && e.z === this.z
    },
    clone: function() {
      return new o(this.x, this.y, this.z)
    },
    setFromMatrixPosition: function(e) {
      return this.x = e.elements[12], this.y = e.elements[13], this.z = e.elements[14], this
    },
    rotateFromAxisAndCenter: function(e, t, r) {
      var i = (new n.Mat4()).makeRotationAxisAndCenter(e, t, r)
      return this.applyMatrix4(i), this
    },
    rotationTowards: function(e, t) {
      var r = (new n.Mat4()).rotationTowards(e, t)
      return this.setEulerFromRotationMatrix(r), this
    },
    constructor: n.Vec3
  }, o.__q1 = new n.Quat(), n.Vec4 = function(e, n, r, i) {
    this.x = e || 0, this.y = n || 0, this.z = r || 0, this.w = i !== t ? i : 1
  }, n.Vec4.prototype = {
    constructor: n.Vec4,
    set: function(e, t, n, r) {
      return this.x = e, this.y = t, this.z = n, this.w = r, this
    },
    setX: function(e) {
      return this.x = e, this
    },
    setY: function(e) {
      return this.y = e, this
    },
    setZ: function(e) {
      return this.z = e, this
    },
    setW: function(e) {
      return this.w = e, this
    },
    setComponent: function(e, t) {
      switch (e) {
        case 0:
          this.x = t
          break
        case 1:
          this.y = t
          break
        case 2:
          this.z = t
          break
        case 3:
          this.w = t
          break
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    getComponent: function(e) {
      switch (e) {
        case 0:
          return this.x
        case 1:
          return this.y
        case 2:
          return this.z
        case 3:
          return this.w
        default:
          throw new Error('index is out of range: ' + e)
      }
    },
    copy: function(e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== t ? e.w : 1, this
    },
    add: function(e, n) {
      return n !== t ? (console.warn("DEPRECATED: Vec4's .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, n)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    },
    addScalar: function(e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this
    },
    addVectors: function(e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this
    },
    sub: function(e, n) {
      return n !== t ? (console.warn("DEPRECATED: Vec4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, n)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    },
    subVectors: function(e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this
    },
    multiplyScalar: function(e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this
    },
    applyMatrix4: function(e) {
      var t = this.x,
        n = this.y,
        r = this.z,
        i = this.w,
        s = e.elements
      return this.x = s[0] * t + s[4] * n + s[8] * r + s[12] * i, this.y = s[1] * t + s[5] * n + s[9] * r + s[13] * i, this.z = s[2] * t + s[6] * n + s[10] * r + s[14] * i, this.w = s[3] * t + s[7] * n + s[11] * r + s[15] * i, this
    },
    divideScalar: function(e) {
      return e !== 0 ? (this.x /= e, this.y /= e, this.z /= e, this.w /= e) : (this.x = 0, this.y = 0, this.z = 0, this.w = 1), this
    },
    min: function(e) {
      return this.x > e.x && (this.x = e.x), this.y > e.y && (this.y = e.y), this.z > e.z && (this.z = e.z), this.w > e.w && (this.w = e.w), this
    },
    max: function(e) {
      return this.x < e.x && (this.x = e.x), this.y < e.y && (this.y = e.y), this.z < e.z && (this.z = e.z), this.w < e.w && (this.w = e.w), this
    },
    clamp: function(e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x), this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y), this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z), this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w), this
    },
    negate: function() {
      return this.multiplyScalar(-1)
    },
    dot: function(e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    },
    lengthSq: function() {
      return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
      return this.divideScalar(this.length())
    },
    setLength: function(e) {
      var t = this.length()
      return t !== 0 && e !== t && this.multiplyScalar(e / t), this
    },
    lerp: function(e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this
    },
    equals: function(e) {
      return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    clone: function() {
      return new n.Vec4(this.x, this.y, this.z, this.w)
    },
    setAxisAngleFromQuaternion: function(e) {
      this.w = 2 * Math.acos(e.w)
      var t = Math.sqrt(1 - e.w * e.w)
      return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this
    },
    setAxisAngleFromRotationMatrix: function(e) {
      var t, n, r, i, s = 0.01,
        o = 0.1,
        u = e.elements,
        a = u[0],
        f = u[4],
        l = u[8],
        c = u[1],
        h = u[5],
        p = u[9],
        d = u[2],
        v = u[6],
        m = u[10]
      if (Math.abs(f - c) < s && Math.abs(l - d) < s && Math.abs(p - v) < s) {
        if (Math.abs(f + c) < o && Math.abs(l + d) < o && Math.abs(p + v) < o && Math.abs(a + h + m - 3) < o) return this.set(1, 0, 0, 0), this
        t = Math.PI
        var g = (a + 1) / 2,
          y = (h + 1) / 2,
          b = (m + 1) / 2,
          w = (f + c) / 4,
          E = (l + d) / 4,
          S = (p + v) / 4
        return g > y && g > b ? g < s ? (n = 0, r = 0.707106781, i = 0.707106781) : (n = Math.sqrt(g), r = w / n, i = E / n) : y > b ? y < s ? (n = 0.707106781, r = 0, i = 0.707106781) : (r = Math.sqrt(y), n = w / r, i = S / r) : b < s ? (n = 0.707106781, r = 0.707106781, i = 0) : (i = Math.sqrt(b), n = E / i, r = S / i), this.set(n, r, i, t), this
      }
      var x = Math.sqrt((v - p) * (v - p) + (l - d) * (l - d) + (c - f) * (c - f))
      return Math.abs(x) < 0.001 && (x = 1), this.x = (v - p) / x, this.y = (l - d) / x, this.z = (c - f) / x, this.w = Math.acos((a + h + m - 1) / 2), this
    }
  }
  var f = function(e, n, r, i, s, o, u, a, f) {
    this.elements = new Float32Array(9), this.set(e !== t ? e : 1, n || 0, r || 0, i || 0, s !== t ? s : 1, o || 0, u || 0, a || 0, f !== t ? f : 1)
  }
  f.prototype = {
    constructor: f,
    set: function(e, t, n, r, i, s, o, u, a) {
      var f = this.elements
      return f[0] = e, f[3] = t, f[6] = n, f[1] = r, f[4] = i, f[7] = s, f[2] = o, f[5] = u, f[8] = a, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
    },
    copy: function(e) {
      var t = e.elements
      return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]), this
    },
    multiplyVector3: function(e) {
      return console.warn("DEPRECATED: Mat3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), e.applyMatrix3(this)
    },
    multiplyVector3Array: (function() {
      var e = new o()
      return function(t) {
        for (var n = 0, r = t.length; n < r; n += 3) e.x = t[n], e.y = t[n + 1], e.z = t[n + 2], e.applyMatrix3(this), t[n] = e.x, t[n + 1] = e.y, t[n + 2] = e.z
        return t
      }
    }()),
    multiplyScalar: function(e) {
      var t = this.elements
      return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this
    },
    determinant: function() {
      var e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[3],
        s = e[4],
        o = e[5],
        u = e[6],
        a = e[7],
        f = e[8]
      return t * s * f - t * o * a - n * i * f + n * o * u + r * i * a - r * s * u
    },
    getInverse: function(e, t) {
      var n = e.elements,
        r = this.elements
      r[0] = n[10] * n[5] - n[6] * n[9], r[1] = -n[10] * n[1] + n[2] * n[9], r[2] = n[6] * n[1] - n[2] * n[5], r[3] = -n[10] * n[4] + n[6] * n[8], r[4] = n[10] * n[0] - n[2] * n[8], r[5] = -n[6] * n[0] + n[2] * n[4], r[6] = n[9] * n[4] - n[5] * n[8], r[7] = -n[9] * n[0] + n[1] * n[8], r[8] = n[5] * n[0] - n[1] * n[4]
      var i = n[0] * r[0] + n[1] * r[3] + n[2] * r[6]
      if (i === 0) {
        var s = "Mat3.getInverse(): can't invert matrix, determinant is 0"
        if (t || !1) throw new Error(s)
        return console.warn(s), this.identity(), this
      }
      return this.multiplyScalar(1 / i), this
    },
    transpose: function() {
      var e, t = this.elements
      return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
    },
    getNormalMatrix: function(e) {
      return this.getInverse(e).transpose(), this
    },
    transposeIntoArray: function(e) {
      var t = this.elements
      return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this
    },
    clone: function() {
      var e = this.elements
      return new f(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8])
    }
  }, n.Mat3 = f
  var l = function(e, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m) {
    this.elements = new Float32Array(16), this.set(e !== t ? e : 1, n || 0, r || 0, i || 0, s || 0, o !== t ? o : 1, u || 0, a || 0, f || 0, l || 0, c !== t ? c : 1, h || 0, p || 0, d || 0, v || 0, m !== t ? m : 1)
  }
  l.prototype = {
    constructor: l,
    set: function(e, t, n, r, i, s, o, u, a, f, l, c, h, p, d, v) {
      var m = this.elements
      return m[0] = e, m[4] = t, m[8] = n, m[12] = r, m[1] = i, m[5] = s, m[9] = o, m[13] = u, m[2] = a, m[6] = f, m[10] = l, m[14] = c, m[3] = h, m[7] = p, m[11] = d, m[15] = v, this
    },
    identity: function() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    copy: function(e) {
      var t = e.elements
      return this.set(t[0], t[4], t[8], t[12], t[1], t[5], t[9], t[13], t[2], t[6], t[10], t[14], t[3], t[7], t[11], t[15]), this
    },
    setRotationFromEuler: function(e, n) {
      var r = this.elements,
        i = e.x,
        s = e.y,
        o = e.z,
        u = Math.cos(i),
        a = Math.sin(i),
        f = Math.cos(s),
        l = Math.sin(s),
        c = Math.cos(o),
        h = Math.sin(o)
      if (n === t || n === 'XYZ') {
        var p = u * c,
          d = u * h,
          v = a * c,
          m = a * h
        r[0] = f * c, r[4] = -f * h, r[8] = l, r[1] = d + v * l, r[5] = p - m * l, r[9] = -a * f, r[2] = m - p * l, r[6] = v + d * l, r[10] = u * f
      } else if (n === 'YXZ') {
        var g = f * c,
          y = f * h,
          b = l * c,
          w = l * h
        r[0] = g + w * a, r[4] = b * a - y, r[8] = u * l, r[1] = u * h, r[5] = u * c, r[9] = -a, r[2] = y * a - b, r[6] = w + g * a, r[10] = u * f
      } else if (n === 'ZXY') {
        var g = f * c,
          y = f * h,
          b = l * c,
          w = l * h
        r[0] = g - w * a, r[4] = -u * h, r[8] = b + y * a, r[1] = y + b * a, r[5] = u * c, r[9] = w - g * a, r[2] = -u * l, r[6] = a, r[10] = u * f
      } else if (n === 'ZYX') {
        var p = u * c,
          d = u * h,
          v = a * c,
          m = a * h
        r[0] = f * c, r[4] = v * l - d, r[8] = p * l + m, r[1] = f * h, r[5] = m * l + p, r[9] = d * l - v, r[2] = -l, r[6] = a * f, r[10] = u * f
      } else if (n === 'YZX') {
        var E = u * f,
          S = u * l,
          x = a * f,
          T = a * l
        r[0] = f * c, r[4] = T - E * h, r[8] = x * h + S, r[1] = h, r[5] = u * c, r[9] = -a * c, r[2] = -l * c, r[6] = S * h + x, r[10] = E - T * h
      } else if (n === 'XZY') {
        var E = u * f,
          S = u * l,
          x = a * f,
          T = a * l
        r[0] = f * c, r[4] = -h, r[8] = l * c, r[1] = E * h + T, r[5] = u * c, r[9] = S * h - x, r[2] = x * h - S, r[6] = a * c, r[10] = T * h + E
      }
      return this
    },
    setRotationFromQuaternion: function(e) {
      var t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        s = e.w,
        o = n + n,
        u = r + r,
        a = i + i,
        f = n * o,
        l = n * u,
        c = n * a,
        h = r * u,
        p = r * a,
        d = i * a,
        v = s * o,
        m = s * u,
        g = s * a
      return t[0] = 1 - (h + d), t[4] = l - g, t[8] = c + m, t[1] = l + g, t[5] = 1 - (f + d), t[9] = p - v, t[2] = c - m, t[6] = p + v, t[10] = 1 - (f + h), this
    },
    lookAt: function(e, t, n) {
      var r = this.elements,
        i = l.__v1,
        s = l.__v2,
        o = l.__v3
      return o.subVectors(e, t).normalize(), o.length() === 0 && (o.z = 1), i.crossVectors(n, o).normalize(), i.length() === 0 && (o.x += 1e-4, i.crossVectors(n, o).normalize()), s.crossVectors(o, i), r[0] = i.x, r[1] = i.y, r[2] = i.z, r[4] = s.x, r[5] = s.y, r[6] = s.z, r[8] = o.x, r[9] = o.y, r[10] = o.z, this
    },
    multiply: function(e, n) {
      return n !== t ? this.multiplyMatrices(e, n) : this.multiplyMatrices(this, e)
    },
    multiplyMatrices: function(e, t) {
      var n = e.elements,
        r = t.elements,
        i = this.elements,
        s = n[0],
        o = n[4],
        u = n[8],
        a = n[12],
        f = n[1],
        l = n[5],
        c = n[9],
        h = n[13],
        p = n[2],
        d = n[6],
        v = n[10],
        m = n[14],
        g = n[3],
        y = n[7],
        b = n[11],
        w = n[15],
        E = r[0],
        S = r[4],
        x = r[8],
        T = r[12],
        N = r[1],
        C = r[5],
        k = r[9],
        L = r[13],
        A = r[2],
        O = r[6],
        M = r[10],
        _ = r[14],
        D = r[3],
        P = r[7],
        H = r[11],
        B = r[15]
      return i[0] = s * E + o * N + u * A + a * D, i[4] = s * S + o * C + u * O + a * P, i[8] = s * x + o * k + u * M + a * H, i[12] = s * T + o * L + u * _ + a * B, i[1] = f * E + l * N + c * A + h * D, i[5] = f * S + l * C + c * O + h * P, i[9] = f * x + l * k + c * M + h * H, i[13] = f * T + l * L + c * _ + h * B, i[2] = p * E + d * N + v * A + m * D, i[6] = p * S + d * C + v * O + m * P, i[10] = p * x + d * k + v * M + m * H, i[14] = p * T + d * L + v * _ + m * B, i[3] = g * E + y * N + b * A + w * D, i[7] = g * S + y * C + b * O + w * P, i[11] = g * x + y * k + b * M + w * H, i[15] = g * T + y * L + b * _ + w * B, this
    },
    multiplyToArray: function(e, t, n) {
      var r = this.elements
      return this.multiplyMatrices(e, t), n[0] = r[0], n[1] = r[1], n[2] = r[2], n[3] = r[3], n[4] = r[4], n[5] = r[5], n[6] = r[6], n[7] = r[7], n[8] = r[8], n[9] = r[9], n[10] = r[10], n[11] = r[11], n[12] = r[12], n[13] = r[13], n[14] = r[14], n[15] = r[15], this
    },
    multiplyScalar: function(e) {
      var t = this.elements
      return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this
    },
    multiplyVector3: function(e) {
      return e.applyProjection(this)
    },
    multiplyVector4: function(e) {
      return e.applyMatrix4(this)
    },
    multiplyVector3Array: function(e) {
      var t = l.__v1
      for (var n = 0, r = e.length; n < r; n += 3) t.x = e[n], t.y = e[n + 1], t.z = e[n + 2], t.applyProjection(this), e[n] = t.x, e[n + 1] = t.y, e[n + 2] = t.z
      return e
    },
    rotateAxis: function(e) {
      var t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z
      return e.x = n * t[0] + r * t[4] + i * t[8], e.y = n * t[1] + r * t[5] + i * t[9], e.z = n * t[2] + r * t[6] + i * t[10], e.normalize(), e
    },
    crossVector: function(e) {
      var t = this.elements,
        r = new n.Vector4()
      return r.x = t[0] * e.x + t[4] * e.y + t[8] * e.z + t[12] * e.w, r.y = t[1] * e.x + t[5] * e.y + t[9] * e.z + t[13] * e.w, r.z = t[2] * e.x + t[6] * e.y + t[10] * e.z + t[14] * e.w, r.w = e.w ? t[3] * e.x + t[7] * e.y + t[11] * e.z + t[15] * e.w : 1, r
    },
    determinant: function() {
      var e = this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        i = e[12],
        s = e[1],
        o = e[5],
        u = e[9],
        a = e[13],
        f = e[2],
        l = e[6],
        c = e[10],
        h = e[14],
        p = e[3],
        d = e[7],
        v = e[11],
        m = e[15]
      return p * (+i * u * l - r * a * l - i * o * c + n * a * c + r * o * h - n * u * h) + d * (+t * u * h - t * a * c + i * s * c - r * s * h + r * a * f - i * u * f) + v * (+t * a * l - t * o * h - i * s * l + n * s * h + i * o * f - n * a * f) + m * (-r * o * f - t * u * l + t * o * c + r * s * l - n * s * c + n * u * f)
    },
    transpose: function() {
      var e = this.elements,
        t
      return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
    },
    flattenToArray: function(e) {
      var t = this.elements
      return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], e
    },
    flattenToArrayOffset: function(e, t) {
      var n = this.elements
      return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e
    },
    getPosition: function() {
      var e = this.elements
      return (new o()).set(e[12], e[13], e[14])
    },
    setPosition: function(e) {
      var t = this.elements
      return t[12] = e.x, t[13] = e.y, t[14] = e.z, this
    },
    getColumnX: function() {
      var e = this.elements
      return l.__v1.set(e[0], e[1], e[2])
    },
    getColumnY: function() {
      var e = this.elements
      return l.__v1.set(e[4], e[5], e[6])
    },
    getColumnZ: function() {
      var e = this.elements
      return l.__v1.set(e[8], e[9], e[10])
    },
    getInverse: function(e, t) {
      var n = this.elements,
        r = e.elements,
        i = r[0],
        s = r[4],
        o = r[8],
        u = r[12],
        a = r[1],
        f = r[5],
        l = r[9],
        c = r[13],
        h = r[2],
        p = r[6],
        d = r[10],
        v = r[14],
        m = r[3],
        g = r[7],
        y = r[11],
        b = r[15]
      n[0] = l * v * g - c * d * g + c * p * y - f * v * y - l * p * b + f * d * b, n[4] = u * d * g - o * v * g - u * p * y + s * v * y + o * p * b - s * d * b, n[8] = o * c * g - u * l * g + u * f * y - s * c * y - o * f * b + s * l * b, n[12] = u * l * p - o * c * p - u * f * d + s * c * d + o * f * v - s * l * v, n[1] = c * d * m - l * v * m - c * h * y + a * v * y + l * h * b - a * d * b, n[5] = o * v * m - u * d * m + u * h * y - i * v * y - o * h * b + i * d * b, n[9] = u * l * m - o * c * m - u * a * y + i * c * y + o * a * b - i * l * b, n[13] = o * c * h - u * l * h + u * a * d - i * c * d - o * a * v + i * l * v, n[2] = f * v * m - c * p * m + c * h * g - a * v * g - f * h * b + a * p * b, n[6] = u * p * m - s * v * m - u * h * g + i * v * g + s * h * b - i * p * b, n[10] = s * c * m - u * f * m + u * a * g - i * c * g - s * a * b + i * f * b, n[14] = u * f * h - s * c * h - u * a * p + i * c * p + s * a * v - i * f * v, n[3] = l * p * m - f * d * m - l * h * g + a * d * g + f * h * y - a * p * y, n[7] = s * d * m - o * p * m + o * h * g - i * d * g - s * h * y + i * p * y, n[11] = o * f * m - s * l * m - o * a * g + i * l * g + s * a * y - i * f * y, n[15] = s * l * h - o * f * h + o * a * p - i * l * p - s * a * d + i * f * d
      var w = r[0] * n[0] + r[1] * n[4] + r[2] * n[8] + r[3] * n[12]
      if (w == 0) {
        var E = "Mat4.getInverse(): can't invert matrix, determinant is 0"
        if (t || !1) throw new Error(E)
        return console.warn(E), this.identity(), this
      }
      return this.multiplyScalar(1 / w), this
    },
    compose: function(e, t, n) {
      var r = this.elements,
        i = l.__m1,
        s = l.__m2
      return i.identity(), i.setRotationFromQuaternion(t), s.makeScale(n.x, n.y, n.z), this.multiplyMatrices(i, s), r[12] = e.x, r[13] = e.y, r[14] = e.z, this
    },
    decompose: function(e, t, r) {
      var i = this.elements,
        s = l.__v1,
        u = l.__v2,
        a = l.__v3
      s.set(i[0], i[1], i[2]), u.set(i[4], i[5], i[6]), a.set(i[8], i[9], i[10]), e = e instanceof o ? e : new o(), t = t instanceof n.Quat ? t : new n.Quat(), r = r instanceof o ? r : new o(), r.x = s.length(), r.y = u.length(), r.z = a.length(), e.x = i[12], e.y = i[13], e.z = i[14]
      var f = l.__m1
      return f.copy(this), f.elements[0] /= r.x, f.elements[1] /= r.x, f.elements[2] /= r.x, f.elements[4] /= r.y, f.elements[5] /= r.y, f.elements[6] /= r.y, f.elements[8] /= r.z, f.elements[9] /= r.z, f.elements[10] /= r.z, t.setFromRotationMatrix(f), [e, t, r]
    },
    extractPosition: function(e) {
      var t = this.elements,
        n = e.elements
      return t[12] = n[12], t[13] = n[13], t[14] = n[14], this
    },
    extractRotation: function(e) {
      var t = this.elements,
        n = e.elements,
        r = l.__v1,
        i = 1 / r.set(n[0], n[1], n[2]).length(),
        s = 1 / r.set(n[4], n[5], n[6]).length(),
        o = 1 / r.set(n[8], n[9], n[10]).length()
      return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, this
    },
    translate: function(e) {
      var t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z
      return t[12] = t[0] * n + t[4] * r + t[8] * i + t[12], t[13] = t[1] * n + t[5] * r + t[9] * i + t[13], t[14] = t[2] * n + t[6] * r + t[10] * i + t[14], t[15] = t[3] * n + t[7] * r + t[11] * i + t[15], this
    },
    rotateX: function(e) {
      var t = this.elements,
        n = t[4],
        r = t[5],
        i = t[6],
        s = t[7],
        o = t[8],
        u = t[9],
        a = t[10],
        f = t[11],
        l = Math.cos(e),
        c = Math.sin(e)
      return t[4] = l * n + c * o, t[5] = l * r + c * u, t[6] = l * i + c * a, t[7] = l * s + c * f, t[8] = l * o - c * n, t[9] = l * u - c * r, t[10] = l * a - c * i, t[11] = l * f - c * s, this
    },
    rotateY: function(e) {
      var t = this.elements,
        n = t[0],
        r = t[1],
        i = t[2],
        s = t[3],
        o = t[8],
        u = t[9],
        a = t[10],
        f = t[11],
        l = Math.cos(e),
        c = Math.sin(e)
      return t[0] = l * n - c * o, t[1] = l * r - c * u, t[2] = l * i - c * a, t[3] = l * s - c * f, t[8] = l * o + c * n, t[9] = l * u + c * r, t[10] = l * a + c * i, t[11] = l * f + c * s, this
    },
    rotateZ: function(e) {
      var t = this.elements,
        n = t[0],
        r = t[1],
        i = t[2],
        s = t[3],
        o = t[4],
        u = t[5],
        a = t[6],
        f = t[7],
        l = Math.cos(e),
        c = Math.sin(e)
      return t[0] = l * n + c * o, t[1] = l * r + c * u, t[2] = l * i + c * a, t[3] = l * s + c * f, t[4] = l * o - c * n, t[5] = l * u - c * r, t[6] = l * a - c * i, t[7] = l * f - c * s, this
    },
    rotateByAxis: function(e, t) {
      var n = this.elements
      if (e.x === 1 && e.y === 0 && e.z === 0) return this.rotateX(t)
      if (e.x === 0 && e.y === 1 && e.z === 0) return this.rotateY(t)
      if (e.x === 0 && e.y === 0 && e.z === 1) return this.rotateZ(t)
      var r = e.x,
        i = e.y,
        s = e.z,
        o = Math.sqrt(r * r + i * i + s * s)
      r /= o, i /= o, s /= o
      var u = r * r,
        a = i * i,
        f = s * s,
        l = Math.cos(t),
        c = Math.sin(t),
        h = 1 - l,
        p = r * i * h,
        d = r * s * h,
        v = i * s * h,
        m = r * c,
        g = i * c,
        y = s * c,
        b = u + (1 - u) * l,
        w = p + y,
        E = d - g,
        S = p - y,
        x = a + (1 - a) * l,
        T = v + m,
        N = d + g,
        C = v - m,
        k = f + (1 - f) * l,
        L = n[0],
        A = n[1],
        O = n[2],
        M = n[3],
        _ = n[4],
        D = n[5],
        P = n[6],
        H = n[7],
        B = n[8],
        j = n[9],
        F = n[10],
        I = n[11],
        q = n[12],
        R = n[13],
        U = n[14],
        z = n[15]
      return n[0] = b * L + w * _ + E * B, n[1] = b * A + w * D + E * j, n[2] = b * O + w * P + E * F, n[3] = b * M + w * H + E * I, n[4] = S * L + x * _ + T * B, n[5] = S * A + x * D + T * j, n[6] = S * O + x * P + T * F, n[7] = S * M + x * H + T * I, n[8] = N * L + C * _ + k * B, n[9] = N * A + C * D + k * j, n[10] = N * O + C * P + k * F, n[11] = N * M + C * H + k * I, this
    },
    scale: function(e) {
      var t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z
      return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this
    },
    getMaxScaleOnAxis: function() {
      var e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]
      return Math.sqrt(Math.max(t, Math.max(n, r)))
    },
    makeTranslation: function(e, t, n) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this
    },
    makeRotationX: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e)
      return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this
    },
    makeRotationY: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e)
      return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this
    },
    makeRotationZ: function(e) {
      var t = Math.cos(e),
        n = Math.sin(e)
      return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
    },
    makeRotationAxis: function(e, t) {
      var n = Math.cos(t),
        r = Math.sin(t),
        i = 1 - n,
        s = e.x,
        o = e.y,
        u = e.z,
        a = i * s,
        f = i * o
      return this.set(a * s + n, a * o - r * u, a * u + r * o, 0, a * o + r * u, f * o + n, f * u - r * s, 0, a * u - r * o, f * u + r * s, i * u * u + n, 0, 0, 0, 0, 1), this
    },
    makeScale: function(e, t, n) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this
    },
    makeFrustum: function(e, t, n, r, i, s) {
      var o = this.elements,
        u = 2 * i / (t - e),
        a = 2 * i / (r - n),
        f = (t + e) / (t - e),
        l = (r + n) / (r - n),
        c = -(s + i) / (s - i),
        h = -2 * s * i / (s - i)
      return o[0] = u, o[4] = 0, o[8] = f, o[12] = 0, o[1] = 0, o[5] = a, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = c, o[14] = h, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
    },
    makePerspective: function(e, t, r, i) {
      var s = r * Math.tan(n.Math.degToRad(e * 0.5)),
        o = -s,
        u = o * t,
        a = s * t
      return this.makeFrustum(u, a, o, s, r, i)
    },
    makeOrthographic: function(e, t, n, r, i, s) {
      var o = this.elements,
        u = t - e,
        a = n - r,
        f = s - i,
        l = (t + e) / u,
        c = (n + r) / a,
        h = (s + i) / f
      return o[0] = 2 / u, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 / a, o[9] = 0, o[13] = -c, o[2] = 0, o[6] = 0, o[10] = -2 / f, o[14] = -h, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
    },
    clone: function() {
      var e = this.elements
      return new l(e[0], e[4], e[8], e[12], e[1], e[5], e[9], e[13], e[2], e[6], e[10], e[14], e[3], e[7], e[11], e[15])
    },
    makeRotationFromQuaternion: function(e) {
      var t = this.elements,
        n = e.x,
        r = e.y,
        i = e.z,
        s = e.w,
        o = n + n,
        u = r + r,
        a = i + i,
        f = n * o,
        l = n * u,
        c = n * a,
        h = r * u,
        p = r * a,
        d = i * a,
        v = s * o,
        m = s * u,
        g = s * a
      return t[0] = 1 - (h + d), t[4] = l - g, t[8] = c + m, t[1] = l + g, t[5] = 1 - (f + d), t[9] = p - v, t[2] = c - m, t[6] = p + v, t[10] = 1 - (f + h), t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this
    },
    getEulerAngles: function() {
      var e = (new l()).extractRotation(this).elements,
        t = e[0],
        n = e[1],
        r = e[2],
        i = e[5],
        s = e[6],
        u = e[10],
        a = Math.atan2(s, u),
        f = Math.atan2(-r, Math.sqrt(t * t + n * n)),
        c = Math.sin(a),
        h = Math.cos(a),
        p = Math.atan2(c * e[8] - h * e[4], h * i - c * e[9])
      return new o(a, f, p)
    },
    makeRotationAxisAndCenter: function(e, t, n) {
      var r = Math.cos(t),
        i = Math.sin(t),
        s = 1 - r,
        o = e.x,
        u = e.y,
        a = e.z,
        f = s * o,
        l = s * u,
        c = n.x,
        h = n.y,
        p = n.z,
        d = this,
        v = new Float32Array(16)
      return v[0] = f * o + r, v[4] = f * u - i * a, v[8] = f * a + i * u, v[12] = c - c * (f * o + r) - h * (f * u - i * a) - p * (f * a + i * u), v[1] = f * u + i * a, v[5] = l * u + r, v[9] = l * a - i * o, v[13] = h - c * (f * u + i * a) - h * (l * u + r) - p * (l * a - i * o), v[2] = f * a - i * u, v[6] = l * a + i * o, v[10] = s * a * a + r, v[14] = p - c * (f * a - i * u) - h * (l * a + i * o) - p * (s * a * a + r), v[3] = 0, v[7] = 0, v[11] = 0, v[15] = 1, d.elements = v, d
    },
    rotationTowards: function(e, t) {
      var r = Math.acos(t.dot(e) / t.length() / e.length()),
        i = (new n.Vec3()).crossVectors(t, e).normalize()
      return this.makeRotationAxis(i, -r), this
    },
    equals: function(e) {
      if (e instanceof l) {
        for (var t = 0; t < this.elements.length; t++) {
          if (Math.abs(this.elements[t] - e.elements[t]) > 1e-4) return !1
        }
        return !0
      }
    }
  }, l.__v1 = new o(), l.__v2 = new o(), l.__v3 = new o(), l.__m1 = new l(), l.__m2 = new l(), n.Mat4 = l, n.Euler = function(e, t, r, i) {
    this._x = e || 0, this._y = t || 0, this._z = r || 0, this._order = i || n.Euler.DefaultOrder
  }, n.Euler.RotationOrders = ['XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX'], n.Euler.DefaultOrder = 'XYZ', n.Euler.prototype = {
    constructor: n.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: n.Euler.DefaultOrder,
    _quaternion: t,
    _updateQuaternion: function() {
      this._quaternion !== t && this._quaternion.setFromEuler(this, !1)
    },
    get x() {
      return this._x
    },
    set x(e) {
      this._x = e, this._updateQuaternion()
    },
    get y() {
      return this._y
    },
    set y(e) {
      this._y = e, this._updateQuaternion()
    },
    get z() {
      return this._z
    },
    set z(e) {
      this._z = e, this._updateQuaternion()
    },
    get order() {
      return this._order
    },
    set order(e) {
      this._order = e, this._updateQuaternion()
    },
    set: function(e, t, n, r) {
      return this._x = e, this._y = t, this._z = n, this._order = r || this._order, this._updateQuaternion(), this
    },
    copy: function(e) {
      return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._updateQuaternion(), this
    },
    setFromRotationMatrix: function(e, t) {
      function n(e) {
        return Math.min(Math.max(e, -1), 1)
      }
      var r = e.elements,
        i = r[0],
        s = r[4],
        o = r[8],
        u = r[1],
        a = r[5],
        f = r[9],
        l = r[2],
        c = r[6],
        h = r[10]
      return t = t || this._order, t === 'XYZ' ? (this._y = Math.asin(n(o)), Math.abs(o) < 0.99999 ? (this._x = Math.atan2(-f, h), this._z = Math.atan2(-s, i)) : (this._x = Math.atan2(c, a), this._z = 0)) : t === 'YXZ' ? (this._x = Math.asin(-n(f)), Math.abs(f) < 0.99999 ? (this._y = Math.atan2(o, h), this._z = Math.atan2(u, a)) : (this._y = Math.atan2(-l, i), this._z = 0)) : t === 'ZXY' ? (this._x = Math.asin(n(c)), Math.abs(c) < 0.99999 ? (this._y = Math.atan2(-l, h), this._z = Math.atan2(-s, a)) : (this._y = 0, this._z = Math.atan2(u, i))) : t === 'ZYX' ? (this._y = Math.asin(-n(l)), Math.abs(l) < 0.99999 ? (this._x = Math.atan2(c, h), this._z = Math.atan2(u, i)) : (this._x = 0, this._z = Math.atan2(-s, a))) : t === 'YZX' ? (this._z = Math.asin(n(u)), Math.abs(u) < 0.99999 ? (this._x = Math.atan2(-f, a), this._y = Math.atan2(-l, i)) : (this._x = 0, this._y = Math.atan2(o, h))) : t === 'XZY' ? (this._z = Math.asin(-n(s)), Math.abs(s) < 0.99999 ? (this._x = Math.atan2(c, a), this._y = Math.atan2(o, i)) : (this._x = Math.atan2(-f, h), this._y = 0)) : console.warn('WARNING: Euler.setFromRotationMatrix() given unsupported order: ' + t), this._order = t, this._updateQuaternion(), this
    },
    setFromQuaternion: function(e, t, n) {
      function r(e) {
        return Math.min(Math.max(e, -1), 1)
      }
      var i = e.x * e.x,
        s = e.y * e.y,
        o = e.z * e.z,
        u = e.w * e.w
      return t = t || this._order, t === 'XYZ' ? (this._x = Math.atan2(2 * (e.x * e.w - e.y * e.z), u - i - s + o), this._y = Math.asin(r(2 * (e.x * e.z + e.y * e.w))), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), u + i - s - o)) : t === 'YXZ' ? (this._x = Math.asin(r(2 * (e.x * e.w - e.y * e.z))), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), u - i - s + o), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), u - i + s - o)) : t === 'ZXY' ? (this._x = Math.asin(r(2 * (e.x * e.w + e.y * e.z))), this._y = Math.atan2(2 * (e.y * e.w - e.z * e.x), u - i - s + o), this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), u - i + s - o)) : t === 'ZYX' ? (this._x = Math.atan2(2 * (e.x * e.w + e.z * e.y), u - i - s + o), this._y = Math.asin(r(2 * (e.y * e.w - e.x * e.z))), this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), u + i - s - o)) : t === 'YZX' ? (this._x = Math.atan2(2 * (e.x * e.w - e.z * e.y), u - i + s - o), this._y = Math.atan2(2 * (e.y * e.w - e.x * e.z), u + i - s - o), this._z = Math.asin(r(2 * (e.x * e.y + e.z * e.w)))) : t === 'XZY' ? (this._x = Math.atan2(2 * (e.x * e.w + e.y * e.z), u - i + s - o), this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), u + i - s - o), this._z = Math.asin(r(2 * (e.z * e.w - e.x * e.y)))) : console.warn('WARNING: Euler.setFromQuaternion() given unsupported order: ' + t), this._order = t, n !== !1 && this._updateQuaternion(), this
    },
    reorder: (function() {
      var e = new n.Quat()
      return function(t) {
        e.setFromEuler(this), this.setFromQuaternion(e, t)
      }
    }()),
    fromArray: function(e) {
      return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== t && (this._order = e[3]), this._updateQuaternion(), this
    },
    toArray: function() {
      return [this._x, this._y, this._z, this._order]
    },
    equals: function(e) {
      return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    clone: function() {
      return new n.Euler(this._x, this._y, this._z, this._order)
    }
  }, n.math = {}, n.math.Plane = function(e, n) {
    this.normal = e !== t ? e : new o(1, 0, 0), this.constant = n !== t ? n : 0
  }, n.math.Plane.prototype = {
    constructor: n.math.Plane,
    set: function(e, t) {
      return this.normal.copy(e), this.constant = t, this
    },
    setComponents: function(e, t, n, r) {
      return this.normal.set(e, t, n), this.constant = r, this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this
    },
    setFromCoplanarPoints: function(e, t, r) {
      var i = n.math.Plane.__v1.subVectors(r, t).cross(n.math.Plane.__v2.subVectors(e, t)).normalize()
      return this.setFromNormalAndCoplanarPoint(i, e), this
    },
    copy: function(e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this
    },
    normalize: function() {
      var e = 1 / this.normal.length()
      return this.normal.multiplyScalar(e), this.constant *= e, this
    },
    negate: function() {
      return this.constant *= -1, this.normal.negate(), this
    },
    distanceToPoint: function(e) {
      return this.normal.dot(e) + this.constant
    },
    distanceToSphere: function(e) {
      return this.distanceToPoint(e.center) - e.radius
    },
    projectPoint: function(e, t) {
      return this.orthoPoint(e, t).sub(e).negate()
    },
    orthoPoint: function(e, t) {
      var n = this.distanceToPoint(e),
        r = t || new o()
      return r.copy(this.normal).multiplyScalar(n)
    },
    isIntersectionLine: function(e, t) {
      var n = this.distanceToPoint(e),
        r = this.distanceToPoint(t)
      return n < 0 && r > 0 || r < 0 && n > 0
    },
    isIntersectionFace: function(e, t) {
      var n = []
      n.push(t[e.a]), n.push(t[e.b]), n.push(t[e.c]), e.d != null && n.push(t[e.d])
      var r = [],
        i, s, o
      for (i = 0; i < n.length; i++) r.push(this.distanceToPoint(n[i]))
      for (i = 0; i < r.length; i++) {
        if (i == 0) s = o = r[i]
        else {
          o = r[i]
          if (s < 0 && o > 0 || o < 0 && s > 0) return 'intersect'
          s = o
        }
      }
      return o > 0 ? 'in' : 'out'
    },
    intersectLine: function(e, r, i) {
      var s = i || new o(),
        u = n.math.Plane.__v1.subVectors(r, e),
        a = this.normal.dot(u)
      if (a == 0) return this.distanceToPoint(e) == 0 ? s.copy(e) : t
      var f = -(e.dot(this.normal) + this.constant) / a
      return f < 0 || f > 1 ? t : s.copy(u).multiplyScalar(f).add(e)
    },
    coplanarPoint: function(e) {
      var t = e || new o()
      return t.copy(this.normal).multiplyScalar(-this.constant)
    },
    transform: function(e, t) {
      t = t || (new n.Mat3()).getInverse(e).transpose()
      var r = n.math.Plane.__v1.copy(this.normal).applyMatrix3(t),
        i = this.coplanarPoint(n.math.Plane.__v2)
      return i.applyMatrix4(e), this.setFromNormalAndCoplanarPoint(r, i), this
    },
    translate: function(e) {
      return this.constant = this.constant - e.dot(this.normal), this
    },
    equals: function(e) {
      return e.normal.equals(this.normal) && e.constant == this.constant
    },
    clone: function() {
      return (new n.math.Plane()).copy(this)
    }
  }, n.math.Plane.__vZero = new o(0, 0, 0), n.math.Plane.__v1 = new o(), n.math.Plane.__v2 = new o(), n.Frustum = function(e, r, i, s, o, u) {
    this.planes = [e !== t ? e : new n.math.Plane(), r !== t ? r : new n.math.Plane(), i !== t ? i : new n.math.Plane(), s !== t ? s : new n.math.Plane(), o !== t ? o : new n.math.Plane(), u !== t ? u : new n.math.Plane()]
  }, n.Frustum.prototype = {
    set: function(e, t, n, r, i, s) {
      var o = this.planes
      return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(i), o[5].copy(s), this
    },
    setPoints: function(e) {
      this.points = e
    },
    copy: function(e) {
      var t = this.planes
      for (var n = 0; n < 6; n++) t[n].copy(e.planes[n])
      return this
    },
    setFromMatrix: function(e) {
      var t = this.planes,
        n = e.elements,
        r = n[0],
        i = n[1],
        s = n[2],
        o = n[3],
        u = n[4],
        a = n[5],
        f = n[6],
        l = n[7],
        c = n[8],
        h = n[9],
        p = n[10],
        d = n[11],
        v = n[12],
        m = n[13],
        g = n[14],
        y = n[15]
      return t[0].setComponents(o - r, l - u, d - c, y - v).normalize(), t[1].setComponents(o + r, l + u, d + c, y + v).normalize(), t[2].setComponents(o + i, l + a, d + h, y + m).normalize(), t[3].setComponents(o - i, l - a, d - h, y - m).normalize(), t[4].setComponents(o - s, l - f, d - p, y - g).normalize(), t[5].setComponents(o + s, l + f, d + p, y + g).normalize(), this
    },
    intersectsObjectAccurate: function(e, t) {
      if (t == 0) return this.intersectsObject(e)
      var r = e.worldMatrix,
        i = this.planes,
        s = e.vertices,
        o = [],
        u, a, f = s.length
      for (a = 0; a < f; a++) {
        u = s[a].clone(), u.applyMatrix4(r), o.push(u)
        if (this.containsPoint(u)) return !0
      }
      if (t == 2) {
        if (e instanceof n.Line) {
          for (a = 0, f = o.length; a < f - 1; a++) {
            var l = o[a],
              c = o[a + 1]
            if (this.containsLine(l, c)) return !0
          }
        } else {
          var h = e.faces,
            p, d, v, m, g, y
          for (a = 0, f = h.length; a < f; a++) {
            p = h[a]
            if (this.containsLine(o[p.a], o[p.b])) return !0
            if (this.containsLine(o[p.b], o[p.c])) return !0
            if (p.d != null) {
              if (this.containsLine(o[p.c], o[p.d])) return !0
              if (this.containsLine(o[p.d], o[p.a])) return !0
            } else if (this.containsLine(o[p.a], o[p.c])) return !0
          }
        }
      }
      return !1
    },
    intersectsObject: function(e) {
      var t = e.worldMatrix,
        n = this.planes,
        r = t.getPosition()
      if (!e.computeBoundingSphere) return !1
      e.boundingSphere || e.computeBoundingSphere()
      var i = -e.boundingSphere.radius * t.getMaxScaleOnAxis()
      for (var s = 0; s < 6; s++) {
        var o = n[s].distanceToPoint(r)
        if (o < i) return !1
      }
      return !0
    },
    intersectsSphere: function(e) {
      var t = this.planes,
        n = e.center,
        r = -e.radius
      for (var i = 0; i < 6; i++) {
        var s = t[i].distanceToPoint(n)
        if (s < r) return !1
      }
      return !0
    },
    intersectsBox: function(e) {
      var t = new o(),
        n = new o(),
        r = this.planes
      for (var i = 0; i < 6; i++) {
        var s = r[i]
        t.x = s.normal.x > 0 ? e.min.x : e.max.x, n.x = s.normal.x > 0 ? e.max.x : e.min.x, t.y = s.normal.y > 0 ? e.min.y : e.max.y, n.y = s.normal.y > 0 ? e.max.y : e.min.y, t.z = s.normal.z > 0 ? e.min.z : e.max.z, n.z = s.normal.z > 0 ? e.max.z : e.min.z
        var u = s.distanceToPoint(t),
          a = s.distanceToPoint(n)
        if (u < 0 && a < 0) return !1
      }
      return !0
    },
    containsLine: function(e, t) {
      var n = this.planes,
        r = new o()
      for (var i = 0; i < 6; i++) {
        r = n[i].intersectLine(e, t, r)
        if (r && this.containsPoint(r)) return !0
      }
      return !1
    },
    containsPoint: function(e) {
      var t = this.planes
      for (var n = 0; n < 6; n++) {
        if (t[n].distanceToPoint(e) < 0) return !1
      }
      return !0
    },
    clone: function() {
      return (new n.Frustum()).copy(this)
    }
  }, n.Ray = function(e, n) {
    this.origin = e !== t ? e : new o(), this.direction = n !== t ? n : new o()
  }, n.Ray.prototype = {
    constructor: n.Ray,
    set: function(e, t) {
      return this.origin.copy(e), this.direction.copy(t), this
    },
    copy: function(e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this
    },
    at: function(e, t) {
      var n = t || new o()
      return n.copy(this.direction).multiplyScalar(e).add(this.origin)
    },
    recast: function(e) {
      return this.origin.copy(this.at(e, n.Ray.__v1)), this
    },
    closestPointToPoint: function(e, t) {
      var n = t || new o()
      n.subVectors(e, this.origin)
      var r = n.dot(this.direction)
      return n.copy(this.direction).multiplyScalar(r).add(this.origin)
    },
    distanceToPoint: function(e) {
      var t = n.Ray.__v1.subVectors(e, this.origin).dot(this.direction)
      return n.Ray.__v1.copy(this.direction).multiplyScalar(t).add(this.origin), n.Ray.__v1.distanceTo(e)
    },
    isIntersectionSphere: function(e) {
      return this.distanceToPoint(e.center) <= e.radius
    },
    isIntersectionPlane: function(e) {
      var t = e.normal.dot(this.direction)
      return t != 0 ? !0 : e.distanceToPoint(this.origin) == 0 ? !0 : !1
    },
    distanceToPlane: function(e) {
      var n = e.normal.dot(this.direction)
      if (n == 0) return e.distanceToPoint(this.origin) == 0 ? 0 : t
      var r = -(this.origin.dot(e.normal) + e.constant) / n
      return r
    },
    intersectPlane: function(e, n) {
      var r = this.distanceToPlane(e)
      return r === t ? t : this.at(r, n)
    },
    transform: function(e) {
      return this.direction.add(this.origin).applyMatrix4(e), this.origin.applyMatrix4(e), this.direction.sub(this.origin), this
    },
    distanceSqToSegment: function(e, t, n, r) {
      var i = e.clone().add(t).multiplyScalar(0.5),
        s = t.clone().sub(e).normalize(),
        o = e.distanceTo(t) * 0.5,
        u = this.origin.clone().sub(i),
        a = -this.direction.dot(s),
        f = u.dot(this.direction),
        l = -u.dot(s),
        c = u.lengthSq(),
        h = Math.abs(1 - a * a),
        p, d, v, m
      if (h >= 0) {
        p = a * l - f, d = a * f - l, m = o * h
        if (p >= 0) {
          if (d >= -m) {
            if (d <= m) {
              var g = 1 / h
              p *= g, d *= g, v = p * (p + a * d + 2 * f) + d * (a * p + d + 2 * l) + c
            } else d = o, p = Math.max(0, -(a * d + f)), v = -p * p + d * (d + 2 * l) + c
          } else d = -o, p = Math.max(0, -(a * d + f)), v = -p * p + d * (d + 2 * l) + c
        } else d <= -m ? (p = Math.max(0, -(-a * o + f)), d = p > 0 ? -o : Math.min(Math.max(-o, -l), o), v = -p * p + d * (d + 2 * l) + c) : d <= m ? (p = 0, d = Math.min(Math.max(-o, -l), o), v = d * (d + 2 * l) + c) : (p = Math.max(0, -(a * o + f)), d = p > 0 ? o : Math.min(Math.max(-o, -l), o), v = -p * p + d * (d + 2 * l) + c)
      } else d = a > 0 ? -o : o, p = Math.max(0, -(a * d + f)), v = -p * p + d * (d + 2 * l) + c
      return n && n.copy(this.direction.clone().multiplyScalar(p).add(this.origin)), r && r.copy(s.clone().multiplyScalar(d).add(i)), v
    },
    equals: function(e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    },
    clone: function() {
      return (new n.Ray()).copy(this)
    }
  }, n.Ray.__v1 = new o(), n.Ray.__v2 = new o(), n.Triangle = function(e, n, r) {
    this.a = e !== t ? e : new o(), this.b = n !== t ? n : new o(), this.c = r !== t ? r : new o()
  }, n.Triangle.normal = function(e, t, r, i) {
    var s = i || new o()
    s.subVectors(r, t), n.Triangle.__v0.subVectors(e, t), s.cross(n.Triangle.__v0)
    var u = s.lengthSq()
    return u > 0 ? s.multiplyScalar(1 / Math.sqrt(u)) : s.set(0, 0, 0)
  }, n.Triangle.barycoordFromPoint = function(e, t, r, i, s) {
    n.Triangle.__v0.subVectors(i, t), n.Triangle.__v1.subVectors(r, t), n.Triangle.__v2.subVectors(e, t)
    var u = n.Triangle.__v0.dot(n.Triangle.__v0),
      a = n.Triangle.__v0.dot(n.Triangle.__v1),
      f = n.Triangle.__v0.dot(n.Triangle.__v2),
      l = n.Triangle.__v1.dot(n.Triangle.__v1),
      c = n.Triangle.__v1.dot(n.Triangle.__v2),
      h = u * l - a * a,
      p = s || new o()
    if (h == 0) return p.set(-2, -1, -1)
    var d = 1 / h,
      v = (l * f - a * c) * d,
      m = (u * c - a * f) * d
    return p.set(1 - v - m, m, v)
  }, n.Triangle.containsPoint = function(e, t, r, i) {
    var s = n.Triangle.barycoordFromPoint(e, t, r, i, n.Triangle.__v3)
    return s.x >= 0 && s.y >= 0 && s.x + s.y <= 1
  }, n.Triangle.prototype = {
    constructor: n.Triangle,
    set: function(e, t, n) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(n), this
    },
    setFromPointsAndIndices: function(e, t, n, r) {
      return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this
    },
    copy: function(e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this
    },
    area: function() {
      return n.Triangle.__v0.subVectors(this.c, this.b), n.Triangle.__v1.subVectors(this.a, this.b), n.Triangle.__v0.cross(n.Triangle.__v1).length() * 0.5
    },
    midpoint: function(e) {
      var t = e || new o()
      return t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(e) {
      return n.Triangle.normal(this.a, this.b, this.c, e)
    },
    plane: function(e) {
      var t = e || new n.math.Plane()
      return t.setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(e, t) {
      return n.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    },
    containsPoint: function(e) {
      return n.Triangle.containsPoint(e, this.a, this.b, this.c)
    },
    equals: function(e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    },
    clone: function() {
      return (new n.Triangle()).copy(this)
    },
    intersectLine: function(e, t) {
      var n = this.plane(),
        r = n.intersectLine(e, t)
      return r != null && this.containsPoint(r)
    }
  }, n.Triangle.__v0 = new o(), n.Triangle.__v1 = new o(), n.Triangle.__v2 = new o(), n.Triangle.__v3 = new o()
  var h = {
    getLogicalPoint: function(e, t) {
      var n, r = e.getBoundingClientRect()
      if (p.isTouchable && t.changedTouches && t.changedTouches.length > 0) {
        var i = t.changedTouches[0],
          s = p.isAndroid ? 0 : $touch.scrollLeft(),
          o = p.isAndroid ? 0 : $touch.scrollTop()
        n = {
          x: i.clientX + e.scrollLeft - r.left - s,
          y: i.clientY + e.scrollTop - r.top - o
        }
      } else {
        if (!h.isValidEvent(e, t)) return null
        n = {
          x: t.clientX - r.left + e.scrollLeft,
          y: t.clientY - r.top + e.scrollTop
        }
      }
      return n
    },
    isValidEvent: function(e, t) {
      if (!t) return !1
      if (t.target === e) {
        if (p.isFirefox) {
          if (e.clientHeight < e.scrollHeight && t.layerX < 25) return !1
          if (e.clientWidth < e.scrollWidth && t.layerY < 25) return !1
        } else if (t.offsetX > e.clientWidth || t.offsetY > e.clientHeight) return !1
      }
      return !0
    },
    isImage: function(e) {
      return e && e.nodeName && e.nodeName.toLowerCase() === 'img'
    },
    isCanvas: function(e) {
      return e && e.nodeName && e.nodeName.toLowerCase() === 'canvas'
    },
    createView: function(e, t) {
      var n = document.createElement('div')
      return n.style.position = D.VIEW_POSITION, n.style.fontSize = D.VIEW_FONT_SIZE, n.style.fontFamily = D.VIEW_FONT_FAMILY, n.style.cursor = 'default', n.style.outline = 'none', n.style.textAlign = 'left', n.style.msTouchAction = 'none', n.tabIndex = 0, t || (n.onmousedown = h.preventDefault), n.style.setProperty && (n.style.setProperty('-khtml-user-select', 'none', null), n.style.setProperty('-webkit-user-select', 'none', null), n.style.setProperty('-moz-user-select', 'none', null), n.style.setProperty('-webkit-tap-highlight-color', 'rgba(0, 0, 0, 0)', null)), e && (n.style.overflow = e), n
    },
    preventDefault: function(e) {
      if (D.KEEP_DEFAULT_FUNCTION(e)) return
      e.preventDefault ? e.preventDefault() : e.preventManipulation ? e.preventManipulation() : e.returnValue = !1
    },
    createCanvas: function(e) {
      var t = document.createElement('canvas'),
        n = e.getView()
      return t.width = n.width, t.height = n.height, t.style.msTouchAction = 'none', t.style.position = 'absolute', t
    },
    isCtrlDown: function(e) {
      return e.ctrlKey || e.metaKey
    },
    getScrollTop: function(e) {
      if (!e) return 0
      var t = e.scrollTop,
        n = e.parentElement
      return t + this.getScrollTop(n)
    },
    getScrollLeft: function(e) {
      if (!e) return 0
      var t = e.scrollLeft,
        n = e.parentElement
      return t + this.getScrollLeft(n)
    },
    debug: function(e, t) {
      try {
        e.call(t)
      } catch (n) {
        alert(n)
      }
    },
    setFocus: function(e) {
      if (document.activeElement === e) return
      var t, n, r = document.documentElement,
        i = document.body,
        s
      r && (p.isIE || p.isOpera || r.scrollLeft || r.scrollTop) && (t = r.scrollLeft, n = r.scrollTop, s = r), e.focus(), s && (s.scrollLeft = t, s.scrollTop = n)
    },
    isRightClick: function(t) {
      var n
      if (!t) var t = e.event
      return t.which ? n = t.which == 3 : t.button && (n = t.button == 2), n
    }
  }
  n.html = h
  var p = (function() {
    var e = {},
      t = navigator.userAgent.toLowerCase()
    return e.isOpera = /opera/.test(t), e.isIE = /msie/.test(t) || /trident/.test(t), e.isFirefox = /firefox/i.test(t), e.isChrome = /chrome/i.test(t), e.isSafari = !e.isChrome && /safari/i.test(t), e.isIPhone = /iphone/.test(t), e.isIPod = /ipod/.test(t), e.isIPad = /ipad/.test(t), e.isAndroid = /android/i.test(t), e.isWebOS = /webos/i.test(t), e.isMSToucheable = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1, e.isTouchable = 'ontouchend' in document || e.isMSToucheable, e.isIOS = e.isIPhone || e.isIPod || e.isIPad, e
  }())
  n.ua = p, (function() {
    function r(e) {
      var n, r, i, s, o, u
      i = e.length, r = 0, n = ''
      while (r < i) {
        s = e.charCodeAt(r++) & 255
        if (r == i) {
          n += t.charAt(s >> 2), n += t.charAt((s & 3) << 4), n += '=='
          break
        }
        o = e.charCodeAt(r++)
        if (r == i) {
          n += t.charAt(s >> 2), n += t.charAt((s & 3) << 4 | (o & 240) >> 4), n += t.charAt((o & 15) << 2), n += '='
          break
        }
        u = e.charCodeAt(r++), n += t.charAt(s >> 2), n += t.charAt((s & 3) << 4 | (o & 240) >> 4), n += t.charAt((o & 15) << 2 | (u & 192) >> 6), n += t.charAt(u & 63)
      }
      return n
    }

    function i(e) {
      var t, r, i, s, o, u, a
      u = e.length, o = 0, a = ''
      while (o < u) {
        do t = n[e.charCodeAt(o++) & 255]; while (o < u && t == -1)
        if (t == -1) break
        do r = n[e.charCodeAt(o++) & 255]; while (o < u && r == -1)
        if (r == -1) break
        a += String.fromCharCode(t << 2 | (r & 48) >> 4)
        do {
          i = e.charCodeAt(o++) & 255
          if (i == 61) return a
          i = n[i]
        } while (o < u && i == -1)
        if (i == -1) break
        a += String.fromCharCode((r & 15) << 4 | (i & 60) >> 2)
        do {
          s = e.charCodeAt(o++) & 255
          if (s == 61) return a
          s = n[s]
        } while (o < u && s == -1)
        if (s == -1) break
        a += String.fromCharCode((i & 3) << 6 | s)
      }
      return a
    }
    var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      n = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1)
    e.btoa || (e.btoa = r), e.atob || (e.atob = i)
  }())
  var d = (function() {
      var t = !1,
        n = document.createElement('canvas')
      n.getContext('2d') && (t = !0)
      if (!t) {
        return {
          saveAsBMP: function() {},
          saveAsPNG: function() {},
          saveAsJPEG: function() {}
        }
      }
      var r = !!n.getContext('2d').getImageData,
        i = !!n.toDataURL,
        s = !!e.btoa,
        o = 'image/octet-stream',
        u = function(e) {
          var t = parseInt(e.width),
            n = parseInt(e.height)
          return e.getContext('2d').getImageData(0, 0, t, n)
        },
        a = function(e) {
          var t = ''
          if (typeof e === 'string') t = e
          else {
            var n = e
            for (var r = 0; r < n.length; r++) t += String.fromCharCode(n[r])
          }
          return btoa(t)
        },
        f = function(e) {
          var t = [],
            n = e.width,
            r = e.height
          t.push(66), t.push(77)
          var i = n * r * 3 + 54
          t.push(i % 256), i = Math.floor(i / 256), t.push(i % 256), i = Math.floor(i / 256), t.push(i % 256), i = Math.floor(i / 256), t.push(i % 256), t.push(0), t.push(0), t.push(0), t.push(0), t.push(54), t.push(0), t.push(0), t.push(0)
          var s = []
          s.push(40), s.push(0), s.push(0), s.push(0)
          var o = n
          s.push(o % 256), o = Math.floor(o / 256), s.push(o % 256), o = Math.floor(o / 256), s.push(o % 256), o = Math.floor(o / 256), s.push(o % 256)
          var u = r
          s.push(u % 256), u = Math.floor(u / 256), s.push(u % 256), u = Math.floor(u / 256), s.push(u % 256), u = Math.floor(u / 256), s.push(u % 256), s.push(1), s.push(0), s.push(24), s.push(0), s.push(0), s.push(0), s.push(0), s.push(0)
          var f = n * r * 3
          s.push(f % 256), f = Math.floor(f / 256), s.push(f % 256), f = Math.floor(f / 256), s.push(f % 256), f = Math.floor(f / 256), s.push(f % 256)
          for (var l = 0; l < 16; l++) s.push(0)
          var c = (4 - n * 3 % 4) % 4,
            h = e.data,
            p = '',
            d = r
          do {
            var v = n * (d - 1) * 4,
              m = ''
            for (var g = 0; g < n; g++) {
              var y = 4 * g
              m += String.fromCharCode(h[v + y + 2]), m += String.fromCharCode(h[v + y + 1]), m += String.fromCharCode(h[v + y])
            }
            for (var b = 0; b < c; b++) m += String.fromCharCode(0)
            p += m
          } while (--d)
          var w = a(t.concat(s)) + a(p)
          return w
        },
        l = function(e, t) {
          return 'data:' + t + ';base64,' + e
        },
        c = function(e) {
          var t = document.createElement('img')
          return t.src = e, t
        },
        h = function(e, t, n, r, i) {
          n = n || (t ? t.w : e.width), r = r || (t ? t.h : e.height)
          var s = document.createElement('canvas')
          s.width = n, s.height = r, s.style.width = n + 'px', s.style.height = r + 'px'
          var o = s.getContext('2d'),
            o = s.getContext('2d'),
            u = e.style.backgroundColor
          return u || (i === 'PNG' ? u = 'rgba(255,255,255,0.0)' : i === 'BMP' ? u = 'rgba(255,255,255,0.01)' : u = '#FFFFFF'), o.fillStyle = u, o.fillRect(0, 0, n, r), t = t || {
            x: 0,
            y: 0,
            w: e.width,
            h: e.height
          }, o.drawImage(e, t.x, t.y, t.w, t.h, 0, 0, n, r), s
        }
      return {
        saveAsPNG: function(e, t, n, r, s) {
          if (!i) return !1
          var o = h(e, t, r, s, 'PNG'),
            u = o.toDataURL('image/png')
          return n ? c(u) : u
        },
        saveAsJPEG: function(e, t, n, r, s) {
          if (!i) return !1
          var o = h(e, t, r, s, 'JPEG'),
            u = 'image/jpeg',
            a = o.toDataURL(u)
          return a.indexOf(u) != 5 ? !1 : n ? c(a) : a
        },
        saveAsBMP: function(e, t, n, i, o) {
          if (!r || !s) return !1
          var a = h(e, t, i, o, 'BMP'),
            p = u(a),
            d = f(p)
          return n ? c(l(d, 'image/bmp')) : l(d, 'image/bmp')
        }
      }
    }()),
    g = {},
    y = {
      cache: {},
      g: document.createElement('canvas').getContext('2d'),
      getTextSize: function(e, t) {
        y.g.font = e || D.FONT
        var n = y.cache[y.g.font]
        return n || (n = y.g.measureText('e').width * 2 + 4, y.cache[y.g.font] = n), {
          width: y.g.measureText(t).width + 4,
          height: n
        }
      }
    }
  g.g = y, n.g = y
  var w = {},
    E = setTimeout
  w.bcld = function(e, t, n, r, i, u, a, f, l) {
    var c = e / 2,
      h, p, d = [],
      v = [],
      m = {
        vertices: [],
        faces: [],
        uvs: [],
        uv2s: []
      }
    for (p = 0; p <= t; p++) {
      var g = [],
        y = [],
        b = p / t,
        w = b * (n - r) + r
      for (h = 0; h <= i; h++) {
        var E = h / i,
          S = new o()
        S.x = w * Math.sin(E * f + l), S.y = -b * e + c, S.z = w * Math.cos(E * f + l), m.vertices.push(S), g.push(m.vertices.length - 1), y.push(new s(E, 1 - b))
      }
      d.push(g), v.push(y)
    }
    var x = (n - r) / e,
      T, N
    for (h = 0; h < i; h++) {
      r !== 0 ? (T = m.vertices[d[0][h]].clone(), N = m.vertices[d[0][h + 1]].clone()) : (T = m.vertices[d[1][h]].clone(), N = m.vertices[d[1][h + 1]].clone()), T.setY(Math.sqrt(T.x * T.x + T.z * T.z) * x).normalize(), N.setY(Math.sqrt(N.x * N.x + N.z * N.z) * x).normalize()
      for (p = 0; p < t; p++) {
        var C = d[p][h],
          k = d[p + 1][h],
          L = d[p + 1][h + 1],
          A = d[p][h + 1],
          M = T.clone(),
          _ = T.clone(),
          D = N.clone(),
          P = N.clone(),
          H = v[p][h].clone(),
          B = v[p + 1][h].clone(),
          j = v[p + 1][h + 1].clone(),
          F = v[p][h + 1].clone()
        m.faces.push(new O(C, k, A, [M, _, P], null, 0)), m.uvs.push([H, B, F]), m.uv2s.push([H.clone(), B.clone(), F.clone()]), m.faces.push(new O(k, L, A, [_, D, P], null, 0)), m.uvs.push([B, j, F]), m.uv2s.push([B.clone(), j.clone(), F.clone()])
      }
    }
    var I = !1
    if (u === !1 && r > 0) {
      m.vertices.push(new o(0, c, 0)), I = !0
      for (h = 0; h < i; h++) {
        var C = d[0][h],
          k = d[0][h + 1],
          L = m.vertices.length - 1,
          M = new o(0, 1, 0),
          _ = new o(0, 1, 0),
          D = new o(0, 1, 0),
          q = m.vertices[C],
          R = m.vertices[k],
          H = new s((q.x / r + 1) / 2, 1 - (q.z / r + 1) / 2),
          B = new s((R.x / r + 1) / 2, 1 - (R.z / r + 1) / 2),
          j = new s(0.5, 0.5)
        m.faces.push(new O(C, k, L, [M, _, D], null, 1)), m.uvs.push([H, B, j]), m.uv2s.push([H.clone(), B.clone(), j.clone()])
      }
    }
    var U = !1
    if (a === !1 && n > 0) {
      m.vertices.push(new o(0, -c, 0)), U = !0
      for (h = 0; h < i; h++) {
        var C = d[p][h + 1],
          k = d[p][h],
          L = m.vertices.length - 1,
          M = new o(0, -1, 0),
          _ = new o(0, -1, 0),
          D = new o(0, -1, 0),
          q = m.vertices[C],
          R = m.vertices[k],
          H = new s((q.x / n + 1) / 2, (q.z / n + 1) / 2),
          B = new s((R.x / n + 1) / 2, (R.z / n + 1) / 2),
          j = new s(0.5, 0.5)
        m.faces.push(new O(C, k, L, [M, _, D], null, 2)), m.uvs.push([H, B, j]), m.uv2s.push([H.clone(), B.clone(), j.clone()])
      }
    }
    if (f !== Math.PI * 2) {
      !I && m.vertices.push(new o(0, c, 0)), !U && m.vertices.push(new o(0, -c, 0))
      var C = d[0][0],
        k = d[t][0],
        L = m.vertices.length - 1,
        A = m.vertices.length - 2,
        H = new s(0, 0),
        B = new s(0, 1),
        j = new s(1, 1),
        F = new s(1, 0)
      m.faces.push(new O(C, L, k)), m.uvs.push([H, j, B]), m.uv2s.push([H.clone(), j.clone(), B.clone()]), m.faces.push(new O(A, L, C)), m.uvs.push([F, j, H]), m.uv2s.push([F.clone(), j.clone(), H.clone()]), C = d[0][i], k = d[t][i]
      var H = new s(0, 0),
        B = new s(0, 1),
        j = new s(1, 1),
        F = new s(1, 0)
      m.faces.push(new O(C, k, A)), m.uvs.push([H, B, F]), m.uv2s.push([H.clone(), B.clone(), F.clone()]), m.faces.push(new O(k, L, A)), m.uvs.push([B, j, F]), m.uv2s.push([B.clone(), j.clone(), F.clone()])
    }
    return m
  }, w.buildCubeData = function(e, t, n, r, i, u, a, f) {
    function v(v) {
      var m, g, y, b, w, E, S, x, T, N
      l = c.length
      var C, k = a == 'six-each' || a == 'front-other' || a == 'back-other' || a == 'left-other' || a == 'right-other' || a == 'top-other' || a == 'bottom-other',
        L = new s(0, 0),
        A = k ? new s(1 / 3, 0.5) : new s(1, 1),
        O = a.split('-')[0]
      O == 'six' ? O = null : A = new s(0.5, 1), v == 'right' ? (m = 'z', g = 'y', y = 'x', b = -1, w = -1, E = e / 2, S = n, x = t, T = u, N = i, C = 0, L = new s(2 / 3, 0)) : v == 'left' ? (m = 'z', g = 'y', y = 'x', b = 1, w = -1, E = -e / 2, S = n, x = t, T = u, N = i, C = 1) : v == 'top' ? (m = 'x', g = 'z', y = 'y', b = 1, w = 1, E = t / 2, S = e, x = n, T = r, N = u, C = 2, L = new s(1 / 3, 0.5)) : v == 'bottom' ? (m = 'x', g = 'z', y = 'y', b = 1, w = -1, E = -t / 2, S = e, x = n, T = r, N = u, C = 3, L = new s(0, 0.5)) : v == 'front' ? (m = 'x', g = 'y', y = 'z', b = 1, w = -1, E = n / 2, S = e, x = t, T = r, N = i, C = 4, L = new s(1 / 3, 0)) : v == 'back' && (m = 'x', g = 'y', y = 'z', b = -1, w = -1, E = -n / 2, S = e, x = t, T = r, N = i, C = 5, L = new s(2 / 3, 0.5)), O && (O == v ? L = new s(0, 0) : L = new s(0.5, 0))
      var _, D, P = T + 1,
        H = N + 1
      for (D = 0; D < H; D++) {
        for (_ = 0; _ < P; _++) {
          var B = new o()
          B[m] = (_ / T * S - S / 2) * b + f[m], B[g] = (D / N * x - x / 2) * w + f[g], B[y] = E + f[y], c.push(B)
        }
      }
      k && (C = 0)
      var j = new o()
      j[y] = E > 0 ? 1 : -1
      for (D = 0; D < N; D++) {
        for (_ = 0; _ < T; _++) {
          var F = _ + P * D,
            I = _ + P * (D + 1),
            q = _ + 1 + P * (D + 1),
            R = _ + 1 + P * D,
            U = [new s(_ / T, 1 - D / N), new s(_ / T, 1 - (D + 1) / N), new s((_ + 1) / T, 1 - (D + 1) / N), new s((_ + 1) / T, 1 - D / N)]
          if (k) {
            for (var z = 0; z < U.length; z++) U[z].multiply(A).add(L)
          }
          var W = new M(F + l, I + l, q + l, R + l)
          W.normal.copy(j), W.vertexNormals.push(j.clone(), j.clone(), j.clone(), j.clone()), W.materialIndex = C, h.push(W), p.push([U[0], U[1], U[2], U[3]]), d.push([U[0].clone(), U[1].clone(), U[2].clone(), U[3].clone()])
        }
      }
    }
    var l, c = [],
      h = [],
      p = [],
      d = []
    v('right'), v('left'), v('top'), v('bottom'), v('front'), v('back')
    var m = {
      vertices: c,
      faces: h,
      uvs: p,
      uv2s: d
    }
    return m
  }, w.bsd = function(e, t, n, r, i, u, a) {
    var f, l, c = [],
      h = [],
      p = [],
      d = [],
      v = [],
      m = []
    for (l = 0; l <= n; l++) {
      var g = [],
        y = []
      for (f = 0; f <= t; f++) {
        var b = f / t,
          w = l / n,
          E = new o()
        E.x = -e * Math.cos(r + b * i) * Math.sin(u + w * a), E.y = e * Math.cos(u + w * a), E.z = e * Math.sin(r + b * i) * Math.sin(u + w * a), c.push(E), g.push(c.length - 1), y.push(new s(b, 1 - w))
      }
      v.push(g), m.push(y)
    }
    for (l = 0; l < n; l++) {
      for (f = 0; f < t; f++) {
        var S = v[l][f + 1],
          x = v[l][f],
          T = v[l + 1][f],
          N = v[l + 1][f + 1],
          C = c[S].clone().normalize(),
          k = c[x].clone().normalize(),
          L = c[T].clone().normalize(),
          A = c[N].clone().normalize(),
          M = m[l][f + 1].clone(),
          _ = m[l][f].clone(),
          D = m[l + 1][f].clone(),
          P = m[l + 1][f + 1].clone()
        Math.abs(c[S].y) === e ? (p.push(new O(S, T, N, [C, L, A])), h.push([M, D, P]), d.push([M.clone(), D.clone(), P.clone()])) : Math.abs(c[T].y) === e ? (p.push(new O(S, x, T, [C, k, L])), h.push([M, _, D]), d.push([M.clone(), _.clone(), D.clone()])) : (p.push(new O(S, x, N, [C, k, A])), h.push([M, _, P]), d.push([M.clone(), _.clone(), P.clone()]), p.push(new O(x, T, N, [k.clone(), L, A.clone()])), h.push([_.clone(), D, P.clone()]), d.push([_.clone(), D.clone(), P.clone()]))
      }
    }
    return {
      vertices: c,
      faces: p,
      uvs: h,
      uv2s: d
    }
  }
  var S = function(e) {
      var r, i, s, o, u, a, f, l = {},
        c = e.primitive
      if (c.groups) {
        e.groups = c.groups, e.groupList = c.groupList
        return
      }
      c.groups = {}
      var h = e.material,
        p = e.getMaterialMapping()
      for (r = 0, i = c.faces.length; r < i; r++) {
        s = c.faces[r], o = h instanceof n.ArrayMaterial ? s.materialIndex : 0, o = p[o], o == null, a = o !== t ? o : -1, l[a] === t && (l[a] = {
          hash: a,
          counter: 0
        }), f = l[a].hash + '_' + l[a].counter, c.groups[f] === t && (c.groups[f] = {
          faces3: [],
          faces4: [],
          materialIndex: o,
          vertices: 0
        }), u = s instanceof O ? 3 : 4, c.groups[f].vertices + u > 65535 && (l[a].counter += 1, f = l[a].hash + '_' + l[a].counter, c.groups[f] === t && (c.groups[f] = {
          faces3: [],
          faces4: [],
          materialIndex: o,
          vertices: 0
        })), s instanceof O ? c.groups[f].faces3.push(r) : c.groups[f].faces4.push(r), c.groups[f].vertices += u
      }
      c.groupsList = []
      for (var d in e.groups) c.groupsList.push(e.groups[d])
      e.groups = c.groups, e.groupList = c.groupsList
    },
    x = function(e, n, r, i) {
      var s, o, u, a, f, l, c, h, p = e,
        d = p,
        v = d.vertices,
        m = v.length,
        g = d.colors,
        y = g.length,
        b = d.sizes,
        w = b.length,
        E = i.__vertexArray,
        S = i.__colorArray,
        x = i.__normalArray,
        T = i.__sortArray,
        N = d.verticesNeedUpdate,
        C = d.elementsNeedUpdate,
        k = d.normalsNeedUpdate,
        L = d.colorsNeedUpdate,
        A = d.__webglCustomAttributesList,
        O, M, _, D, P, H, B
      w < m && (w = m)
      if (p.sortParticles) {
        _projScreenMatrixPS.copy(_projScreenMatrix), _projScreenMatrixPS.multiply(p.matrixWorld)
        for (s = 0; s < m; s++) a = v[s], _vector3.copy(a), _vector3.applyProjection(_projScreenMatrixPS), T[s] = [_vector3.z, s]
        T.sort(numericalSort)
        for (s = 0; s < m; s++) a = v[T[s][1]], f = s * 3, E[f] = a.x, E[f + 1] = a.y, E[f + 2] = a.z
        for (o = 0; o < y; o++) f = o * 3, c = g[T[o][1]], S[f] = c.r, S[f + 1] = c.g, S[f + 2] = c.b
        for (u = 0; u < w; u++) f = u * 3, h = b[T[u][1]], h = h == null ? 1 : h, x[f] = h.x == null ? h || 1 : h.x, x[f + 1] = 0, x[f + 2] = 0
        if (A) {
          for (O = 0, M = A.length; O < M; O++) {
            B = A[O]
            if (B.boundTo !== t && B.boundTo !== 'vertices') continue
            f = 0, P = B.value.length
            if (B.size === 1) {
              for (D = 0; D < P; D++) l = T[D][1], B.array[D] = B.value[l]
            } else if (B.size === 2) {
              for (D = 0; D < P; D++) l = T[D][1], H = B.value[l], B.array[f] = H.x, B.array[f + 1] = H.y, f += 2
            } else if (B.size === 3) {
              if (B.type === 'c') {
                for (D = 0; D < P; D++) l = T[D][1], H = B.value[l], B.array[f] = H.r, B.array[f + 1] = H.g, B.array[f + 2] = H.b, f += 3
              } else {
                for (D = 0; D < P; D++) l = T[D][1], H = B.value[l], B.array[f] = H.x, B.array[f + 1] = H.y, B.array[f + 2] = H.z, f += 3
              }
            } else if (B.size === 4) {
              for (D = 0; D < P; D++) l = T[D][1], H = B.value[l], B.array[f] = H.x, B.array[f + 1] = H.y, B.array[f + 2] = H.z, B.array[f + 3] = H.w, f += 4
            }
          }
        }
      } else {
        if (N) {
          for (s = 0; s < m; s++) a = v[s], f = s * 3, E[f] = a.x, E[f + 1] = a.y, E[f + 2] = a.z
        }
        if (L) {
          for (o = 0; o < y; o++) c = g[o], f = o * 3, S[f] = c.r, S[f + 1] = c.g, S[f + 2] = c.b
        }
        if (k) {
          for (u = 0; u < w; u++) h = b[u] == null ? 1 : b[u], f = u * 3, x[f] = h.x == null ? h || 1 : h.x, x[f + 1] = 0, x[f + 2] = 0
        }
        if (A) {
          for (O = 0, M = A.length; O < M; O++) {
            B = A[O]
            if (B.needsUpdate && (B.boundTo === t || B.boundTo === 'vertices')) {
              P = B.value.length, f = 0
              if (B.size === 1) {
                for (D = 0; D < P; D++) B.array[D] = B.value[D]
              } else if (B.size === 2) {
                for (D = 0; D < P; D++) H = B.value[D], B.array[f] = H.x, B.array[f + 1] = H.y, f += 2
              } else if (B.size === 3) {
                if (B.type === 'c') {
                  for (D = 0; D < P; D++) H = B.value[D], B.array[f] = H.r, B.array[f + 1] = H.g, B.array[f + 2] = H.b, f += 3
                } else {
                  for (D = 0; D < P; D++) H = B.value[D], B.array[f] = H.x, B.array[f + 1] = H.y, B.array[f + 2] = H.z, f += 3
                }
              } else if (B.size === 4) {
                for (D = 0; D < P; D++) H = B.value[D], B.array[f] = H.x, B.array[f + 1] = H.y, B.array[f + 2] = H.z, B.array[f + 3] = H.w, f += 4
              }
            }
          }
        }
      }
      if (N || p.sortParticles) r.bindBuffer(r.ARRAY_BUFFER, i.__webglVertexBuffer), r.bufferData(r.ARRAY_BUFFER, E, n)
      if (L || p.sortParticles) r.bindBuffer(r.ARRAY_BUFFER, i.__webglColorBuffer), r.bufferData(r.ARRAY_BUFFER, S, n)
      if (k || p.sortParticles) r.bindBuffer(r.ARRAY_BUFFER, i.__webglNormalBuffer), r.bufferData(r.ARRAY_BUFFER, x, n)
      if (A) {
        for (O = 0, M = A.length; O < M; O++) {
          B = A[O]
          if (B.needsUpdate || p.sortParticles) r.bindBuffer(r.ARRAY_BUFFER, B.buffer), r.bufferData(r.ARRAY_BUFFER, B.array, n)
        }
      }
    }
  w.buildGroupBufferData = function(e, r, i, s, o, u, a, f) {
    var l = o._type == 'basic' ? !1 : !0,
      c = o.isVertexColor(),
      h = o.needUV()
    l = !0
    var p = f.needSmoothNormal(r, o),
      d, v, m, g, y, b, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q, R, U, z, W, X, V, $, J, K, Q, G, Y, Z, et, tt, nt, rt, it, st, ot, ut, at, ft, lt, ct, ht, pt, dt, vt, mt, gt, yt, bt = 0,
      wt = 0,
      Et = 0,
      St = 0,
      xt = 0,
      Tt = 0,
      Nt = 0,
      Ct = 0,
      kt = 0,
      Lt = 0,
      At = 0,
      Ot = 0,
      Mt = 0,
      _t, Dt = a.__vertexArray,
      Pt = a.__uvArray,
      Ht = a.__uv2Array,
      Bt = a.__normalArray,
      jt = a.__colorArray,
      Ft = a.__webglCustomAttributesList,
      It, qt = a.__faceArray,
      Rt = a.__lineArray,
      Ut = r,
      zt = Ut.verticesNeedUpdate,
      Wt = Ut.elementsNeedUpdate,
      Xt = Ut.uvsNeedUpdate,
      Vt = Ut.normalsNeedUpdate,
      $t = Ut.tangentsNeedUpdate,
      Jt = Ut.colorsNeedUpdate,
      Kt = Ut.morphTargetsNeedUpdate,
      Qt = Ut.vertices,
      Gt = e.faces3,
      Yt = e.faces4,
      Zt = Ut.faces,
      en = Ut.uvs,
      tn = Ut.uv2s,
      nn = Ut.colors,
      rn = Ut.skinIndices,
      sn = Ut.skinWeights,
      on = Ut.morphTargets,
      un = Ut.morphNormals
    if (zt) {
      for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], k = Qt[g.a], L = Qt[g.b], A = Qt[g.c], Dt[wt] = k.x, Dt[wt + 1] = k.y, Dt[wt + 2] = k.z, Dt[wt + 3] = L.x, Dt[wt + 4] = L.y, Dt[wt + 5] = L.z, Dt[wt + 6] = A.x, Dt[wt + 7] = A.y, Dt[wt + 8] = A.z, wt += 9
      for (d = 0, v = Yt.length; d < v; d++) g = Zt[Yt[d]], k = Qt[g.a], L = Qt[g.b], A = Qt[g.c], O = Qt[g.d], Dt[wt] = k.x, Dt[wt + 1] = k.y, Dt[wt + 2] = k.z, Dt[wt + 3] = L.x, Dt[wt + 4] = L.y, Dt[wt + 5] = L.z, Dt[wt + 6] = A.x, Dt[wt + 7] = A.y, Dt[wt + 8] = A.z, Dt[wt + 9] = O.x, Dt[wt + 10] = O.y, Dt[wt + 11] = O.z, wt += 12
      u.bindBuffer(u.ARRAY_BUFFER, a.__webglVertexBuffer), u.bufferData(u.ARRAY_BUFFER, Dt, i), a.__vertexArray = Dt
    }
    if (Jt && c) {
      for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], S = g.vertexColors, x = g.color, S.length === 3 && c === n.VertexColors ? (I = S[0], q = S[1], R = S[2]) : (I = x, q = x, R = x), jt[kt] = I.r, jt[kt + 1] = I.g, jt[kt + 2] = I.b, jt[kt + 3] = q.r, jt[kt + 4] = q.g, jt[kt + 5] = q.b, jt[kt + 6] = R.r, jt[kt + 7] = R.g, jt[kt + 8] = R.b, kt += 9
      for (d = 0, v = Yt.length; d < v; d++) {
        g = Zt[Yt[d]], S = g.vertexColors, x = g.color, S.length === 4 && c === n.VertexColors ? (I = S[0], q = S[1], R = S[2], U = S[3]) : (I = x, q = x, R = x, U = x), jt[kt] = I.r, jt[kt + 1] = I.g, jt[kt + 2] = I.b, jt[kt + 3] = q.r, jt[kt + 4] = q.g, jt[kt + 5] = q.b, jt[kt + 6] = R.r, jt[kt + 7] = R.g, jt[kt + 8] = R.b, jt[kt + 9] = U.r, jt[kt + 10] = U
          .g, jt[kt + 11] = U.b, kt += 12
      }
      kt > 0 && (u.bindBuffer(u.ARRAY_BUFFER, a.__webglColorBuffer), u.bufferData(u.ARRAY_BUFFER, jt, i))
    }
    if (Vt && l) {
      for (d = 0, v = Gt.length; d < v; d++) {
        g = Zt[Gt[d]], y = g.vertexNormals, b = g.normal
        if (y.length === 3 && p) {
          for (ut = 0; ut < 3; ut++) ft = y[ut], Bt[Tt] = ft.x, Bt[Tt + 1] = ft.y, Bt[Tt + 2] = ft.z, Tt += 3
        } else {
          for (ut = 0; ut < 3; ut++) Bt[Tt] = b.x, Bt[Tt + 1] = b.y, Bt[Tt + 2] = b.z, Tt += 3
        }
      }
      for (d = 0, v = Yt.length; d < v; d++) {
        g = Zt[Yt[d]], y = g.vertexNormals, b = g.normal
        if (y.length === 4 && p) {
          for (ut = 0; ut < 4; ut++) ft = y[ut], Bt == null && console.log('normal array is null'), Bt[Tt] = ft.x, Bt[Tt + 1] = ft.y, Bt[Tt + 2] = ft.z, Tt += 3
        } else {
          for (ut = 0; ut < 4; ut++) Bt[Tt] = b.x, Bt[Tt + 1] = b.y, Bt[Tt + 2] = b.z, Tt += 3
        }
      }
      u.bindBuffer(u.ARRAY_BUFFER, a.__webglNormalBuffer), u.bufferData(u.ARRAY_BUFFER, Bt, i), a.__normalArray = Bt
    }
    if (Xt && en && h) {
      for (d = 0, v = Gt.length; d < v; d++) {
        m = Gt[d], N = en[m]
        if (N === t) continue
        for (ut = 0; ut < 3; ut++) lt = N[ut], Pt[Et] = lt.x, Pt[Et + 1] = lt.y, Et += 2
      }
      for (d = 0, v = Yt.length; d < v; d++) {
        m = Yt[d], N = en[m]
        if (N === t) continue
        for (ut = 0; ut < 4; ut++) lt = N[ut], Pt[Et] = lt.x, Pt[Et + 1] = lt.y, Et += 2
      }
      Et > 0 && (u.bindBuffer(u.ARRAY_BUFFER, a.__webglUVBuffer), u.bufferData(u.ARRAY_BUFFER, Pt, i), a.uvArray = Pt)
    }
    if (Xt && tn && h) {
      for (d = 0, v = Gt.length; d < v; d++) {
        m = Gt[d], C = tn[m]
        if (C === t) continue
        for (ut = 0; ut < 3; ut++) ct = C[ut], Ht[St] = ct.x, Ht[St + 1] = ct.y, St += 2
      }
      for (d = 0, v = Yt.length; d < v; d++) {
        m = Yt[d], C = tn[m]
        if (C === t) continue
        for (ut = 0; ut < 4; ut++) ct = C[ut], Ht[St] = ct.x, Ht[St + 1] = ct.y, St += 2
      }
      St > 0 && (u.bindBuffer(u.ARRAY_BUFFER, a.__webglUV2Buffer), u.bufferData(u.ARRAY_BUFFER, Ht, i))
    }
    if (Wt) {
      for (d = 0, v = Gt.length; d < v; d++) qt[xt] = bt, qt[xt + 1] = bt + 1, qt[xt + 2] = bt + 2, xt += 3, Rt[Ct] = bt, Rt[Ct + 1] = bt + 1, Rt[Ct + 2] = bt, Rt[Ct + 3] = bt + 2, Rt[Ct + 4] = bt + 1, Rt[Ct + 5] = bt + 2, Ct += 6, bt += 3
      for (d = 0, v = Yt.length; d < v; d++) qt[xt] = bt, qt[xt + 1] = bt + 1, qt[xt + 2] = bt + 3, qt[xt + 3] = bt + 1, qt[xt + 4] = bt + 2, qt[xt + 5] = bt + 3, xt += 6, Rt[Ct] = bt, Rt[Ct + 1] = bt + 1, Rt[Ct + 2] = bt, Rt[Ct + 3] = bt + 3, Rt[Ct + 4] = bt + 1, Rt[Ct + 5] = bt + 2, Rt[Ct + 6] = bt + 2, Rt[Ct + 7] = bt + 3, Ct += 8, bt += 4
      u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a.__webglFaceBuffer), u.bufferData(u.ELEMENT_ARRAY_BUFFER, qt, i), u.bindBuffer(u.ELEMENT_ARRAY_BUFFER, a.__webglLineBuffer), u.bufferData(u.ELEMENT_ARRAY_BUFFER, Rt, i), a.__lineArray = Rt
    }
    if (Ft) {
      for (ut = 0, at = Ft.length; ut < at; ut++) {
        It = Ft[ut]
        if (!It.__original.needsUpdate) continue
        Ot = 0, Mt = 0
        if (It.size === 1) {
          if (It.boundTo === t || It.boundTo === 'vertices') {
            for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], It.array[Ot] = It.value[g.a], It.array[Ot + 1] = It.value[g.b], It.array[Ot + 2] = It.value[g.c], Ot += 3
            for (d = 0, v = Yt.length; d < v; d++) g = Zt[Yt[d]], It.array[Ot] = It.value[g.a], It.array[Ot + 1] = It.value[g.b], It.array[Ot + 2] = It.value[g.c], It.array[Ot + 3] = It.value[g.d], Ot += 4
          } else if (It.boundTo === 'faces') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], It.array[Ot] = _t, It.array[Ot + 1] = _t, It.array[Ot + 2] = _t, Ot += 3
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], It.array[Ot] = _t, It.array[Ot + 1] = _t, It.array[Ot + 2] = _t, It.array[Ot + 3] = _t, Ot += 4
          }
        } else if (It.size === 2) {
          if (It.boundTo === t || It.boundTo === 'vertices') {
            for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = L.x, It.array[Ot + 3] = L.y, It.array[Ot + 4] = A.x, It.array[Ot + 5] = A.y, Ot += 6
            for (d = 0, v = Yt.length; d < v; d++) g = Zt[Yt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], O = It.value[g.d], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = L.x, It.array[Ot + 3] = L.y, It.array[Ot + 4] = A.x, It.array[Ot + 5] = A.y, It.array[Ot + 6] = O.x, It.array[Ot + 7] = O.y, Ot += 8
          } else if (It.boundTo === 'faces') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], k = _t, L = _t, A = _t, It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = L.x, It.array[Ot + 3] = L.y, It.array[Ot + 4] = A.x, It.array[Ot + 5] = A.y, Ot += 6
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], k = _t, L = _t, A = _t, O = _t, It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = L.x, It.array[Ot + 3] = L.y, It.array[Ot + 4] = A.x, It.array[Ot + 5] = A.y, It.array[Ot + 6] = O.x, It.array[Ot + 7] = O.y, Ot += 8
          }
        } else if (It.size === 3) {
          var an
          It.type === 'c' ? an = ['r', 'g', 'b'] : an = ['x', 'y', 'z']
          if (It.boundTo === t || It.boundTo === 'vertices') {
            for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], Ot += 9
            for (d = 0, v = Yt.length; d < v; d++) g = Zt[Yt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], O = It.value[g.d], It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], It.array[Ot + 9] = O[an[0]], It.array[Ot + 10] = O[an[1]], It.array[Ot + 11] = O[an[2]], Ot += 12
          } else if (It.boundTo === 'faces') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], k = _t, L = _t, A = _t, It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], Ot += 9
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], k = _t, L = _t, A = _t, O = _t, It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], It.array[Ot + 9] = O[an[0]], It.array[Ot + 10] = O[an[1]], It.array[Ot + 11] = O[an[2]], Ot += 12
          } else if (It.boundTo === 'faceVertices') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], k = _t[0], L = _t[1], A = _t[2], It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], Ot += 9
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], k = _t[0], L = _t[1], A = _t[2], O = _t[3], It.array[Ot] = k[an[0]], It.array[Ot + 1] = k[an[1]], It.array[Ot + 2] = k[an[2]], It.array[Ot + 3] = L[an[0]], It.array[Ot + 4] = L[an[1]], It.array[Ot + 5] = L[an[2]], It.array[Ot + 6] = A[an[0]], It.array[Ot + 7] = A[an[1]], It.array[Ot + 8] = A[an[2]], It.array[Ot + 9] = O[an[0]], It.array[Ot + 10] = O[an[1]], It.array[Ot + 11] = O[an[2]], Ot += 12
          }
        } else if (It.size === 4) {
          if (It.boundTo === t || It.boundTo === 'vertices') {
            for (d = 0, v = Gt.length; d < v; d++) g = Zt[Gt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, Ot += 12
            for (d = 0, v = Yt.length; d < v; d++) g = Zt[Yt[d]], k = It.value[g.a], L = It.value[g.b], A = It.value[g.c], O = It.value[g.d], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, It.array[Ot + 12] = O.x, It.array[Ot + 13] = O.y, It.array[Ot + 14] = O.z, It.array[Ot + 15] = O.w, Ot += 16
          } else if (It.boundTo === 'faces') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], k = _t, L = _t, A = _t, It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, Ot += 12
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], k = _t, L = _t, A = _t, O = _t, It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, It.array[Ot + 12] = O.x, It.array[Ot + 13] = O.y, It.array[Ot + 14] = O.z, It.array[Ot + 15] = O.w, Ot += 16
          } else if (It.boundTo === 'faceVertices') {
            for (d = 0, v = Gt.length; d < v; d++) _t = It.value[Gt[d]], k = _t[0], L = _t[1], A = _t[2], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, Ot += 12
            for (d = 0, v = Yt.length; d < v; d++) _t = It.value[Yt[d]], k = _t[0], L = _t[1], A = _t[2], O = _t[3], It.array[Ot] = k.x, It.array[Ot + 1] = k.y, It.array[Ot + 2] = k.z, It.array[Ot + 3] = k.w, It.array[Ot + 4] = L.x, It.array[Ot + 5] = L.y, It.array[Ot + 6] = L.z, It.array[Ot + 7] = L.w, It.array[Ot + 8] = A.x, It.array[Ot + 9] = A.y, It.array[Ot + 10] = A.z, It.array[Ot + 11] = A.w, It.array[Ot + 12] = O.x, It.array[Ot + 13] = O.y, It.array[Ot + 14] = O.z, It.array[Ot + 15] = O.w, Ot += 16
          }
        }
        u.bindBuffer(u.ARRAY_BUFFER, It.buffer), u.bufferData(u.ARRAY_BUFFER, It.array, i)
      }
    }
    s && w.deleteGroupBufferData(e)
  }, w.buildLineBufferData = function(e, n, r, i) {
    var s, o, u, a, f, l, c = e,
      h = c.vertices,
      p = c.colors,
      d = c.lineDistances,
      v = h.length,
      m = p.length,
      g = d.length,
      y = i.__vertexArray,
      b = i.__colorArray,
      w = i.__lineDistanceArray,
      E = c.verticesNeedUpdate,
      S = c.colorsNeedUpdate,
      x = c.lineDistancesNeedUpdate,
      T = c.__webglCustomAttributesList,
      N, C, k, L, A, O, M
    if (E) {
      for (s = 0; s < v; s++) a = h[s], f = s * 3, y[f] = a.x, y[f + 1] = a.y, y[f + 2] = a.z
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglVertexBuffer), r.bufferData(r.ARRAY_BUFFER, y, n)
    }
    if (S) {
      for (o = 0; o < m; o++) l = p[o], f = o * 3, b[f] = l.r, b[f + 1] = l.g, b[f + 2] = l.b
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglColorBuffer), r.bufferData(r.ARRAY_BUFFER, b, n)
    }
    if (x) {
      for (u = 0; u < g; u++) w[u] = d[u]
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglLineDistanceBuffer), r.bufferData(r.ARRAY_BUFFER, w, n)
    }
    if (T) {
      for (N = 0, C = T.length; N < C; N++) {
        M = T[N]
        if (M.needsUpdate && (M.boundTo === t || M.boundTo === 'vertices')) {
          f = 0, A = M.value.length
          if (M.size === 1) {
            for (L = 0; L < A; L++) M.array[L] = M.value[L]
          } else if (M.size === 2) {
            for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, f += 2
          } else if (M.size === 3) {
            if (M.type === 'c') {
              for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.r, M.array[f + 1] = O.g, M.array[f + 2] = O.b, f += 3
            } else {
              for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, M.array[f + 2] = O.z, f += 3
            }
          } else if (M.size === 4) {
            for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, M.array[f + 2] = O.z, M.array[f + 3] = O.w, f += 4
          }
          r.bindBuffer(r.ARRAY_BUFFER, M.buffer), r.bufferData(r.ARRAY_BUFFER, M.array, n)
        }
      }
    }
  }, w.buildLineBufferData = function(e, n, r, i) {
    var s, o, u, a, f, l, c = e,
      h = c.vertices,
      p = c.colors,
      d = c.lineDistances,
      v = h.length,
      m = p.length,
      g = d.length,
      y = i.__vertexArray,
      b = i.__colorArray,
      w = i.__lineDistanceArray,
      E = c.verticesNeedUpdate,
      S = c.colorsNeedUpdate,
      x = c.lineDistancesNeedUpdate,
      T = c.__webglCustomAttributesList,
      N, C, k, L, A, O, M
    if (E) {
      for (s = 0; s < v; s++) a = h[s], f = s * 3, y[f] = a.x, y[f + 1] = a.y, y[f + 2] = a.z
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglVertexBuffer), r.bufferData(r.ARRAY_BUFFER, y, n)
    }
    if (S) {
      for (o = 0; o < m; o++) l = p[o], f = o * 3, b[f] = l.r, b[f + 1] = l.g, b[f + 2] = l.b
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglColorBuffer), r.bufferData(r.ARRAY_BUFFER, b, n)
    }
    if (x) {
      for (u = 0; u < g; u++) w[u] = d[u]
      r.bindBuffer(r.ARRAY_BUFFER, i.__webglLineDistanceBuffer), r.bufferData(r.ARRAY_BUFFER, w, n)
    }
    if (T) {
      for (N = 0, C = T.length; N < C; N++) {
        M = T[N]
        if (M.needsUpdate && (M.boundTo === t || M.boundTo === 'vertices')) {
          f = 0, A = M.value.length
          if (M.size === 1) {
            for (L = 0; L < A; L++) M.array[L] = M.value[L]
          } else if (M.size === 2) {
            for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, f += 2
          } else if (M.size === 3) {
            if (M.type === 'c') {
              for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.r, M.array[f + 1] = O.g, M.array[f + 2] = O.b, f += 3
            } else {
              for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, M.array[f + 2] = O.z, f += 3
            }
          } else if (M.size === 4) {
            for (L = 0; L < A; L++) O = M.value[L], M.array[f] = O.x, M.array[f + 1] = O.y, M.array[f + 2] = O.z, M.array[f + 3] = O.w, f += 4
          }
          r.bindBuffer(r.ARRAY_BUFFER, M.buffer), r.bufferData(r.ARRAY_BUFFER, M.array, n)
        }
      }
    }
  }, w.deleteGroupBufferData = function(e) {
    delete e.__inittedArrays, delete e.__colorArray, delete e.__normalArray, delete e.__tangentArray, delete e.__uvArray, delete e.__uv2Array, delete e.__faceArray, delete e.__vertexArray, delete e.__lineArray, delete e.__skinIndexArray, delete e.__skinWeightArray
  }, w.getMaterial = function(e, t) {
    var r = e.material
    return r instanceof n.ArrayMaterial ? (t > r.materials.length - 1 && (t = r.materials.length - 1), r.materials[t]) : r
  }, n.FontUtils = {
    faces: {},
    face: 'helvetiker',
    weight: 'normal',
    style: 'normal',
    size: 150,
    divisions: 10,
    getFace: function() {
      return this.faces[this.face][this.weight][this.style]
    },
    loadFace: function(e) {
      var t = e.familyName.toLowerCase(),
        n = this
      n.faces[t] = n.faces[t] || {}, n.faces[t][e.cssFontWeight] = n.faces[t][e.cssFontWeight] || {}, n.faces[t][e.cssFontWeight][e.cssFontStyle] = e
      var r = n.faces[t][e.cssFontWeight][e.cssFontStyle] = e
      return e
    },
    drawText: function(e) {
      var t = [],
        r = [],
        i, s, o = this.getFace(),
        u = this.size / o.resolution,
        a = 0,
        f = String(e).split(''),
        l = f.length,
        c = []
      for (i = 0; i < l; i++) {
        var h = new n.Path(),
          p = this.extractGlyphPoints(f[i], o, u, a, h)
        a += p.offset, c.push(p.path)
      }
      var d = a / 2,
        v, m, g
      for (i = 0; i < l; i++) {
        var h = c[i]
        for (g = 0; g < h.actions.length; g++) {
          var v = h.actions[g].args
          for (m = 0; m < v.length; m++) m % 3 === 0 && (v[m] -= d)
        }
      }
      return {
        paths: c,
        offset: d
      }
    },
    extractGlyphPoints: function(e, t, r, i, s, o) {
      var u = [],
        a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k = t.glyphs[e] || t.glyphs['?'],
        L = 0
      if (!k) return
      if (k.o) {
        c = k._cachedOutline || (k._cachedOutline = k.o.split(' ')), p = c.length, d = r, v = r
        for (a = 0; a < p;) {
          h = c[a++]
          switch (h) {
            case 'm':
              m = c[a++] * d + i, g = c[a++] * v - L, s.moveTo(m, g, 0)
              break
            case 'l':
              m = c[a++] * d + i, g = c[a++] * v - L, s.lineTo(m, g, 0)
              break
            case 'q':
              y = c[a++] * d + i, b = c[a++] * v - L, S = c[a++] * d + i, x = c[a++] * v - L, s.quadraticCurveTo(S, x, 0, y, b, 0), C = u[u.length - 1]
              if (C) {
                w = C.x, E = C.y
                for (f = 1, l = this.divisions; f <= l; f++) {
                  var A = f / l,
                    O = n.Shape.Utils.b2(A, w, S, y),
                    M = n.Shape.Utils.b2(A, E, x, b)
                }
              }
              break
            case 'b':
              y = c[a++] * d + i, b = c[a++] * v - L, S = c[a++] * d + i, x = c[a++] * -v - L, T = c[a++] * d + i, N = c[a++] * -v - L, s.bezierCurveTo(y, b, 0, S, x, 0, T, N, 0), C = u[u.length - 1]
              if (C) {
                w = C.x, E = C.y
                for (f = 1, l = this.divisions; f <= l; f++) {
                  var A = f / l,
                    O = n.Shape.Utils.b3(A, w, S, T, y),
                    M = n.Shape.Utils.b3(A, E, x, N, b)
                }
              }
          }
        }
      }
      return {
        offset: k.ha * r,
        path: s
      }
    }
  }, n.FontUtils.generateShapes = function(e, r) {
    r = r || {}
    var i = r.size !== t ? r.size : 100,
      s = r.curveSegments !== t ? r.curveSegments : 4,
      o = r.font !== t ? r.font : 'helvetiker',
      u = r.weight !== t ? r.weight : 'normal',
      a = r.style !== t ? r.style : 'normal'
    n.FontUtils.size = i, n.FontUtils.divisions = s, n.FontUtils.face = o, n.FontUtils.weight = u, n.FontUtils.style = a
    var f = n.FontUtils.drawText(e),
      l = f.paths,
      c = []
    for (var h = 0, p = l.length; h < p; h++) Array.prototype.push.apply(c, l[h].toShapes())
    return c
  }, (function(e) {
    var t = 1e-10,
      n = function(e, t) {
        var n = e.length
        if (n < 3) return null
        var s = [],
          o = [],
          u = [],
          a, f, l
        if (r(e) > 0) {
          for (f = 0; f < n; f++) o[f] = f
        } else {
          for (f = 0; f < n; f++) o[f] = n - 1 - f
        }
        var c = n,
          h = 2 * c
        for (f = c - 1; c > 2;) {
          if (h-- <= 0) return console.log('Warning, unable to triangulate polygon!'), t ? u : s
          a = f, c <= a && (a = 0), f = a + 1, c <= f && (f = 0), l = f + 1, c <= l && (l = 0)
          if (i(e, a, f, l, c, o)) {
            var p, d, v, m, g
            p = o[a], d = o[f], v = o[l], s.push([e[p], e[d], e[v]]), u.push([o[a], o[f], o[l]])
            for (m = f, g = f + 1; g < c; m++, g++) o[m] = o[g]
            c--, h = 2 * c
          }
        }
        return t ? u : s
      },
      r = function(e) {
        var t = e.length,
          n = 0
        for (var r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y
        return n * 0.5
      },
      i = function(e, n, r, i, s, o) {
        var u, a, f, l, c, h, p, d, v
        a = e[o[n]].x, f = e[o[n]].y, l = e[o[r]].x, c = e[o[r]].y, h = e[o[i]].x, p = e[o[i]].y
        if (t > (l - a) * (p - f) - (c - f) * (h - a)) return !1
        var m, g, y, b, w, E, S, x, T, N, C, k, L, A, O
        m = h - l, g = p - c, y = a - h, b = f - p, w = l - a, E = c - f
        for (u = 0; u < s; u++) {
          if (u === n || u === r || u === i) continue
          d = e[o[u]].x, v = e[o[u]].y, S = d - a, x = v - f, T = d - l, N = v - c, C = d - h, k = v - p, O = m * N - g * T, L = w * x - E * S, A = y * k - b * C
          if (O >= -t && A >= -t && L >= -t) return !1
        }
        return !0
      }
    return e.Triangulate = n, e.Triangulate.area = r, e
  }(n.FontUtils)), self._typeface_js = {
    faces: n.FontUtils.faces,
    loadFace: n.FontUtils.loadFace
  }, n.typeface_js = self._typeface_js
  var T = {
      easeNone: function(e, t, n, r) {
        return n * e / r + t
      },
      easeIn: function(e, t, n, r) {
        return n * (e /= r) * e + t
      },
      easeOut: function(e, t, n, r) {
        return -n * (e /= r) * (e - 2) + t
      },
      easeBoth: function(e, t, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
      },
      easeInStrong: function(e, t, n, r) {
        return n * (e /= r) * e * e * e + t
      },
      easeOutStrong: function(e, t, n, r) {
        return -n * ((e = e / r - 1) * e * e * e - 1) + t
      },
      easeBothStrong: function(e, t, n, r) {
        return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
      },
      elasticIn: function(e, t, n, r, i, s) {
        var o
        return e === 0 ? t : (e /= r) === 1 ? t + n : (s || (s = r * 0.3), !i || i < Math.abs(n) ? (i = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * 2 * Math.PI / s)) + t)
      },
      elasticOut: function(e, t, n, r, i, s) {
        var o
        return e === 0 ? t : (e /= r) === 1 ? t + n : (s || (s = r * 0.3), !i || i < Math.abs(n) ? (i = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / i), i * Math.pow(2, -10 * e) * Math.sin((e * r - o) * 2 * Math.PI / s) + n + t)
      },
      elasticBoth: function(e, t, n, r, i, s) {
        var o
        return e === 0 ? t : (e /= r / 2) === 2 ? t + n : (s || (s = r * 0.3 * 1.5), !i || i < Math.abs(n) ? (i = n, o = s / 4) : o = s / (2 * Math.PI) * Math.asin(n / i), e < 1 ? -0.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * r - o) * 2 * Math.PI / s) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * r - o) * 2 * Math.PI / s) * 0.5 + n + t)
      },
      backIn: function(e, n, r, i, s) {
        return s === t && (s = 1.70158), e === i && (e -= 0.001), r * (e /= i) * e * ((s + 1) * e - s) + n
      },
      backOut: function(e, t, n, r, i) {
        return typeof i === 'undefined' && (i = 1.70158), n * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
      },
      backBoth: function(e, t, n, r, i) {
        return typeof i === 'undefined' && (i = 5.70158), (e /= r / 2) < 1 ? n / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : n / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
      },
      bounceIn: function(e, t, n, r) {
        return n - T.bounceOut(r - e, 0, n, r) + t
      },
      bounceOut: function(e, t, n, r) {
        return (e /= r) < 1 / 2.75 ? n * 7.5625 * e * e + t : e < 2 / 2.75 ? n * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t : e < 2.5 / 2.75 ? n * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t : n * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t
      },
      bounceBoth: function(e, t, n, r) {
        return e < r / 2 ? T.bounceIn(e * 2, 0, n, r) * 0.5 + t : T.bounceOut(e * 2 - r, 0, n, r) * 0.5 + n * 0.5 + t
      }
    },
    N = function() {
      this._as = []
      if (arguments.length === 1) {
        var e = arguments[0]
        e instanceof N && (e = e._as)
        if (e instanceof Array) {
          var t = e.length
          for (var n = 0; n < t; n++) this._as.push(e[n])
        } else e != null && this._as.push(e)
      } else if (arguments.length > 1) {
        t = arguments.length
        for (n = 0; n < t; n++) this._as.push(arguments[n])
      }
    }
  n.List = N, n.extend(n.List, Object, {
    size: function() {
      return this._as.length
    },
    isEmpty: function() {
      return this._as.length === 0
    },
    add: function(e, n) {
      return n === t ? this._as.push(e) : this._as.splice(n, 0, e)
    },
    addAll: function(e) {
      e instanceof N && (e = e._as)
      if (e instanceof Array) {
        var t = e.length
        for (var n = 0; n < t; n++) this._as.push(e[n])
      } else this._as.push(e)
    },
    get: function(e) {
      return this._as[e]
    },
    remove: function(e) {
      var t = this._as.indexOf(e)
      return t >= 0 && t < this._as.length && this.removeAt(t), t
    },
    removeAt: function(e) {
      return this._as.splice(e, 1)[0]
    },
    set: function(e, t) {
      return this._as[e] = t
    },
    clear: function() {
      return this._as.splice(0, this._as.length)
    },
    contains: function(e) {
      return this.indexOf(e) >= 0
    },
    indexOf: function(e) {
      return this._as.indexOf(e)
    },
    forEach: function(e, t) {
      var n = this._as.length
      for (var r = 0; r < n; r++) {
        var i = this._as[r]
        t ? e.call(t, i) : e(i)
      }
    },
    forEachReverse: function(e, t) {
      var n = this._as.length
      for (var r = n - 1; r >= 0; r--) {
        var i = this._as[r]
        t ? e.call(t, i) : e(i)
      }
    },
    toArray: function(e, t) {
      if (e) {
        var n = [],
          r = this._as.length
        for (var i = 0; i < r; i++) {
          var s = this._as[i]
          t ? e.call(t, s) && n.push(s) : e(s) && n.push(s)
        }
        return n
      }
      return this._as.concat()
    },
    toList: function(e, t) {
      if (e) {
        var n = new N(),
          r = this._as.length
        for (var i = 0; i < r; i++) {
          var s = this._as[i]
          t ? e.call(t, s) && n.add(s) : e(s) && n.add(s)
        }
        return n
      }
      return new N(this)
    },
    sort: function(e) {
      return e ? this._as.sort(e) : this._as.sort(), this
    },
    toString: function() {
      return this._as.toString()
    }
  }), n.ImageCache = function() {}
  var C = n.ImageCache
  C.AlarmBillboardImage = new Image(),
  C.AlarmBillboardImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABrCAYAAAAy/A+bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABoKSURBVHja3F17jFxXff7O4z7n6fXa3uw6TuI81KiYFhRIpKA2iVBBaUNRvQlxSloQpNSiKaUgolR1wBRKCrRNWilIkIQKFSIcLw0EQitEmgImJXJL3ZgQk7h1nX16Z3fnPfd9+8fec3PmzJ31PmY3gSNdzezOzH189/f4fo9zLonjGFljYmICWzhyAC4GcAkAC8A2ACYAB4ALoA1gHsAUgDMA/M0+of379/f9jGPrRw7ArwG4lhDyRsbYaxljuwghIIQAAOI47novXpMtiKLohSiKfhzH8b8D+FcAJ7fyArYKtBKAmwkhN2uadh1jTBegyMD0AalrI4RwSumVjLEroyi6LfnuZBiGXwdwBMD3ft5Bu4YQ8j5N025hjNmU0hQQSmkqTYQQRFGEKIq6fkwI6ZI68XcYhoiiCGEYin3tZoy9H8D7oyh6Po7jhwE8BGDx5wm06wkhh0zTvF6AE8cxGGMpaEEQdF14lrTJ4KnvCSHQdR2UUvi+jyAIEAQBOOe/RCn9dBzHh4IgeIAx9jcAzr2aQXsNIeTvDcO4jnOeXhylFHEcpxcXRVGXyp1v9ANRSCYhBJxz6LqOMAzhui4AFDjndwG4MwzDexljnwXQeTWBVgDwSV3XD+q6zgGk6hcEAVzXTSVKVUEB4GqHAEzcCPE/oeKEENi2jTAM0el0AMDmnH88iqJ3x3H8x4yxb74aQLuGMfaPhmFcyhhLL0BIlbA/MmDiYsMwhOd56XdkAMV3BfhCYiml0DQNmqZ1qaqwl7IdzOVyCMMQzWYTjLFLOOePB0HwBUrpBymlrVcCNALgz3Rd/5iu61zYLN/34XleFwiyOnqeB9/34fs+wjBEu92G4zjodDpwXTcFOgxDiJvAGIOmaTBNE5ZlIZfLwTAMUErBOYdhGOCcd0mhDF6xWITrunAcB5zzOwgh14dh+DuMsWe3EjSLEPJF0zTfwRhL77LjOPB9vwcsoaK+78N1XSwtLaFWq6FaraYqtZYRxzEsy0KhUMD27dtRKBRS6TNNMwVLgEcpha7r0DQN9XodYRhepmnaD+M4fifn/OtbAdp2Qsi3Lct6gzDAQrqCIOgBSwBZq9UwNzeHpaWlLvskHIaQkH5DtYVCcs6dOwfTNDE0NISRkRG4rgvDMGAYRuqxwzBMASyXy2g0Guh0Onld178WRdGHOOf3rXTsjYK2kzH2HcMwXitUw3XdVB0FhwrDEI7jwPM8LC4uYnp6Gq1Wq8f+yHYoCzj5uzJosucVdnFmZgazs7MYHh7G2NgYLMuCYRgwTbPH9uXzeTiOg1arRXVd/9s4ji1N0z61WuDWAtoOxthTpmleCQCMsVSKZGPvui5c10Wr1cKZM2dQq9Ugvi+DJNsfSmn6uaxWqtqqNEXcIHmbn59HpVLB6OgoRkdHEYYhTNMEYwyMsdQcmKYJSilqtRp0Xf/LKIqoruufFFxyEKDZhJDHDcO4EgA45+h0OinnEiTVcRy4rovJyUlMTU11gSVAEJsw7uJi5O/JxlzlairHE8cWDkRI/fT0NBYWFnDppZeiVCrBNE3oup4eGwB0XUe5XMbS0hJ0Xf8LAGd0Xf/y+YDjq/SSj5imebU4oAyYuMOdTgftdhunT59GrVbrAUtIFOc8BYxznv5fBanfkFVIlbg4jmEYRuqdfd/Hc889h4suuggjIyOIogimaaY2TtCXUqmExcVFYhjGw4SQGULIkxsF7S7Lst4mAHMcpwsw3/fhOA7q9TpOnToFz/NSwGTQdF1PWbsArh9QWWqZ9ZmQNrE/8Z5zDk3TUm89NTWFVquFvXv3IooiWJbVdRMMw0CxWES9XtcBHKGUvg7AS32l6Dz5tGt1XX+KL4+UNqiALS0t4YUXXkAURV1gCbXTNA26rkPX9S7bNoihZkWECotz9DwPnufBdV3k83ns3bsXtm3DsqwuDSCEoFarodVqwTTNH9i2fd2tt94aZkr7SqERY+zLjDEuB8WyDXFdF7VaDadOneoCTBh2TdNgWVZ6kpqm9TiDQW1ZN0vXdZimCdu2Ydt2aj4EmVaJd6lUAmMMruu+qdPp/HlfE7ECaPdqmnaRYNYi3BGe0nVdNBoNnDp1qsvgC8AMw4BlWbAsK81GqJ5zEEPen0poBQ8UpNe2bbiuizNnzsDzPDiO0+ORh4eHhYTe/aUvfemKVYM2MTFxlaZp7xN3TQ6LAMDzPHQ6HTz//POIoqgLMPkEZekaNFj9wOsneSLcsiwLnU4H09PTKSmX01OMMZTLZXieZ3Q6nc995StfIatyBISQT1NKGaW0Z6eCzJ4+fRpBEKSAiRPTdR22bXep4lYPOXUkczP55lWrVeTzeQwNDUGmGIL8tlot+L5/g+M4NwH4xoqOYGJi4npd15+UvaVKLaampnD27NkULBUwwYfOFxpt5pAzKmoEIRKWnufhiiuugGVZKQEW5+z7PqampmAYxolCofC622+/Pe6rnoSQjwsbJTylOAHf99Fut3sAE0ZXACar6ys1ZPuqkmpBSzjnmJ6eRhRFaWQjhqZpsG0bvu//SqfT2d/Xpk1MTLyBc/4mORcv7pYgi2fOnOmxF8JLCcBebUMGTgZU0zR0Oh00m82uJKnQvm3btiGKInie96GVHMFBWTzlnFgQBKhWq2g0Gl0H5Zz3ALYR6lAqlbBnzx5ceOGF2L17N3bs2NGToV3rJgOXxSFnZ2cBIM3SiONJ0nbN5z//+Tf2OIKJiYltjLFb5dBELoKEYYjp6en0wEIFTdOEYRjQdT2Tza9lvP71r8cNN9zQ8//Z2Vk8+OCDXdRlvRIn1xVkLarX6yiVSl0ZZkopisUims0mHMd5L4BnVEm7iRBiUUoRBEHXwUTKuNlspictuJhhGGnqeaOUQgCvjpGREdRqNfi+v2E6ooZ3wsYtLCyAEJKqqQDUNE1omoYgCMYfeughXQXt7XLSTq0vzs3NZTLuraIWjuN0Ger1gieDJoMnQsKsEC2fzyOKom2O41yXgjYxMWFRSt+qxnBCz4MgwNLSUpdqilhSzrxu5lhtuW+14Mk2TrwXuT+VsuRyOXHjbpRt2huTvH9PyjqKIlSr1bQqLrPrQdix9ajYIGmJuC5KKer1Oi644II0jpbpB6UUURT9egpaFEXXCjslOwDxWqvV0rsjFyk240KyRlK/HMix5DYHkU4SAIokhG3bXRGFKAfW6/V9DzzwQIkmP3iduhPhAKIoQrPZ7EkkipLZVkiZINODOJYa4MsOgnOOdrsNtYNJVL/iOGau6+4T6vnLWXYjiqK0QCLXIIXr34yMRb//iyzvII4npE2oplxGbLfbmclPTdOEIL2GT0xMaAAul7mZbAQdx+kymrLHlKtFmwVaHMeIJHs6qOMJ4i6He+J6ZUlMCW2iWVEUXUkBjArbltW5kzSTdEUBagluUKNer2cABkQD8por9YXI/SBqjVWk0ZPPL+EAdvcryIpUkMxx1DhukOrZaDRetqdRjBgxwihCpPSoDcpzCrVU9+15XpczEF5W13UEQbCbh2E4KnQ2K9/u+35XzkwlhpvBx5alaxmsKIoRhvGmSVlWaVEVHllF4zge5QCKAvGsL8uxmuBoqrQN8kIiLAMWRomURTGiONqUVLmQNpmzqbREjV3jOLY5AFvOImSxbtklZ2UQBogaoihCECagxUmrQ3IRm+GtVTWV+9yEd1VAK/A4jnP9xFG1IZvOyeIYYRQjSKQrSqRtcWFxyzihKtFZNVcex7HfL6ZTg1o1QzBwzJKTDKNw2REkUlZdWtwUG6p2VQqpW4kVxHEccACLsi5nGT/VLW+m5C3bsmUJEyBCCuG2oqKVlYSQ8mxVDmBGTm2rOxFMuB/NGOhFEJI4AQkwAHSFTqKNeOl+Q9hu9TtJsXyBEkLOytGA6oblvgfZMG6Gii4tLCzTDInyUEJAN0G6Vjp30ZraowVhCELIS1wGTS2KiOysfAAR+W+GpAVBAIKXpZkRAkYp2IBvVD+GIAhsFtEX0VEcx/9Hb7nlliaAKVnSZAoimHG/A8kh1kY3xhhAlqWLUwqNM+icgTM6sGOoM2XU+Nm27S7PKYPn+z4IIado8uNn5bqAfEc557Btu6tRRAVskIOCQGMMutg4AyUDPoYUoKvA5HK5noq7ACwhvc+KszkRBEEPAKJmUCqVBp5y7us9Qx8aY9D48sYpxdLS1vE0y7JSCiJfq+hnoZT+F0+k5piwKUKEhboyxlAsFjE3N5emwlcKNTY6Jo4cwa5du8AZBxDjxRdfxOTkJMrl8qbm7kQXpWEYmUyi0+kgiqL/PXTo0CxPgPkhpTT2fZ8YhtGz43w+D8MweoxjVnf2RofrODj1/PPp1CBCCIaGhmBZVtcEi0EVaWRpKpVK4Jx3CYcY7XYbQRAcWzYhAA4cOLBAKT3heV6PXQvDEJxzbN++fTkuTBr7sjzMIJrzbNvG5Zdfjje/+c24+uqrsXfv3vSmZTU8r7XSroIhA1gqlVIvqqb9XdcFpfRJuRoFAP/suu6vFgqFTCB27tyJSqWSdt2o9m8QEpDP57F///6eovFTTz2FkydPdnUjbTRrqzq0crks8mU9oCU115hS+i+ppCUq+oTwEqpXDIIAmqZh586d8DyvR7RVr7rebd++fZlV9muuuQaNRiNV1/VIWD/wRGF8+/btXekheSQNMicOHTo03QUa5/wYY2xWlMtU0iekTQCrTjnsV+VZyzY0NJR5caZpCpuyLsD61R7Eq5hnIGiFanZarRbCMDz6Mi1KxoEDByJK6dfk0rxM/nzfh67rGB0dTZuW1QNs1KOuRGdkW7rRcEkuHBFCsGvXrq76gHweSUckGGOP9oCWSNsjoiKT5R2jKMLw8DA0TeuaoykXIzbC4+QawSDT52onpDyHa2RkBJqmpWZHvTGNRgNBEPzHPffc87N+oB1jjJ2SVVQWcVFkufjii9MmP9V9q0Z0LaokOsXV8cwzz/SdLrRaT6m2vwNAoVDA0NBQpoQJr5mo5he7oxZp3HbbbTHn/B8ER1LzaAI40zQxNjbWI21ZgK1lzM3N4ciRI3j66adx+vRpnDx5Eo899hieeOKJlKdtRO3lsIkxhrGxMRBCuqRMlrRmswnP8zqMsUe6hEs9gK7rDzqO87FOp2Pk8/keiRFzCMrlMlzXRb1eT4mvHNOtJ+fGOcfS0hImJyfT6USCu6kN0Ku1jTJQYiOE4MILL0wnxsmeVN7/0tISfN8/cvjw4cW+kgYAt99+e4Vz/lXZvqiiLybEjo6Oolgspmoqt873Y93nm3Wi6zpKpRK2b9+OHTt2YMeOHdi2bRts2+5pOs6iFVlSpS5lsWfPHti2nU6+kCVM3Ph2uy3M0d/1JhWyk3D3iR/KO5JVVXiVsbGxdIK9fHKquq7WQYhSoZgoIToRV5NNUac3qk4qiiLs2bMHuVwubfWXz1mVsiAIvn/48OH/XBVo73rXu37MGPvOStJGCEGj0YDv+9izZw8KhUIKnDx5X7V3a11SYlXFZWX//baLL74YhUIhXWBABkwWDjHJNwzDT2enr/oMXdf/SsxB7ydtwHL/heu62L17N3bu3Nklaf1WTMhS4fVSiCyw5MmzwuhfdtllyOfz6HQ6qTmRuZ8sZYuLi/B9/yTn/FuZtneFPPl3Hcf5Qa1We5Npmn1L+XEcixUIMDw8jHw+j7Nnz2YmLbNWRlALGCux95UyFbIEy9PDi8Uidu/enXpDWSVlwIRQeJ4nQrZPHD58OF4TaLquwzCMj7bb7e86jpPO+RazcuUeL5k5Dw0N4YorrsDs7Gy6MoL4br95Bv0AXIk6ZPFCGSxKKXbv3i0mh6HdbnfNiRCACecixsLCAnzfPylHAKsGLTHGTzqO82S1Wr1hZGRkRWkTd6lSqaBQKGBsbAzDw8OYmppKvZR8V+OMVoOVwrCVkgQqOR0eHsYFF1yQMno5ppQlTJ4LJWxZImWHDh8+HK0ZNFHKMk3zrlar9Uyr1SK5XK5L2rIuRnSCdzodbNu2DZdffjlarRZmZ2dTbywvNqKmaFYLWtYiTzt27MDw8HDKv4SHlCeSyUZflfRKpQLf948xxh5bkU+u9CFjDKZpHncc56u1Wu1W0RouGprlBhKVUDqOg7m5OViWhXK5jMsuuwy+72NhYUGQxq5UjwpYv/U4VLUUoZBIIDqOg0aj0QWWLGFyw7V8nFarhWazGYdh+BG51rtm0IRtsyzrrnq9/rZqtWqXy+W+FEQFTsRurutC0zQUCgWMjIxgbGwsnchVr9fTpSlk0PpNtBDTuwuFAgqFQnoDm81mV8pKBUtufZd70cSYn5+H7/uPcM5/KMqW6wYtsW1nNU37bL1evyefz6dNw+JEVKcgv5fnVonlczRNQy6Xw9DQEIaHh1NplVe4EqCJY4m1hGSD32q1ulafkT8TPDGLZ6pEOTEn7SiK7hYh24ZAE9KWy+Xurdfrty8sLFyya9euTKcgN8mpwKmTVD3PS+cnyLNgxMw+UeARFy9LkqquMjeUDf1KgAkp830flUoFnud9Qtf1syIK2TBoibR1NE27s9PpfLPdbsO27R6nIDfDrURM5eBYrnyLwk5WIbqfbZPVL6uYLXvsfsbf87yfMsb+2jRN5HK5vhPb1gSaUJN8Pv+tIAgerVQqN4+NjXVxnCzbtloAs/bRrzaZRTlW4nb9EgOC7Nbr9TgMw4OGYXi5XK5rWnb/LoBVDhFEm6b5R3EcVwRxzZrRpq5MtdrQSF7zo98mx7T9wrB+M1LkcwvDEOfOnYPrul/gnP+bWMxuNTOj19QkQSmFbdvndF3/k2azmeaiZPc9yOa/9cSoq1XLc+fOwXGcaQAfMU0ThUIBhmFsDmi6riOfz3+ZUvr4wsJCl+FXJW6remT7AdZPyoRa+r7/Xl3Xa2INkdVmhtfcjpMQXti2/YdBECwtLi72MOysVaq2EkDVwcjaEASBUMuHOOfftiwL+Xw+pTObApoALpfLTRuG8b5Go5Guwpdl37YKuJVqrrLKzc3NwXGc/wHwQdM005aHtazysC7QhJrmcrlHKaUPz8/Pp/PeVfu2FRLXz46px65Wq2g2m6Hv++/Udb2Zy+XSNPqarn+9J8oYQyLaHwDws3Pnzp23DrCVdkz15K7rYn5+Ho7jfFTTtKdt20Y+n1/XCgwbajFkjMG27aZpmr/ruq6n2rfNlrbzSZhML6anp+F53pOMsXuFt1wNJxs4aJI3Pc4Yu6tarXYVYzbK3zYiYTIYCb2YDcPwnbquh/l8HrZtr7uOuuFmVuFNi8XifYSQR0XH5GbytyzG30+ql5aWUK/XQ8/z3qFp2kw+n4dIOqxbWAahJpxzscLxewA8Pzc315NOHqSqrlYt2+22sGN3c86/J1JKa/WWmwIakK7L0zBNc7/ruq1KpdIljYOiImqisp/h930fs7Oz8Dzvnxhjn7UsC8Vicd12bFNAE6t4FgqF5zjnv99sNuNqtdpXjdYDXJYdW8nwdzqdn0RR9G5d1+NisZguhrfhax2k+xc0pFQqTRBCPr64uJjpGNYD3PlUUjX87XZ7MQzDt+u6XisUCgMDbOCgycAVi8XDhJCJubm5NE+metTVzqpbC2CVSkUY/ps55y/KdmxQE0U2ZWWlJPcW27b9e3Ec//f09HRP65bczKJSkX7Sl2UXVca/uLgIx3Hu5Jw/ads2SqUSLMsa6GJ4mwKamLpdKBTalmX9ZhiGkzMzMz2dOVn2aCXwZA6m/q7VaglPeT9j7HOJmVhXmPSKgCYnLQuFwqRpmm9xXXd+bm4u06Oeb2GUfk5EfnjE7OwsXNf9BoAPiWWlB2nHtgQ02b4lHvWmZrPZXg1wWYvE9eNivu9jZmYGjuP8KIqiA4ZhhMViEblcblMA23TQpPgU5XL5R5qmHWg2m2E/DrcSQFkqGYYhpqam0Ol0XgzD8CZd19vFYhGFQmHDSyG+oqAJx5AY5W9QSu+s1WpYWFjoAk5dAlb9W62Mh2GIyclJtNvtSd/3b9A0bb5QKKBYLG6Y8b8qQBMRQy6XQ7FY/Bwh5N5qtYpqtdqlhur63/IyPbK3jaIIMzMzaLfbC77v36hp2kvJvgfC+M8rBFuZw0+oCOI4vrter+cWFxfvpJR2TUtU29nV/4unWjQajZrneW/VNO3ZXC6Hcrm8KZ7yFQdNtBckPbofaDab9vz8/HuA5YV4zxcVCBvWaDRanufdqGna8cRebhlgWwba+Pg4wfJjR1hiEigAcu211/7pjTfemJ+fn39HHMcYGhrKJLaiH2Rqagr1er1dr9dv+cxnPnMCgA0sL08ktqNHj0Y/t6CNj4/zZP9MASsF7dixY+Sll1768B133JGbm5v7Ld/30/4yWR07nY6wYU6lUvmD+++//8dYfv5enIAlXqPx8fEQQAggABAePXo0HPS1kUE/fnd8fJwB0AFoCVg8AalLyqRXPjw8nDt48OCnDMN4S0KIoet6Clij0YDnec7Zs2c//PDDDz+F5acnxlmgJYBFCWgBAO/o0aPeWq9jpcfvDhS08fFxCsBIANMUSWMKYHkAwwCKAHKGYVgHDx787XK5/BuUUiZLmuM4lRMnTjz0xBNP/AzLzzFuAahi+bmdvgRcKAEXJp/56wFuK59ZLIPSo47KZ6VkKwDIua5r3Hfffd+/6qqrfrJv377XmKa5PY5jv1KpnH388cd/6i5PHylKEhwlEieSdpFEoWLpbwqAjo+Pk6NHj8avRpumqkokgUWkzwCglgAQJ2pkAtCOHz/eOn78+HTyfUiSE+Dlp2U3k9/XpeOox40VBxFvuk1ba+pZjpxWadNkqbOx/ChxI/ktVUALAHh4+fHizlpsWrL1jPVeOxnElJs+4J3Xe2Zs6S7V68t4lQFTQQsl0KJBgTVQ0FYJYj9pywKt34gl4LIAizYDpC0B7Rd9/P8A12VCYmM3Gg8AAAAASUVORK5CYII=',
  C.Logo = new Image(),
  C.Logo.src = 'data:image/gif;base64,R0lGODlhFAAWAKEAAP///8z//wAAAAAAACH+TlRoaXMgYXJ0IGlzIGluIHRoZSBwdWJsaWMgZG9tYWluLiBLZXZpbiBIdWdoZXMsIGtldmluaEBlaXQuY29tLCBTZXB0ZW1iZXIgMTk5NQAh+QQBAAABACwAAAAAFAAWAAACE4yPqcvtD6OctNqLs968+w+GSQEAOw==',
  n.ImageUtils = {},
  n.ImageUtils.registerDefaultImage = function(e) {
    e.src != null ? C.Logo.src = e.src : C.Logo.src = e
  },
  n.ImageUtils.registerAlarmImage = function(e) {
    e.src != null ? C.AlarmBillboardImage.src = e.src : C.AlarmBillboardImage.src = e
  },
  C.ssaoNormalImage = new Image(),
  C.ssaoNormalImage.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAIAAAAlC+aJAAAhB0lEQVR42h2a53IjSZalXbuHhKDMUiNs9nnXbN9vpnu6qzKTJGQo1+570L/KLIsEIsLvPef7ANL/93/rxy2PO+5V6j+KPUr+lfJQl0XtVNIy26BTzUaThcVh0uRAlliahmyMmtvW7tsphNbnu2l2U3FHkSNpTCBX5bscl9ARkyQVLPBaryQNQs6Rval4v8nmkNbImRNKl5yYEXlKlfXS0BDPtb4o/ZnXLqtJ2ybteSFZXUp+E+UuMrsZ8paHzMUaiZLX250rW05Hqq7E6qpSrqYJPG9rVY1bbZZJWOM7M39c6Y5zv7IQKRuqO11oVjMr1dtbm/r/FtddyV9K8itZm9wFWrfFEpfL3ojjQn+ITLowfcbcNrf/DcVo3kbl65nwXRaS48aI87w9ZPtJnSAsZjdoWvOEB9auKdBrpiU51i3rB1PjTty3MvIY7qKqyG4600xVqSvlXRBTvvRiXMvAY66cRbYGelD4n/lJ8ESXy9T9h65/KcuKefH0RGvd4z1DKnUU9cZK8srFwnrbZ1mneBvkPtg848ok9TkPXOssNJlmujd03WJtk75LIeJ6k7J63gk+4TmUbgunRr7MPHPPiE6Z2UCMoLgKoSUrW2sOLjAz8/q+0dvKW87zhduh7EJKtIRWMsWHuZy7uqdVOrWSTHQ78PJFWJ8F0/zCaLOpeV/7leM2Vh2lk6I43/Nyb2W/cdV46wPnpYsvDAPZSBrSIqLLWol1wU+3dY27Q/pSXORKvUy3XKTu73TpdZNr4oF2wnO238TfRO1lDkmLvfBnsrVrs+qyj2zZkXaWtuT4ksz2OHpNyuzY+yVfWvrs6xaUSdU1tlbcuqK5SlrWjzAe6GlX9xNNLQ1rbCZaWrdG+pSt0yoGRXzVRkcdqNWe5pCzSYx3bomt8avsJM2WkThtxngaSeVDLdlY4vMzlyuRJXpCyVpUrLeGvaVyX9QfDRFr0ZKbaR/fVnajrIvpPNanQMk1hlFQJkiu4yy2LvEos8mMlXmoo+2iTWlI1MogC+sSNkxdo9tz7SjtoihkKbrTrmaRlGg3b3ckp4bcS6OEpcpgiSR+ve/YZhtO7yV38pmKz6fcOxIDl5nd29pVrq9l2dHKECiJztx1qXPKNxG3/DVW4b3HcPc3fiJEDs57sj/n1JZ8YOpUiuG44nWsbcisQaoQ19fnW72X2u2ZO9fR2Pmu8jNpZNGcFMqLnZkweALGhVlUlgRzMRmhU9zCnfZ0S6yrDpePEccq0MzCmtUgyhYmpbtrvQmkYp7n1HjBFXF70iCUTI20lEFol3JXw62aIfQzVmjU/mJXVg8i+ZNJpGhDPyhGWSAXsBnDv9bbRtlEYfeltTFVkk2zfs/q9xxOjB+Lniqe5pmKjgd+NNEpHn1si/aiSi6GOl3ZSJhmpm6FNOzqybEh2ZIl16GheAyJBaIUn9Ld1F9KOX/Xe11PQhIehNNpF7C9BnHpWVeEX3R8iuNWMgK6rKs1pV+Zpzo3RQhipW8XESwzMUrh3GzKaDGRPBc6h4A46qrZrHim80doj5ReGtx1UEE2VeRELnwZFgyAiSLQFFKoZ/pHX/5Jpcyeclasf9I4WDKxIJDIKmPoqcvBpNip/UbuzPB9Xgttuy1fZLSZ6iobv91lt98cCsGTZs0Rx90hQLA+S2zG8vOavu3pxSnmOK2UfsvYtXuRpsvywqlkiyJDqy4RA12lZvfsVaeZzamn0ti6oakoSf32Mu9uLenTmsqgCylNtul7oMNSt1bsmciZTraivAyGztD4PWE9mhYdgMxg+zHdL2FQlXETTpUqEn8hT5le0ShHok9q6wg3JVGWqH4NQuQSBafnH+z5EOc0DOHmexMpJR/MjyhInJ5YR3qq27do7reweyaE4Ce54DE6c9Rp4TVuRFTSLtG3XP2U5SXGWyGtdGgemfaa3CMJHS5AfPg4vFW1SnIt9C2RT8XekPvV8dxm2nH6/R/85Rc/1XGYzvnYqijMqcydTCE8Z4Jb2YIfkPvO5j2ZlBSyshoz/V2mSfR2u7dtXmtDUzmEuDWNirj6fGFH3Zykefk3ejvj8UeSCgtKGbJQJQPj1sg+rAMeawrHSq6aHnF7RTE6Vnaq6DWyZjaJ+tKq7btzbfztWP9cRPtGYsShiG5KVnPpsvovVS+0CX5tO3KnlHk/1t4rbfIJrX1TR8MTfvBI5aXK1otAKmuZ+PLR1NJgMmsr46TQN7TlsQYaQ6yjkjff6LRdMXFCBVGTrEMqjoEZJOhAh1k2MiXULgbaHZzauHWkU/lnEzoqxVITBjsFlwlrCyvdT+WRbORGZVbi2TmbqOdhx/h3V3rGeEGOHZpoBSsZUe59og3W4kjryS1tGiemOp4dE1qQr3MZR5Zzlniyia5K77c8c+a7olD6mW6XzPfGLRzXpi6EGUmec/8lAVRxJoVFwMZuqrOgQ2Xz4OhiMk3diwRijUt1W26PqO56zeIoq0XxktJeJPDFaEaaKf+j5z3nfVl/SPrGiKd4SY0pJ7q6WCWJR6XuhLRk+6zyxQxX6mQql9K+tkIw1rcedx8LpikrmpwvYWB5YeqzxpHQmF5b9rd7fR4BVlTu3VcVB2dW4xklfCiR6MMd8xMCYynl6GWfY1VoMoQ3S46w32hKZFgpjuge8WxjL+IXTy9F20zKR6+/MTGFa2THd2fvBBMCdMqhEuznSMO98rWkHXVzejfiH5f8uqdkpuzg77wI56mImpjKXeWV+51QpNabGwcZKcl3RnqBFTyYbZmHrg120QMgpHpqKGKe8Kgnd8Vv3dHoADR57OO9FQikLkVJWKZgtYKzJa0LzaNN5djltDWg3FDQ092h3LfYdThIxSYCtom3CEzWB14KrTern4AhpFhWdxjdLDmZ7qptCvCkJiqahO2ldOH8gMIQ86fnIzUHYlNNZ77v07QCjZI66Ja6ZePj3nnLWDCc1Nig9KV84tlnHOOpELpzt4n3HQlmCxcEqNdKSZZ1BQQQlEshhs/LxpDUlWpC1oBarJGZ3lx9ypTmqdDntF/YXz/D846EPdiRppnVpnYL+QK17CVaLzrUUWh1KzZA4ZwoxnrRCIfxIG4htje8ARGvOW6SN+ugm8+tNKWiisJNDTqcOypsamdxquUbKMnEbdNG1M0JoaARjp9M2OW21eCM/aLzIZeToV1gMbGh8bkMK6YreE2ajQx7Ot9c07UA4xR1czM3k/YHZj2AUnKV1xfWO+aF3Rn1ZWnralWZbxwjIpSM0WQflSphPtP9b7n/YRzq81DlwmdwpWCLTSN6tAHgh6lP/IO1r1s1yGap1XrZ6mDrXaS24c1MQ+PSyMQuDxu/N5v5Z0P7BNRH1GB8HrsR4hPJJyWOlTWFb0jqST+1dMPNEdooevP+6S7iW2UTtzgnRbqFkc1FVqdAZcE8qy8Sqi7Son+uEpyrmHINf2Ph6595HOtVwHgQoan7VemFWTzTVEDjhpXemeU/wmHiCV6kmIyMHBSxHNHNbBJje8ri1w+xdg+qef9L358TkCXbKm+ZiEIbKmj9snIYsIil7pJy0vaJwO82jEMdoxY43jXfPsPQNUwUP5VRl/Nr8y2lS4QrSqAkCtgwc3tnwpnSIl2qB49P8IgdnJbqrSJhFLLwWj1LZtb00frAJVHQMre8xpqZ3sWcRFkuybSUzxIxtkLfsGjPUALMBl4Ng8eBfwoB9UYbV26pNETrYcV1T4eqz6yTs0jQyZVxvWPkQ9lDLBedevWvt16x53XxfMfjpRK+ymKkJJg9EWc2TFmMxZ8c7oo/3dza9AQtM7NYCdl7ZLS6c5qJbSuTPnNNcqBPiVwl6WinRLLb2ulxZjcSecfQa3jtAiByGTVagthgPYnJsSBWko3UqydN5lq1K1uR7Z1vwjVDr+Dysa1ivS8Mctd5iINeZW2wJ7xMPR5IovceUUNa03BvJZzKtmNsgxERw60V3nLpekLL/hp/dPKdxemTqZZwaeeWdKR+nMTvfIMRBjjNnhOEvrdBtPTPnHZVWoREhkvqDBSsAxEpIFJZq8B4Xn5pALzFlDdI00furU6N3bZS3Ut2yqGPKqagubZdaVf6s1E7POzZXTv9VHN74Unm3G2cCyXq14W/4sF5oncpmArj4NQT0nEC/aZy5vI5MafEcBTXJRyTllitRPbjCkNb2mkgHbQmY5d4QE6z/5PZatDgxKod0LOk7178ZtgHzF42DjpZTR7YNkbxExQIwwNRU/rE3aa4qXmriglQAAfGU8YXUkaEDPWFJKOfnbr3Xu8pRSrODXpndeW98650pFszwplJsdEqmkpRGUe2D+HvW2xRlgTiUZ+asqaEx2uKXFcxN+5FdrfzmoeGAxBSYo0Y/ynPQ2k3w5t8g/7sxX8Wfq4h4mEpqAc6qEgXw4nHdyHXEGHwOpYNJ+Zva9M95fZngguXh/SJ3KMLiN5XnfIN3czjfq6XqvY7cHEk3O8Tv0EgmrgXZtuchoFwSTWAbdH8FL7E8Fzsuq8mpGZVN0gcQ3q09q2UhT9d80V43nUgeranPIGx5KS23lfbc3Oh0MXdrc4EoYaGIooWkG4FAqBxn7kA7HdBeFl8pozoRuM2wv9w+l4fLPAly4AKSHaW+Z5LbQxj1mCjwnERd2AcxMJp+8riVv64lh8Uqt4OpIibi+/Y9JiV0UItPyh/skxYfhkzr9RUsqT0eimBs6+jHyYIVSI83YGlnPUsPx49smjN4oWnTtYpaV8DfEMxLDwfS1gpaSkcmSu6LXgTWw1XiXxfyDgG1vDPWp9ZZR2BqqYbZZlwIWi3nKN+rWW5qnwoQJJ9YaeUDlMiRP2JgYxkSDnBuP8g+Tvtnsd0zuSwgax1sp59G/TsOX5Yu9ry1XPFcRHjuYnHlK2TzZHQlViRVJalq7LWsFT9yfNOWZoUafSYvSSwftPjNIDMPE9ZdmypHE8BMrY31Z8rM6ZLa70p2+CtA9qxM3kmIFS9k3K9BfVbS4FGqVg8g5FuKxaav6ThhDXJ1fKH4Gnkh9XCWKxmbVWen/LhZC8tMomUpAmmqPI5p0OTapvLxtRWHcpl5GUNdxrbla0Llc+F6A2BPfR08zFXyr8wKCLcMx+iISL7OivEFmiMLug0SsihFuuaBAnm39p4usMbgLGyiTiMUhhvfivutEI0NKH3JFWhI6k/awiGCu1dlDoxsUh6AB7NyJHc9gTzmU4ksyis5CLhv6HSIJJuuFvI/v6gYzZyReh2LZzLAY17Y/1rXm8CboxomRbfMzrdw04CLVBGIPPmhi34zddbvImmB9nxQGxk0QhMjmSNqp8/VHcMWciyEobdeRbG1c9z/QYk9ewm486LhZObrr2Um0/syjjj6omJXtDzLZhYdadWy/KQhqCs3pBqVDBfcw9chDpfLOJqIWa/91vAFnPWRGP45zntWhnOtN+xJSS0Gc/1nNPY8JU5ODhpCO7rjXf/xEY05GXNM4MnyiYz/Nguyc6U71N8f0PZNcLbOVM8n3apfw75aZNLs44blZgUBJPlBip0R9PQzCXvUohJ+EiY0oHHoST81O1UB0nu89D0KVqCJVMmLU6YA/xFNMQFdERIipOTNe2c+kFrwedv2V6IkpRXcoLzPOo2jlbFHrRs3pT+4GH8S6IZv1T9JaUPZFufjx7uBYDNo2nv1GE8OVWdigET4NXuA7+ay/3odkEsxRu926cH8+7SxMRIbAi0z6BGZz8c+b2tP0V9krkNBel76MTmhRjCZmtXxcC3i1VH4q2tTHmCTLyk9oncM6ZwKksTChcxDsR8EHdoKVziGHAcail89PlHpq8rnZ7Kzxz+zcqTJL8T9/evmjp+I+QXyZYSuglBiJhuv9VwHmqDl7O5MYVq6xJpDwnC6jAzYiaxqdFW/CPg+9ciTs/NYVodVoEKyfxW5cDoDb9MabiavXa4k6TUsVJHK3pKbnW9gHkUhawwQei4qdLeotqJuYZnpudzpapa2eG0eigOZ5LQ7538NScP9BsgkebThF90PUuxW+t3y15Qdz3aNI85+NCYewFaIqZhBxmqGISdWWOwkPzKmy6UPXq5o/vAyRVT4fJspVdxlGGFw+IIZmh0NSK5nXITRd4iMT3FtLEIIzSUrLCmoZYWvL1LKfYEmw3Ae/LU0tK85LqWbeODMqwJV527ewScLC0Ha+BOO5aWq5yE4zaxth44p5pZTK3pXaqOuvce5qVNk6mvZM2q5Vtfy0xXIOojOP2ydebgA1gzzkJs6NMywL5njHZuzmXpAeR0CcTIQBpZfZAC1CFcD54vcsq56ZgGwIC++4kZeU+5Z4fZ2UbUO1GmnoXSu2Bk+ZH401e+Gt0PWdCySPP4ZgH9nPII8aKBWjHzKG/ixTQfpQxY+I7ax0e2Od+Qy1TsJPAD7TZr8u7omZKG9fmp6Cgf29trsbZZrdFemBK8RuKfEoYUj5lONXHW7nDgoNAau/x6LydX+hY1XTcbW4uwsr1gxFCHhUcspNjsql1NBzYJ+baJB6L2tYc9ZZk2NqRwfykNcJpBDJSgQLhEIFYlWDwlFaiu6cQxAG0pn0/p9avZaJIXElAgXbYd9KZanRo8MliL4gHxNFr5ycSgozV6jvn4N1meOV6WPgEIS/CCTRQyac7JjSA7ZhvOVq6kB/7SMoBVAJllZpspv0f2SZgeLN243AlWmI9JZ/xYIZyFt4RyHiKdHH/qAhxkqqBTOUB2pRAycieBKbrB9pvTFIf/0dsLZUHUt6yC34rGkmlB3ezVgdSJu4Ht8ZuPD1TuKe1YnOPAi/q1g0pXUxgDbjZsiCsnA64RuhKbYcxiLj6lRMyB++/Z7cYyXQob607QuyM9ZGYhCVgEm5miGDMoMD/pEMjhziLDMdR2DOezQHP3vrS9+TjHF8jkS0ZbX6N7H+l8jqoFjOsUkWT1s/oxtXLwjy8fUNSSmNzMfdRrRr6ItFF+aOO58L5wn+8hDqJ6QHvcabO4S6ubaNdEd49v+2aL58nogIXAuJlBuNsXGRq8caWr8cU91kVVxliZiuglWQI/sHCqY1fPG33eRTze6Hw3VOSUY5TO9oAne3D0R0u7wHdt+GL6ENJCg8wVw7nVp7VfYeiXfTQbs5EcBKJAAr8qIzsi2N7l7whP1qS80A6VjK1u2mVdEEl8YPEUeDfWCp5tE+6WHGi/+rXKNZVeNFfE0IrYxoJusNGesBMprS0g0EHGHy1vL6Td4ZqVeYXHJSiiigUQAmAVJUaiiuJ84vSbpyH0P+qGqFhzJ01E+IGo+oUuba1Kkw1SWwfaIqk6zBvNO2q2AsnQTNmqyVokR0nBUjJbbv1xhzZg2P+RyRQ2mvOVqaGl4UddhoahvhugMmltxn2IimElogt3aEBlpUVCJvZZ+7GmXzO90TxQg8UmnKYgcAtQQEauz8Dj5koSfuo+iSfSPSaPUKKlJcA51jCezh1/kfQey+PohSg2uBKkPDbs8knoqxE3XpAONQqatkeXk7qYeHBw4SRFwi5Mce6AwbG+m/xRFDtmsz0+cAVk8Z66jBetIm8gT4X4L9XL2lsy0kqOJm5RXWr0ghf4qqAKLSaiysctf2dy96mAXazFe1Gj/6V4Q2EW74gGpF6QRdNfZg4g5T2B/UA8afdwx1dRPopUBwBQElzQaFmBzyAsnKivjHyy8OLIVkswy0ifmf28Atvy6SoHs7lG5IenEe0NxNoAUxINpSk92RI7SPrnjcL0kIglRGUEi9U+pTaL6GHPTD0XMNkH5L0l7CxmRY+34loSnICUrlvtaKOCRSyFlosTId9cmGncOD3CuZfLZdQqLqsQ3BdAdWEC6wIvTsqiKfcm+p8YCck/oCaYu+Rzxf1jDxdS4a9LoHlOus1Nya4IrbevOe1EbGgjS5lCdVt62fENzqAiUCDUJExqSTPb0GBcxxKv6LHSEKUv25WrDjKgQ0/UnSJZCHBiE74eSGOjPyP2pP0uGAK9Eh28jShCXyAyfUbQwy2bpyD2Q/3BgBkG/G0rett0JYd9wboPqoSLOeziVahXES8rLxqbDXyHDMS6r9nm/c74UAedLncxdijsMiPWDImI0Ao2kXxVlSasjMIpWDGxDG3gYpmZbg1xiC/Gc0hmFG0qf/f1D8FPaBUSnWiHHNhTPnv6ruuPi/5tDF+aPyt6nqXUvsVEgq/RELGygdWC5bLM97B1UqFEvCEL2b0Et8AyYngggDsE5SikhJinx/QzEjtSgwzWFrmjeSm5U9gO9KtM+v7Aa08e3zPJoXoY2WRsk9RS03OlNHL+r69WycJ5iDAcNGNHyjWRHiuFEdyRmpl14SDMdcqvjyuRsKN6q9gOedWhxQHjqvdi95MivEAptmdqzrlQdaRxovEo9JSZpDlSBgOoGdEQBH/8YxJM0aKaLQcd24y72zLdk/4rfPAyEp2lhfCsmRmVJwKpqrso3m7yS1FKkn08uuotqfCvJvIGqQUYBtnyWxMXL8c++1sMlPM9qxMGgOZzJQ0smDr16F7EGrgs+SLOl3rQUdyRUqUi5mtKe6FOFDKg1wrtHmwyxxg/jXihYYV6pw1DjSGc5kX1vwCwJBS3O8p0dVUaRA1SIR8DucB6AU4b4jA3nsKv51YaTEXDiheBpbo95htBt5J0KHxdUYbJrFKRuM5M8MhHqj/Ztg9izlPlu5WqvRdnHY91CXngQMoqRvO4oqb3m5HOinat9CtzpfjM8GQHg2Os5W7Ur7L9pJcBt4rh0mgd+p99/zNddNWxEQ29T3oQZT6w/h7IYB5wFLnfMrye4PUq3AvVmoJmqLOjYEs24rdAPyS2O0dp28irVpmNOv0cGF8F20r5GV2n2/nxARHrkTl5W018l92F3Q2sOrmDFDDHk9ia1WBGO9Bbz3QAqsN7sj5nn0vTlVny/s88dfW4wXPRfSSMhVwCB1tBTsGJc963/AvzuJSi6OzcvhLfOlzuE1k321sjWlAfdg+De22Q8njlbuVURBfFjroliIY7AolyZsS1ARRwUEp77lnL2bWOK55z1fXxBfas8j7CucX+RsRUZRvaqY37xGxbgdS3vnldCz0Vv+OPz9OvdSAsvAd+V0SkyGJ5rm1SaY0BpQ1hspQJXJ3AKDlYHaEteXwml+0Dgb3W6ZAGn9c3Rp2Jf8EP0fptL7DWqaiul9FaKh3qQT8xcW4Sz5Qw4Fv5gtWuHJG0DTUpg/0klJZnr2fIzgrgu3RRCO23lWJUrhlVGTBW+y9vn1hWRC+PT28Fq3Oi3f3xWUi2NPGKvcITY0+cXoowJcwiHIH+xYDwofXLFpQChEgXpqEe0Af36o+qvYcl3eWOPYgvOQBD5LTJTjHugX870m3+QmQrCKh2bMmMIJw8fWPZEr4B/h/fQgep9L1W4awVOuZWEuGpVsM2TWy3g4Q0cYq7Xn2fYkelGtI2STrgdJk/Sa34NpQdLemrhp1mf8X6DUAT2Vsdf5CyY+ulyjFqJgFssBM4kFnF4wOYX+J8qTtaG9oi4zi8WmQcbbOySdD9VKDaJCbXmzbErzv54xjPttmnfOm0uwQltex8PSv+muEp4wXV8vj7lX0R+SaglHa2da8FEjtN2bRsCls/8sdnKhZcuuIZEYczBgoKafMs6OEFJ5zNQLYJ8UPheWmvtC14Ayg/TXVSy8GKBy4XXFd0ofx7Zf+7k3rdKDWFzuOGpVR3vrVc+iEoUL2r3COx5KsCucGZ8mqkBh8PIq6JbZwfbZ64qd7pwlnF262CDggo2WuQ9OOzzX+I9/d6ARxpVb4kbSuRYCRdZW0tpE4/TH4gYQLopl7wGeiK7IaxUDaSWDTJniH8bGOP0SBwsDKvtNyPTb/lPzkbLtntuxF2eTfbsYo5GWl4pKmUDaeheUWxNeKIAvhvOfyRYGAUuHUWpaVPOl7co3nGTU6GkYx+YXFrBBPCw0ZDcisZX/0i++G+rJ1kvySMaxEJJz4Uub7UeV1faDv/iM0zxhypDI9EX4te0WmsFjxeeIv+B5Lf0TI1OYIYfXwIZ8uD/XAWgh3W+lFS8171JggMWj7+jC1Q1gc6i0epjzf6sbDxv5z1ff85TU9qfC5zoKg7kvIgKXnP4bYOvI8np1/JjDt4/AXbpa7wIkqbzU2qoY4za5td8B9NM9ibkvyvDotxW8X+d7KCZlpLJ8Q7hFbc5iQGIkuDNTk3cueCHUmJVL2UxT6WTHoGxsUAxi5Ogb8qtZ3srPNvhpyKcJlSxRZIXgFOw9ITf2vElg3gvmvogmR1KD+Bi+jjRejuH92wg5HJ8gdglvHXIILl5ZU1qw2PPyRjCmDEVkeRYfTQ5SmyZovzvo7Jyp1xuFyU3EksPaKAYDfqq9Y/ocZ4GQ2n23rWftHZeLw6zqip9QZHeUhSmrx6495BHNqqvPpUWaVEaYWqtEN8fIdviX8V4gsV9zh8BFUvfQIBTqJpC6Ko+yj51WobTjvyfEfMcf7BRBl9uBSlhITubbhfcIbpU1oGsbYJY5CY7OeUdVszsYpqV8qzfHyrZ/kdD/iEi64isn2gt8TaG9u+beLSZp17QqesO0BuxpUS2tCvJF9Ri1kqnIkjUxWqlapc858D+EkcQ/1S8SCbpeI5Bhjtoh8MOdKsifKs/CHLKcdeHzJyggwu5m9H0S3axoumfCqYlYj3W5rkGl63yM88dAVr0mv6T5ch0+hgJfyXl7tRurMlUUhRNqV2Ls40OMnGMeRH4IYCzcHPtjliSMDzXd19VKofhq0z7Cl8T+RXgZEpaxjNjjfeXS9yJ7yaSWCqgJXAbZrqjrkp1Z807wvC/5sWf3fljTKyldxHP2exqTKGzjZFAsWCvvdEUyqTVfsu7jw9M6/FPZEdNN92YyqLNuMWEXX+HeAkfRuHyZ6Vgh22Jqw/TP8S1iiLlmOOBQkrhZWgEpKOjysyCXnWeuqOhCG4w8Z3Y73HVXSwaqq5XsGCIRPfiA7qzxEvct/Rp1g+Re1ZBfWTuCSwPorGEOSgDtTXwu88NZtskMdM6igFXWZogdBPhX2VgF6F8QxhGR+PKh8IUtp8EZhnXiQfHp8hdYO7WNq82S2BeMD7LmTMQ8UYo3aQNx7qpx3QSdlti6LuMmdEPGUoHmEcGBsqFhkrQYTxcIF/OLrvAquMLiU8/t64tqfySR9/eBiGFCvnNUnTCL7Dy3TmjlfrIi/PPV0vRSPSjARvtREUZHvR3JEMc6yaw1b3W7xAwl/j8dRdVBxXCfLMXj3Tik7QhTx+NUAPEdzcjfW48HrIyFl1j0BK+aRorTuU4TkuMh0EM3sRzvHYGvVimxuUcDjv6jue9imzI28CO2tmaAUFja06T7WDDzbwFCEo//9wY9hCWlkh5gAAAABJRU5ErkJggg==', C.ssaoNormalImage.loaded = !0, n.EventDispatcher = function() {
    this.listeners = {}
  }, n.extend(n.EventDispatcher, null, {
    constructor: n.EventDispatcher,
    addEventListener: function(e, n) {
      this.listeners[e] === t && (this.listeners[e] = []), this.listeners[e].indexOf(n) === -1 && this.listeners[e].push(n)
    },
    removeEventListener: function(e, t) {
      var n = this.listeners[e].indexOf(t)
      n !== -1 && this.listeners[e].splice(n, 1)
    },
    dispatchEvent: function(e) {
      var n = this.listenters[e.type]
      if (n != t) {
        e.target = this
        for (var r = 0; r < n.length; r++) {
          var i = n[r]
          i.call(this, e)
        }
      }
    },
    contains: function(e, t) {
      if (this._ls) {
        for (var n = 0, r = this._ls.size(), i; n < r; n++) {
          i = this._ls.get(n)
          if (e === i.l && t === i.s) return !0
        }
      }
      return !1
    },
    add: function(e, t, n) {
      if (e == null) {
        console.error('TGL.EventDispatcher#add:listener is null')
        return
      }
      var r = {
        l: e,
        s: t,
        a: n
      }
      this._ls || (this._ls = new N()), this._f ? (this._addPendings || (this._addPendings = new N()), this._addPendings.add(r)) : r.a ? this._ls.add(r, 0) : this._ls.add(r)
    },
    remove: function(e, t) {
      this._ls && (this._f ? (this._removePendings || (this._removePendings = new N()), this._removePendings.add({
        l: e,
        s: t
      })) : this._remove(e, t))
    },
    _remove: function(e, t) {
      for (var n = 0, r = this._ls.size(), i; n < r; n++) {
        i = this._ls.get(n)
        if (i.l === e && i.s === t) {
          this._ls.removeAt(n)
          return
        }
      }
    },
    fire: function(e) {
      if (this._ls) {
        var t, n = this._ls.size(),
          r
        this._f = !0
        for (t = 0; t < n; t++) r = this._ls.get(t), r.s ? r.l.call(r.s, e) : r.l(e)
        this._f = !1
        if (this._removePendings) {
          n = this._removePendings.size()
          for (t = 0; t < n; t++) r = this._removePendings.get(t), this._remove(r.l, r.s)
          delete this._removePendings
        }
        if (this._addPendings) {
          n = this._addPendings.size()
          for (t = 0; t < n; t++) r = this._addPendings.get(t), r.a ? this._ls.add(r, 0) : this._ls.add(r)
          delete this._addPendings
        }
      }
    }
  }), n.PropertyChangeDispatcher = function() {
    this._dispatcher = new n.EventDispatcher()
  }, n.extend(n.PropertyChangeDispatcher, Object, {
    addPropertyChangeListener: function(e, t, n) {
      this._dispatcher.add(e, t, n)
    },
    removePropertyChangeListener: function(e, t) {
      this._dispatcher.remove(e, t)
    },
    firePropertyChange: function(e, t, n) {
      if (t == n) return !1
      var r = {
        property: e,
        oldValue: t,
        newValue: n,
        source: this
      }
      return this._dispatcher.fire(r), this.onPropertyChanged(r), !0
    },
    onPropertyChanged: function(e) {}
  }), n.Texture = function(e, r, i, s, o, u, a, f, l) {
    n.PropertyChangeDispatcher.call(this), this.id = n.TextureIdCount++, this.name = '', e != null && this.setImage(e), this.mipmaps = [], this.mapping = r !== t ? r : new n.UVMapping(), this.wrapS = i !== t ? i : n.RepeatWrapping, this.wrapT = s !== t ? s : n.RepeatWrapping, this.magFilter = o !== t ? o : n.LinearFilter, this.minFilter = u !== t ? u : n.LinearMipMapLinearFilter, this.anisotropy = l !== t ? l : 1, this.format = a !== t ? a : n.RGBAFormat, this.type = f !== t ? f : n.UnsignedByteType, this.repeatX = 1, this.repeatY = 1, this.offsetX = 0, this.offsetY = 0, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !1, this.flipX = !1, this.unpackAlignment = 4, this.needsUpdate = !1, this.onUpdate = null
  }, n.extend(n.Texture, n.PropertyChangeDispatcher, {
    getUniqueCode: function() {
      if (h.isImage(this._image) || typeof this._image === 'string' || P.isArray(this._image)) return this._imageSrc + ' ' + this.format + ' ' + this.type + ' ' + ' ' + this.wrapS + ' ' + this.wrapT + ' ' + this.magFilter + ' ' + this.minFilter + ' ' + this.flipY + ' ' + this.flipX + this.anisotropy
      if (h.isCanvas(this._image)) {
        var e = this._image
        return e.__uniqueCode || (e.__uniqueCode = n.id('texture')), e.__uniqueCode + ' ' + this.format + ' ' + this.type + ' ' + this.wrapS + ' ' + this.wrapT + ' ' + this.magFilter + ' ' + this.minFilter + ' ' + this.flipY + ' ' + this.flipX + this.anisotropy
      }
    },
    resetValue: function() {
      this.name = '', this._image = null, this.mipmaps = [], this.mapping = new n.UVMapping(), this.wrapS = n.RepeatWrapping, this.wrapT = n.RepeatWrapping, this.magFilter = n.LinearFilter, this.minFilter = n.LinearMipMapLinearFilter, this.anisotropy = 1, this.format = n.RGBAFormat, this.type = n.UnsignedByteType, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !1, this.flipX = !1, this.unpackAlignment = 4, this.needsUpdate = !1, this.onUpdate = null
    },
    clone: function(e, r) {
      return e === t && (e = new n.Texture()), r == null || r ? e.setImage(this._image) : e._image = this._image, e._imageSrc = this._imageSrc, e.mipmaps = this.mipmaps.slice(0), e.mapping = this.mapping, e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.format = this.format, e.type = this.type, e.generateMipmaps = this.generateMipmaps, e.premultiplyAlpha = this.premultiplyAlpha, e.flipY = this.flipY, e.flipX = this.flipX, e.unpackAlignment = this.unpackAlignment, e
    },
    onloadTexture: function() {},
    setImageSrc: function(e) {
      if (typeof e === 'string') this._imageSrc = e
      else if (P.isArray(e)) {
        var t = ''
        for (var n = 0; n < e.length; n++) typeof e[n] === 'string' ? t += e : t += e[n].src
        this._imageSrc = t
      } else this._imageSrc = e.src
    },
    loadAllImages: function(e, t) {
      function s(s) {
        s.onload = function() {
          s.loaded = !0, s.onload = null, r++, r == n && (i.onloadTexture(), i.firePropertyChange('image', t, i._image), e.loaded = !0)
        }
      }
      var n = e.length,
        r = 0,
        i = this
      for (var o = 0; o < n; o++) s(e[o])
    },
    setImage: function(e) {
      var t = this._image
      if (P.isArray(e)) {
        var n = '',
          r = [],
          i
        for (var s = 0; s < e.length; s++) typeof e[s] === 'string' ? (n += e, i = new Image(), e[s].startsWith('data:image') || (i.crossOrigin = 'use-credentials'), i.src = e[s], r.push(i)) : (n += e[s].src, r.push(e[s]))
        this._imageSrc = n, this.loadAllImages(r, t), this._image = r
      } else if (typeof e === 'string') {
        if (this._image && this._image.src === e) return
        this._imageSrc = e
        var o = new Image()
        e.startsWith('data:image') || (o.crossOrigin = 'use-credentials'), o.src = e
        var u = this
        u._image = o, o.onload = function(e) {
          o.loaded = !0, o.onload = null, u.onloadTexture(), u.firePropertyChange('image', t, o)
        }
      } else {
        if (this._image === e) return
        this._imageSrc = e.src
        var t = this._image
        h.isCanvas(e) && (e.loaded = !0)
        if (e && !e.loaded) {
          var u = this
          u._image = e
          var a = e.onload
          e.onload = function(n) {
            a && a.call(null, n), e.loaded = !0, e.onload = null, u.onloadTexture(), u.firePropertyChange('image', t, e)
          }
        } else this._image = e, this.firePropertyChange('image', t, e)
      }
    },
    getImage: function() {
      return this._image
    },
    dispose: function() {
      this.firePropertyChange('disposed', !1, !0)
    }
  }), n.TextureIdCount = 0, n.PixelsTexture = function(e, t, r, i, s, o, u, a, f, l, c) {
    n.Texture.call(this, null, o, u, a, f, l, i, s, c), this.image = {
      data: e,
      width: t,
      height: r
    }
  }, n.PixelsTexture.prototype = Object.create(n.Texture.prototype), n.PixelsTexture.prototype.clone = function() {
    var e = new n.PixelsTexture()
    return n.Texture.prototype.clone.call(this, e), e
  }, n.CompressedTexture = function(e, t, r, i, s, o, u, a, f, l, c) {
    n.Texture.call(this, null, o, u, a, f, l, i, s, c), this.image = {
      width: t,
      height: r
    }, this.mipmaps = e, this.generateMipmaps = !1
  }, n.CompressedTexture.prototype = Object.create(n.Texture.prototype), n.CompressedTexture.prototype.clone = function() {
    var e = new n.CompressedTexture()
    return n.Texture.prototype.clone.call(this, e), e
  }
  var k = {
    pools: {},
    useTimes: {},
    size: 0,
    setTexture: function(e, t) {
      k.size++, k.pools[e] = t
    },
    getTexture: function(e) {
      return k.pools[e]
    },
    useTexture: function(e) {
      if (e) {
        var t = e.id,
          n = k.useTimes[t] || 0
        n++, k.useTimes[t] = n
      }
    },
    unUseTexture: function(e) {
      if (e) {
        var t = e.id,
          n = k.useTimes[t] || 0
        n--, k.useTimes[t] = n
        if (n <= 0) {
          var r = e.getUniqueCode()
          delete k.pools[r], k.size--, e.dispose()
        }
      }
    }
  }
  n.TexturePool = k, n.TexturePool.TestTexture = new n.Texture(), n.SerializationSettings = function() {
    var e = n.SerializationSettings
    this.isDataBoxSerializable = e.isDataBoxSerializable, this.isStyleSerializable = e.isStyleSerializable, this.isClientSerializable = e.isClientSerializable, this.encodeURI = e.encodeURI, this._pm = n.clone(e._pm), this._sm = n.clone(e._sm), this._cm = n.clone(e._cm)
  }, (function() {
    var e = n.SerializationSettings
    e.isDataBoxSerializable = !0, e.isStyleSerializable = !0, e.isClientSerializable = !0, e.encodeURI = !0, e._pm = {}, e._sm = {}, e._cm = {}, e.setPropertyType = function(t, n) {
      e._pm[t] = n
    }, e.getPropertyType = function(t) {
      return e._pm[t]
    }, e.setStyleType = function(t, n) {
      e._sm[t] = n
    }, e.getStyleType = function(t) {
      return e._sm[t]
    }, e.setClientType = function(t, n) {
      e._cm[t] = n
    }, e.getClientType = function(t) {
      return e._cm[t]
    }
  }()), n.extend(n.SerializationSettings, Object, {
    setPropertyType: function(e, t) {
      this._pm[e] = t
    },
    getPropertyType: function(e) {
      return this._pm[e]
    },
    setStyleType: function(e, t) {
      this._sm[e] = t
    },
    getStyleType: function(e) {
      return this._sm[e]
    },
    setClientType: function(e, t) {
      this._cm[e] = t
    },
    getClientType: function(e) {
      return this._cm[e]
    }
  }), n.Styles = {
    _m: {},
    setStyle: function(e, t) {
      return t == null ? delete n.Styles._m[e] : n.Styles._m[e] = t, n.Styles
    },
    getStyle: function(e) {
      return n.Styles._m[e]
    }
  }, n.Styles.MaterailType = 'S:m.type', n.Styles.NormalType = 'S:m.normalType', n.Styles.PREFIX_STYLE = 'S:', (function() {
    var e = function(e, t) {
      n.SerializationSettings.setPropertyType(e, t)
    }
    e('combos', 'data.list'), e('name', 'cdata'), e('toolTip', 'cdata'), e('parent', 'data'), e('fromNode', 'data'), e('toNode', 'data'), e('alarmState', 'alarmstate'), e('vertices', 'list.vec3'), e('faces', 'serializeabe.list'), e('uvs', 'list.vec2'), e('position', 'vec3'), e('rotation', 'vec3'), e('scale', 'vec3'), e('location', 'point'), e('materialSize', 'number'), e('color', 'color'), e('ambient', 'color'), e('diffuse', 'color'), e('specular', 'color'), e('intensity', 'number'), e('distance', 'number'), e('type', 'number'), e('startClosed', 'boolean'), e('endClosed', 'boolean'), e('curveSegments', 'number'), e('amount', 'number'), e('vertical', 'boolean'), e('repeat', 'number'), e('centralized', 'boolean'), e('visible', 'boolean'), e = function(e, t, r) {
      r == null && (t != null ? t instanceof n.Vec2 ? r = 'vec2' : t instanceof n.Vec3 ? r = 'vec3' : r = typeof t : r = 'string'), n.Styles.setStyle(e, t), n.SerializationSettings.setStyleType(e, r)
    }, e('select.style', 'border'), e('select.width', 1), e('select.color', 65280), e('select.offset', 0), e('outer.width', 1), e('outer.offset', 0), e('outer.color', null, 'color'), e('m.type', 'basic'), e('m.color', 16777215, 'color'), e('m.side', 'front'), e('m.alphaTest', 0), e('m.polygonOffset', !1), e('m.polygonOffsetFactor', 0), e('m.polygonOffsetUnits', 0), e('m.wireframe', !1), e('m.wireframeLinewidth', 1), e('m.gradient', {}), e('m.gradientType', 1), e('m.transparent', !1), e('m.opacity', 1), e('m.visible', !0), e('m.depthTest', !0), e('m.depthMask', !0), e('m.alignment', new n.Vec2(0, 0)), e('m.linewidth', 1), e('m.texture.image', null), e('m.texture.offset', new n.Vec2(0, 0)), e('m.texture.repeat', new n.Vec2(1, 1)), e('m.texture.wrapS', n.RepeatWrapping), e('m.texture.wrapT', n.RepeatWrapping), e('m.texture.flipX', !1), e('m.texture.flipY', !1), e('m.normalmap.image', null), e('m.envmap.image', null), e('m.specularmap.image', null), e('right.m.type', 'basic'), e('left.m.type', 'basic'), e('top.m.type', 'basic'), e('bottom.m.type', 'basic'), e('front.m.type', 'basic'), e('back.m.type', 'basic'), e('side.m.type', 'basic'), e('alarm.billboard.scale', null), e('alarm.billboard.position', 'top'), e('alarm.billboard.vertical', !1), e('annotation.class', 'tgl_annotation')
  }()), n.extend(n.Styles, Object, {})
  var L = function(e, n) {
    this.min = e !== t ? e : new s(Infinity, Infinity), this.max = n !== t ? n : new s(-Infinity, -Infinity)
  }
  n.Box2 = L, L.prototype = {
    constructor: n.Box2,
    set: function(e, t) {
      return this.min.copy(e), this.max.copy(t), this
    },
    setFromPoints: function(e) {
      if (e.length > 0) {
        var t = e[0]
        this.min.copy(t), this.max.copy(t)
        for (var n = 1, r = e.length; n < r; n++) t = e[n], t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y)
      } else this.makeEmpty()
      return this
    },
    setFromCenterAndSize: (function() {
      var e = new s()
      return function(t, n) {
        var r = e.copy(n).multiplyScalar(0.5)
        return this.min.copy(t).sub(r), this.max.copy(t).add(r), this
      }
    }()),
    copy: function(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this
    },
    empty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(e) {
      var t = e || new s()
      return t.addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(e) {
      var t = e || new s()
      return t.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
      return this.min.min(e), this.max.max(e), this
    },
    expandByVector: function(e) {
      return this.min.sub(e), this.max.add(e), this
    },
    expandByScalar: function(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this
    },
    containsPoint: function(e) {
      return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
    },
    containsBox: function(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(e, t) {
      var n = t || new s()
      return n.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    },
    isIntersectionBox: function(e) {
      return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(e, t) {
      var n = t || new s()
      return n.copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: (function() {
      var e = new s()
      return function(t) {
        var n = e.copy(t).clamp(this.min, this.max)
        return n.sub(t).length()
      }
    }()),
    intersect: function(e) {
      return this.min.max(e.min), this.max.min(e.max), this
    },
    union: function(e) {
      return this.min.min(e.min), this.max.max(e.max), this
    },
    translate: function(e) {
      return this.min.add(e), this.max.add(e), this
    },
    equals: function(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    },
    clone: function() {
      return (new L()).copy(this)
    }
  }, n.BoundingBox = function(e, n) {
    this.min = e !== t ? e : new o(Infinity, Infinity, Infinity), this.max = n !== t ? n : new o(-Infinity, -Infinity, -Infinity)
  }, n.BoundingBox.prototype = {
    constructor: n.BoundingBox,
    set: function(e, t) {
      return this.min.copy(e), this.max.copy(t), this
    },
    setFromPoints: function(e) {
      if (e.length > 0) {
        var t = e[0]
        this.min.copy(t), this.max.copy(t)
        for (var n = 1, r = e.length; n < r; n++) t = e[n], t.x < this.min.x ? this.min.x = t.x : t.x > this.max.x && (this.max.x = t.x), t.y < this.min.y ? this.min.y = t.y : t.y > this.max.y && (this.max.y = t.y), t.z < this.min.z ? this.min.z = t.z : t.z > this.max.z && (this.max.z = t.z)
      } else this.makeEmpty()
      return this
    },
    setFromCenterAndSize: function(e, t) {
      var r = n.BoundingBox.__v1.copy(t).multiplyScalar(0.5)
      return this.min.copy(e).sub(r), this.max.copy(e).add(r), this
    },
    copy: function(e) {
      return this.min.copy(e.min), this.max.copy(e.max), this
    },
    makeEmpty: function() {
      return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this
    },
    empty: function() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(e) {
      var t = e || new o()
      return t.addVectors(this.min, this.max).multiplyScalar(0.5)
    },
    size: function(e) {
      var t = e || new o()
      return t.subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
      return this.min.min(e), this.max.max(e), this
    },
    expandByVector: function(e) {
      return this.min.sub(e), this.max.add(e), this
    },
    expandByScalar: function(e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this
    },
    containsPoint: function(e) {
      return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
    },
    containsBox: function(e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(e) {
      return new o((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    },
    isIntersectionBox: function(e) {
      return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
    },
    clampPoint: function(e, t) {
      var n = t || new o()
      return (new o()).copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function(e) {
      var t = n.BoundingBox.__v1.copy(e).clamp(this.min, this.max)
      return t.sub(e).length()
    },
    getBoundingSphere: function(e) {
      var t = e || new n.Sphere()
      return t.center = this.center(), t.radius = this.size(n.BoundingBox.__v0).length() * 0.5, t
    },
    intersect: function(e) {
      return this.min.max(e.min), this.max.min(e.max), this
    },
    union: function(e) {
      return this.min.min(e.min), this.max.max(e.max), this
    },
    transform: function(e) {
      var t = [n.BoundingBox.__v0.set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), n.BoundingBox.__v0.set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), n.BoundingBox.__v1.set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), n.BoundingBox.__v2.set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), n.BoundingBox.__v3.set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), n.BoundingBox.__v4.set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), n.BoundingBox.__v5.set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), n.BoundingBox.__v6.set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), n.BoundingBox.__v7.set(this.max.x, this.max.y, this.max.z).applyMatrix4(e)]
      return this.makeEmpty(), this.setFromPoints(t), this
    },
    translate: function(e) {
      return this.min.add(e), this.max.add(e), this
    },
    equals: function(e) {
      return e.min.equals(this.min) && e.max.equals(this.max)
    },
    clone: function() {
      return (new n.BoundingBox()).copy(this)
    }
  }, n.BoundingBox.__v0 = new o(), n.BoundingBox.__v1 = new o(), n.BoundingBox.__v2 = new o(), n.BoundingBox.__v3 = new o(), n.BoundingBox.__v4 = new o(), n.BoundingBox.__v5 = new o(), n.BoundingBox.__v6 = new o(), n.BoundingBox.__v7 = new o(), n.BoundingSphere = function(e, n) {
    this.center = e !== t ? e : new o(), this.radius = n !== t ? n : 0
  }, n.BoundingSphere.prototype = {
    constructor: n.BoundingSphere,
    set: function(e, t) {
      return this.center.copy(e), this.radius = t, this
    },
    setFromCenterAndPoints: function(e, t) {
      var n = 0
      for (var r = 0, i = t.length; r < i; r++) {
        var s = e.distanceToSquared(t[r])
        n = Math.max(n, s)
      }
      return this.center = e, this.radius = Math.sqrt(n), this
    },
    copy: function(e) {
      return this.center.copy(e.center), this.radius = e.radius, this
    },
    empty: function() {
      return this.radius <= 0
    },
    containsPoint: function(e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
      return e.distanceTo(this.center) - this.radius
    },
    intersectsBoundingSphere: function(e) {
      var t = this.radius + e.radius
      return e.center.distanceToSquared(this.center) <= t * t
    },
    clampPoint: function(e, t) {
      var n = this.center.distanceToSquared(e),
        r = t || new o()
      return r.copy(e), n > this.radius * this.radius && (r.sub(this.center).normalize(), r.multiplyScalar(this.radius).add(this.center)), r
    },
    getBoundingBox: function(e) {
      var t = e || new n.Box3()
      return t.set(this.center, this.center), t.expandByScalar(this.radius), t
    },
    transform: function(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    },
    applyMatrix4: function(e) {
      return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this
    },
    translate: function(e) {
      return this.center.add(e), this
    },
    equals: function(e) {
      return e.center.equals(this.center) && e.radius === this.radius
    },
    clone: function() {
      return (new n.BoundingSphere()).copy(this)
    }
  }, n.Primitive = function(e, t) {
    e = e || {}, this.data = e, this.vertices = e.vertices, this.faces = e.faces, this.uvs = e.uvs, this.uv2s = e.uv2s, this.uniqueCode = t
  }, n.extend(n.Primitive, Object, {
    clone: function(e) {
      if (e) {
        var t = {},
          r
        t.vertices = []
        for (r = 0; r < this.vertices.length; r++) t.vertices.push(this.vertices[r].clone())
        t.faces = []
        for (r = 0; r < this.faces.length; r++) t.faces.push(this.faces[r].clone())
        t.uvs = []
        for (r = 0; r < this.uvs.length; r++) {
          var i = this.uvs[r],
            s = []
          for (var o = 0; o < i.length; o++) s.push(i[o].clone)
          t.uvs.push(s)
        }
        t.uv2s = []
        for (r = 0; r < this.uv2s.length; r++) t.uv2s.push(this.uv2s[r].clone())
        return new n.Primitive(t)
      }
      return new n.Primitvie(this.data)
    }
  }), n.PrimitiveCache = {
    _cache: {},
    _useCount: {},
    getPrimitive: function(e) {
      return e ? n.PrimitiveCache._cache[e] : null
    },
    setPrimitive: function(e, t) {
      e && (n.PrimitiveCache._cache[e] = t)
    },
    usePrimitive: function(e) {
      var t = n.PrimitiveCache._useCount[e] || 0
      t++, n.PrimitiveCache._useCount[e] = t
    },
    unUsePrimitive: function(e) {
      var t = n.PrimitiveCache._useCount[e] || 0
      t--, t <= 0 && delete n.PrimitiveCache._useCount[e]
    }
  }, n.PrimitiveGroupCache = {}, n.Color = function(e) {
    return e !== t && this.set(e), this
  }, n.extend(n.Color, Object, {
    r: 1,
    g: 1,
    b: 1,
    getUniqueCode: function() {
      return '' + this.r + this.g + this.b
    },
    set: function(e) {
      switch (typeof e) {
        case 'number':
          this.setHex(e)
          break
        case 'string':
          this.setStyle(e)
      }
    },
    setHex: function(e) {
      return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, this
    },
    setRGB: function(e, t, n) {
      return this.r = e, this.g = t, this.b = n, this
    },
    setHSV: function(e, t, n) {
      var r, i, s, o, u
      return n === 0 ? this.r = this.g = this.b = 0 : (r = Math.floor(e * 6), i = e * 6 - r, s = n * (1 - t), o = n * (1 - t * i), u = n * (1 - t * (1 - i)), r === 0 ? (this.r = n, this.g = u, this.b = s) : r === 1 ? (this.r = o, this.g = n, this.b = s) : r === 2 ? (this.r = s, this.g = n, this.b = u) : r === 3 ? (this.r = s, this.g = o, this.b = n) : r === 4 ? (this.r = u, this.g = s, this.b = n) : r === 5 && (this.r = n, this.g = s, this.b = o)), this
    },
    setStyle: function(e) {
      if (/^rgb\((\d+),(\d+),(\d+)\)$/i.test(e)) {
        var t = /^rgb\((\d+),(\d+),(\d+)\)$/i.exec(e)
        return this.r = Math.min(255, parseInt(t[1], 10)) / 255, this.g = Math.min(255, parseInt(t[2], 10)) / 255, this.b = Math.min(255, parseInt(t[3], 10)) / 255, this
      }
      if (/^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.test(e)) {
        var t = /^rgb\((\d+)\%,(\d+)\%,(\d+)\%\)$/i.exec(e)
        return this.r = Math.min(100, parseInt(t[1], 10)) / 100, this.g = Math.min(100, parseInt(t[2], 10)) / 100, this.b = Math.min(100, parseInt(t[3], 10)) / 100, this
      }
      if (/^\#([0-9a-f]{6})$/i.test(e)) {
        var t = /^\#([0-9a-f]{6})$/i.exec(e)
        return this.setHex(parseInt(t[1], 16)), this
      }
      if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
        var t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e)
        return this.setHex(parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16)), this
      }
      if (/^(\w+)$/i.test(e)) return this.setHex(n.ColorKeywords[e]), this
    },
    copy: function(e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this
    },
    copyGammaToLinear: function(e) {
      return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this
    },
    copyLinearToGamma: function(e) {
      return this.r = Math.sqrt(e.r), this.g = Math.sqrt(e.g), this.b = Math.sqrt(e.b), this
    },
    convertGammaToLinear: function() {
      var e = this.r,
        t = this.g,
        n = this.b
      return this.r = e * e, this.g = t * t, this.b = n * n, this
    },
    convertLinearToGamma: function() {
      return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
    },
    getHex: function() {
      return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0
    },
    getHexString: function() {
      return ('000000' + this
        .getHex().toString(16)).slice(-6)
    },
    getStyle: function() {
      return 'rgb(' + (this.r * 255 | 0) + ',' + (this.g * 255 | 0) + ',' + (this.b * 255 | 0) + ')'
    },
    getHSV: function(e) {
      var n = this.r,
        r = this.g,
        i = this.b,
        s = Math.max(Math.max(n, r), i),
        o = Math.min(Math.min(n, r), i),
        u, a, f = s
      if (o === s) u = 0, a = 0
      else {
        var l = s - o
        a = l / s, n === s ? u = (r - i) / l : r === s ? u = 2 + (i - n) / l : u = 4 + (n - r) / l, u /= 6, u < 0 && (u += 1), u > 1 && (u -= 1)
      }
      return e === t && (e = {
        h: 0,
        s: 0,
        v: 0
      }), e.h = u, e.s = a, e.v = f, e
    },
    add: function(e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this
    },
    addColors: function(e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this
    },
    addScalar: function(e) {
      return this.r += e, this.g += e, this.b += e, this
    },
    multiply: function(e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this
    },
    multiplyScalar: function(e) {
      return this.r *= e, this.g *= e, this.b *= e, this
    },
    lerp: function(e, t) {
      return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this
    },
    clone: function() {
      return (new n.Color()).setRGB(this.r, this.g, this.b)
    }
  }), n.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, n.Data = function(e) {
    n.PropertyChangeDispatcher.call(this), this._childList = new N(), this._childMap = {}, this._clientMap = {}, this._id = e
  }, n.extend(n.Data, n.PropertyChangeDispatcher, {
    ___accessor: ['name'],
    constructor: n.Data,
    getId: function() {
      return this._id
    },
    onAlarmChange: function() {},
    onPropertyChange: function(e, t, n) {},
    setGroupId: function(e) {
      if (this._groupId === e) return
      var t = this._groupId
      this._groupId = e, this.firePropertyChange('groupId', t, e)
    },
    getGroupId: function() {
      return this._groupId
    },
    hasChildren: function() {
      return this._childList.size() > 0
    },
    getChildren: function() {
      return this._childList
    },
    isDescendantOf: function(e) {
      if (!e) return !1
      if (!e.hasChildren()) return !1
      var t = this._parent
      while (t) {
        if (e === t) return !0
        t = t.getParent()
      }
      return !1
    },
    getParent: function() {
      return this._parent
    },
    getRoot: function() {
      var e = this._parent
      return e && e._parent == null ? e : e && e._parent != null ? e.getRoot(e) : arguments[0]
    },
    setParent: function(e) {
      e === null && e === t
      if (this._isUpdatingParent || this._parent === e || this === e) return
      if (e && e.isDescendantOf(this)) return
      var n = this._parent
      this._parent = e, this._isUpdatingParent = !0, n && n.removeChild(this), e && e.addChild(this), delete this._isUpdatingParent, this.firePropertyChange('parent', n, e), this.onParentChanged(n, e)
    },
    onParentChanged: function(e, t) {},
    addChild: function(e, n) {
      n === t && (n = this._childList.size())
      if (!e || e === this) return !1
      if (this._childMap[e.getId()]) return !1
      if (this.isDescendantOf(e)) return !1
      e.getParent() && e.getParent().removeChild(e)
      if (n < 0 || n > this._childList.size()) n = this._childList.size()
      return this._childList.add(e, n), this._childMap[e._id] = e, e.setParent(this), this.firePropertyChange('children', null, e), this.onChildAdded(e, n), !0
    },
    onChildAdded: function(e, t) {},
    clearChildren: function() {
      if (this._childList != null && this._childList.size() > 0) {
        var e = this._childList.toList(),
          t = this
        e.forEach(function(e) {
          t.removeChild(e)
        })
      }
    },
    removeChild: function(e) {
      if (!e) return !1
      if (!this._childMap[e._id]) return !1
      var t = this._childList.remove(e)
      return delete this._childMap[e._id], this.firePropertyChange('children', e, null), e.setParent(null), this.onChildRemoved(e, t), !0
    },
    onChildRemoved: function(e, t) {},
    c: function(e) {
      if (e) {
        for (var t in e) this.setClient(t, e[t])
      }
    },
    setClient: function(e, t) {
      if (e == null) return this
      this._clientMap == null && (this._clientMap = new Object())
      var n = this._clientMap[e]
      if (n === t) return
      return t == null ? delete this._clientMap[e] : this._clientMap[e] = t, this._clientMap[e] = t, this.firePropertyChange('C:' + e, n, t), this.onClientChanged(e, n, t), this
    },
    getClient: function(e) {
      return this._clientMap[e]
    },
    onClientChanged: function(e, t, n) {},
    setPropertyValue: function(e, t) {
      if (this[e] === t) return !1
      var r = this[e]
      return r instanceof n.Color && t != null ? (r = r.clone(), t instanceof n.Color ? this[e].copy(t) : this[e].set(t)) : this[e] = t, !0
    }
  }), n.Element = function(e) {
    n.Data.call(this, e), this._id = e || n.id('E'), this.styleMap = {}, this._visible = !0, this._selected = !1, this._selectable = !0, this._editable = !0, this.editing = !1, this.up = new o(0, 1, 0), this._position = new o(0, 0, 0), this._rotation = new o(0, 0, 0), this._scale = new o(1, 1, 1), this.eulerOrder = n.defaultEulerOrder, this.rotationAutoUpdate = !0, this.matrix = new l(), this.worldMatrix = new l(), this.rotationWorldMatrix = new l(), this.matrixAutoUpdate = !1, this.worldMatrixNeedsUpdate = !0, this.quaternion = new n.Quat(), this.useQuaternion = !1, this._sizeFixed = !1, this._fixedSize = 108, this.castShadow = !0, this.receiveShadow = !0, this.frustumCulled = !0, this._vector = new o(), this.renderDepth = null, this._attachId = '', this._groupId = null, this.editTransformToParent = !1, this._alarmState = new n.AlarmState(this), this.colors = []
  }, n.Element.__m1 = new l(), n.ElementIdCount = 0, n.extend(n.Element, n.Data, {
    IStyle: !0,
    ___accessor: ['visible', 'selected', 'selectable', 'editable', 'sizeFixed'],
    constructor: n.Element,
    getAlarmState: function() {
      return this._alarmState
    },
    onAlarmChange: function(e, t) {
      var r = this._alarmState.getHighestNativeAlarmSeverity()
      r ? this.setStyle('m.alarmColor', new n.Color(r.color)) : this.setStyle('m.alarmColor', null)
    },
    getDefaultInstance: function() {
      return this.constructor.defaultInstance === t && (this.constructor.defaultInstance = new this.constructor()), this.constructor.defaultInstance
    },
    onParentChanged: function(e, t) {
      this.updateWorldMatrix(!0, !1)
    },
    onChildAdded: function(e, t) {
      e.updateWorldMatrix(!0, !1)
    },
    onChildRemoved: function(e, t) {
      e.updateWorldMatrix(!0, !1)
    },
    generatePrimitiveKey: function() {
      return null
    },
    serializeProperty: function() {},
    clear: function(e) {},
    getSelectStyle: function() {
      return this.getStyle('select.style')
    },
    isSpaceChangedProperty: function(e) {
      return e === 'scale' || e === 'position' || e === 'rotation'
    },
    isStyleEquals: function(e, t, n) {
      return t == null && n == null ? !0 : t === n
    },
    setStyle: function(e, t) {
      if (e == null) return this
      this.styleMap == null && (this.styleMap = {})
      var r = this.styleMap[e]
      return this.isStyleEquals(e, r, t) ? this : (t == null ? delete this.styleMap[e] : this.styleMap[e] = t, this.onStyleChanged(e, r, t), this.firePropertyChange(n.Styles.PREFIX_STYLE + e, r, t), this)
    },
    c: function(e) {
      if (!e) return
      for (var t in e) this.setClient(t, e[t])
    },
    s: function(e) {
      if (e == null) return
      this.styleMap == null && (this.styleMap = {})
      var t, r, i, s = {},
        o = {}
      for (t in e) {
        r = e[t], i = this.styleMap[t]
        if (this.isStyleEquals(t, i, r)) continue
        r == null ? delete this.styleMap[t] : this.styleMap[t] = r, o[t] = i, this.isMaterialStyle(t) && (s[t] = [r, i])
      }
      this.onMaterialStylesChanged(s)
      for (t in e) this.firePropertyChange(n.Styles.PREFIX_STYLE + t, o[t], this.styleMap[t])
      return this
    },
    getStyle: function(e, t, n) {
      n == null && (n = !0)
      var r
      return this.styleMap != null && (r = this.styleMap[e]), t && (r = this.getCloneObject(r)), r == null && n && (r = this.getDefaultStyle(e, t)), r
    },
    getCloneObject: function(e) {
      if (e == null) return null
      if (n.Utils.isArray(e)) {
        var t = []
        for (var r = 0; r < e.length; r++) t.push(this.getCloneObject(e[r]))
        return t
      }
      return e.clone ? e.clone() : e
    },
    getSideIndexMapping: function() {},
    setMaterialStyle: function(e, t) {},
    setMaterialStyles: function(e) {
      var t, r, s, o
      for (var u in e) {
        if (u.startsWith('m.')) t = u.substr(u.indexOf('.') + 1)
        else if (this.getSideIndexMapping() && this.isSideStyle(s)) {
          var a = s.substr(0, s.indexOf('.')),
            f = this.getSideMaterialIndex(a)
          if (f != i) continue
          s = s.substr(s.indexOf('.') + 1), t = s.substr(u.indexOf('.') + 1)
        } else u.startsWith('alarm.billboard.') && (o = !0)
        var l = e[u]
        r = l[0], r == null ? r = n.Styles.getStyle(u) : P.isArray(r) && (r = r[i]), this._A97(this.material, t, r)
      }
      o && this._alarmBillboard && this._setAlarmBillboardPositionAndSize(this._alarmBillboard)
    },
    onMaterialStylesChanged: function(e) {
      this.setMaterialStyles(e)
    },
    isMaterialStyle: function(e) {
      return e.startsWith('m.') ? !0 : this.getSideIndexMapping() && this.isSideStyle(e) ? !0 : !1
    },
    onStyleChanged: function(e, t, n) {
      if (e.startsWith('m.')) this.setMaterialStyle(e, n)
      else if (this.getSideIndexMapping() && this.isSideStyle(e)) {
        var r = e.substr(0, e.indexOf('.'))
        e = e.substr(e.indexOf('.') + 1)
        var i = this.getSideMaterialIndex(r)
        this.setMaterialStyle(e, n, i)
      } else e.startsWith('alarm.billboard.') && this._alarmBillboard && this._setAlarmBillboardPositionAndSize(this._alarmBillboard)
    },
    textureMapping: {
      texture: 'map',
      texture1: 'map1',
      texture2: 'map2',
      textureb: 'blendMap',
      texturebp: 'bumpMap',
      lightMap: 'lightMap',
      lightmap: 'lightMap',
      normalmap: 'normalMap',
      envmap: 'envMap',
      specularmap: 'specularMap'
    },
    _A97: function(e, t, r) {
      if (t.startsWith('texture.') || t.startsWith('texture1.') || t.startsWith('texture2.') || t.startsWith('textureb.') || t.startsWith('texturen.') || t.startsWith('texturebp.') || t.startsWith('lightmap') || t.startsWith('envmap') || t.startsWith('normalmap') || t.startsWith('specularmap')) {
        var i = t.substr(0, t.indexOf('.')),
          s = t.substr(t.indexOf('.') + 1)
        if (s === 'offset' || s === 'repeat') {
          e.setPropertyValue(s, this.getCloneObject(r))
          return
        }
        var o = this.textureMapping[i],
          u = e[o],
          a = n.TexturePool.TestTexture
        if (s === 'image') {
          var f = r
          if (t.startsWith('envmap') && P.isArray(f)) {
            for (var l = 0; l < f.length; l++) {
              if (f[l] == null) {
                f = null
                break
              }
            }
          }
          if (u == null && f != null) {
            a.resetValue(), a._image = f, a.setImageSrc(f)
            var c = a.getUniqueCode(),
              h = n.TexturePool.getTexture(c)
            h == null && (h = new n.Texture(f), n.TexturePool.setTexture(c, h)), e.setMap(h, o)
          } else if (f == null) e.setMap(null, o)
          else {
            u.clone(a, !1), a._image = f, a.setImageSrc(f)
            var c = a.getUniqueCode(),
              h = n.TexturePool.getTexture(c)
            h !== u && (h == null && (h = new n.Texture(), u.clone(h, !1), h.setImage(f), n.TexturePool.setTexture(c, h)), e.setMap(h, o))
          }
        } else if (u != null) {
          u.clone(a, !1), a[s] = this.getCloneObject(r)
          var c = a.getUniqueCode(),
            h = n.TexturePool.getTexture(c)
          h != u && (h == null && (h = new n.Texture(), u.clone(h), h[s] = r), e.setMap(h, o))
        }
      } else t === 'type' && e.setType ? e.setType(r) : e.setPropertyValue(t, this.getCloneObject(r))
    },
    getDefaultStyle: function(e, t) {
      if (e == null) return null
      if (e.startsWith('m.')) {
        var r = [],
          i = e.substr(e.indexOf('.') + 1)
        if (this.material.materials) {
          var s = this.material.materials
          s = s || [this.material]
          for (var o = 0; o < s.length; o++) {
            var u = s[o]
            if (i.startsWith('texture.') || i.startsWith('texture1.') || i.startsWith('texture2.') || i.startsWith('textureb.') || i.startsWith('texturen.') || i.startsWith('texturebp.') || i.startsWith('lightmap') || i.startsWith('envmap') || i.startsWith('normalmap') || i.startsWith('specularmap')) {
              var a = i.substr(0, i.indexOf('.')),
                f = i.substr(i.indexOf('.') + 1),
                l = i.substr(i.indexOf('.') + 1),
                c = this.textureMapping[a],
                h = u[c]
              if (h) {
                if (f === 'image') {
                  if (P.isArray(h._image)) {
                    var p = []
                    r.push(p)
                    for (var d = 0; d < h._image.length; d++) p.push(h._image[d].src)
                  } else r.push(h._image.src)
                } else f === 'offset' || f === 'repeat' ? r.push(u[f]) : r.push(u.map[f])
              } else r.push(n.Styles.getStyle(e))
            } else r.push(u[i])
          }
        }
        t && (r = this.getCloneObject(r))
        var v = !0
        for (var o = 0; o < r.length; o++) {
          if (r.indexOf(r[o]) != 0) {
            v = !1
            break
          }
        }
        return v ? r[0] : r
      }
      if (this.isSideStyle(e)) {
        var m = e.substr(0, e.indexOf('.'))
        e = e.substr(e.indexOf('.') + 1)
        var i = e.substr(e.indexOf('.') + 1),
          g = this.getSideMaterialIndex(m)
        if (g != null) {
          var y, u = this.material.materials[g]
          return i.startsWith('texture.') ? u.map && (i === 'texture.image' ? y = u.map._image.src : y = u.map[i]) : y = u[i], t && (y = this.getCloneObject(y)), y
        }
      }
      return n.Styles.getStyle(e)
    },
    isSideStyle: function(e) {
      if (e.indexOf('.') === -1) return !1
      var n = this.getSideIndexMapping()
      if (!n) return !1
      var r = e.substr(0, e.indexOf('.'))
      return n[r] !== t ? !0 : !1
    },
    setUp: function(e, t, n) {
      var r
      if (arguments.length === 3) {
        if (this.up.x === e && this.up.y === t && this.up.z === n) return
        r = new o(e, t, n)
      } else {
        if (this.up.x === e.x && this.up.y === e.y && this.up.z === e.z) return
        r = e
      }
      var i = this.up
      this.up = r, this.onUpChanged(i, newValue), this.firePropertyChange('up', i, r)
    },
    getUp: function() {
      return this.up
    },
    onUpChanged: function(e, t) {},
    checkNumber: function(e, t, n, r) {
      P.isNaN(e) && console.error(r + ',x is not a number'), P.isNaN(t) && console.error(r + ',y is not a number'), P.isNaN(n) && console.error(r + ',z is not a number')
    },
    invalidateTexture: function(e) {
      var t = this.material,
        r, i, s, o
      if (e != null && t instanceof n.ArrayMaterial) {
        if (typeof e === 'string') {
          var u = this.getSideIndexMapping()
          u != null && (e = u[e])
          if (e == null) return
        }
        if (typeof e !== 'number') return
        t instanceof n.ArrayMaterial ? s = t.materials[e] : s = materail, this._dirtyMaterialTexture(s)
      } else if (t instanceof n.ArrayMaterial) {
        i = t.materials
        for (r = 0; r < i.length; r++) s = i[r], this._dirtyMaterialTexture(s)
      } else this._dirtyMaterialTexture(t)
    },
    _dirtyMaterialTexture: function(e) {
      e != null && e.map && e.map instanceof n.Texture && this._dirtyTexture(e.map)
    },
    _dirtyTexture: function(e) {
      var t = e._image
      e.firePropertyChange('image', null, t)
    },
    p: function(e, t, n) {
      if (arguments.length === 0) return this.getPosition()
      arguments.length === 3 ? this.setPosition(e, t, n) : this.setPosition(e)
    },
    checkPosition: function(e) {
      return !0
    },
    setPosition: function(e, t, n) {
      var r
      if (arguments.length === 3) {
        if (this._position.x === e && this._position.y === t && this._position.z === n) return
        this.checkNumber(e, t, n, 'setPosition'), r = new o(e, t, n)
      } else {
        if (this._position.x === e.x && this._position.y === e.y && this._position.z === e.z) return
        if (!(e instanceof o)) throw 'Element.setPosition : position is not instanceof TGL.Vec3'
        r = e
      }
      if (!this.checkPosition(r)) return
      var i = this._position
      this._position = r, this.updateWorldMatrix(!0, !1), this.firePropertyChange('position', i, r)
    },
    getPosition: function(e) {
      return e == t && (e = !0), e ? this._position.clone() : this._position
    },
    setPositionX: function(e) {
      if (this._position.x === e) return
      this.checkNumber(e, 0, 0, 'setPositionX')
      var t = this._position.x,
        n = this._position.clone()
      n.x = e
      if (!this.checkPosition(n)) return !1
      this._position.x = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('positionX', t, e)
    },
    setX: function(e) {
      this.setPositionX(e)
    },
    getPositionX: function() {
      return this._position.x
    },
    getX: function() {
      return this.getPositionX()
    },
    setPositionY: function(e) {
      if (this._position.y === e) return
      this.checkNumber(0, e, 0, 'setPositionY')
      var t = this._position.y,
        n = this._position.clone()
      n.y = e
      if (!this.checkPosition(n)) return !1
      this._position.y = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('positionY', t, e)
    },
    setY: function(e) {
      this.setPositionY(e)
    },
    getPositionY: function() {
      return this._position.y
    },
    getY: function() {
      return this.getPositionY()
    },
    setPositionZ: function(e) {
      if (this._position.z === e) return
      this.checkNumber(0, 0, e, 'setPositionZ')
      var t = this._position.z,
        n = this._position.clone()
      n.z = e
      if (!this.checkPosition(n)) return !1
      this._position.z = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('positionZ', t, e)
    },
    setZ: function(e) {
      this.setPositionZ(e)
    },
    getPositionZ: function() {
      return this._position.z
    },
    getZ: function() {
      return this.getPositionZ()
    },
    setScale: function(e, t, n) {
      var r
      if (arguments.length === 3) {
        if (this._scale.x === e && this._scale.y === t && this._scale.z === n) return
        this.checkNumber(e, t, n, 'setScale'), r = new o(e, t, n)
      } else {
        if (this._scale.x === e.x && this._scale.y === e.y && this._scale.z === e.z) return
        if (!(e instanceof o)) throw 'Element.setScale : scale is not instanceof TGL.Vec3'
        r = e
      }
      var i = this._scale
      r.x = r.x || 1, r.y = r.y || 1, r.z = r.z || 1, this._scale = r, this.updateWorldMatrix(!0, !1), this.firePropertyChange('scale', i, r)
    },
    getScale: function(e) {
      return e == t && (e = !0), e ? this._scale.clone() : this._scale
    },
    setScaleX: function(e) {
      if (this._scale.x === e) return
      this.checkNumber(e, 0, 0, 'setScalX')
      var t = this._scale.x
      this._scale.x = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('scaleX', t, e)
    },
    getScaleX: function() {
      return this._scale.x
    },
    setScaleY: function(e) {
      if (this._scale.y === e) return
      this.checkNumber(0, e, 0, 'setScaleY')
      var t = this._scale.y
      this._scale.y = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('scaleY', t, e)
    },
    getScaleY: function() {
      return this._scale.y
    },
    setScaleZ: function(e) {
      if (this._scale.z === e) return
      this.checkNumber(0, 0, e, 'setScaleZ')
      var t = this._scale.z
      this._scale.z = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('scaleZ', t, e)
    },
    getScaleZ: function() {
      return this._scale.z
    },
    setRotation: function(e, t, n) {
      var r
      if (arguments.length === 3) {
        if (this._rotation.x === e && this._rotation.y === t && this._rotation.z === n) return
        this.checkNumber(e, t, n, 'setRotation'), r = new o(e, t, n)
      } else {
        if (this._rotation.x === e.x && this._rotation.y === e.y && this._rotation.z === e.z) return
        if (!(e instanceof o)) throw 'Element.setRotation : rotation is not instanceof TGL.Vec3'
        r = e
      }
      var i = this._rotation
      this._rotation = r, this.updateWorldMatrix(!0, !1), this.firePropertyChange('rotation', i, r)
    },
    getRotation: function(e) {
      return e == t && (e = !0), e ? this._rotation.clone() : this._rotation
    },
    setRotationX: function(e) {
      if (this._rotation.x === e) return
      this.checkNumber(e, 0, 0, 'setRotationX')
      var t = this._rotation.x
      this._rotation.x = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('rotationX', t, e)
    },
    getRotationX: function() {
      return this._rotation.x
    },
    setRotationY: function(e) {
      if (this._rotation.y === e) return
      this.checkNumber(0, e, 0, 'setRotationY')
      var t = this._rotation.y
      this._rotation.y = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('rotationY', t, e)
    },
    getRotationY: function() {
      return this._rotation.y
    },
    setRotationZ: function(e) {
      if (this._rotation.z === e) return
      this.checkNumber(0, 0, e, 'setRotationZ')
      var t = this._rotation.z
      this._rotation.z = e, this.updateWorldMatrix(!0, !1), this.firePropertyChange('rotationZ', t, e)
    },
    getRotationZ: function() {
      return this._rotation.z
    },
    applyMatrix: function(e) {
      var t = this.matrix.clone()
      this.matrix.multiplyMatrices(e, this.matrix), this._scale.getScaleFromMatrix(this.matrix)
      var n = (new l()).extractRotation(this.matrix)
      this._rotation.setEulerFromRotationMatrix(n, this.eulerOrder), this._position.getPositionFromMatrix(this.matrix), this.updateWorldMatrix(!0, !1), this.firePropertyChange('matrix', t, this.matrix)
    },
    translate: function(e, t) {
      this.matrix.rotateAxis(t), this.setPosition(this._position.clone().add(t.multiplyScalar(e)))
    },
    translateX: function(e) {
      this.translate(e, this._vector.set(1, 0, 0))
    },
    translateY: function(e) {
      this.translate(e, this._vector.set(0, 1, 0))
    },
    translateZ: function(e) {
      this.translate(e, this._vector.set(0, 0, 1))
    },
    rotateFromAxis: function(e, t, n) {
      t = t.clone().applyMatrix4(this.matrix), e = e.clone().normalize().applyMatrix4((new l()).extractRotation(this.matrix))
      var r = (new l()).makeRotationAxisAndCenter(e, n, t)
      this.applyMatrix(r)
    },
    rotateFromWorldAxis: function(e, t) {
      var n = new l()
      n.makeRotationAxis(e.normalize(), t), n.multiply(this.matrix), this.matrix = n
      var r = (new l()).extractRotation(this.matrix),
        i = new o()
      i.setEulerFromRotationMatrix(r, this.eulerOrder), this.setRotation(i)
    },
    getEulerAngles: function() {
      return this.matrix.getEulerAngles()
    },
    rotateFromWorldXAxis: function(e) {
      this.rotateFromWorldAxis(new o(1, 0, 0), e)
    },
    rotateFromWorldYAxis: function(e) {
      this.rotateFromWorldAxis(new o(0, 1, 0), e)
    },
    rotateFromWorldZAxis: function(e) {
      this.rotateFromWorldAxis(new o(0, 0, 1), e)
    },
    getRelativeTransform: function(e) {
      if (e instanceof n.Element) {
        var t = (new l()).getInverse(e.matrix.clone()),
          r = (new l()).multiplyMatrices(t, this.matrix.clone()),
          i = (new o()).getPositionFromMatrix(r),
          s = (new o()).setEulerFromRotationMatrix(r),
          u = (new o()).getScaleFromMatrix(r),
          a = {
            position: i,
            rotation: s,
            scale: u,
            matrix: r
          }
        return a
      }
      return null
    },
    localToWorld: function(e) {
      return this._parent == null ? e : e.clone().applyMatrix4(this._parent.worldMatrix)
    },
    localToWorld2: function(e) {
      return e.clone().applyMatrix4(this.worldMatrix)
    },
    getWorldPosition: function() {
      return this.worldMatrix.getPosition()
    },
    direction: function(e) {
      var t = e.applyMatrix4((new l()).extractRotation(this.worldMatrix))
      return t.normalize(), t
    },
    frontDirection: function() {
      var e = new o(0, 0, 1)
      return e = e.applyMatrix4((new l()).extractRotation(this.worldMatrix)), e.normalize(), e
    },
    worldPosition: function(e, t) {
      t = t > 0 ? t : e.length()
      var n = this.worldMatrix.getPosition()
      return n.add(this.direction(e).multiplyScalar(t))
    },
    frontWorldPosition: function(e) {
      e = e > 0 ? e : 1
      var t = this.worldMatrix.getPosition()
      return t.add(this.frontDirection().multiplyScalar(e))
    },
    worldToLocal: function(e) {
      return e.clone().applyMatrix4(n.Element.__m1.getInverse(this.worldMatrix))
    },
    lookAt: function(e, t) {
      this.matrix.lookAt(e, this._position, t || this.up), this.rotationAutoUpdate && (this.useQuaternion === !1 ? this._rotation.setEulerFromRotationMatrix(this.matrix, this.eulerOrder) : this.quaternion.copy(this.matrix.decompose()[1])), this.worldMatrixNeedsUpdate = !0
    },
    iterator: function(e) {
      e(this), this._childList && this._childList.forEach(function(t) {
        t.iterator(e)
      })
    },
    getChildByName: function(e, n) {
      for (var r = 0, i = this.children.length; r < i; r++) {
        var s = this.children[r]
        if (s.name === e) return s
        if (n === !0) {
          s = s.getChildByName(e, n)
          if (s !== t) return s
        }
      }
      return t
    },
    getDescendants: function(e) {
      e === t && (e = [])
      var n = this.getChildren().toArray()
      Array.prototype.push.apply(e, n)
      for (var r = 0, i = n.length; r < i; r++) n[r].getDescendants(e)
      return e
    },
    fixSize: function(e) {
      if (this._sizeFixed) {
        this.updateWorldMatrix()
        var t = new o(),
          n = new o()
        t.getPositionFromMatrix(this.worldMatrix), e.updateWorldMatrix(), n.getPositionFromMatrix(e.worldMatrix), scale = t.distanceTo(n) / this._fixedSize, scale === 0 && (scale = 1e-5), this.setScale(scale, scale, scale)
      }
    },
    updateMatrix: function() {
      this.matrix.setPosition(this._position), this.useQuaternion === !1 ? this.matrix.setRotationFromEuler(this._rotation, this.eulerOrder) : this.matrix.setRotationFromQuaternion(this.quaternion), (this._scale.x !== 1 || this._scale.y !== 1 || this._scale.z !== 1) && this.matrix.scale(this._scale), this.worldMatrixNeedsUpdate = !0
    },
    updateWorldMatrix: function(e, n) {
      n = n == t ? !0 : n, this.matrixAutoUpdate === !0 && this.updateMatrix()
      if (this.worldMatrixNeedsUpdate === !0 || e === !0) {
        this.matrixAutoUpdate === !1 && this.updateMatrix()
        var r = this.worldMatrix.clone()
        this._parent == t ? this.worldMatrix.copy(this.matrix) : this.worldMatrix.multiplyMatrices(this._parent.worldMatrix, this.matrix), this.worldMatrixNeedsUpdate = !1, e = !0, r.equals(this.worldMatrix) || (n && this.firePropertyChange('worldMatrix', r, this.worldMatrix), this.updateCameraMatrix && this.updateCameraMatrix(!1))
      }
      this._childList.forEach(function(t) {
        t.updateWorldMatrix(e)
      })
    },
    cloneCallback: function(e) {},
    clonePrefab: function(e) {
      var r = new mono.Entity()
      e === t && (e = !0), r.name = this.name, r.up == null && (r.up = new o(0, 1, 0)), r.up.copy(this.up), r._position.copy(this._position), r._rotation.copy(this._rotation), r.eulerOrder = this.eulerOrder, r._scale.copy(this._scale), r.renderDepth = this.renderDepth, r.rotationAutoUpdate = this.rotationAutoUpdate, r.matrix.copy(this.matrix), r.worldMatrix.copy(this.worldMatrix), r.rotationWorldMatrix.copy(this.rotationWorldMatrix), r.matrixAutoUpdate = this.matrixAutoUpdate, r.worldMatrixNeedsUpdate = this.worldMatrixNeedsUpdate, r.quaternion.copy(this.quaternion), r.useQuaternion = this.useQuaternion, r._visible = this._visible, r.castShadow = this.castShadow, r.receiveShadow = this.receiveShadow, r.frustumCulled = this.frustumCulled, r.styleMap = r.styleMap || {}, e && this._childList && this._childList.forEach(function(t) {
        r.addChild(t.clonePrefab(e))
      }), r.vertices = this.vertices, r.faces = this.faces, r.uvs = this.uvs, r.uv2s = this.uv2s, r.primitive = this.primitive, r.data = this.primitive.data, r.computed = !0
      for (var i in this.styleMap) r.styleMap[i] = this.getCloneObject(this.styleMap[i])
      if (this._clientMap != null) {
        for (var s in this._clientMap) r.setClient(s, this._clientMap[s])
      }
      r.material = this.material
      if (this.material instanceof n.ArrayMaterial) {
        r.material = new n.ArrayMaterial(), r.material.materials = []
        for (var u = 0; u < this.material.materials.length; u++) r.material.materials.push(this.material.materials[u])
      }
      return r.materialSize = this.getMaterialSize(), r
    },
    createCloneObject: function() {
      return this.constructor ? object = new this.constructor() : object = new n.Element(), object
    },
    clone: function(e, r, i) {
      typeof e === 'boolean' && (i = r, r = e, e = t), e == t && (e = this.createCloneObject()), i === t && (i = !0), e.name = this.name, e.up == null && (e.up = new o(0, 1, 0)), e.up.copy(this.up), e._position.copy(this._position), e._rotation.copy(this._rotation), e.eulerOrder = this.eulerOrder, e._scale.copy(this._scale), e.renderDepth = this.renderDepth, e.rotationAutoUpdate = this.rotationAutoUpdate, e.matrix.copy(this.matrix), e.worldMatrix.copy(this.worldMatrix), e.rotationWorldMatrix.copy(this.rotationWorldMatrix), e.matrixAutoUpdate = this.matrixAutoUpdate, e.worldMatrixNeedsUpdate = this.worldMatrixNeedsUpdate, e.quaternion.copy(this.quaternion), e.useQuaternion = this.useQuaternion, e._visible = this._visible, e.castShadow = this.castShadow, e.receiveShadow = this.receiveShadow, e.frustumCulled = this.frustumCulled, e.styleMap = e.styleMap || {}, i && this._childList && this._childList.forEach(function(t) {
        e.addChild(t.clone(r, i))
      })
      if (this.constructor) {
        var s = this.constructor.prototype.__accessor,
          u = this.constructor.prototype.__bool
        if (s && s.length > 0) {
          for (var a = 0; a < s.length; a++) {
            var f = s[a],
              l = n.getter(f, u),
              c = n.setter(f)
            f === 'vertices' ? e.vertices = this.vertices : f === 'faces' ? e.faces = this.faces : e[c] && e[c](this[l]())
          }
        }
      }
      if (r && this.vertices) {
        var h = e,
          p = this.vertices
        h.vertices = [], h.faces = [], h.uvs = []
        for (var a = 0, d = p.length; a < d; a++) h.vertices.push(p[a].clone())
        var v = this.faces
        for (var a = 0, d = v.length; a < d; a++) h.faces.push(v[a].clone())
        var m = this.uvs
        for (var a = 0, d = m.length; a < d; a++) {
          var g = m[a],
            y = []
          for (var b = 0, w = g.length; b < w; b++) y.push(new n.Vec2(g[b].x, g[b].y))
          h.uvs.push(y)
        }
      }
      for (var E in this.styleMap) e.setStyle(E, this.getCloneObject(this.styleMap[E]))
      if (this._clientMap != null) {
        for (var S in this._clientMap) e.setClient(S, this._clientMap[S])
      }
      return e.cloneCallback(r), e
    }
  }), n.Annotation = function(e, t, r, i) {
    n.Element.call(this, i), this._label = e, this._text = t, this.buttons = r, this._cameraPosition = null
  }, n.extend(n.Annotation, n.Element, {
    ___accessor: ['label', 'text', 'cameraPosition']
  }), n.Node = function(e) {
    n.Element.call(this, e), this.name = '', this.computed = !1, this.selectionData = null, this.stylesMap = new Object(), this.renderGroup = [], this.primitive = null, this.vertices = [], this.faces = [], this.uvs = [], this.uv2s = [], this.colors = [], this.normals = [], this.faces = [], this.morphTargets = [], this.morphColors = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.dynamic = !0, this.verticesNeedUpdate = !1, this.morphTargetsNeedUpdate = !1, this.elementsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.tangentsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.buffersNeedUpdate = !1, this.computeNodeData(), this._alarmBillboard = null
  }, n.extend(n.Node, n.Element, {
    __accessor: ['vertices', 'faces', 'uvs', 'linkAgent'],
    __SizePropeties: [],
    setUpdateFlags: function(e) {
      this.verticesNeedUpdate = e, this.morphTargetsNeedUpdate = e, this.elementsNeedUpdate = e, this.uvsNeedUpdate = e, this.normalsNeedUpdate = e, this.tangentsNeedUpdate = e, this.colorsNeedUpdate = e
    },
    getLinks: function() {
      return this._links
    },
    getFromLinks: function() {
      return this._fromLinks
    },
    getToLinks: function() {
      return this._toLinks
    },
    _addFromLink: function(e) {
      this._allLinks || (this._allLinks = new N()), this._fromLinks || (this._fromLinks = new N()), this._allLinks.add(e), this._fromLinks.add(e), this._resetLinkSet()
    },
    _addToLink: function(e) {
      this._allLinks || (this._allLinks = new N()), this._toLinks || (this._toLinks = new N()), this._allLinks.add(e), this._toLinks.add(e), this._resetLinkSet()
    },
    _removeFromLink: function(e) {
      this._allLinks.remove(e), this._fromLinks.remove(e), this._allLinks.size() === 0 && delete this._allLinks, this._fromLinks.size() === 0 && delete this._fromLinks, this._resetLinkSet()
    },
    _removeToLink: function(e) {
      this._allLinks.remove(e), this._toLinks.remove(e), this._allLinks.size() === 0 && delete this._allLinks, this._toLinks.size() === 0 && delete this._toLinks, this._resetLinkSet()
    },
    _resetLinkSet: function() {
      delete this._loopedLinks
      if (!this._allLinks || this._allLinks.size() === 0) {
        delete this._links
        return
      }
      var e
      this._allLinks.forEach(function(t) {
        t.isLooped() && (e || (e = {}), e[t._id] || (this._loopedLinks || (this._loopedLinks = new N()), this._loopedLinks.add(t), e[t._id] = t))
      }, this), e ? (this._links = new N(), this._allLinks.forEach(function(t) {
        e[t._id] ? e[t._id] !== !1 && (e[t._id] = !1, this._links.add(t)) : this._links.add(t)
      }, this)) : this._links = this._allLinks
    },
    onAlarmChange: function(e, t) {
      n.Element.prototype.onAlarmChange.call(this, e, t)
      var r = this
      setTimeout(function() {
        var e = r._alarmState.getPropagateSeverity()
        e || (e = r._alarmState.getHighestNativeAlarmSeverity())
        var t = r._parent,
          i = !1
        if (t == null || !t._alarmState) i = !0
        else {
          var s = t._alarmState.getPropagateSeverity()
          s || (i = !0)
        }
        e && i ? (r._alarmBillboard == null && r.setAlarmBillboard(new n.Billboard()), r._alarmBillboard.setStyle('m.texture.image', n.ImageCache.AlarmBillboardImage), r._alarmBillboard.setStyle('m.color', e.color), r._alarmBillboard.setStyle('m.alignment', n.BillboardAlignment.bottomCenter)) : r.setAlarmBillboard(null)
      }, 10)
    },
    _setAlarmBillboardPositionAndSize: function(e) {
      var t = this.getStyle('alarm.billboard.position'),
        n = this.getBoundingBox(),
        r = n.min,
        i = n.max,
        s = n.center(),
        u = n.size()
      t === 'topLeft' ? e._position.set(r.x, i.y, s.z + 1) : t === 'topRight' ? e._position.set(i.x, i.y, s.z + 1) : t === 'topBack' ? e._position.set(s.x, i.y, r.z - 1) : t === 'topFront' ? e._position.set(s.x, i.y, i.z + 1) : e._position.set(s.x, i.y, s.z + 1)
      var a = this.getStyle('alarm.billboard.scale')
      a instanceof o ? e._scale.copy(a) : e._scale.set(u.x / 2, u.x / 2, 1)
      var f = this.getStyle('alarm.billboard.vertical')
      e.setStyle('m.vertical', f)
    },
    getLinkOffset: function(e) {
      return new mono.Vec3(0, 0, 0)
    },
    getLinkExtend: function(e) {
      return new mono.Vec3(0, 0, 0)
    },
    clearLinkOrthogonal: function(e, t) {
      return !1
    },
    clearLinkExtend: function(e, t) {
      return !1
    },
    setAlarmBillboard: function(e) {
      if (this._alarmBillboard == e) return
      var t = this._alarmBillboard
      e ? (this._alarmBillboard = e, e.setParent(this), e.setClient('alarmBillboard', !0), this._setAlarmBillboardPositionAndSize(e)) : (this._alarmBillboard.setParent(null), delete this._alarmBillboard), this.firePropertyChange('alarmBillboard', t, e)
    },
    needUpdate: function() {
      return this.verticesNeedUpdate || this.morphTargetsNeedUpdate || this.elementsNeedUpdate || this.uvsNeedUpdate || this.normalsNeedUpdate || this.tangentsNeedUpdate || this.colorsNeedUpdate
    },
    getVerticesWithChildren: function(e, t) {
      function h(n) {
        n.applyMatrix4(e), t.push(n)
      }
      t == null && (t = []), e == null && (e = new l())
      var r, i
      if (this instanceof n.Node) {
        if (this.vertices != null && this.vertices.length != 0) {
          var s = this.getBoundingBox(),
            u = s.min,
            a = s.max
          h(u.clone()), h(a.clone()), h(new o(u.x, u.y, a.z)), h(new o(u.x, a.y, u.z)), h(new o(a.x, u.y, u.z)), h(new o(a.x, a.y, u.z)), h(new o(a.x, u.y, a.z)), h(new o(u.x, a.y, a.z))
        }
        for (var r = 0; r < (this._childList ? this._childList.size() : 0); r++) {
          var f = this._childList.get(r),
            c = new l()
          c.multiplyMatrices(e, f.matrix.clone()), f.getVerticesWithChildren && f.getVerticesWithChildren(c, t)
        }
      }
      return t
    },
    getBoundingBoxWithChildren: function(e) {
      var t = this.getVerticesWithChildren()
      if (e) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r]
          if (i.getParent() === this.getParent() && i !== this) {
            var s = (new l()).getInverse(this.matrix.clone()),
              o = (new l()).multiplyMatrices(s, i.matrix.clone())
            t = t.concat(i.getVerticesWithChildren(o))
          }
        }
      }
      var u = new n.BoundingBox()
      return u.setFromPoints(t), u
    },
    getWorldBoundingBox: function() {
      var e = []
      for (var t = 0; t < this.vertices.length; t++) {
        var r = this.vertices[t].clone()
        r.applyMatrix4(this.worldMatrix), e.push(r)
      }
      var i = new n.BoundingBox()
      return i.setFromPoints(e), i
    },
    getBoundingBox: function() {
      return this.boundingBox == null && this.computeBoundingBox(), this.boundingBox
    },
    computeBoundingBox: function() {
      this.boundingBox === null && (this.boundingBox = new n.BoundingBox()), this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
      this.boundingSphere === null && (this.boundingSphere = new n.BoundingSphere()), this.boundingSphere.setFromCenterAndPoints(this.boundingSphere.center, this.vertices)
    },
    createPropagateAlarmCube: function(e) {
      this.boundingBox == null && this.computeBoundingBox(), e._attachId = this._id
      if (this.propagateAlarmData == null) {
        var t = this.getStyle('outer.offset'),
          n = this.boundingBox.min,
          r = this.boundingBox.max
        e.width = r.x - n.x + t, e.height = r.y - n.y + t, e.depth = r.z - n.z + t, e.computed = !1, e.computeNodeData(), this.propagateAlarmData = e.data, S(e, !0), this.propagateAlarmData.primitive = e.primitive, this.propagateAlarmData.groups = e.groups
        var i = (new o()).center(n, r)
        for (var s = 0; s < e.vertices.length; s++) {
          var u = e.vertices[s]
          u.add(i)
        }
        this.propagateAlarmData.vertices = e.vertices
      } else {
        var a = this.propagateAlarmData
        e.primitive = a.primitive, e.data = a, e.vertices = a.vertices, e.uvs = a.uvs, e.faces = a.faces, e.groups = a.groups
      }
      this.updateMatrix(!0), e._position.copy(this._position), e._scale.copy(this._scale), e._rotation.copy(this._rotation), e.useQuaternion = this.useQuaternion, e.quaternion = this.quaternion, e.worldMatrix = this.worldMatrix, e._parent = this.getParent(), e.updateMatrix(!0)
      var f = e.material
      f.wireframeLinewidth = this.getStyle('outer.width')
      var l = this.getAlarmState().getPropagateSeverity()
      return f.color.set(l.color), e
    },
    createCanvasSelectionCube: function() {
      return this._csc == null && (this._csc = new _(), this._csc.material = new n.EntityMaterial(), this._csc.material.wireframe = !0), this.createSelectionCube(this._csc), this._csc
    },
    createSelectionCube: function(e) {
      this.boundingBox == null && this.computeBoundingBox(), e._attachId = this._id + '_selection'
      if (this.selectionData == null) {
        var t = this.getStyle('select.offset'),
          n = this.boundingBox.min,
          r = this.boundingBox.max,
          i = (new o()).center(n, r)
        e.width = r.x - n.x + t, e.height = r.y - n.y + t, e.depth = r.z - n.z + t, e.offset = i, e.computed = !1
        var s = e.computeNodeData()
        this.selectionData = e.data, S(e, !0), this.selectionData.primitive = e.primitive, this.selectionData.groups = e.groups, this.selectionData.vertices = e.vertices
      } else {
        var u = this.selectionData
        e.primitive = u.primitive, e.data = u, e.vertices = u.vertices, e.uvs = u.uvs, e.faces = u.faces, e.groups = u.groups
      }
      this.updateMatrix(!0), e._position.copy(this._position), e._scale.copy(this._scale), e._rotation.copy(this._rotation), e.useQuaternion = this.useQuaternion, e.quaternion = this.quaternion, e.worldMatrix = this.worldMatrix, e._parent = this.getParent(), e.updateMatrix(!0)
      var a = e.material
      return a.wireframeLinewidth = this.getStyle('select.width'), a.color.set(this.getStyle('select.color')), e
    },
    mergeVertices: function() {
      var e = {},
        n = [],
        r = [],
        i, s, o = 4,
        u = Math.pow(10, o),
        a, f, l, c, h, p, d, v
      this.__tmpVertices = t, this.vertices == null && console.log('vertices is null')
      for (a = 0, f = this.vertices.length; a < f; a++) i = this.vertices[a], s = [Math.round(i.x * u), Math.round(i.y * u), Math.round(i.z * u)].join('_'), e[s] === t ? (e[s] = a, n.push(this.vertices[a]), r[a] = n.length - 1) : r[a] = r[e[s]]
      var m = []
      for (a = 0, f = this.faces.length; a < f; a++) {
        l = this.faces[a]
        if (l instanceof O) {
          l.a = r[l.a], l.b = r[l.b], l.c = r[l.c], c = [l.a, l.b, l.c]
          var g = -1
          for (var y = 0; y < 3; y++) {
            if (c[y] == c[(y + 1) % 3]) {
              g = y, m.push(a)
              break
            }
          }
        } else if (l instanceof M) {
          l.a = r[l.a], l.b = r[l.b], l.c = r[l.c], l.d = r[l.d], c = [l.a, l.b, l.c, l.d]
          var g = -1
          for (var y = 0; y < 4; y++) c[y] == c[(y + 1) % 4] && (g >= 0 && m.push(a), g = y)
          if (g >= 0) {
            c.splice(g, 1)
            var b = new O(c[0], c[1], c[2], l.normal, l.color, l.materialIndex)
            v = this.uvs[a], v && v.splice(g, 1), l.vertexNormals && l.vertexNormals.length > 0 && (b.vertexNormals = l.vertexNormals, b.vertexNormals.splice(g, 1)), l.vertexColors && l.vertexColors.length > 0 && (b.vertexColors = l.vertexColors, b.vertexColors.splice(g, 1)), this.faces[a] = b
          }
        }
      }
      for (a = m.length - 1; a >= 0; a--);
      var w = this.vertices.length - n.length
      return this.vertices = n, w
    },
    computeVertexNormals: function(e) {
      var r, i, s, o, u, a
      if (this.__tmpVertices === t) {
        this.__tmpVertices = new Array(this.vertices.length), a = this.__tmpVertices
        for (r = 0, i = this.vertices.length; r < i; r++) a[r] = new n.Vec3()
        for (s = 0, o = this.faces.length; s < o; s++) u = this.faces[s], u.vertexNormals = [new n.Vec3(), new n.Vec3(), new n.Vec3()]
      } else {
        a = this.__tmpVertices
        for (r = 0, i = this.vertices.length; r < i; r++) a[r].set(0, 0, 0)
      }
      if (e) {
        var f = {},
          l = {},
          c, h, p, d, v = new n.Vec3(),
          m = new n.Vec3(),
          g = new n.Vec3(),
          y = new n.Vec3(),
          b = new n.Vec3(),
          w
        for (s = 0, o = this.faces.length; s < o; s++) u = this.faces[s], c = this.vertices[u.a], h = this.vertices[u.b], p = this.vertices[u.c], v.subVectors(p, h), m.subVectors(c, h), v.cross(m), a[u.a].add(v), a[u.b].add(v), a[u.c].add(v), u.d != t && a[u.d].add(v)
      } else {
        for (s = 0, o = this.faces.length; s < o; s++) u = this.faces[s], a[u.a].add(u.normal), a[u.b].add(u.normal), a[u.c].add(u.normal)
      }
      for (r = 0, i = this.vertices.length; r < i; r++) a[r].normalize()
      for (s = 0, o = this.faces.length; s < o; s++) u = this.faces[s], u.vertexNormals[0].copy(a[u.a]), u.vertexNormals[1].copy(a[u.b]), u.vertexNormals[2].copy(a[u.c]), u.d != t && (u.vertexNormals[3] = a[u.d].clone())
    },
    computeCentroids: function() {
      var e, t, n
      for (e = 0, t = this.faces.length; e < t; e++) n = this.faces[e], n.centroid = n.centroid || new o(), n.centroid == null && console.log('fdasfdsa'), n.centroid.set || (n.centroid = new o()), n.centroid.set(0, 0, 0), n instanceof O ? (n.centroid.add(this.vertices[n.a]), n.centroid.add(this.vertices[n.b]), n.centroid.add(this.vertices[n.c]), n.centroid.divideScalar(3)) : n instanceof M && (n.centroid.add(this.vertices[n.a]), n.centroid.add(this.vertices[n.b]), n.centroid.add(this.vertices[n.c]), n.centroid.add(this.vertices[n.d]), n.centroid.divideScalar(4))
    },
    computeFaceNormals: function() {
      var e, t, n, r, i, s, u, a, f, l, c, h = new o(),
        p = new o()
      for (s = 0, u = this.faces.length; s < u; s++) a = this.faces[s], f = this.vertices[a.a], l = this.vertices[a.b], c = this.vertices[a.c], h.subVectors(c, l), p.subVectors(f, l), h.cross(p), h.normalize(), a.normal.copy || (a.normal = new o()), a.normal.copy(h)
    },
    computeVertex: function() {},
    computePrimitive: function() {},
    generalteGroup: function() {},
    getMatetial: function() {
      return this.material
    },
    computeNodeMaterial: function(e) {},
    cacheNodeMaterial: function(e) {},
    needComputeVertexNormal: function() {
      return !0
    },
    computeNodeData: function(e) {
      if (this.computed === !1) {
        var t = this.generatePrimitiveKey()
        this._attachId && (t += '_' + this._attachId)
        var r = n.PrimitiveCache.getPrimitive(t),
          i = !1
        if (!r) {
          var s = this.computeData()
          this.needComputeVertexNormal() && (n.Node.prototype.mergeVertices.call(s), n.Node.prototype.computeFaceNormals.call(s), n.Node.prototype.computeVertexNormals.call(s, !0))
          if (s.uv2s == null || s.uv2s.length == 0) {
            s.uv2s = []
            if (s.uvs != null && s.uvs.length > 0) {
              for (var o = 0; o < s.uvs.length; o++) {
                var u = [],
                  a = s.uvs[o]
                for (var f = 0; f < a.length; f++) u.push(a[f].clone())
                s.uv2s.push(u)
              }
            }
          }
          r = new n.Primitive(s, t), n.PrimitiveCache.setPrimitive(t, r), this.cacheNodeMaterial(r), i = !0
        } else this.primitive && n.PrimitiveCache.unUsePrimitive(r), this.computeNodeMaterial(r)
        return n.PrimitiveCache.usePrimitive(r), this.primitive = r, this.data = r.data, this.vertices = r.vertices, this.faces = r.faces, this.uvs = r.uvs, this.uv2s = r.uv2s, this.computed = !0, i
      }
    },
    computeData: function() {
      var e = {
        vertices: [],
        faces: [],
        uv2s: [],
        uvs: []
      }
      return this.vertices = e.vertices, this.uvs = e.uvs, this.faces = e.faces, this.data = e, e
    },
    setMaterial: function(e, t, n) {
      var r = t.getUniqueCode ? t.getUniqueCode() : null,
        i = ni.getMaterial(r)
      i ? (this.material.materials[e] = i, ni.useMaterial(i)) : (this.material.materials[e] = t, ni.setMaterial(r, t), ni.useMaterial(t)), ni.unUseMaterial(n)
    },
    onMaterialMapping: function() {
      this.groups = t
    },
    getMaterialSize: function() {
      return this.materialSize || 1
    },
    startBatch: function() {
      this.batch = !0
    },
    endBatch: function() {
      this.materialMappingChanges !== t && (this.onSizeChanged(), this.onMaterialMapping(), this.firePropertyChange('materialMapping', this.materialMappingChanges[0], this.materialMappingChanges[1]), this.materialMappingChanges = t), this.batch = !1
    },
    compareAndSetMaterial: function(e, t, n) {
      this.setMaterial(n, t, e)
    },
    cloneStyle: function(e) {
      if (this.getClassName() != e.getClassName()) {
        console.warn('ApplyStyle fail, the source with not the same class')
        return
      }
      var t = this.getMaterialMapping()
      for (var r = 0; r < this.getMaterialSize(); r++) {
        var i = this.material.materials[r],
          s = e.material.materials[r]
        this.compareAndSetMaterial(i, s, r)
      }
      var o = this.getMaterialMapping()
      n.Utils.isSame(t, o) || (this.batch ? this.materialMappingChanges = [t, o] : (this.onSizeChanged(), this.onMaterialMapping(), this.firePropertyChange('materialMapping', t, o)))
    },
    _considerArray: function(e, t) {
      if (!e.startsWith('envmap.image')) return P.isArray(t)
      var n = !1
      if (P.isArray(t)) {
        for (var r = 0; r < t.length; r++) {
          if (P.isArray(t[r])) {
            n = !0
            break
          }
        }
      }
      return n
    },
    setMaterialStyles: function(e) {
      var t = this.getMaterialMapping(),
        r, i, s, o, u, a, f, l, c, t = this.getMaterialMapping()
      for (var h in e) var p = e[h]
      for (var d = 0; d < this.getMaterialSize(); d++) {
        o = this.material.materials[d], u = o.clone()
        var v = !1
        for (var h in e) {
          var m = !1
          if (h.startsWith('m.')) f = h.substr(h.indexOf('.') + 1)
          else if (this.getSideIndexMapping() && this.isSideStyle(h)) {
            var g = h.substr(0, h.indexOf('.')),
              l = this.getSideMaterialIndex(g)
            if (l != d) continue
            m = !0, c = h.substr(h.indexOf('.') + 1), f = c.substr(c.indexOf('.') + 1)
          }
          var p = e[h]
          s = p[0], s == null ? s = n.Styles.getStyle(h) : this._considerArray(f, s) && (s = s[d]), this._A97(u, f, s), v = !0
        }
        v && this.compareAndSetMaterial(o, u, d)
      }
      this.changeMapping(t)
    },
    setMaterialStyle: function(e, t, r) {
      var t, i, s, o, u, a, f = e
      e.startsWith('m.') && (f = e.substr(e.indexOf('.') + 1))
      if (r == null && !n.Utils.isArray(t)) {
        var l = []
        for (h = 0; h < this.getMaterialSize(); h++) l.push(t)
        this.styleMap[e] = l, t = l
      }
      var c = !1
      if (f.startsWith('envmap.image') && t && P.isArray(t)) {
        for (var h = 0; h < t.length; h++) {
          if (P.isArray(t[h])) {
            c = !1
            break
          }
          c = !0
        }
      }
      var p = this.getMaterialMapping()
      if (r == null && (!n.Utils.isArray(t) || c)) {
        var d = []
        for (var h = 0; h < this.getMaterialSize(); h++) {
          if (d[h] === !0) continue
          s = t, o = this.material.materials[h], u = o.clone(), s == null && (s = n.Styles.getStyle(e)), this._A97(u, f, s), this.compareAndSetMaterial(o, u, h)
        }
      } else if (n.Utils.isArray(t)) {
        i = t
        for (var h = 0; h < this.getMaterialSize(); h++) s = i[h], o = this.material.materials[h], u = o.clone(), s == null && (s = n.Styles.getStyle(e)), this._A97(u, f, s), this.compareAndSetMaterial(o, u, h)
      } else if (r != null) {
        var p = this.getMaterialMapping()
        o = this.material.materials[r], u = o.clone(), this._A97(u, f, t), this.compareAndSetMaterial(o, u, r), this.synchronizeIndexStyle(e, r, t)
      }
      this.changeMapping(p)
    },
    changeMapping: function(e) {
      var t = this.getMaterialMapping()
      n.Utils.isSame(e, t) || (this.batch ? this.materialMappingChanges = [e, t] : (this.onSizeChanged(), this.onMaterialMapping(), this.firePropertyChange('materialMapping', e, t)))
    },
    synchronizeSideStyle: function(e, t, n) {
      var r = this.getMaterialIndexSide(t)
      r && this.styleMap[r + '.' + e] != null && (this.styleMap[r + '.' + e] = n)
    },
    synchronizeIndexStyle: function(e, t, r) {
      var s = this.styleMap[e]
      s == null && (s = this.getStyle(e), this.styleMap[e] = s)
      if (n.Utils.isArray(s)) s[t] = r
      else {
        var o = []
        for (i = 0; i < this.getMaterialSize(); i++) o.push(s)
        o[t] = r, this.styleMap[e] = o
      }
    },
    getDefaultMaterial: function(e, t) {
      return e ? e instanceof n.ArrayMaterial ? e.materials.length === 0 ? ni.DefaultMaterial : (t >= e.materials.length && (t = e.materials.length - 1), e.materials[t]) : e : ni.DefaultMaterial
    },
    createMaterial: function(e) {
      var t = new n.ArrayMaterial()
      this.material = t
      var r = this.getMaterialSize()
      for (var i = 0; i < r; i++) this.setMaterial(i, this.getDefaultMaterial(e, i))
    },
    onPropertyChange: function(e, t, n) {
      this.changeProperty = e, this.oldGroups = this.groups
      var r = this.isSizeChangedProperty(e)
      r && this.onSizeChanged(), r && this.onMaterialMapping(), r && this.firePropertyChange('materialMapping', 0, 1)
    },
    onSizeChanged: function() {
      this.computed = !1, this.computeNodeData(), this.computeCentroids(), this.computeFaceNormals(), this.computeBoundingBox(), this.selectionData = null, this.boundingSphere = null, this.changeProperty = null
    },
    isSizeChangedProperty: function(e) {
      return this.__SizePropeties.indexOf(e) !== -1 || e == 'vertices' || e == 'faces' || e == 'uvs'
    },
    isGroupChangedProperty: function(e) {},
    getMaterialMapping: function() {
      var e = {},
        t = this.material.materials
      for (var n in t) e[n] = t.indexOf(t[n])
      return e
    },
    getSideMaterialIndex: function(e) {
      var t = this.getSideIndexMapping()
      if (t) return t[e]
    },
    getMaterialIndexSide: function(e) {
      var t = this.getIndexSideMapping()
      if (t) return t[e]
    },
    getIndexSideMapping: function() {
      var e = this.getSideIndexMapping()
      if (e && !this.IndexSideMapping) {
        this.IndexSideMapping = {}
        var t, n
        for (t in e) n = e[t], this.IndexSideMapping[n] = t
      }
      return this.IndexSideMapping
    },
    getSideIndexMapping: function() {},
    disposeMaterial: function() {},
    getMaterial: function() {
      return this.material
    }
  })
  var A = function(e, t, r) {
    this.normal = e instanceof n.Vec3 ? e : new n.Vec3(), this.vertexNormals = e instanceof Array ? e : [], this.color = t instanceof n.Color ? t : new n.Color(), this.vertexColors = t instanceof Array ? t : [], this.materialIndex = r || 0, this.centroid = new n.Vec3(), this.needVertexNormal = !1
  }
  n.Face = A, A.prototype = {
    constructor: n.Face,
    subClone: function() {},
    clone: function() {
      var e = this.subClone()
      e.normal.copy(this.normal), e.color.copy(this.color), e.centroid.copy(this.centroid), e.materialIndex = this.materialIndex
      var t, n
      for (t = 0, n = this.vertexNormals.length; t < n; t++) e.vertexNormals.push(this.vertexNormals[t])
      for (t = 0, n = this.vertexColors.length; t < n; t++) e.vertexColors.push(this.vertexColors[t])
      return e
    }
  }
  var O = function(e, t, r, i, s, o) {
    n.Face.call(this, i, s, o), this.a = e, this.b = t, this.c = r
  }
  n.Face3 = O, O.prototype = Object.create(n.Face.prototype), O.prototype.constructor = n.Face3, O.prototype.subClone = function() {
    var e = new O(this.a, this.b, this.c)
    return e
  }, O.prototype.vertexCount = 3, O.prototype.serializeJsonValue = function() {
    return {
      a: this.a,
      b: this.b,
      c: this.c
    }
  }
  var M = function(e, t, r, i, s, o, u) {
    n.Face.call(this, s, o, u), this.a = e, this.b = t, this.c = r, this.d = i
  }
  n.Face4 = M, M.prototype = Object.create(n.Face.prototype), M.prototype.constructor = n.Face4, M.prototype.subClone = function() {
    var e = new M(this.a, this.b, this.c, this.d)
    return e
  }, M.prototype.splitToFace3s = function() {
    var e = new O(this.a, this.b, this.d, this.normal, this.color, this.materialIndex),
      t = new O(this.d, this.b, this.c, this.normal, this.color, this.materialIndex)
    return [e, t]
  }, M.prototype.vertexCount = 4, M.prototype.serializeJsonValue = function() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d
    }
  }, n.Entity = function(e, r) {
    e instanceof n.ArrayMaterial ? (this.material = e, this.materialSize = this.material.materials.length || 1) : e instanceof n.Material ? (this.material = e, this.materialSize = 1) : e && (this.materialSize = e),
    this.materialSize = this.materialSize || 1,
    this.createMaterial(this.material),
    r != t && this._id == null && (this._id = r),
    n.Node.call(this, this._id),
    this.groups = null
  }, n.extend(n.Entity, n.Node, {
    constructor: n.Entity,
    className: 'TGL.Entity',
    __accessor: ['computeVertexNormal'],
    __SizePropeties: ['computeVertexNormal'],
    setUpdateFlags: function(e) {
      this.verticesNeedUpdate = e, this.morphTargetsNeedUpdate = e, this.elementsNeedUpdate = e, this.uvsNeedUpdate = e, this.normalsNeedUpdate = e, this.colorsNeedUpdate = e, this.tangentsNeedUpdate = e, this.buffersNeedUpdate = e
    },
    cloneCallback: function(e) {
      e && this.className === 'TGL.Entity' && (this.computed = !1, this.computeNodeData())
    },
    needComputeVertexNormal: function() {
      return this.computeVertexNormal
    },
    computeData: function() {
      var e = {
        vertices: this.vertices,
        faces: this.faces,
        uvs: this.uvs,
        uv2s: this.uv2s
      }
      return e
    },
    createCloneObject: function() {
      return this.constructor === n.Entity ? new n.Entity(this.materialSize) : n.Element.prototype.createCloneObject.call(this)
    },
    getMaterialSize: function() {
      return this.materialSize
    },
    setMaterialSize: function(e) {
      typeof e === 'number' && (this.materialSize = e, this.createMaterial(this.material))
    }
  })
  var _ = function() {
    var e, t, r, i, s, u, a, f, l, c
    arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0]) ? (a = arguments[0], e = a.width, t = a.height, r = a.depth, i = a.segmentsW, s = a.segmentsH, u = a.segmentsD, c = a.wrapMode, this._id = a.id) : arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], t = arguments[2], r = arguments[3], i = arguments[4], s = arguments[5], u = arguments[6], c = arguments[7]) : (e = arguments[0], t = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4], u = arguments[5], c = arguments[6]), this.width = e || 1, this.height = t || 1, this.depth = r || 1, this.segmentsW = i || 1, this.segmentsH = s || 1, this.segmentsD = u || 1, this.wrapMode = (c || '').toLowerCase(), this.materialSize = this.wrapMode == null || this.wrapMode == '' ? 6 : 1, this.offset = new o(0, 0, 0), n.Entity.call(this)
  }
  n.Cube = _, n.extend(n.Cube, n.Entity, {
    __accessor: ['width', 'height', 'depth', 'wrapMode'],
    __SizePropeties: ['width', 'height', 'depth', 'wrapMode'],
    className: 'TGL.Cube',
    getUVs: function() {
      return this.uvs
    },
    setPropertyValue: function(e, t) {
      var n = this[e]
      if (n === t) return !1
      this[e] = t
      if (e === 'wrapMode') {
        var r = this.wrapMode,
          i = r == 'six-each' || r == 'front-other' || r == 'back-other' || r == 'left-other' || r == 'right-other' || r == 'top-other' || r == 'bottom-other'
        this.materialSize = this.wrapMode == null || this.wrapMode == '' ? 6 : 1, i || (this[e] = '')
      }
      return !0
    },
    getLinkOffset: function(e) {
      var t = e.length()
      e.normalize()
      var n = e.x / this.getWidth(),
        r = e.y / this.getHeight(),
        i = e.z / this.getDepth(),
        s = Math.max(Math.abs(n), Math.abs(r), Math.abs(i))
      return s == Math.abs(n) ? new o(this.getWidth() / 2 * (n < 0 ? -1 : 1), 0, 0) : s == Math.abs(r) ? new o(0, this.getHeight() / 2 * (r < 0 ? -1 : 1), 0) : new o(0, 0, this.getDepth() / 2 * (i < 0 ? -1 : 1))
    },
    getLinkExtend: function(e) {
      var t = this.worldMatrix.clone()
      return t = (new mono.Mat4()).extractRotation(t), this.getLinkOffset(e.applyMatrix4((new l()).getInverse(t)))
    },
    computeData: function() {
      var e = w.buildCubeData(this.width, this.height, this.depth, this.segmentsW, this.segmentsH, this.segmentsD, this.wrapMode, this.offset || new o(0, 0, 0))
      return this.vertices = e.vertices, this.uvs = e.uvs, this.faces = e.faces, this.data = e, e
    },
    getSideIndexMapping: function() {
      return this.wrapMap ? null : n.Cube.SideIndexMapping
    },
    generatePrimitiveKey: function() {
      return 'cube_' + this.width + '_' + this.height + '_' + this.depth + '_' + this.segmentsW + '_' + this.segmentsH + '_' + this.segmentsD + '_' + (this.material instanceof n.ArrayMaterial ? 1 : 0) + '_' + this.wrapMode + '_' + this.offset.x + '_' + this.offset.y + '_ ' + this.offset.z + '_' + n.Utils.toString(this.getMaterialMapping())
    },
    serialize: function(e) {
      var t = e
      this.width !== 1 && t.serializeSimple('p', 'width', this.width, 'number'), this.height !== 1 && t.serializeSimple('p', 'height', this.height, 'number'), this.depth !== 1 && t.serializeSimple('p', 'depth', this.depth, 'number'), this.widthSegemtns !== 1 && t.serializeSimple('p', 'widthSegemtns', this.widthSegemtns, 'number'), this.heightSegments !== 1 && t.serializeSimple('p', 'heightSegments', this.heightSegments, 'number'), this.depthSegments !== 1 && t.serializeSimple('p', 'depthSegments', this.depthSegments, 'number'), n.Element.serialize.call(this, t)
    }
  }), _.SideIndexMapping = {
    right: 0,
    left: 1,
    top: 2,
    bottom: 3,
    front: 4,
    back: 5
  }, n.Sphere = function() {
    var e, r, i, s, o, u, a
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var f = arguments[0]
      e = f.radius, r = f.segmentsW, i = f.segmentsH, s = f.longitudeStart, o = f.longitudeLength, u = f.latitudeStart, this._id = f.id
    } else arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4], o = arguments[5], u = arguments[6], a = arguments[7]) : (e = arguments[0], r = arguments[1], i = arguments[2], s = arguments[3], o = arguments[4], u = arguments[5], a = arguments[6])
    this.radius = e || 50, this.segmentsW = Math.max(3, Math.floor(r) || 22), this.segmentsH = Math.max(2, Math.floor(i) || 15), this.longitudeStart = s !== t ? s : 0, this.longitudeLength = o !== t ? o : Math.PI * 2, this.latitudeStart = u !== t ? u : 0, this.latitudeLength = a !== t ? a : Math.PI, this.materialSize = 1, n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.Sphere, n.Entity, {
    constructor: n.Sphere,
    __accessor: ['radius', 'segmentsW', 'segmentsH', 'latitudeStart', 'latitudeLength', 'longitudeStart', 'longitudeLength'],
    __SizePropeties: ['radius', 'segmentsW', 'segmentsH', 'latitudeStart', 'latitudeLength', 'longitudeStart', 'longitudeLength'],
    className: 'TGL.Sphere',
    computeData: function() {
      var e = w.bsd(this.radius, this.segmentsW, this.segmentsH, this.longitudeStart, this.longitudeLength, this.latitudeStart, this.latitudeLength)
      return this.vertices = e.vertices, this.uvs = e.uvs, this.faces = e.faces, this.data = e, e
    },
    setWidthSegments: function(e) {
      console.log('TGL.Sphere.setWidthSegments has deprecated,please use setSegmentsW'), this.setSegmentsW(e)
    },
    setHeightSegments: function(e) {
      console.log('TGL.Sphere.setHeightSegments has deprecated,please use setSegmentsW'), this.setSegmentsH(e)
    },
    generatePrimitiveKey: function() {
      return 'sphere_' + this.radius + '_' + this.segmentsW + '_' + this.segmentsH + '_' + this.longitudeStart + '_' + this.longitudeLength + '_' + this.latitudeStart + '_' + this.latitudeLength
    },
    computeBoundingSphere: function() {
      this.boundingSphere === null && (this.boundingSphere = new n.BoundingSphere(new n.Vec3(), this.radius))
    },
    getLinkOffset: function(e) {
      var t = e.length()
      return e.normalize(), e.multiplyScalar(this.radius)
    },
    serialize: function(e) {
      var t = e
      this.radius !== 50 && t.serializeSimple(Wr, 'radius', this.radius, 'number'), this.widthSegments !== 24 && t.serializeSimple(Wr, 'widthSegments', this.widthSegments, 'number'), this.heightSegments !== 18 && t.serializeSimple(Wr, 'heightSegments', this.heightSegments, 'number'), this.phiStart !== 0 && t.serializeSimple(Wr, 'phiStart', this.phiStart, 'number'), this.phiLength !== Math.PI * 2 && t.serializeSimple(Wr, 'phiLength', this.phiLength, 'number'), this.thetaStart !== 0 && t.serializeSimple(Wr, 'thetaStart', this.thetaStart, 'number'), this.thetaLength !== Math.PI && t.serializeSimple(Wr, 'thetaLength', this.thetaLength, 'number')
    }
  }), n.Plane = function() {
    var e, t, r, i, s
    arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], t = arguments[2], r = arguments[3], i = arguments[4]) : (e = arguments[0], t = arguments[1], r = arguments[2], i = arguments[3]), this.width = e || 5, this.height = t || 5, this.segmentsW = r || 1, this.segmentsH = i || 1, this.vertices = [], this.faces = [], this.uvs = [], this.uv2s = [], this.materialSize = 1, this.computeData = function() {
      var e, t, r = this.width / 2,
        i = this.height / 2,
        s = this.segmentsW,
        o = this.segmentsH,
        u = s + 1,
        a = o + 1,
        f = this.width / s,
        l = this.height / o,
        c = new n.Vec3(0, 0, 1),
        h = {
          vertices: [],
          faces: [],
          uvs: []
        }
      for (t = 0; t < a; t++) {
        for (e = 0; e < u; e++) {
          var p = e * f - r,
            d = t * l - i
          h.vertices.push(new n.Vec3(p, -d, 0))
        }
      }
      for (t = 0; t < o; t++) {
        for (e = 0; e < s; e++) {
          var v = e + u * t,
            m = e + u * (t + 1),
            g = e + 1 + u * (t + 1),
            y = e + 1 + u * t,
            b = new n.Vec2(e / s, 1 - t / o),
            w = new n.Vec2(e / s, 1 - (t + 1) / o),
            E = new n.Vec2((e + 1) / s, 1 - (t + 1) / o),
            S = new n.Vec2((e + 1) / s, 1 - t / o),
            x = new n.Face4(v, m, g, y)
          x.normal.copy(c), x.vertexNormals.push(c.clone(), c.clone(), c.clone(), c.clone()), h.faces.push(x), h.uvs.push([b, w, E, S])
        }
      }
      return h
    }, n.Entity.call(this), this.computeCentroids()
  }, n.extend(n.Plane, n.Entity, {
    constructor: n.Plane,
    className: 'TGL.Plane',
    __accessor: ['width', 'height', 'segmentsW', 'segmentsH'],
    __SizePropeties: ['width', 'height', 'segmentsW', 'segmentsH'],
    clone: function() {
      var e = new n.Plane(this.material, this.width, this.height, this.segmentsW, this.segmentsH)
      return this.superClass.clone.call(this, e), e
    },
    getSelectStyle: function() {
      var e = this.getStyle('select.style')
      if (e == 'outline.normal' || e == 'outline') e = 'outline.wireframe'
      return e
    }
  }), n.Cylinder = function() {
    var e, r, i, s, o, u, a, f, l
    arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0]) ? (options = arguments[0], e = options.radiusTop, r = options.radiusBottom, i = options.height, s = options.segmentsR, o = options.segmentsH, u = options.openTop, a = options.openBottom, f = options.arcLength, l = options.arcStart, this._id = options.id) : arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4], o = arguments[5], u = arguments[6], a = arguments[7], f = arguments[8], l = arguments[9]) : (e = arguments[0], r = arguments[1], i = arguments[2], s = arguments[3], o = arguments[4], u = arguments[5], a = arguments[6], f = arguments[7], l = arguments[8]), this.radiusTop = e = e !== t ? e : 20, this.radiusBottom = r = r !== t ? r : 20, this.height = i = i !== t ? i : 100, this.segmentsR = s = s || 20, this.segmentsH = o = o || 1, this.openTop = u !== t ? u : !1, this.openBottom = a != t ? a : !1, this.arcLength = f !== t ? f : Math.PI * 2, this.arcStart = l !== t ? l : 0, this.materialSize = 3, n.Entity.call(this), this.computeNodeData(), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.Cylinder, n.Entity, {
    constructor: n.Cylinder,
    __accessor: ['radiusTop', 'radiusBottom', 'height', 'segmentsR', 'segmentsH', 'openTop', 'openBottom', 'arcLength', 'arcStart'],
    __bool: ['openTop', 'openBottom'],
    __SizePropeties: ['radiusTop', 'radiusBottom', 'height', 'segmentsR', 'segmentsH', 'openTop', 'openBottom', 'arcLength', 'arcStart'],
    className: 'TGL.Cylinder',
    computeData: function() {
      return w.bcld(this.height, this.segmentsH, this.radiusBottom, this.radiusTop, this.segmentsR, this.openTop, this.openBottom, this.arcLength, this.arcStart)
    },
    getLinkOffset: function(e) {
      var t = e.length()
      e.normalize()
      var n = e.x,
        r = e.y,
        i = e.z,
        s = Math.sqrt(n * n + i * i),
        u = r > 0 ? this.radiusTop : this.radiusBottom
      if (Math.abs(r / s) > this.height / 2 / u && t > 0) {
        var a = new o(0, this.height / 2 * (r > 0 ? 1 : -1), 0)
        return a
      }
      return (new o(n, 0, i)).normalize().multiplyScalar((this.radiusTop + this.radiusBottom) / 2)
    },
    getLinkExtend: function(e) {
      var t = this.worldMatrix.clone()
      return t = (new mono.Mat4()).extractRotation(t), this.getLinkOffset(e.applyMatrix4((new l()).getInverse(t)))
    },
    clearLinkOrthogonal: function(e, t, n, r) {
      r = r || 0
      var i = this.getHeight() / 2 + r,
        s = (this.radiusTop + this.radiusBottom) / 2 + r
      return n == 'orthogonal.x' || n == 'orthogonal.x.n' ? !(Math.abs(e.y - t.y) > i || Math.abs(e.z - t.z) > s) : n == 'orthogonal.y' || n == 'orthogonal.y.n' ? !(Math.abs(e.x - t.x) > s || Math.abs(e.z - t.z) > s) : n == 'orthogonal.z' || n == 'orthogonal.z.n' ? !(Math.abs(e.y - t.y) > i || Math.abs(e.z - t.z) > s) : !1
    },
    clearLinkExtend: function(e, t) {
      return t !== 'extend.x' && t === 'extend.y' && e > this.getHeight() / 2 ? !0 : !1
    },
    getSideIndexMapping: function() {
      return n.Cylinder.SideIndexMapping
    },
    generatePrimitiveKey: function() {
      return 'cylinder_' + this.height + '_' + this.segmentsH + '_' + this.radiusTop + '_' + this.radiusBottom + '_' + this.segmentsR + '_' + this.openTop + '_' + this.openBottom + '_' + this.arcLength + '_' + this.arcStart + n.Utils.toString(this.getMaterialMapping())
    },
    needComputeVertexNormal: function() {
      return !1
    }
  }), n.Cylinder.SideIndexMapping = {
    side: 0,
    top: 1,
    bottom: 2
  }, n.Circle = function() {
    var e, r, i, s
    arguments.length === 4 ? (e = arguments[0], r = arguments[1], i = arguments[2], s = arguments[3]) : (this.material = arguments[0], e = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4]), this.radius = e = e || 50, this.segments = r = r !== t ? Math.max(3, r) : 8, this.thetaStart = i = i !== t ? i : 0, this.thetaLength = s = s !== t ? s : Math.PI * 2, this.materialSize = 1, n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new n.BoundingSphere(new n.Vec3(), e)
  }, n.extend(n.Circle, n.Entity, {
    clone: function() {
      var e = new n.Circle(this.material, this.radius, this.segments, this.thetaStart, this.thetaLength)
      return this.constructor.superClass.clone.call(this, e), e
    },
    computeData: function() {
      var e = this.segments,
        t, r = [],
        i = new n.Vec3(),
        s = new n.Vec2(0.5, 0.5),
        o = {
          vertices: [],
          faces: [],
          uvs: [],
          uv2s: []
        }
      o.vertices.push(i), r.push(s)
      for (t = 0; t <= e; t++) {
        var u = new n.Vec3(),
          a = this.thetaStart + t / e * this.thetaLength
        u.x = this.radius * Math.cos(a), u.y = this.radius * Math.sin(a), o.vertices.push(u), r.push(new n.Vec2((u.x / this.radius + 1) / 2, (u.y / this.radius + 1) / 2))
      }
      var f = new n.Vec3(0, 0, 1)
      for (t = 1; t <= e; t++) {
        var l = t,
          c = t + 1,
          h = 0
        o.faces.push(new n.Face3(l, c, h, [f, f, f])), o.uvs.push([r[t], r[t + 1], s])
      }
      return o
    }
  }), n.Torus = function() {
    var e, t, r, i, s
    arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0]) ? (options = arguments[0], e = options.radius, t = options.tube, r = options.segmentsR, i = options.segmentsT, s = options.arc, this._id = options.id) : arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], t = arguments[2], r = arguments[3], i = arguments[4], s = arguments[5]) : (e = arguments[0], t = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4]), this.materialSize = 1, this.radius = e || 100, this.tube = t || 40, this.segmentsR = r || 8, this.segmentsT = i || 6, this.arc = s || Math.PI * 2, n.Entity.call(this), this.computeNodeData(), this.computeCentroids()
  }, n.extend(n.Torus, n.Entity, {
    __accessor: ['radius', 'tube', 'segmentsR', 'segmentsT', 'arc'],
    __SizePropeties: ['radius', 'tube', 'segmentsR', 'segmentsT', 'arc'],
    className: 'TGL.Torus',
    generatePrimitiveKey: function() {
      return 'torus_' + this.radius + '_' + this.tube + '_' + this.segmentsR + '_' + this.segmentsT + '_' + this.arc
    },
    computeData: function() {
      var e = new n.Vec3(),
        t = [],
        r = [],
        i = {
          vertices: [],
          faces: [],
          uvs: [],
          uv2s: []
        }
      for (var s = 0; s <= this.segmentsR; s++) {
        for (var o = 0; o <= this.segmentsT; o++) {
          var u = o / this.segmentsT * this.arc,
            a = s / this.segmentsR * Math.PI * 2
          e.x = this.radius * Math.cos(u), e.y = this.radius * Math.sin(u)
          var f = new n.Vec3()
          f.x = (this.radius + this.tube * Math.cos(a)) * Math.cos(u), f.y = (this.radius + this.tube * Math.cos(a)) * Math.sin(u), f.z = this.tube * Math.sin(a), i.vertices.push(f), t.push(new n.Vec2(o / this.segmentsT, s / this.segmentsR)), r.push(f.clone().sub(e).normalize())
        }
      }
      for (var s = 1; s <= this.segmentsR; s++) {
        for (var o = 1; o <= this.segmentsT; o++) {
          var l = (this.segmentsT + 1) * s + o - 1,
            c = (this.segmentsT + 1) * (s - 1) + o - 1,
            h = (this.segmentsT + 1) * (s - 1) + o,
            p = (this.segmentsT + 1) * s + o,
            d = new n.Face3(l, c, p, [r[l], r[c], r[p]])
          d.normal.add(r[l]), d.normal.add(r[c]), d.normal.add(r[p]), d.normal.normalize(), i.faces.push(d), i.uvs.push([t[l].clone(), t[c].clone(), t[p].clone()]), d = new n.Face3(c, h, p, [r[c], r[h], r[p]]), d.normal.add(r[c]), d.normal.add(r[h]), d.normal.add(r[p]), d.normal.normalize(), i.faces.push(d), i.uvs.push([t[c].clone(), t[h].clone(), t[p].clone()])
        }
      }
      return i
    }
  }), n.Arrow = function() {
    var e, t, r, i, s
    arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], t = arguments[2], r = arguments[3], i = arguments[4], s = arguments[5]) : (e = arguments[0], t = arguments[1], r = arguments[2], i = arguments[3], s = arguments[4]), this.materialSize = 1, this.tailHeight = e || 100, this.tailRadius = t || 20, this.headHeight = r || 20, this.headRadius = i || 30, this.radiusSegments = s || 30, this.computeData = function() {
      var o = 2
      this.headRadius < this.tailRadius && (this.headRadius = this.tailRadius)
      var u = e + r,
        a = u / 2,
        f, l, c = [],
        h = [],
        p = [],
        d = []
      for (l = 0; l <= o; l++) {
        var v = [],
          m = [],
          g = l / o,
          y = g * i
        for (f = 0; f <= s; f++) {
          var b = f / s,
            w = new n.Vec3()
          w.x = y * Math.sin(b * Math.PI * 2), w.y = -g * r + a, w.z = y * Math.cos(b * Math.PI * 2), this.vertices.push(w), v.push(this.vertices.length - 1), m.push(new n.Vec2(b, 1 - g))
        }
        c.push(v), p.push(m)
      }
      this.vertices.push(new n.Vec3(0, a - r, 0))
      for (l = 0; l <= o; l++) {
        var v = [],
          m = [],
          g = l / o,
          y = t
        for (f = 0; f <= s; f++) {
          var b = f / s,
            w = new n.Vec3()
          w.x = y * Math.sin(b * Math.PI * 2), w.y = -g * e + a - r, w.z = y * Math.cos(b * Math.PI * 2), this.vertices.push(w), v.push(this.vertices.length - 1), m.push(new n.Vec2(b, 1 - g))
        }
        h.push(v), d.push(m)
      }
      this.vertices.push(new n.Vec3(0, -a, 0))
      var E = this.headRadius / u,
        S, x
      for (f = 0; f < s; f++) {
        S = this.vertices[c[0][f]].clone(), x = this.vertices[c[0][f + 1]].clone(), S.setY(Math.sqrt(S.x * S.x + S.z * S.z) * E).normalize(), x.setY(Math.sqrt(x.x * x.x + x.z * x.z) * E).normalize()
        for (l = 0; l < o; l++) {
          var T = c[l][f],
            N = c[l + 1][f],
            C = c[l + 1][f + 1],
            k = c[l][f + 1],
            L = S.clone(),
            A = S.clone(),
            O = x.clone(),
            M = x.clone(),
            _ = p[l][f].clone(),
            D = p[l + 1][f].clone(),
            P = p[l + 1][f + 1].clone(),
            H = p[l][f + 1].clone()
          this.faces.push(new n.Face3(T, N, k, [L, A, M])), this.uvs.push([_, D, H]), this.faces.push(new n.Face3(N, C, k, [A, O, M])), this.uvs.push([D, P, H])
        }
      }
      for (f = 0; f < s; f++) {
        var T = c[l][f + 1],
          N = c[l][f],
          C = c.length - 1,
          L = new n.Vec3(0, -1, 0),
          A = new n.Vec3(0, -1, 0),
          O = new n.Vec3(0, -1, 0),
          _ = p[l][f + 1].clone(),
          D = p[l][f].clone(),
          P = new n.Vec2(D.u, 1)
        this.faces.push(new n.Face3(T, N, C, [L, A, O])), this.uvs.push([_, D, P])
      }
      var E = 0,
        S, x
      for (f = 0; f < s; f++) {
        S = this.vertices[h[1][f]].clone(), x = this.vertices[h[1][f + 1]].clone(), S.setY(Math.sqrt(S.x * S.x + S.z * S.z) * E).normalize(), x.setY(Math.sqrt(x.x * x.x + x.z * x.z) * E).normalize()
        for (l = 0; l < o; l++) {
          var T = h[l][f],
            N = h[l + 1][f],
            C = h[l + 1][f + 1],
            k = h[l][f + 1],
            L = S.clone(),
            A = S.clone(),
            O = x.clone(),
            M = x.clone(),
            _ = p[l][f].clone(),
            D = p[l + 1][f].clone(),
            P = p[l + 1][f + 1].clone(),
            H = p[l][f + 1].clone()
          this.faces.push(new n.Face3(T, N, k, [L, A, M])), this.uvs.push([_, D, H]), this.faces.push(new n.Face3(N, C, k, [A, O, M])), this.uvs.push([D, P, H])
        }
      }
      for (f = 0; f < s; f++) {
        var T = h[l][f + 1],
          N = h[l][f],
          C = h.length - 1,
          L = new n.Vec3(0, -1, 0),
          A = new n.Vec3(0, -1, 0),
          O = new n.Vec3(0, -1, 0),
          _ = d[l][f + 1].clone(),
          D = d[l][f].clone(),
          P = new n.Vec2(D.u, 1)
        this.faces.push(new n.Face3(T, N, C, [L, A, O])), this.uvs.push([_, D, P])
      }
      return this
    }, n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.Arrow, n.Entity, {}), n.BufferNode = function() {
    this.uuid = n.Math.generateUUID(), this.name = '', this.attributes = {}, this.dynamic = !0, this.offsets = [], this.boundingBox = null, this.boundingSphere = null, this.hasTangents = !1, this.morphTargets = [], this.materialSize = 1, this.createMaterial(), n.Node.call(this)
  }, n.extend(n.BufferNode, n.Node, {
    constructor: n.BufferNode,
    compuateBufferData: function() {
      if (!this.computed) {
        var e = this.attributes.position
        e && e.array && (e.itemSize = 3, e.numItems = e.array.length, this.verticesNeedUpdate = !0)
        var t = this.attributes.uv
        t && t.array && (t.itemSize = 2, t.numItems = t.array.length, this.uvsNeedUpdate = !0)
        var n = this.attributes.index
        n && n.array && (this.offsets = [{
          index: 0,
          start: 0,
          count: n.array.length
        }]), this.computed = !0
      }
    },
    applyMatrix: function(e) {
      var r, i
      this.attributes.position && (r = this.attributes.position.array), this.attributes.normal && (i = this.attributes.normal.array), r !== t && (e.multiplyVec3Array(r), this.verticesNeedUpdate = !0)
      if (i !== t) {
        var s = (new n.Matrix3()).getNormalMatrix(e)
        s.multiplyVec3Array(i), this.normalizeNormals(), this.normalsNeedUpdate = !0
      }
    },
    computeBoundingBox: function() {
      this.boundingBox === null && (this.boundingBox = new n.BoundingBox())
      var e = this.attributes.position.array
      if (e) {
        var r = this.boundingBox,
          i, s, o
        e.length >= 3 && (r.min.x = r.max.x = e[0], r.min.y = r.max.y = e[1], r.min.z = r.max.z = e[2])
        for (var u = 3, a = e.length; u < a; u += 3) i = e[u], s = e[u + 1], o = e[u + 2], i < r.min.x ? r.min.x = i : i > r.max.x && (r.max.x = i), s < r.min.y ? r.min.y = s : s > r.max.y && (r.max.y = s), o < r.min.z ? r.min.z = o : o > r.max.z && (r.max.z = o)
      }
      if (e === t || e.length === 0) {
        this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)
      }
    },
    computeBoundingSphere: (function() {
      var e = new n.BoundingBox(),
        t = new n.Vec3()
      return function() {
        this.boundingSphere === null && (this.boundingSphere = new n.BoundingSphere())
        var r = this.attributes.position.array
        if (r) {
          var i = this.boundingSphere.center,
            s = []
          for (var o = 0, u = r.length; o < u; o += 3) t.set(r[o], r[o + 1], r[o + 2]), s.push(t)
          e.setFromPoints(s), e.center(i)
          var a = 0
          for (var o = 0, u = r.length; o < u; o += 3) t.set(r[o], r[o + 1], r[o + 2]), a = Math.max(a, i.distanceToSquared(t))
          this.boundingSphere.radius = Math.sqrt(a)
        }
      }
    }()),
    computeVertexNormals: function() {
      if (this.attributes.position) {
        var e, r, i, s, o = this.attributes.position.array.length
        if (this.attributes.normal === t) {
          this.attributes.normal = {
            itemSize: 3,
            array: new Float32Array(o)
          }
        } else {
          for (e = 0, r = this.attributes.normal.array.length; e < r; e++) this.attributes.normal.array[e] = 0
        }
        var u = this.attributes.position.array,
          a = this.attributes.normal.array,
          f, l, c, h, p, d, v = new n.Vec3(),
          m = new n.Vec3(),
          g = new n.Vec3(),
          y = new n.Vec3(),
          b = new n.Vec3()
        if (this.attributes.index) {
          var w = this.attributes.index.array,
            E = this.offsets
          for (i = 0, s = E.length; i < s; ++i) {
            var S = E[i].start,
              x = E[i].count,
              T = E[i].index
            for (e = S, r = S + x; e < r; e += 3) f = T + w[e], l = T + w[e + 1], c = T + w[e + 2], h = u[f * 3], p = u[f * 3 + 1], d = u[f * 3 + 2], v.set(h, p, d), h = u[l * 3], p = u[l * 3 + 1], d = u[l * 3 + 2], m.set(h, p, d), h = u[c * 3], p = u[c * 3 + 1], d = u[c * 3 + 2], g.set(h, p, d), y.subVectors(g, m), b.subVectors(v, m), y.cross(b), a[f * 3] += y.x, a[f * 3 + 1] += y.y, a[f * 3 + 2] += y.z, a[l * 3] += y.x, a[l * 3 + 1] += y.y, a[l * 3 + 2] += y.z, a[c * 3] += y.x, a[c * 3 + 1] += y.y, a[c * 3 + 2] += y.z
          }
        } else {
          for (e = 0, r = u.length; e < r; e += 9) h = u[e], p = u[e + 1], d = u[e + 2], v.set(h, p, d), h = u[e + 3], p = u[e + 4], d = u[e + 5], m.set(h, p, d), h = u[e + 6], p = u[e + 7], d = u[e + 8], g.set(h, p, d), y.subVectors(g, m), b.subVectors(v, m), y.cross(b), a[e] = y.x, a[e + 1] = y.y, a[e + 2] = y.z, a[e + 3] = y.x, a[e + 4] = y.y, a[e + 5] = y.z, a[e + 6] = y.x, a[e + 7] = y.y, a[e + 8] = y.z
        }
        this.normalizeNormals(), this.normalsNeedUpdate = !0
      }
    },
    normalizeNormals: function() {
      var e = this.attributes.normal.array,
        t, n, r, i
      for (var s = 0, o = e.length; s < o; s += 3) t = e[s], n = e[s + 1], r = e[s + 2], i = 1 / Math.sqrt(t * t + n * n + r * r), e[s] *= i, e[s + 1] *= i, e[s + 2] *= i
    },
    computeTangents: function() {
      function q(e, t, n) {
        h = r[e * 3], p = r[e * 3 + 1], d = r[e * 3 + 2], v = r[t * 3], m = r[t * 3 + 1], g = r[t * 3 + 2], y = r[n * 3], b = r[n * 3 + 1], w = r[n * 3 + 2], E = s[e * 2], S = s[e * 2 + 1], x = s[t * 2], T = s[t * 2 + 1], N = s[n * 2], C = s[n * 2 + 1], k = v - h, L = y - h, A = m - p, O = b - p, M = g - d, _ = w - d, D = x - E, P = N - E, H = T - S, B = C - S, j = 1 / (D * B - P * H), F.set((B * k - H * L) * j, (B * A - H * O) * j, (B * M - H * _) * j), I.set((D * L - P * k) * j, (D * O - P * A) * j, (D * _ - P * M) * j), f[e].add(F), f[t].add(F), f[n].add(F), l[e].add(I), l[t].add(I), l[n].add(I)
      }

      function st(e) {
        et.x = i[e * 3], et.y = i[e * 3 + 1], et.z = i[e * 3 + 2], tt.copy(et), rt = f[e], Y.copy(rt), Y.sub(et.multiplyScalar(et.dot(rt))).normalize(), Z.crossVectors(tt, rt), it = Z.dot(l[e]), nt = it < 0 ? -1 : 1, a[e * 4] = Y.x, a[e * 4 + 1] = Y.y, a[e * 4 + 2] = Y.z, a[e * 4 + 3] = nt
      }
      if (this.attributes.index === t || this.attributes.position === t || this.attributes.normal === t || this.attributes.uv === t) {
        console.warn('Missing required attributes (index, position, normal or uv) in BufferNode.computeTangents()')
        return
      }
      var e = this.attributes.index.array,
        r = this.attributes.position.array,
        i = this.attributes.normal.array,
        s = this.attributes.uv.array,
        o = r.length / 3
      if (this.attributes.tangent === t) {
        var u = 4 * o
        this.attributes.tangent = {
          itemSize: 4,
          array: new Float32Array(u)
        }
      }
      var a = this.attributes.tangent.array,
        f = [],
        l = []
      for (var c = 0; c < o; c++) f[c] = new n.Vec3(), l[c] = new n.Vec3()
      var h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F = new n.Vec3(),
        I = new n.Vec3(),
        R, U, z, W, X, V, $, J = this.offsets
      for (z = 0, W = J.length; z < W; ++z) {
        var K = J[z].start,
          Q = J[z].count,
          G = J[z].index
        for (R = K, U = K + Q; R < U; R += 3) X = G + e[R], V = G + e[R + 1], $ = G + e[R + 2], q(X, V, $)
      }
      var Y = new n.Vec3(),
        Z = new n.Vec3(),
        et = new n.Vec3(),
        tt = new n.Vec3(),
        nt, rt, it
      for (z = 0, W = J.length; z < W; ++z) {
        var K = J[z].start,
          Q = J[z].count,
          G = J[z].index
        for (R = K, U = K + Q; R < U; R += 3) X = G + e[R], V = G + e[R + 1], $ = G + e[R + 2], st(X), st(V), st($)
      }
      this.hasTangents = !0, this.tangentsNeedUpdate = !0
    },
    clone: function() {
      var e = new n.BufferNode(),
        t = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array]
      for (var r in this.attributes) {
        var i = this.attributes[r],
          s = i.array,
          o = {
            itemSize: i.itemSize,
            numItems: i.numItems,
            array: null
          }
        for (var u = 0, a = t.length; u < a; u++) {
          var f = t[u]
          if (s instanceof f) {
            o.array = new f(s)
            break
          }
        }
        e.attributes[r] = o
      }
      for (var u = 0, a = this.offsets.length; u < a; u++) {
        var l = this.offsets[u]
        e.offsets.push({
          start: l.start,
          index: l.index,
          count: l.count
        })
      }
      return e
    },
    dispose: function() {
      this.dispatchEvent({
        type: 'dispose'
      })
    }
  }), n.Particle = function(e, t, r) {
    var i
    arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0]) && (i = arguments[0], this._id = i.id), n.Node.call(this, this._id), this.material = new n.ParticleMaterial({
      color: Math.random() * 16777215
    }), this.sortParticles = !1, this.frustumCulled = !1, this.vertices = (i ? i.vertices : e) || [], this.colors = (i ? i.colors : t) || [], this.sizes = (i ? i.sizes : r) || [], this.setUpdateFlags(!0)
  }, n.extend(n.Particle, n.Node, {
    clone: function(e) {
      return e === t && (e = new n.Particle(this.material)), e.sortParticles = this.sortParticles, e.frustumCulled = this.frustumCulled, n.Element.prototype.clone.call(this, e), e
    },
    needUpdate: function() {
      return !1
    },
    setUpdateFlags: function(e) {
      this.verticesNeedUpdate = e, this.dirtyColors = e, this.normalsNeedUpdate = e
    },
    setMaterialStyle: function(e, t) {
      e = e.substr(e.indexOf('.') + 1), this._A97(this.material, e, t)
    }
  }), n.Line = function() {
    var e, r, i
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var s = arguments[0]
      e = s.vertices, r = s.colors, i = s.type, this._id = s.id || this._id
    } else e = arguments[0], r = arguments[1], i = arguments[2]
    n.Node.call(this, this._id), this.material = new n.LineMaterial({
      color: 16777215
    }), this.type = i !== t ? i : n.LineStrip, this.vertices = e || [], this.colors = r || []
  }, n.LineStrip = 0, n.LinePieces = 1, n.extend(n.Line, n.Node, {
    className: 'TGL.Line',
    __accessor: ['vertices', 'type'],
    __SizePropeties: ['vertices', 'type'],
    clone: function(e) {
      return e === t && (e = new n.Line(this.material, this.type)), n.Element.prototype.clone.call(this, e, !0), e
    },
    onPropertyChange: function() {},
    setMaterialStyle: function(e, t) {
      e = e.substr(e.indexOf('.') + 1), this._A97(this.material, e, t)
    },
    setMaterialStyles: function(e) {
      n.Element.prototype.setMaterialStyles.call(this, e)
    }
  }), n.Line.createEllipse = function(e, t, r, i, s, o, u) {
    typeof e === 'number' ? (u = o, o = s, s = i, i = r, r = t, t = e, e = new n.Line()) : e == null && (e = new n.Line())
    var a = new n.EllipseCurve(0, 0, t, r, s, o, u),
      f = [],
      l = i || 50
    for (var c = 0; c <= l; c++) {
      var h = a.getPoint(c / l)
      f.push(h)
    }
    return e.setVertices(f), e
  }, n.Line.createHelix = function(e, t, r, i, s, u) {
    typeof e === 'number' ? (u = s, s = i, i = r, r = t, t = e, e = new n.Line()) : e == null && (e = new n.Line())
    var a = [],
      f = u || 50
    s = s || 1
    var l, c, h, p
    for (var d = 0; d <= f; d++) l = (r * d + t * (f - d)) / f, h = s * Math.PI * 2 * d / f, c = i * (0.5 - d / f), p = new o(l * Math.sin(h), c, l * Math.cos(h)), a.push(p)
    return e.setVertices(a), e
  }, n.Line.createRectangle = function(e, t, r, i) {
    typeof e === 'number' ? (i = r, r = t, t = e, e = new n.Line()) : e == null && (e = new n.Line())
    var s = i || 50,
      u = (t + r) * 2 / s,
      a = []
    if (u > Math.min(t, r)) a.push(new o(-t / 2, -r / 2, 0)), a.push(new o(-t / 2, r / 2, 0)), a.push(new o(t / 2, r / 2, 0)), a.push(new o(t / 2, -r / 2, 0)), a.push(new o(-t / 2, -r / 2, 0))
    else {
      var f = -t / 2,
        l = -r / 2,
        c
      for (var h = 0; h <= s; h++) f == -t / 2 && l < r / 2 ? l + u <= r / 2 ? l += u : (a.push(new o(-t / 2, r / 2, 0)), a.push(new o(-t / 2, r / 2, 0)), f += l + u - r / 2, l = r / 2) : l == r / 2 && f <= t / 2 ? f + u <= t / 2 ? f += u : (a.push(new o(t / 2, r / 2, 0)), a.push(new o(t / 2, r / 2, 0)), l -= f + u - t / 2, f = t / 2) : f == t / 2 && l > -r / 2 ? l - u >= -r / 2 ? l -= u : (a.push(new o(t / 2, -r / 2, 0)), a.push(new o(t / 2, -r / 2, 0)), f -= -r / 2 - l + u, l = -r / 2) : l == -r / 2 && f >= -t / 2 && (f - u >= -t / 2 ? f -= u : (l += -t / 2 - f + u, f = -t / 2)), c = new o(f, l, 0), a.push(c)
    }
    return e.setVertices(a), e
  }, n.PathLine = function() {
    var e, t, r
    if (arguments.length === 1 && arguments[0] instanceof Object && !(arguments[0] instanceof n.Path)) {
      var i = arguments[0]
      e = i.path, t = i.segments, r = i.type, this._id = i.id || this._id
    } else e = arguments[0], t = arguments[1], r = arguments[2], this._id = arguments[3]
    n.Line.call(this, {
      vertices: [],
      colors: [],
      type: r,
      id: this._id
    }), this.segments = t || 20, this.setPath(e)
  }, n.extend(n.PathLine, n.Line, {
    constructor: n.PathLine,
    className: 'TGL.PathLine',
    __accessor: ['path', 'segments'],
    __SizePropeties: ['path', 'segments'],
    onPropertyChange: function() {
      this.computeNodeData()
    },
    computeNodeData: function() {
      this.computeData()
    },
    adjustPath: function(e) {
      return e
    },
    computeData: function() {
      var e = this.path
      if (!e) return
      e = this.adjustPath(e)
      var t = e.curves.length,
        r = e.curves,
        i = [],
        s, o = e.getLength(),
        u, a, f = 0,
        l = this.segments,
        c
      for (m = 0; m < t; m++) {
        u = r[m], a = u.getLength()
        if (u instanceof n.LineCurve3) {
          var h = f / o,
            p = (a + f) / o
          i.push(h), i.push(p)
        } else {
          m > 0 ? c = 1 : c = 0
          for (; c <= l; c++) {
            var d = (a * c / l + f) / o
            i.push(d)
          }
        }
        f += a
      }
      var v = []
      for (var m = 0; m < i.length; m++) s = i[m], pos = e.getPointAt(s), v.push(pos)
      return this.vertices = v, []
    }
  }), n.Polyhedron = function() {
    function w(e) {
      var t = e.normalize().clone()
      t.index = s.vertices.push(t) - 1
      var r = x(e) / 2 / Math.PI + 0.5,
        i = T(e) / Math.PI + 0.5
      return t.uv = new n.Vec3(r, 1 - i), t
    }

    function E(e, t, r) {
      var i = new n.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()])
      i.centroid.add(e).add(t).add(r).divideScalar(3), s.faces.push(i)
      var o = x(i.centroid)
      s.uvs.push([N(e.uv, e, o), N(t.uv, t, o), N(r.uv, r, o)])
    }

    function S(e, t) {
      var n = Math.pow(2, t),
        r = Math.pow(4, t),
        i = w(s.vertices[e.a]),
        o = w(s.vertices[e.b]),
        u = w(s.vertices[e.c]),
        a = []
      for (var f = 0; f <= n; f++) {
        a[f] = []
        var l = w(i.clone().lerp(u, f / n)),
          c = w(o.clone().lerp(u, f / n)),
          h = n - f
        for (var p = 0; p <= h; p++) p == 0 && f == n ? a[f][p] = l : a[f][p] = w(l.clone().lerp(c, p / h))
      }
      for (var f = 0; f < n; f++) {
        for (var p = 0; p < 2 * (n - f) - 1; p++) {
          var d = Math.floor(p / 2)
          p % 2 == 0 ? E(a[f][d + 1], a[f + 1][d], a[f][d]) : E(a[f][d + 1], a[f + 1][d + 1], a[f + 1][d])
        }
      }
    }

    function x(e) {
      return Math.atan2(e.z, -e.x)
    }

    function T(e) {
      return Math.atan2(-e.y, Math.sqrt(e.x * e.x + e.z * e.z))
    }

    function N(e, t, r) {
      return r < 0 && e.x === 1 && (e = new n.Vec3(e.x - 1, e.y)), t.x === 0 && t.z === 0 && (e = new n.Vec3(r / 2 / Math.PI + 0.5, e.y)), e.clone()
    }
    var e, t, r, i
    arguments[0] instanceof n.Material ? (this.material = arguments[0], e = arguments[1], t = arguments[2], r = arguments[3], i = arguments[4]) : (e = arguments[0], t = arguments[1], r = arguments[2], i = arguments[3]), this.materialSize = 1, n.Entity.call(this), r = r || 1, i = i || 0
    var s = this
    for (var o = 0, u = e.length; o < u; o++) w(new n.Vec3(e[o][0], e[o][1], e[o][2]))
    var a = [],
      f = this.vertices,
      l = []
    for (var o = 0, u = t.length; o < u; o++) {
      var c = f[t[o][0]],
        h = f[t[o][1]],
        p = f[t[o][2]]
      l[o] = new n.Face3(c.index, h.index, p.index, [c.clone(), h.clone(), p.clone()])
    }
    for (var o = 0, u = l.length; o < u; o++) S(l[o], i)
    for (var o = 0, u = this.uvs.length; o < u; o++) {
      var d = this.uvs[o],
        v = d[0].x,
        m = d[1].x,
        g = d[2].x,
        y = Math.max(v, Math.max(m, g)),
        b = Math.min(v, Math.min(m, g))
      y > 0.9 && b < 0.1 && (v < 0.2 && (d[0].x += 1), m < 0.2 && (d[1].x += 1), g < 0.2 && (d[2].x += 1))
    }
    for (var o = 0, u = this.vertices.length; o < u; o++) this.vertices[o].multiplyScalar(r)
    this.mergeVertices(), this.computeCentroids(), this.computeFaceNormals(), this.boundingSphere = new n.BoundingSphere(new n.Vec3(), r)
  }, n.extend(n.Polyhedron, n.Entity, {}), n.Octahedron = function(e, t, r) {
    var i = [
        [1, 0, 0],
        [-1, 0, 0],
        [0, 1, 0],
        [0, -1, 0],
        [0, 0, 1],
        [0, 0, -1]
      ],
      s = [
        [0, 2, 4],
        [0, 4, 3],
        [0, 3, 5],
        [0, 5, 2],
        [1, 2, 5],
        [1, 5, 3],
        [1, 3, 4],
        [1, 4, 2]
      ]
    n.Polyhedron.call(this, e, i, s, t, r)
  }, n.extend(n.Octahedron, n.Polyhedron, {
    clone: function() {
      return new n.Octahedron(this.material, this.radius, this.detail)
    }
  }), n.Axis = function(e) {
    e = e || 1
    var t = [],
      r = []
    t.push(new n.Vec3(), new n.Vec3(e, 0, 0), new n.Vec3(), new n.Vec3(0, e, 0), new n.Vec3(), new n.Vec3(0, 0, e)), r.push(new n.Color(16711680), new n.Color(16711680), new n.Color(65280), new n.Color(65280), new n.Color(255), new n.Color(255))
    var i = new n.LineMaterial({
      vertexColors: n.VertexColors,
      depthTest: !1,
      depthMask: !1
    })
    n.Line.call(this, t, r, n.LinePieces), this.material = i, this.xAxisText = this.makeAxisText('X', 16711680), this.yAxisText = this.makeAxisText('Y', 65280), this.zAxisText = this.makeAxisText('Z', 255), this.xAxisText.setParent(this), this.yAxisText.setParent(this), this.zAxisText.setParent(this), this.setSize(e), this._sizeFixed = !0
  }, n.extend(n.Axis, n.Line, {
    showAxisText: function(e) {
      this.xAxisText._visible = e, this.yAxisText._visible = e, this.zAxisText._visible = e
    },
    setSize: function(e) {
      this.vertices[1].x = e, this.vertices[3].y = e, this.vertices[5].z = e, this.xAxisText.setPosition(e, 0, 0), this.yAxisText.setPosition(0, e, 0), this.zAxisText.setPosition(0, 0, e)
    },
    fixSize: function(e) {
      n.Element.prototype.fixSize.call(this, e)
      var t = this._scale.x,
        r = this._scale.y,
        i = this._scale.z
      this.xAxisText.setScale(3, 3, 1), this.yAxisText.setScale(3, 3, 1), this.zAxisText.setScale(3, 3, 1)
    },
    makeAxisText: function(e, t) {
      var r = 'Arial',
        i = 36,
        s = n.BillboardAlignment.topLeft,
        o = document.createElement('canvas'),
        u = o.getContext('2d')
      u.font = 'Bold ' + i + 'px ' + r, t instanceof n.Color || (t = new n.Color(t))
      var a = u.measureText(e),
        f = a.width
      o.width = P.nextPowerOfTwo(f), o.height = P.nextPowerOfTwo(u.measureText('e').width * 2 + 4), u.fillStyle = 'rgba(' + t.r * 255 + ', ' + t.g * 255 + ', ' + t.b * 255 + ', 1.0)', u.fillText(e, 0, 10)
      var l = new n.Texture(o),
        c = new n.BillboardMaterial({
          map: l,
          useScreenCoordinates: !1,
          alignment: s,
          depthTest: !1,
          depthMask: !1
        }),
        h = new n.Billboard()
      return h.material = c, h
    }
  }), n.Curve = function() {}, n.Curve.prototype.getPoint = function(e) {
    return console.log('Warning, getPoint() not implemented!'), null
  }, n.Curve.prototype.getPointAt = function(e) {
    var t = this.getUtoTmapping(e)
    return this.getPoint(t)
  }, n.Curve.prototype.getPoints = function(e) {
    e || (e = 5)
    var t, n = []
    for (t = 0; t <= e; t++) n.push(this.getPoint(t / e))
    return n
  }, n.Curve.prototype.getSpacedPoints = function(e) {
    e || (e = 5)
    var t, n = []
    for (t = 0; t <= e; t++) n.push(this.getPointAt(t / e))
    return n
  }, n.Curve.prototype.getLength = function() {
    var e = this.getLengths()
    return e[e.length - 1]
  }, n.Curve.prototype.getLengths = function(e) {
    e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200)
    if (this.cacheArcLengths && this.cacheArcLengths.length == e + 1 && !this.needsUpdate) return this.cacheArcLengths
    this.needsUpdate = !1
    var t = [],
      n, r = this.getPoint(0),
      i, s = 0
    t.push(0)
    for (i = 1; i <= e; i++) n = this.getPoint(i / e), s += n.distanceTo(r), t.push(s), r = n
    return this.cacheArcLengths = t, t
  }, n.Curve.prototype.updateArcLengths = function() {
    this.needsUpdate = !0, this.getLengths()
  }, n.Curve.prototype.getUtoTmapping = function(e, t) {
    var n = this.getLengths(),
      r = 0,
      i = n.length,
      s
    t ? s = t : s = e * n[i - 1]
    var o = 0,
      u = i - 1,
      a
    while (o <= u) {
      r = Math.floor(o + (u - o) / 2), a = n[r] - s
      if (a < 0) {
        o = r + 1
        continue
      }
      if (a > 0) {
        u = r - 1
        continue
      }
      u = r
      break
    }
    r = u
    if (n[r] == s) {
      var f = r / (i - 1)
      return f
    }
    var l = n[r],
      c = n[r + 1],
      h = c - l,
      p = (s - l) / h,
      f = (r + p) / (i - 1)
    return f
  }, n.Curve.prototype.getTangent = function(e) {
    var t = 1e-4,
      n = e - t,
      r = e + t
    n < 0 && (n = 0), r > 1 && (r = 1)
    var i = this.getPoint(n),
      s = this.getPoint(r),
      o = s.clone().sub(i)
    return o.normalize()
  }, n.Curve.prototype.getTangentAt = function(e) {
    var t = this.getUtoTmapping(e)
    return this.getTangent(t)
  }, n.Curve.Utils = {
    tangentQuadraticBezier: function(e, t, n, r) {
      return 2 * (1 - e) * (n - t) + 2 * e * (r - n)
    },
    tangentCubicBezier: function(e, t, n, r, i) {
      return -3 * t * (1 - e) * (1 - e) + 3 * n * (1 - e) * (1 - e) - 6 * e * n * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r + 3 * e * e * i
    },
    tangentSpline: function(e, t, n, r, i) {
      var s = 6 * e * e - 6 * e,
        o = 3 * e * e - 4 * e + 1,
        u = -6 * e * e + 6 * e,
        a = 3 * e * e - 2 * e
      return s + o + u + a
    },
    interpolate: function(e, t, n, r, i) {
      var s = (n - e) * 0.5,
        o = (r - t) * 0.5,
        u = i * i,
        a = i * u
      return (2 * t - 2 * n + s + o) * a + (-3 * t + 3 * n - 2 * s - o) * u + s * i + t
    }
  }, n.Curve.create = function(e, t) {
    return e.prototype = Object.create(n.Curve.prototype), e.prototype.getPoint = t, e
  }, n.LineCurve = function(e, t) {
    this.v1 = e, this.v2 = t
  }, n.LineCurve.prototype = Object.create(n.Curve.prototype), n.LineCurve.prototype.getPoint = function(e) {
    var t = this.v2.clone().sub(this.v1)
    return t.multiplyScalar(e).add(this.v1), t
  }, n.LineCurve.prototype.getPointAt = function(e) {
    return this.getPoint(e)
  }, n.LineCurve.prototype.getTangent = function(e) {
    var t = this.v2.clone().sub(this.v1)
    return t.normalize()
  }, n.LineCurve3 = function(e, t) {
    this.v1 = e, this.v2 = t, this.getPoint = function(e) {
      var t = new n.Vec3()
      return t.subVectors(this.v2, this.v1), t.multiplyScalar(e), t.add(this.v1), t
    }
  }, n.extend(n.LineCurve3, n.Curve, {}), n.CurvePath = function() {
    this.curves = [], this.bends = [], this.autoClose = !1
  }, n.CurvePath.prototype = Object.create(n.Curve.prototype), n.CurvePath.prototype.add = function(e) {
    this.curves.push(e)
  }, n.CurvePath.prototype.checkConnection = function() {}, n.CurvePath.prototype.closePath = function() {
    var e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1)
    e.equals(t) || this.curves.push(new n.LineCurve3(t, e))
  }, n.CurvePath.prototype.getPoint = function(e) {
    var t = e * this.getLength(),
      n = this.getCurveLengths(),
      r = 0,
      i, s
    while (r < n.length) {
      if (n[r] >= t) {
        i = n[r] - t, s = this.curves[r]
        var o = 1 - i / s.getLength()
        return s.getPointAt(o)
      }
      r++
    }
    return null
  }, n.CurvePath.prototype.getLength = function() {
    var e = this.getCurveLengths()
    return e[e.length - 1]
  }, n.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths
    var e = [],
      t = 0,
      n, r = this.curves.length
    for (n = 0; n < r; n++) t += this.curves[n].getLength(), e.push(t)
    return this.cacheLengths = e, e
  }, n.CurvePath.prototype.getBoundingBox = function() {
    var e = this.getPoints(),
      t, r, i, s, o, u
    t = r = Number.NEGATIVE_INFINITY, s = o = Number.POSITIVE_INFINITY
    var a, f, l, c, h = e[0] instanceof n.Vec3
    c = h ? new n.Vec3() : new n.Vec2()
    for (f = 0, l = e.length; f < l; f++) a = e[f], a.x > t ? t = a.x : a.x < s && (s = a.x), a.y > r ? r = a.y : a.y < o && (o = a.y), h && (a.z > i ? i = a.z : a.z < u && (u = a.z)), c.add(a)
    var p = {
      minX: s,
      minY: o,
      maxX: t,
      maxY: r,
      centroid: c.divideScalar(l)
    }
    return h && (p.maxZ = i, p.minZ = u), p
  }, n.CurvePath.prototype.createPointsGeometry = function(e) {
    var t = this.getPoints(e, !0)
    return this.createGeometry(t)
  }, n.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
    var t = this.getSpacedPoints(e, !0)
    return this.createGeometry(t)
  }, n.CurvePath.prototype.createGeometry = function(e) {
    var t = new n.Geometry()
    for (var r = 0; r < e.length; r++) t.vertices.push(new n.Vec3(e[r].x, e[r].y, e[r].z || 0))
    return t
  }, n.CurvePath.prototype.addWrapPath = function(e) {
    this.bends.push(e)
  }, n.CurvePath.prototype.getTransformedPoints = function(e, t) {
    var n = this.getPoints(e),
      r, i
    t || (t = this.bends)
    for (r = 0, i = t.length; r < i; r++) n = this.getWrapPoints(n, t[r])
    return n
  }, n.CurvePath.prototype.getTransformedSpacedPoints = function(e, t) {
    var n = this.getSpacedPoints(e),
      r, i
    t || (t = this.bends)
    for (r = 0, i = t.length; r < i; r++) n = this.getWrapPoints(n, t[r])
    return n
  }, n.CurvePath.prototype.getWrapPoints = function(e, t) {
    var n = this.getBoundingBox(),
      r, i, s, o, u, a
    for (r = 0, i = e.length; r < i; r++) {
      s = e[r], o = s.x, u = s.y, a = o / n.maxX, a = t.getUtoTmapping(a, o)
      var f = t.getPoint(a),
        l = t.getTangent(a)
      l.set(-l.y, l.x).multiplyScalar(u), s.x = f.x + l.x, s.y = f.y + l.y
    }
    return e
  }, n.EllipseCurve = function(e, t, n, r, i, s, o) {
    this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i || 0, this.aEndAngle = s || Math.PI * 2, this.aClockwise = o
  }, n.EllipseCurve.prototype = Object.create(n.Curve.prototype), n.EllipseCurve.prototype.getPoint = function(e) {
    var t, r = this.aEndAngle - this.aStartAngle
    r < 0 && (r += Math.PI * 2), r > Math.PI * 2 && (r -= Math.PI * 2), this.aClockwise === !0 ? t = this.aEndAngle + (1 - e) * (Math.PI * 2 - r) : t = this.aStartAngle + e * r
    var i = this.aX + this.xRadius * Math.cos(t),
      s = this.aY + this.yRadius * Math.sin(t)
    return new n.Vec3(i, s, 0)
  }, n.ArcCurve = function(e, t, r, i, s, o) {
    n.EllipseCurve.call(this, e, t, r, r, i, s, o)
  }, n.ArcCurve.prototype = Object.create(n.EllipseCurve.prototype), n.Path = function(e) {
    n.CurvePath.call(this), this.actions = [], this.points = [], e && this.fromPoints(e)
  }, n.extend(n.Path, n.CurvePath, {
    constructor: n.Path,
    className: 'TGL.Path',
    serializeJsonValue: function() {
      return {
        actions: this.actions,
        'class': 'TGL.Path'
      }
    },
    deserializeJsonValue: function(e) {
      var t, n, r, i
      for (i = 0; i < e.actions.length; i++) n = e.actions[i], t = n.action, r = n.args, this[t].apply(this, r)
    }
  }), n.PathActions = {
    MOVE_TO: 'moveTo',
    LINE_TO: 'lineTo',
    QUADRATIC_CURVE_TO: 'curveTo',
    BEZIER_CURVE_TO: 'bCurveTo',
    CSPLINE_THRU: 'splineThru',
    ARC: 'arc',
    ELLIPSE: 'ellipse'
  }, n.Path.prototype.fromPoints = function(e) {
    this.moveTo(e[0].x, e[0].y, e[0].z)
    for (var t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y, e[t].z)
  }, n.Path.prototype.closePath = function() {
    var e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1)
    e.equals(t) || this.lineTo(e.x, e.y, e.z)
  }, n.Path.prototype.reverse = function() {
    var e = new n.Path(),
      t, r = this.actions.length,
      i, s, o, u, a
    for (t = r - 1; t >= 0; t--) {
      s = this.actions[t].args, o = s.length, t === r - 1 && e.moveTo(s[o - 3], s[o - 2], s[o - 1])
      if (u != null) {
        switch (a) {
          case n.PathActions.MOVE_TO:
            e.moveTo(s[o - 3], s[o - 2], s[o - 1])
            break
          case n.PathActions.LINE_TO:
            e.lineTo(s[o - 3], s[o - 2], s[o - 1])
            break
          case n.PathActions.QUADRATIC_CURVE_TO:
            e.quadraticCurveTo(u[0], u[1], u[2], s[o - 3], s[o - 2], s[o - 1])
            break
          case n.PathActions.BEZIER_CURVE_TO:
            e.bezierCurveTo(u[3], u[4], u[5], u[0], u[1], u[2], s[o - 3], s[o - 2], s[o - 1])
        }
      }
      u = s, a = this.actions[t].action
    }
    return e
  }, n.Path.prototype.moveTo = function(e, t, r) {
    e = e || 0, t = t || 0, r = r || 0
    var i = Array.prototype.slice.call(arguments)
    this.actions.push({
      action: n.PathActions.MOVE_TO,
      args: i
    }), this.points.push(new o(e, t, r))
  }, n.Path.prototype.lineTo = function(e, t, r) {
    e = e || 0, t = t || 0, r = r || 0
    if (this.actions && this.actions.length === 1) {
      var i = this.actions[0].args
      i[0] === e && i[1] === t && i[2] === r && (console.log('TGL.Path:lineTo the same point of moveTo'), e += 0.01)
    }
    var i = Array.prototype.slice.call(arguments),
      s = this.actions[this.actions.length - 1].args,
      u = s[s.length - 3],
      a = s[s.length - 2],
      f = s[s.length - 1],
      l = new n.LineCurve3(new n.Vec3(u, a, f), new n.Vec3(e, t, r))
    this.curves.push(l), this.actions.push({
      action: n.PathActions.LINE_TO,
      args: i
    }), this.points.push(new o(e, t, r))
  }, n.Path.prototype.quadraticCurveTo = function(e, t, r, i, s, u) {
    e = e || 0, t = t || 0, r = r || 0, i = i || 0, s = s || 0, u = u || 0
    if (this.actions && this.actions.length === 1) {
      var a = this.actions[0].args
      a[0] === i && a[1] === s && a[2] === u && (console.log('TGL.Path:quadraticCurveTo the same point of moveTo'), i = 0.01)
    }
    var a = Array.prototype.slice.call(arguments),
      f = this.actions[this.actions.length - 1].args,
      l = f[f.length - 3],
      c = f[f.length - 2],
      h = f[f.length - 1],
      p = new n.QuadraticBezierCurve3(new n.Vec3(l, c, h), new n.Vec3(e, t, r), new n.Vec3(i, s, u))
    this.curves.push(p), this.actions.push({
      action: n.PathActions.QUADRATIC_CURVE_TO,
      args: a
    }), this.points.push(new o(i, s, u))
  }, n.Path.prototype.curveTo = n.Path.prototype.quadraticCurveTo, n.Path.prototype.bezierCurveTo = function(e, t, r, i, s, u, a, f, l) {
    var c = Array.prototype.slice.call(arguments),
      h = this.actions[this.actions.length - 1].args,
      p = h[h.length - 3],
      d = h[h.length - 2],
      v = h[h.length - 1],
      m = new n.CubicBezierCurve3(new n.Vec3(p, d, v), new n.Vec3(e, t, r), new n.Vec3(i, s, u), new n.Vec3(a, f, l))
    this.curves.push(m), this.actions.push({
      action: n.PathActions.BEZIER_CURVE_TO,
      args: c
    }), this.points.push(new o(a, f, l))
  }, n.Path.prototype.isClockwise = function() {
    if (this.points.length < 2) return t
    if (this.points.length < 3) {
      var e = this.points[0],
        r = this.points[1]
      return r.x > e.x
    }
    return n.Math.isClockwise(this.points)
  }, n.Path.prototype.bCurveTo = n.Path.prototype.bezierCurveTo, n.Path.prototype.splineThru = function(e) {
    var t = Array.prototype.slice.call(arguments),
      r = this.actions[this.actions.length - 1].args,
      i = r[r.length - 2],
      s = r[r.length - 1],
      o = [new n.Vec2(i, s)]
    Array.prototype.push.apply(o, e)
    var u = new n.SplineCurve(o)
    this.curves.push(u), this.actions.push({
      action: n.PathActions.CSPLINE_THRU,
      args: t
    })
  }, n.Path.prototype.arc = function(e, t, n, r, i, s) {
    var o = this.actions[this.actions.length - 1].args,
      u = o[o.length - 2],
      a = o[o.length - 1]
    this.absarc(e + u, t + a, n, r, i, s)
  }, n.Path.prototype.absarc = function(e, t, n, r, i, s) {
    this.absellipse(e, t, n, n, r, i, s)
  }, n.Path.prototype.ellipse = function(e, t, n, r, i, s, o) {
    var u = this.actions[this.actions.length - 1].args,
      a = u[u.length - 2],
      f = u[u.length - 1]
    this.absellipse(e + a, t + f, n, r, i, s, o)
  }, n.Path.prototype.absellipse = function(e, t, r, i, s, o, u) {
    var a = Array.prototype.slice.call(arguments),
      f = new n.EllipseCurve(e, t, r, i, s, o, u)
    this.curves.push(f)
    var l = f.getPoint(1)
    a.push(l.x), a.push(l.y), this.actions.push({
      action: n.PathActions.ELLIPSE,
      args: a
    })
  }, n.Path.prototype.toArray = function() {
    var e, t = this.actions.length,
      n = []
    for (e = 0; e < t; e++) {
      var r = this.actions[e]
      r.action === 'moveTo' ? (n.push('m'), n.push(r.args[0]), n.push(r.args[1]), n.push(r.args[2])) : r.action === 'lineTo' ? (n.push('l'), n.push(r.args[0]), n.push(r.args[1]), n.push(r.args[2])) : r.action === 'curveTo' && (n.push('c'), n.push(r.args[0]), n.push(r.args[1]), n.push(r.args[2]), n.push(r.args[3]), n.push(r.args[4]), n.push(r.args[5]))
    }
    return n
  }, n.Path.prototype.getSpacedPoints = function(e, t) {
    e || (e = 40)
    var n = []
    for (var r = 0; r < e; r++) n.push(this.getPoint(r / e))
    return n
  }, n.Path.prototype.getPoints = function(e, t) {
    if (this.useSpacedPoints) return console.log('tata'), this.getSpacedPoints(e, t)
    e = e || 12
    var r = [],
      i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N
    for (i = 0, s = this.actions.length; i < s; i++) {
      o = this.actions[i], u = o.action, a = o.args
      switch (u) {
        case n.PathActions.MOVE_TO:
          r.push(new n.Vec3(a[0], a[1], a[2]))
          break
        case n.PathActions.LINE_TO:
          r.push(new n.Vec3(a[0], a[1], a[2]))
          break
        case n.PathActions.QUADRATIC_CURVE_TO:
          f = a[3], l = a[4], c = a[5], v = a[0], m = a[1], g = a[2], r.length > 0 ? (E = r[r.length - 1], y = E.x, b = E.y, w = E.z) : (E = this.actions[i - 1].args, y = E[E.length - 3], b = E[E.length - 2], w = E[E.length - 1])
          for (S = 1; S <= e; S++) x = S / e, T = n.Shape.Utils.b2(x, y, v, f), N = n.Shape.Utils.b2(x, b, m, l), tz = n.Shape.Utils.b2(x, w, g, c), r.push(new n.Vec3(T, N, tz))
          break
        case n.PathActions.BEZIER_CURVE_TO:
          f = a[6], l = a[7], c = a[8], v = a[0], m = a[1], g = a[2], h = a[3], p = a[4], d = a[5], r.length > 0 ? (E = r[r.length - 1], y = E.x, b = E.y, w = E.z) : (E = this.actions[i - 1].args, y = E[E.length - 3], b = E[E.length - 2], w = E[E.length - 1])
          for (S = 1; S <= e; S++) x = S / e, T = n.Shape.Utils.b3(x, y, v, h, f), N = n.Shape.Utils.b3(x, b, m, p, l), tz = n.Shape.Utils.b3(x, w, g, d, c), r.push(new n.Vec3(T, N, tz))
          break
        case n.PathActions.CSPLINE_THRU:
          E = this.actions[i - 1].args
          var C = new n.Vec2(E[E.length - 2], E[E.length - 1]),
            k = [C],
            L = e * a[0].length
          k = k.concat(a[0])
          var A = new n.SplineCurve(k)
          for (S = 1; S <= L; S++) r.push(A.getPointAt(S / L))
          break
        case n.PathActions.ARC:
          var O = a[0],
            M = a[1],
            _ = a[2],
            D = a[3],
            P = a[4],
            H = !!a[5],
            B = P - D,
            j, F = e * 2
          for (S = 1; S <= F; S++) x = S / F, H || (x = 1 - x), j = D + x * B, T = O + _ * Math.cos(j), N = M + _ * Math.sin(j), r.push(new n.Vec3(T, N))
          break
        case n.PathActions.ELLIPSE:
          var O = a[0],
            M = a[1],
            I = a[2],
            q = a[3],
            D = a[4],
            P = a[5],
            H = !!a[6],
            B = P - D,
            j, F = e * 2
          for (S = 1; S <= F; S++) x = S / F, H || (x = 1 - x), j = D + x * B, T = O + I * Math.cos(j), N = M + q * Math.sin(j), r.push(new n.Vec3(T, N))
      }
    }
    var R = r[r.length - 1],
      U = 1e-10
    return Math.abs(R.x - r[0].x) < U && Math.abs(R.y - r[0].y) < U && r.splice(r.length - 1, 1), t && r.push(r[0]), r
  }, n.Path.prototype.toShapes = function(e) {
    var r, i, s, o, u, a = [],
      f = new n.Path()
    for (r = 0, i = this.actions.length; r < i; r++) s = this.actions[r], u = s.args, o = s.action, o == n.PathActions.MOVE_TO && f.actions.length != 0 && (a.push(f), f = new n.Path()), f[o].apply(f, u)
    f.actions.length != 0 && a.push(f)
    if (a.length == 0) return []
    var l, c, h, p = []
    if (a.length == 1) return c = a[0], h = new n.Shape(), h.actions = c.actions, h.curves = c.curves, p.push(h), p
    var d = !n.Shape.Utils.isClockWise(a[0].getPoints())
    d = e ? !d : d
    if (d) {
      h = new n.Shape()
      for (r = 0, i = a.length; r < i; r++) c = a[r], l = n.Shape.Utils.isClockWise(c.getPoints()), l = e ? !l : l, l ? (h.actions = c.actions, h.curves = c.curves, p.push(h), h = new n.Shape()) : h.holes.push(c)
    } else {
      h = t
      for (r = 0, i = a.length; r < i; r++) c = a[r], l = n.Shape.Utils.isClockWise(c.getPoints()), l = e ? !l : l, l ? (h && p.push(h), h = new n.Shape(), h.actions = c.actions, h.curves = c.curves) : h.holes.push(c)
      p.push(h)
    }
    return p
  }, n.Shape = function() {
    n.Path.apply(this, arguments), this.holes = []
  }, n.Shape.prototype = Object.create(n.Path.prototype), n.Shape.prototype.extrude = function(e) {
    var t = new n.ShapeNode(this, e)
    return t
  }, n.Shape.prototype.makeGeometry = function(e) {
    var t = new n.ShapeGeometry(this, e)
    return t
  }, n.Shape.prototype.getPointsHoles = function(e) {
    var t, n = this.holes.length,
      r = []
    for (t = 0; t < n; t++) r[t] = this.holes[t].getTransformedPoints(e, this.bends)
    return r
  }, n.Shape.prototype.getSpacedPointsHoles = function(e) {
    var t, n = this.holes.length,
      r = []
    for (t = 0; t < n; t++) r[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends)
    return r
  }, n.Shape.prototype.extractAllPoints = function(e) {
    return {
      shape: this.getTransformedPoints(e),
      holes: this.getPointsHoles(e)
    }
  }, n.Shape.prototype.extractPoints = function(e) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(e) : this.extractAllPoints(e)
  }, n.Shape.prototype.extractAllSpacedPoints = function(e) {
    return {
      shape: this.getTransformedSpacedPoints(e),
      holes: this.getSpacedPointsHoles(e)
    }
  }, n.Shape.Utils = {
    removeHoles: function(e, t) {
      var r = e.concat(),
        i = r.concat(),
        s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N = []
      for (p = 0; p < t.length; p++) {
        v = t[p], Array.prototype.push.apply(i, v), m = Number.POSITIVE_INFINITY
        for (d = 0; d < v.length; d++) {
          b = v[d]
          var C = []
          for (y = 0; y < r.length; y++) w = r[y], g = b.distanceToSquared(w), C.push(g), g < m && (m = g, f = d, l = y)
        }
        s = l - 1 >= 0 ? l - 1 : r.length - 1, u = f - 1 >= 0 ? f - 1 : v.length - 1
        var k = [v[f], r[l], r[s]],
          L = n.FontUtils.Triangulate.area(k),
          A = [v[f], v[u], r[l]],
          O = n.FontUtils.Triangulate.area(A),
          M = 1,
          _ = -1,
          D = l,
          P = f
        l += M, f += _, l < 0 && (l += r.length), l %= r.length, f < 0 && (f += v.length), f %= v.length, s = l - 1 >= 0 ? l - 1 : r.length - 1, u = f - 1 >= 0 ? f - 1 : v.length - 1, k = [v[f], r[l], r[s]]
        var H = n.FontUtils.Triangulate.area(k)
        A = [v[f], v[u], r[l]]
        var B = n.FontUtils.Triangulate.area(A)
        L + O > H + B && (l = D, f = P, l < 0 && (l += r.length), l %= r.length, f < 0 && (f += v.length), f %= v.length, s = l - 1 >= 0 ? l - 1 : r.length - 1, u = f - 1 >= 0 ? f - 1 : v.length - 1), E = r.slice(0, l), S = r.slice(l), x = v.slice(f), T = v.slice(0, f)
        var j = [v[f], r[l], r[s]],
          F = [v[f], v[u], r[l]]
        N.push(j), N.push(F), r = E.concat(x).concat(T).concat(S)
      }
      return {
        shape: r,
        isolatedPts: N,
        allpoints: i
      }
    },
    triangulateShape: function(e, r) {
      var i = n.Shape.Utils.removeHoles(e, r),
        s = i.shape,
        o = i.allpoints,
        u = i.isolatedPts,
        a = n.FontUtils.Triangulate(s, !1),
        f, l, c, h, p, d, v = {},
        m = {}
      for (f = 0, l = o.length; f < l; f++) p = o[f].x + ':' + o[f].y, v[p] !== t && console.log('Duplicate point', p), v[p] = f
      for (f = 0, l = a.length; f < l; f++) {
        h = a[f]
        for (c = 0; c < 3; c++) p = h[c].x + ':' + h[c].y, d = v[p], d !== t && (h[c] = d)
      }
      for (f = 0, l = u.length; f < l; f++) {
        h = u[f]
        for (c = 0; c < 3; c++) p = h[c].x + ':' + h[c].y, d = v[p], d !== t && (h[c] = d)
      }
      return a.concat(u)
    },
    isClockWise: function(e) {
      return n.FontUtils.Triangulate.area(e) < 0
    },
    b2p0: function(e, t) {
      var n = 1 - e
      return n * n * t
    },
    b2p1: function(e, t) {
      return 2 * (1 - e) * e * t
    },
    b2p2: function(e, t) {
      return e * e * t
    },
    b2: function(e, t, n, r) {
      return this.b2p0(e, t) + this.b2p1(e, n) + this.b2p2(e, r)
    },
    b3p0: function(e, t) {
      var n = 1 - e
      return n * n * n * t
    },
    b3p1: function(e, t) {
      var n = 1 - e
      return 3 * n * n * e * t
    },
    b3p2: function(e, t) {
      var n = 1 - e
      return 3 * n * e * e * t
    },
    b3p3: function(e, t) {
      return e * e * e * t
    },
    b3: function(e, t, n, r, i) {
      return this.b3p0(e, t) + this.b3p1(e, n) + this.b3p2(e, r) + this.b3p3(e, i)
    }
  }, n.CubicBezierCurve3 = n.Curve.create(function(e, t, n, r) {
    this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r
  }, function(e) {
    var t, r, i
    return t = n.Shape.Utils.b3(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), r = n.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), i = n.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new n.Vec3(t, r, i)
  }), n.QuadraticBezierCurve3 = n.Curve.create(function(e, t, n) {
    this.v0 = e, this.v1 = t, this.v2 = n
  }, function(e) {
    var t, r, i
    return t = n.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x), r = n.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y), i = n.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z), new n.Vec3(t, r, i)
  }), n.PathNode = function(e, r, i, s, o, u, a, f, l, c) {
    this.materialSize = 1, this.closed = !1
    var h
    arguments.length === 1 && arguments[0] instanceof Object && !(arguments[0] instanceof n.Path) ? (h = arguments[0], this.path = h.path, this.segments = h.segments || 20, this.radius = h.radius || 1, this.segmentsR = h.segmentsR || 8, this.shape = h.shape, this.startCap = h.startCap || 'plain', this.endCap = h.endCap || 'plain', this.arc = h.arc != t ? h.arc : Math.PI * 2, this.arcStart = h.arcStart != t ? h.arcStart : 0, this.cutSurface = h.cutSurface || 'none', this.startCapR = h.startCapR, this.endCapR = h.endCapR, this.startCapSize = h.startCapSize, this.endCapSize = h.endCapSize, this.binormal = h.binormal, this.startCapExtend = h.startCapExtend === t ? 1 : h.startCapExtend, this.endCapExtend = h.endCapExtend === t ? 1 : h.endCapExtend, this._id = h.id) : (this.path = e, this.segments = r || 20, this.radius = i || 1, this.segmentsR = s || 8, this.shape = a, this.startCap = o || 'plain', this.endCap = u || 'plain', this.arc = f != t ? f : Math.PI * 2, this.arcStart = l != t ? l : 0, this.cutSurface = c || 'none'), this.shape instanceof Array && (this.segmentsR = this.shape.length), this.startCapSize = this.startCapSize || 1, this.endCapSize = this.endCapSize || 1, this.segmentsCap = 20, this.arc === Math.PI * 2 && (this.cutSurface = 'none'), n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.PathNode, n.Entity, {
    constructor: n.PathNode,
    className: 'TGL.PathNode',
    __accessor: ['path', 'segments', 'radius', 'segmentsR', 'startCap', 'endCap', 'shape', 'startCapSize', 'endCapSize', 'segmentsCap', 'arc', 'arcStart', 'cutSurface', 'startCapR', 'endCapR', 'startCapExtend', 'endCapExtend', 'binormal'],
    __SizePropeties: ['path', 'segments', 'radius', 'segmentsR', 'startCap', 'endCap', 'shape', 'startCapSize', 'endCapSize', 'segmentsCap', 'arc', 'arcStart', 'cutSurface', 'startCapR', 'endCapR', 'startCapExtend', 'endCapExtend', 'binormal'],
    getCrossSectionPoint: function() {},
    needComputeVertexNormal: function() {
      return !0
    },
    adjustPath: function(e, t, r) {
      t = t || this.radius, r = r || 1
      var i = new n.Path(),
        s, u, a, f, l, c, h, p, d, v = new o(),
        m = new o(),
        g, y = new o(),
        b = new o(),
        w, E, S = e.actions.length
      for (E = 0; E < S; E++) a = e.actions[E], l = E + 1 === S ? null : e.actions[E + 1], f = a.args, a.action === 'moveTo' ? i.moveTo(f[0], f[1], f[2]) : a.action === 'lineTo' ? l && l.action === 'lineTo' ? (s = e.actions[E - 1], u = s.args, c = l.args, h = new o(u[0], u[1], u[2]), p = new o(f[0], f[1], f[2]), d = new o(c[0], c[1], c[2]), v.subVectors(p, h), m.subVectors(p, d), g = v.angleTo(m), w = Math.min(v.length() / 2, m.length() / 2), w = Math.min(t * r, w), y.addVectors(p, v.normalize().multiplyScalar(-w)), b.addVectors(p, m.normalize().multiplyScalar(-w)), i.lineTo(y.x, y.y, y.z), i.curveTo(p.x, p.y, p.z, b.x, b.y, b.z)) : i.lineTo(f[0], f[1], f[2]) : a.action === 'quadraticCurveTo' && i.curveTo(f[0], f[1], f[2], f[3], f[4], f[5])
      return i
    },
    _resetPath: function() {
      return this.path
    },
    getPointAt: function(e) {
      return this._realPath ? this._realPath.getPoint(e) : null
    },
    getTangentAt: function(e) {
      if (this._realPath) {
        var t = this._realPath.getPoint(e),
          n = this._realPath.getPoint(e - 0.001)
        return t.sub(n).normalize()
      }
      return null
    },
    computeData: function() {
      function Y(e, t, r, i) {
        return i.vertices.push(new n.Vec3(e, t, r)) - 1
      }
      this.grid = [], this.startGrid = [], this.endGrid = []
      var e =
        this.segmentsCap,
        t = this,
        r, i, o, u, a, f, l, c, h, p, d, v, m, g, y = new n.Vec3(),
        b, w, E, S, x, T, N, C, k, L, A, O, M = {}
      M.faces = [], M.uvs = [], M.vertices = []
      if (this.path == null) return M
      var _ = this._resetPath(),
        D = this.startCap,
        P = this.endCap,
        H = this.cutSurface
      this._realPath = _, this._autoAjust == 1 && (_ = this.adjustPath(_))
      var B = _.curves.length,
        j = _.curves,
        F = [],
        I, q = _.getLength(),
        N, R, U = 0,
        z = this.segments,
        w
      for (b = 0; b < B; b++) {
        N = j[b], R = N.getLength()
        if (N instanceof n.LineCurve3) {
          var W = (R * 0.001 + U) / q,
            X = (R * 0.999 + U) / q
          F.push(W), F.push(X)
        } else {
          var V = R * 0.998
          for (w = 0; w <= z; w++) {
            var $ = (R * 0.001 + V * w / z + U) / q
            F.push($)
          }
        }
        U += R
      }
      var J = this.frenetFrames(_, F, this.closed, this.binormal),
        K = J.tangents,
        Q = J.normals,
        G = J.binormals
      this.tangents = K, this.normals = Q, this.binormals = G
      var Z = 0,
        et, tt = F.length - 1,
        nt = tt + 1,
        rt = 0,
        it = 0
      for (b = 0; b < nt; b++) {
        this.grid[b] = [], p = F[b], g = _.getPointAt(p), r = K[b], i = Q[b], o = G[b]
        if (D !== 'none' && b === 0) {
          if (D === 'round' || D === 'arrow') {
            var st, ot
            rt += this.radius * this.startCapSize
            var ut = g.clone().add(r.clone().multiplyScalar(-this.radius * this.startCapSize))
            for (var at = 0; at <= e; at++) {
              this.startGrid[at] = []
              var ft = at / e * Math.PI / 2
              D === 'round' ? st = ut.clone().add(r.clone().multiplyScalar(this.radius * this.startCapSize * (1 - Math.cos(ft)))) : st = ut.clone().add(r.clone().multiplyScalar(this.radius * this.startCapSize * at / e))
              for (var w = 0; w < this.segmentsR; w++) d = w / this.segmentsR * this.arc + this.arcStart, D === 'round' ? (v = -this.radius * Math.cos(d) * Math.sin(ft), m = this.radius * Math.sin(d) * Math.sin(ft)) : (v = -this.radius * Math.cos(d) * at / e, m = this.radius * Math.sin(d) * at / e, v *= this.startCapR || 1.3, m *= this.startCapR || 1.3), ot = st.clone(), ot.x += v * i.x + m * o.x, ot.y += v * i.y + m * o.y, ot.z += v * i.z + m * o.z, this.startGrid[at][w] = M.vertices.push(ot) - 1
              H === 'center' && (this.startGrid[at][this.segmentsR] = M.vertices.push(st.clone()) - 1)
            }
          } else Z = M.vertices.push(g)
        }
        for (w = 0; w < this.segmentsR; w++) {
          et = w / (this.segmentsR - 1)
          if (this.shape instanceof Array) v = -this.shape[w].x, m = this.shape[w].y
          else if (this.shape instanceof n.Path) {
            var lt = this.shape.getPointAt(et)
            v = -lt.x, m = -lt.y
          } else d = w / this.segmentsR * this.arc + this.arcStart, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
          y.copy(g), y.x += v * i.x + m * o.x, y.y += v * i.y + m * o.y, y.z += v * i.z + m * o.z, this.grid[b][w] = Y(y.x, y.y, y.z, M)
        }
        H === 'center' && (this.grid[b][this.segmentsR] = M.vertices.push(g.clone()) - 1)
        if (P !== 'none' && b === nt - 1) {
          if (P === 'round' || P === 'arrow') {
            it += this.radius * this.endCapSize
            var st, ot, ut = g.clone().add(r.clone().multiplyScalar(this.radius * this.endCapSize))
            for (var at = 0; at <= e; at++) {
              this.endGrid[at] = []
              var ft = (1 - at / e) * Math.PI / 2
              P === 'round' ? st = ut.clone().add(r.clone().multiplyScalar(-this.radius * this.endCapSize * (1 - Math.cos(ft)))) : st = ut.clone().add(r.clone().multiplyScalar(-this.radius * this.endCapSize * (1 - at / e)))
              for (var w = 0; w < this.segmentsR; w++) d = w / this.segmentsR * this.arc + this.arcStart, P === 'round' ? (v = -this.radius * Math.cos(d) * Math.sin(ft), m = this.radius * Math.sin(d) * Math.sin(ft)) : (v = -this.radius * Math.cos(d) * (1 - at / e), m = this.radius * Math.sin(d) * (1 - at / e), v *= this.endCapR || 1.3, m *= this.endCapR || 1.3), ot = st.clone(), ot.x += v * i.x + m * o.x, ot.y += v * i.y + m * o.y, ot.z += v * i.z + m * o.z, this.endGrid[at][w] = M.vertices.push(ot) - 1
              H === 'center' && (this.endGrid[at][this.segmentsR] = M.vertices.push(st) - 1)
            }
          } else M.vertices.push(g)
        }
      }
      var ct = this.segmentsR,
        ht = this.segmentsR
      this.arc !== Math.PI * 2 && (H === 'center' ? (ct++, ht++) : H === 'none' && ct--)
      var pt = this.arc / Math.PI / 2,
        dt = _.getLength(),
        vt = dt + rt + it,
        mt = 0,
        gt = rt / vt,
        yt = gt,
        bt = dt / vt,
        wt = gt + bt,
        Et = it / vt,
        St = 0
      if (D !== 'none') {
        if (D === 'plain') {
          x = 0
          for (w = 0; w < this.segmentsR; w++) {
            S = (w + 1) % this.segmentsR, T = this.grid[0][w], N = this.grid[0][S], M.faces.push(new n.Face3(x, T, N)), d = w / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var k = new s(0.5, 0.5)
            d = w / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var L = new s((v / this.radius + 1) / 2, (m / this.radius + 1) / 2)
            d = S / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var A = new s((v / this.radius + 1) / 2, (m / this.radius + 1) / 2)
            M.uvs.push([k, L, A])
          }
        } else {
          for (b = 0; b <= e; b++) {
            for (w = 0; w < ct; w++) {
              E = b + 1, S = (w + 1) % ht, x = this.startGrid[b][w], E === e + 1 ? (T = this.grid[0][w], N = this.grid[0][S]) : (T = this.startGrid[E][w], N = this.startGrid[E][S]), C = this.startGrid[b][S]
              if (w >= this.segmentsR - 1) {
                var at = this.segmentsR - 1,
                  p = at / this.segmentsR * pt
                ct === this.segmentsR ? (k = new n.Vec2(b / e * gt + mt, p), L = new n.Vec2((b + 1) / e * gt + mt, p), A = new n.Vec2((b + 1) / e * gt + mt, 1), O = new n.Vec2(b / e * gt + mt, 1)) : w > this.segmentsR - 1 ? (k = new n.Vec2(b / e * gt + mt, (1 + p) / 2), L = new n.Vec2((b + 1) / e * gt + mt, (1 + p) / 2), A = new n.Vec2((b + 1) / e * gt + mt, 1), O = new n.Vec2(b / e * gt + mt, 1)) : (k = new n.Vec2(b / e * gt + mt, p), L = new n.Vec2((b + 1) / e * gt + mt, p), A = new n.Vec2((b + 1) / e * gt + mt, (1 + p) / 2), O = new n.Vec2(b / e * gt + mt, (1 + p) / 2))
              } else k = new n.Vec2(b / e * gt + mt, w / this.segmentsR * pt), L = new n.Vec2((b + 1) / e * gt + mt, w / this.segmentsR * pt), A = new n.Vec2((b + 1) / e * gt + mt, (w + 1) / this.segmentsR * pt), O = new n.Vec2(b / e * gt + mt, (w + 1) / this.segmentsR * pt)
              b !== 0 && (M.faces.push(new n.Face3(x, T, C, Z - 1)), M.uvs.push([k, L, O])), M.faces.push(new n.Face3(T, N, C, Z - 1)), M.uvs.push([L.clone(), A, O.clone()])
            }
          }
        }
      }
      for (b = 0; b < tt; b++) {
        for (w = 0; w < ct; w++) {
          E = this.closed ? (b + 1) % tt : b + 1, S = (w + 1) % ht, x = this.grid[b][w], T = this.grid[E][w], N = this.grid[E][S], C = this.grid[b][S]
          if (w >= this.segmentsR - 1) {
            var at = this.segmentsR - 1,
              p = at / this.segmentsR * pt
            ct === this.segmentsR ? (k = new n.Vec2(F[b] * bt + yt, p), L = new n.Vec2(F[b + 1] * bt + yt, p), A = new n.Vec2(F[b + 1] * bt + yt, 1), O = new n.Vec2(F[b] * bt + yt, 1)) : w > this.segmentsR - 1 ? (k = new n.Vec2(F[b] * bt + yt, (p + 1) / 2), L = new n.Vec2(F[b + 1] * bt + yt, (p + 1) / 2), A = new n.Vec2(F[b + 1] * bt + yt, 1), O = new n.Vec2(F[b] * bt + yt, 1)) : (k = new n.Vec2(F[b] * bt + yt, p), L = new n.Vec2(F[b + 1] * bt + yt, p), A = new n.Vec2(F[b + 1] * bt + yt, (p + 1) / 2), O = new n.Vec2(F[b] * bt + yt, (p + 1) / 2))
          } else k = new n.Vec2(F[b] * bt + yt, w / this.segmentsR * pt), L = new n.Vec2(F[b + 1] * bt + yt, w / this.segmentsR * pt), A = new n.Vec2(F[b + 1] * bt + yt, (w + 1) / this.segmentsR * pt), O = new n.Vec2(F[b] * bt + yt, (w + 1) / this.segmentsR * pt)
          M.faces.push(new n.Face3(x, T, C)), M.uvs.push([k, L, O]), M.faces.push(new n.Face3(T, N, C)), M.uvs.push([L.clone(), A, O.clone()])
        }
      }
      if (P !== 'none') {
        x = M.vertices.length - 1
        var B = this.grid.length
        if (P === 'plain') {
          for (w = 0; w < this.segmentsR; w++) {
            S = (w + 1) % this.segmentsR, T = this.grid[B - 1][w], N = this.grid[B - 1][S], M.faces.push(new n.Face3(x, N, T)), d = w / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var k = new s(0.5, 0.5)
            d = w / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var L = new s((v / this.radius + 1) / 2, (m / this.radius + 1) / 2)
            d = S / this.segmentsR * 2 * Math.PI, v = -this.radius * Math.cos(d), m = this.radius * Math.sin(d)
            var A = new s((v / this.radius + 1) / 2, (m / this.radius + 1) / 2)
            M.uvs.push([k, A, L])
          }
        } else {
          for (b = -1; b < e; b++) {
            for (w = 0; w < ct; w++) {
              E = b + 1, S = (w + 1) % ht, b === -1 ? (x = this.grid[B - 1][w], C = this.grid[B - 1][S]) : (x = this.endGrid[b][w], C = this.endGrid[b][S]), T = this.endGrid[E][w], N = this.endGrid[E][S]
              if (w >= this.segmentsR - 1) {
                var at = this.segmentsR - 1,
                  p = at / this.segmentsR * pt
                ct === this.segmentsR ? (k = new n.Vec2(b / e * Et + wt, p), L = new n.Vec2((b + 1) / e * Et + wt, p), A = new n.Vec2((b + 1) / e * Et + wt, 1), O = new n.Vec2(b / e * Et + wt, 1)) : w > this.segmentsR - 1 ? (k = new n.Vec2(b / e * Et + wt, (1 + p) / 2), L = new n.Vec2((b + 1) / e * Et + wt, (1 + p) / 2), A = new n.Vec2((b + 1) / e * Et + wt, 1), O = new n.Vec2(b / e * Et + wt, 1)) : (k = new n.Vec2(b / e * Et + wt, p), L = new n.Vec2((b + 1) / e * Et + wt, p), A = new n.Vec2((b + 1) / e * Et + wt, (1 + p) / 2), O = new n.Vec2(b / e * Et + wt, (1 + p) / 2))
              } else k = new n.Vec2(b / e * Et + wt, w / this.segmentsR * pt), L = new n.Vec2((b + 1) / e * Et + wt, w / this.segmentsR * pt), A = new n.Vec2((b + 1) / e * Et + wt, (w + 1) / this.segmentsR * pt), O = new n.Vec2(b / e * Et + wt, (w + 1) / this.segmentsR * pt)
              M.faces.push(new n.Face3(x, T, C)), M.uvs.push([k, L, O]), M.faces.push(new n.Face3(T, N, C)), M.uvs.push([L.clone(), A, O.clone()])
            }
          }
        }
      }
      return M
    },
    frenetFrames: function(e, r, i, s) {
      function C(e) {
        l[0] = new n.Vec3(), c[0] = new n.Vec3(), e === t && (e = new n.Vec3(0, 0, 1)), l[0].crossVectors(e, f[0]).normalize(), c[0].crossVectors(f[0], l[0]).normalize()
      }

      function k() {
        var t = e.getTangentAt(g)
        l[0] = (new n.Vec3()).subVectors(t, f[0]).normalize(), c[0] = (new n.Vec3()).crossVectors(f[0], l[0]), l[0].crossVectors(c[0], f[0]).normalize(), c[0].crossVectors(f[0], l[0]).normalize()
      }

      function L() {
        l[0] = new n.Vec3(), c[0] = new n.Vec3(), y = Number.MAX_VALUE, b = Math.abs(f[0].x), w = Math.abs(f[0].y), E = Math.abs(f[0].z), w <= y && (y = w, u.set(0, 1, 0)), b <= y && (y = b, u.set(1, 0, 0)), E <= y && u.set(0, 0, 1), s && (u = s.clone()), h.crossVectors(f[0], u).normalize(), l[0].crossVectors(f[0], h), c[0].crossVectors(f[0], l[0])
      }
      var o = new n.Vec3(),
        u = new n.Vec3(),
        a = new n.Vec3(),
        f = [],
        l = [],
        c = [],
        h = new n.Vec3(),
        p = new n.Mat4(),
        d = r.length - 1,
        v = d + 1,
        m, g = 1e-4,
        y, b, w, E, S, x, T, N = []
      N.tangents = f, N.normals = l, N.binormals = c
      for (S = 0; S < v; S++) {
        x = r[S]
        var T = e.getTangentAt(x)
        f[S] = new n.Vec3(T.x, T.y, T.z ? T.z : 0), f[S].normalize()
      }
      L()
      for (S = 1; S < v; S++) l[S] = l[S - 1].clone(), c[S] = c[S - 1].clone(), h.crossVectors(f[S - 1], f[S]), h.length() > g && (h.normalize(), m = Math.acos(n.Math.clamp(f[S - 1].dot(f[S]), -1, 1)), l[S].applyMatrix4(p.makeRotationAxis(h, m))), c[S].crossVectors(f[S], l[S])
      if (i) {
        m = Math.acos(n.Math.clamp(l[0].dot(l[v - 1]), -1, 1)), m /= v - 1, f[0].dot(h.crossVectors(l[0], l[v - 1])) > 0 && (m = -m)
        for (S = 1; S < v; S++) l[S].applyMatrix4(p.makeRotationAxis(f[S], m * S)), c[S].crossVectors(f[S], l[S])
      }
      return N
    }
  }),
  n.PathCube = function(e, t, r, i, s) {
    var o
    arguments.length === 1 && arguments[0] instanceof Object && !(arguments[0] instanceof n.Path)
      ? (o = arguments[0],
        this.path = o.path,
        this.width = o.width || 50,
        this.height = o.height || 100,
        this.curveSegements = o.curveSegements || 32,
        this.repeat = o.repeat || 20,
        this._id = o.id)
      : (this.path = e, this.width = t || 50,
        this.height = r || 100,
        this.curveSegements = i || 32,
        this.repeat = s || 20),
    this.materialSize = 6,
    n.Entity.call(this),
    this.computeCentroids(),
    this.computeFaceNormals()
  },
  n.PathCube.SideIndexMapping = {
    bottom: 0,
    outside: 1,
    inside: 2,
    top: 3,
    aside: 4,
    zside: 5
  }, n.extend(n.PathCube, n.Entity, {
    __accessor: ['path', 'width', 'height', 'curveSegements', 'repeat'],
    __SizePropeties: ['path', 'width', 'height', 'curveSegements', 'repeat'],
    constructor: n.PathCube,
    className: 'TGL.PathCube',
    getSideIndexMapping: function() {
      return n.PathCube.SideIndexMapping
    },
    computeData: function() {
      var e = {}
      e.vertices = [], e.faces = [], e.uvs = [], e.uv2s = []
      if (this.path == null) return e
      var t = this.computePoints(this.path, this.width, this.curveSegements),
        n = t[0],
        r = t[1],
        i = n.length,
        s, o = t[2],
        u = this.height,
        a = this.repeat,
        f = [],
        l = [],
        c = [],
        h = [],
        p = this.path.isClockwise()
      this.innerPoints = this.clonePoints(n), this.outerPoints = this.clonePoints(r)
      for (s = 0; s < i; s++) this.exchangeYZ(n[s]), this.exchangeYZ(r[s]), f[s] = e.vertices.push(n[s]) - 1, l[s] = e.vertices.push(r[s]) - 1, c[s] = e.vertices.push(n[s].clone().setY(u)) - 1, h[s] = e.vertices.push(r[s].clone().setY(u)) - 1
      var d = o ? i : i - 1
      for (s = 0; s < d; s++) this.generateTop(e, s, i, c, h, !0, a), this.generateBottom(e, s, i, f, l, a), this.generateSideWall(e, s, i, h, l, !0, a, p), this.generateSideWall(e, s, i, c, f, !1, a, p)
      return o || (this.generateEnd(e, c, f, l, h, a, !0), this.generateEnd(e, c, f, l, h, a, !1)), this.clockwise = p, e
    },
    clonePoints: function(e) {
      var t = []
      for (var n = 0; n < e.length; n++) t.push(e[n].clone())
      return t
    },
    getInsidePoints: function() {
      var e = []
      return this.clockwise ? e = this.innerPoints : e = this.outerPoints, e
    },
    generateEnd: function(e, t, r, i, o, u, a) {
      var f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, E, T, N, C, k, L = a ? 0 : r.length - 1
      f = t[L], l = r[L], c = i[L], h = o[L], T = e.vertices[f], N = e.vertices[l], C = e.vertices[c], k = e.vertices[h], p = T.x, d = T.y, v = T.z, m = N.x, g = N.y, y = N.z, b = C.x, w = C.y, E = C.z, S = k.x, x = k.y, dz = k.z
      var A = Math.abs(v - E),
        O = Math.abs(p - b)
      a ? (e.faces.push(new n.Face3(f, l, h, null, null, 4)), A < O ? e.uvs.push([new n.Vec2(p / u, d / u), new n.Vec2(m / u, g / u), new n.Vec2(S / u, x / u)]) : e.uvs.push([new n.Vec2(v / u, d / u), new n.Vec2(y / u, g / u), new n.Vec2(dz / u, x / u)]), e.uv2s.push([new s(0, 1), new s(0, 0), new s(1, 1)]), e.faces.push(new n.Face3(l, c, h, null, null, 4)), A < O ? e.uvs.push([new n.Vec2(m / u, g / u), new n.Vec2(b / u, w / u), new n.Vec2(S / u, x / u)]) : e.uvs.push([new n.Vec2(y / u, g / u), new n.Vec2(E / u, w / u), new n.Vec2(dz / u, x / u)]), e.uv2s.push([new s(0, 0), new s(1, 0), new s(1, 1)])) : (e.faces.push(new n.Face3(l, f, h, null, null, 5)), A < O ? e.uvs.push([new n.Vec2(m / u, g / u), new n.Vec2(p / u, d / u), new n.Vec2(S / u, x / u)]) : e.uvs.push([new n.Vec2(y / u, g / u), new n.Vec2(v / u, d / u), new n.Vec2(dz / u, x / u)]), e.uv2s.push([new s(0, 0), new s(0, 1), new s(1, 1)]), e.faces.push(new n.Face3(c, l, h, null, null, 5)), A < O ? e.uvs.push([new n.Vec2(b / u, w / u), new n.Vec2(m / u, g / u), new n.Vec2(S / u, x / u)]) : e.uvs.push([new n.Vec2(E / u, w / u), new n.Vec2(y / u, g / u), new n.Vec2(dz / u, x / u)]), e.uv2s.push([new s(1, 0), new s(0, 0), new s(1, 1)]))
    },
    generateSideWall: function(e, t, r, i, o, u, a, f) {
      var l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, S, N, C, k, L, A
      N = (t + 1) % r, l = i[t], c = o[t], h = o[N], p = i[N], C = e.vertices[l], k = e.vertices[c], L = e.vertices[h], A = e.vertices[p], d = C.x, v = C.y, m = C.z, g = k.x, y = k.y, b = k.z, w = L.x, E = L.y, S = L.z, x = A.x, T = A.y, dz = A.z
      var O = Math.abs(m - S),
        M = Math.abs(d - w),
        _
      u ? (_ = f ? 1 : 2, e.faces.push(new n.Face3(l, c, p, null, null, _)), O < M ? e.uvs.push([new n.Vec2(d / a, v / a), new n.Vec2(g / a, y / a), new n.Vec2(x / a, T / a)]) : e.uvs.push([new n.Vec2(m / a, v / a), new n.Vec2(b / a, y / a), new n.Vec2(dz / a, T / a)]), e.uv2s.push([new s(0, 1), new s(0, 0), new s(1, 1)]), e.faces.push(new n.Face3(c, h, p, null, null, _)), O < M ? e.uvs.push([new n.Vec2(g / a, y / a), new n.Vec2(w / a, E / a), new n.Vec2(x / a, T / a)]) : e.uvs.push([new n.Vec2(b / a, y / a), new n.Vec2(S / a, E / a), new n.Vec2(dz / a, T / a)]), e.uv2s.push([new s(0, 0), new s(1, 0), new s(1, 1)])) : (_ = f ? 2 : 1, e.faces.push(new n.Face3(c, l, p, null, null, _)), O < M ? e.uvs.push([new n.Vec2(g / a, y / a), new n.Vec2(d / a, v / a), new n.Vec2(x / a, T / a)]) : e.uvs.push([new n.Vec2(b / a, y / a), new n.Vec2(m / a, v / a), new n.Vec2(dz / a, T / a)]), e.uv2s.push([new s(0, 0), new s(0, 1), new s(1, 1)]), e.faces.push(new n.Face3(h, c, p, null, null, _)), O < M ? e.uvs.push([new n.Vec2(w / a, E / a), new n.Vec2(g / a, y / a), new n.Vec2(x / a, T / a)]) : e.uvs.push([new n.Vec2(S / a, E / a), new n.Vec2(b / a, y / a), new n.Vec2(dz / a, T / a)]), e.uv2s.push([new s(1, 0), new s(0, 0), new s(1, 1)]))
    },
    generateBottom: function(e, t, n, r, i, s) {
      this.generateTop(e, t, n, r, i, !1, s)
    },
    generateTop: function(e, t, r, i, o, u, a) {
      var f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, E, T, N, C, k, L
      T = (t + 1) % r, f = i[t], l = o[t], c = o[T], h = i[T], N = e.vertices[f], C = e.vertices[l], k = e.vertices[c], L = e.vertices[h], p = N.x, d = N.y, v = N.z, m = C.x, g = C.y, y = C.z, b = k.x, w = k.y, E = k.z, S = L.x, x = L.y, dz = L.z, u ? (e.faces.push(new n.Face3(f, l, h, null, null, 3)), e.uvs.push([new n.Vec2(p / a, v / a), new n.Vec2(m / a, y / a), new n.Vec2(S / a, dz / a)]), e.uv2s.push([new s(0, 1), new s(0, 0), new s(1, 1)]), e.faces.push(new n.Face3(l, c, h, null, null, 3)), e.uvs.push([new n.Vec2(m / a, y / a), new n.Vec2(b / a, E / a), new n.Vec2(S / a, dz / a)]), e.uv2s.push([new s(0, 0), new s(1, 0), new s(1, 1)])) : (e.faces.push(new n.Face3(l, f, h, null, null, 0)), e.uvs.push([new n.Vec2(m / a, y / a), new n.Vec2(p / a, v / a), new n.Vec2(S / a, dz / a)]), e.uv2s.push([new s(0, 0), new s(0, 1), new s(1, 1)]), e.faces.push(new n.Face3(c, l, h, null, null, 0)), e.uvs.push([new n.Vec2(b / a, E / a), new n.Vec2(m / a, y / a), new n.Vec2(S / a, dz / a)]), e.uv2s.push([new s(1, 0), new s(0, 0), new s(1, 1)]))
    },
    exchangeYZ: function(e) {
      var t = e.y
      e.y = e.z, e.z = -t
    },
    addPoints: function(e, t, r, i, s) {
      t.multiplyScalar(0.5), r.push((new n.Vec3()).subVectors(e, t)), i.push((new n.Vec3()).addVectors(e, t))
    },
    computeCurvePoint: function(e, t, r, i, s, a, f, l, c) {
      var h = i ? 0 : 1,
        p, d, v = new n.Vec3(),
        m, g, y, b = l
      if (e) {
        m = e.getTangentAt(1), g = t.getTangentAt(0), concave = n.Math.isConcave(m, g, !1), g.multiplyScalar(-1), angle = m.angleTo(g), y = Math.sin(angle / 2), d = t.getPoint(0), y = y == 0 ? 0.1 : y
        var w = concave ? r / y : -r / y
        y == 1 ? v.crossVectors(g, new o(0, 0, 1)).normalize().multiplyScalar(w) : v.addVectors(m, g).normalize().multiplyScalar(w), this.addPoints(d, v, a, f, c)
      } else g = t.getTangentAt(h), d = t.getPoint(h), v.crossVectors(g, new n.Vec3(0, 0, 1)).normalize().multiplyScalar(r), this.addPoints(d, v, a, f, c)
      if (!(t instanceof n.LineCurve3) && s) {
        var E = b + 1
        for (j = 0; j < E - 2; j++) u = j / (E - 1), g = t.getTangentAt(u), d = t.getPointAt(u), v.crossVectors(g, new n.Vec3(0, 0, 1)).normalize().multiplyScalar(r), j * t.getLength() / b > r / Math.abs(y) && this.addPoints(d, v, a, f, c)
      }
    },
    computePoints: function(e, t, r) {
      var i, s, o, u, a = new n.Vec3(),
        f, l, c = e.isClockwise(),
        h, p, d = e.curves[0].getPoint(0),
        v = e.curves[e.curves.length - 1].getPoint(1)
      p = d.equals(v), l = e.curves.length
      var m = [],
        g = [],
        y = new n.Path(),
        b = 0,
        w, E = e.getLength()
      for (i = 0; i < l; i++) {
        var S = i - 1
        p && S === -1 && (S = l - 1)
        var x = e.curves[S],
          T = e.curves[i]
        this.computeCurvePoint(x, T, t, !0, !0, m, g, r, c), i === l - 1 && !p && this.computeCurvePoint(null, T, t, !1, !1, m, g, r, c)
      }
      return [m, g, p]
    }
  }), n.ShapeNode = function(e, t, r, i, s) {
    if (e == null) {
      e = [], this.materialSize = 3, n.Entity.call(this)
      return
    }
    var o
    if (!(arguments.length === 1 && arguments[0] instanceof Object) || arguments[0] instanceof n.Shape || arguments[0] instanceof n.Path && !Array.isArray(arguments[0])) {
      this.options = {
        curveSegments: t,
        amount: r,
        vertical: i,
        zMinusHalfAmount: this.zMinusHalfAmount,
        repeat: s || 20
      }
    } else {
      o = arguments[0], e = o.path
      if (e == null) {
        e = [], this.materialSize = 3, n.Entity.call(this)
        return
      }
      t = o.curveSegments, r = o.amount, i = o.vertical, s = o.repeat, this.options = {
        curveSegments: o.curveSegments,
        amount: o.amount,
        vertical: o.vertical,
        zMinusHalfAmount: this.zMinusHalfAmount,
        repeat: o.repeat || 20
      }, this._id = o.id
    }
    var u = []
    e instanceof n.Path ? (u = e.toShapes(), this.path = e) : u = e, this.curveSegments = t, this.amount = r, this.vertical = i, this.repeat = s || 20, u = u instanceof Array ? u : [u], this.shapes = u, this.shapebb = u[u.length - 1].getBoundingBox(), this.materialSize = 3, n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.ShapeNode.SideIndexMapping = {
    bottom: 0,
    side: 1,
    top: 2
  }, n.extend(n.ShapeNode, n.Entity, {
    constructor: n.ShapeNode,
    className: 'TGL.ShapeNode',
    __accessor: ['path', 'curveSegments', 'amount', 'vertical', 'repeat'],
    __bool: ['vertical'],
    __SizePropeties: ['path', 'curveSegments', 'amount', 'vertical', 'repeat'],
    computeData: function() {
      return this.options = {
        curveSegments: this.curveSegments,
        amount: this.amount,
        vertical: this.vertical,
        zMinusHalfAmount: this.zMinusHalfAmount,
        repeat: this.repeat || 20
      }, this.addShapes(this.path, this.options)
    },
    getSideIndexMapping: function() {
      return n.ShapeNode.SideIndexMapping
    },
    addShapes: function(e, t) {
      var r = []
      e instanceof n.Path ? r = e.toShapes() : r = e
      var i = {}
      i.vertices = [], i.uvs = [], i.faces = []
      if (!r) return i
      var s = r.length
      for (var o = 0; o < s; o++) {
        var u = r[o]
        this.addShape(u, t, i)
      }
      var a = new n.BoundingBox()
      a.setFromPoints(i.vertices)
      var f = (a.max.y - a.min.y) / 2
      if (t.zMinusHalfAmount) {
        for (var l = 0; l < i.vertices.length; l++) i.vertices[l].y -= f
      }
      if (t.vertical) {
        for (var l = 0; l < i.vertices.length; l++) {
          var c = i.vertices[l].y
          i.vertices[l].y = i.vertices[l].z, i.vertices[l].z = -c
        }
      }
      return i
    }
  }), n.ShapeNode.prototype.addShape = function(e, r, i) {
    function H(e, t, n) {
      return t || console.log('die'), t.clone().multiplyScalar(n).add(e)
    }

    function $(e, t, n) {
      return K(e, t, n)
    }

    function J(e, t, r) {
      var i = Math.atan2(t.y - e.y, t.x - e.x),
        s = Math.atan2(r.y - e.y, r.x - e.x)
      i > s && (s += Math.PI * 2)
      var o = (i + s) / 2,
        u = -Math.cos(o),
        a = -Math.sin(o),
        f = new n.Vec2(u, a)
      return f
    }

    function K(e, t, r) {
      var i = n.ShapeNode.__v1,
        s = n.ShapeNode.__v2,
        o = n.ShapeNode.__v3,
        u = n.ShapeNode.__v4,
        a = n.ShapeNode.__v5,
        f = n.ShapeNode.__v6,
        l, c, h, p, d, v
      return i.set(e.x - t.x, e.y - t.y), s.set(e.x - r.x, e.y - r.y), l = i.normalize(), c = s.normalize(), o.set(-l.y, l.x), u.set(c.y, -c.x), a.copy(e).add(o), f.copy(e).add(u), a.equals(f) ? u.clone() : (a.copy(t).add(o), f.copy(r).add(u), h = l.dot(u), p = f.sub(a).dot(u), h === 0 && (console.log('Either infinite or no solutions!'), p === 0 ? console.log('Its finite solutions.') : console.log('Too bad, no solutions.')), d = p / h, d < 0 ? J(e, t, r) : (v = l.multiplyScalar(d).add(a), v.sub(e).clone()))
    }

    function at() {
      if (l) {
        var e = 0,
          t = R * e
        for (G = 0; G < z; G++) U = D[G], ht(U[2] + t, U[1] + t, U[0] + t, !0)
        e = h + f * 2, t = R * e
        for (G = 0; G < z; G++) U = D[G], ht(U[0] + t, U[1] + t, U[2] + t, !1)
      } else {
        for (G = 0; G < z; G++) U = D[G], ht(U[2], U[1], U[0], !0)
        for (G = 0; G < z; G++) U = D[G], ht(U[0] + R * h, U[1] + R * h, U[2] + R * h, !1)
      }
    }

    function ft() {
      var e = 0
      lt(P, e), e += P.length
      for (N = 0, C = M.length; N < C; N++) T = M[N], lt(T, e), e += T.length
    }

    function lt(e, t) {
      var n, r
      G = e.length
      while (--G >= 0) {
        n = G, r = G - 1, r < 0 && (r = e.length - 1)
        var i = 0,
          s = h + f * 2
        for (i = 0; i < s; i++) {
          var o = R * i,
            u = R * (i + 1),
            a = t + n + o,
            l = t + r + o,
            c = t + r + u,
            p = t + n + u
          pt(a, l, c, p, e, i, s, n, r)
        }
      }
    }

    function ct(e, t, r) {
      i.vertices.push(new n.Vec3(e, t, r - (o ? s / 2 : 0)))
    }

    function ht(t, s, o, u) {
      t += L, s += L, o += L
      var a = u ? 0 : 2
      if (n.Math.isClockwise([i.vertices[t], i.vertices[s], i.vertices[o]]), 'x', 'z') {
        i.faces.push(new n.Face3(t, s, o, null, null, a))
        var f = u ? y.generateBottomUV(i, e, r, t, s, o) : y.generateTopUV(i, e, r, t, s, o)
        i.uvs.push(f)
      } else {
        i.faces.push(new n.Face3(t, o, s, null, null, a))
        var f = u ? y.generateBottomUV(i, e, r, t, o, s) : y.generateTopUV(i, e, r, t, o, s)
        i.uvs.push(f)
      }
    }

    function pt(t, s, o, u, a, f, l, c, h) {
      t += L, s += L, o += L, u += L
      if (n.Math.isClockwise([i.vertices[t], i.vertices[s], i.vertices[u]]), 'x', 'z') {
        i.faces.push(new n.Face3(t, s, u, null, null, g)), i.faces.push(new n.Face3(s, o, u, null, null, g))
        var p = y.generateSideWallUV(i, e, a, r, t, s, o, u, f, l, c, h)
        i.uvs.push([p[0], p[1], p[3]]), i.uvs.push([p[1], p[2], p[3]])
      } else {
        i.faces.push(new n.Face3(t, u, s, null, null, g)), i.faces.push(new n.Face3(s, u, o, null, null, g))
        var p = y.generateSideWallUV(i, e, a, r, t, s, o, u, f, l, c, h)
        i.uvs.push([p[0], p[3], p[1]]), i.uvs.push([p[1], p[3], p[2]])
      }
    }
    var s = r.amount !== t ? r.amount : 100,
      o = r.zMinusHalfAmount !== t ? r.zMinusHalfAmount : !1,
      u = r.bevelThickness !== t ? r.bevelThickness : 6,
      a = r.bevelSize !== t ? r.bevelSize : u - 2,
      f = r.bevelSegments !== t ? r.bevelSegments : 3,
      l = r.bevelEnabled !== t ? r.bevelEnabled : !1,
      c = r.curveSegments !== t ? r.curveSegments : 12,
      h = r.steps !== t ? r.steps : 1,
      p = r.extrudePath,
      d, v = !1,
      m = r.material || 0,
      g = r.extrudeMaterial || 1,
      y = r.UVGenerator !== t ? r.UVGenerator : n.ShapeNode.WorldUVGenerator
    y.repeat = r.repeat
    var b = this.shapebb,
      w, E, S, x
    p && (d = p.getSpacedPoints(h), v = !0, l = !1, w = r.frames !== t ? r.frames : n.PathNode.prototype.frenetFrames(p, h, !1), E = new n.Vec3(), S = new n.Vec3(), x = new n.Vec3()), l || (f = 0, u = 0, a = 0)
    var T, N, C, k = [],
      L = i.vertices.length,
      A = e.extractPoints(c),
      O = A.shape,
      M = A.holes,
      _ = !n.Shape.Utils.isClockWise(O)
    if (_) {
      O = O.reverse()
      for (N = 0, C = M.length; N < C; N++) T = M[N], n.Shape.Utils.isClockWise(T) && (M[N] = T.reverse())
      _ = !1
    }
    var D = n.Shape.Utils.triangulateShape(O, M),
      P = O
    for (N = 0, C = M.length; N < C; N++) T = M[N], O = O.concat(T)
    var B, j, F, I, q, R = O.length,
      U, z = D.length,
      W, X = P.length,
      V = 180 / Math.PI,
      Q = []
    for (var G = 0, Y = P.length, Z = Y - 1, et = G + 1; G < Y; G++, Z++, et++) {
      Z === Y && (Z = 0), et === Y && (et = 0)
      var tt = P[G],
        nt = P[Z],
        rt = P[et]
      Q[G] = $(P[G], P[Z], P[et])
    }
    var it = [],
      st, ot = Q.concat()
    for (N = 0, C = M.length; N < C; N++) {
      T = M[N], st = []
      for (G = 0, Y = T.length, Z = Y - 1, et = G + 1; G < Y; G++, Z++, et++) Z === Y && (Z = 0), et === Y && (et = 0), st[G] = $(T[G], T[Z], T[et])
      it.push(st), ot = ot.concat(st)
    }
    for (B = 0; B < f; B++) {
      F = B / f, I = u * (1 - F), j = a * Math.sin(F * Math.PI / 2)
      for (G = 0, Y = P.length; G < Y; G++) q = H(P[G], Q[G], j), ct(q.x, q.y, -I)
      for (N = 0, C = M.length; N < C; N++) {
        T = M[N], st = it[N]
        for (G = 0, Y = T.length; G < Y; G++) q = H(T[G], st[G], j), ct(q.x, q.y, -I)
      }
    }
    j = a
    for (G = 0; G < R; G++) q = l ? H(O[G], ot[G], j) : O[G], v ? (S.copy(w.normals[0]).multiplyScalar(q.x), E.copy(w.binormals[0]).multiplyScalar(q.y), x.copy(d[0]).add(S).add(E), ct(x.x, x.y, x.z)) : ct(q.x, q.y, 0)
    var ut
    for (ut = 1; ut <= h; ut++) {
      for (G = 0; G < R; G++) q = l ? H(O[G], ot[G], j) : O[G], v ? (S.copy(w.normals[ut]).multiplyScalar(q.x), E.copy(w.binormals[ut]).multiplyScalar(q.y), x.copy(d[ut]).add(S).add(E), ct(x.x, x.y, x.z)) : ct(q.x, q.y, s / h * ut)
    }
    for (B = f - 1; B >= 0; B--) {
      F = B / f, I = u * (1 - F), j = a * Math.sin(F * Math.PI / 2)
      for (G = 0, Y = P.length; G < Y; G++) q = H(P[G], Q[G], j), ct(q.x, q.y, s + I)
      for (N = 0, C = M.length; N < C; N++) {
        T = M[N], st = it[N]
        for (G = 0, Y = T.length; G < Y; G++) q = H(T[G], st[G], j), v ? ct(q.x, q.y + d[h - 1].y, d[h - 1].x + I) : ct(q.x, q.y, s + I)
      }
    }
    at(), ft()
  }, n.ShapeNode.WorldUVGenerator = {
    generateTopUV: function(e, t, r, i, s, o) {
      var u = e.vertices[i].x,
        a = e.vertices[i].y,
        f = e.vertices[s].x,
        l = e.vertices[s].y,
        c = e.vertices[o].x,
        h = e.vertices[o].y
      return [new n.Vec2(u / this.repeat, a / this.repeat), new n.Vec2(f / this.repeat, l / this.repeat), new n.Vec2(c / this.repeat, h / this.repeat)]
    },
    generateBottomUV: function(e, t, n, r, i, s) {
      return this.generateTopUV(e, t, n, r, i, s)
    },
    uv: function(e, t, n) {
      return new s(Math.sqrt(e * e + t * t) / this.repeat, (1 - n) / this.repeat)
    },
    generateSideWallUV: function(e, t, r, i, s, o, u, a, f, l, c, h) {
      var p = e.vertices[s].x,
        d = e.vertices[s].y,
        v = e.vertices[s].z,
        m = e.vertices[o].x,
        g = e.vertices[o].y,
        y = e.vertices[o].z,
        b = e.vertices[u].x,
        w = e.vertices[u].y,
        E = e.vertices[u].z,
        S = e.vertices[a].x,
        x = e.vertices[a].y,
        T = e.vertices[a].z,
        N = Math.abs(d - g),
        C = Math.abs(p - m)
      return N < C ? [new n.Vec2(p / this.repeat, (1 - v) / this.repeat), new n.Vec2(m / this.repeat, (1 - y) / this.repeat), new n.Vec2(b / this.repeat, (1 - E) / this.repeat), new n.Vec2(S / this.repeat, (1 - T) / this.repeat)] : [new n.Vec2(d / this.repeat, (1 - v) / this.repeat), new n.Vec2(g / this.repeat, (1 - y) / this.repeat), new n.Vec2(w / this.repeat, (1 - E) / this.repeat), new n.Vec2(x / this.repeat, (1 - T) / this.repeat)]
    }
  }, n.ShapeNode.__v1 = new n.Vec2(), n.ShapeNode.__v2 = new n.Vec2(), n.ShapeNode.__v3 = new n.Vec2(), n.ShapeNode.__v4 = new n.Vec2(), n.ShapeNode.__v5 = new n.Vec2(), n.ShapeNode.__v6 = new n.Vec2(), n.TextNode = function(e, r, i, s, o, u, a) {
    var f
    arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0]) ? (f = arguments[0], e = f.text, this.font = f.font || 'helvetiker', this.size = f.size || 150, this.weight = f.weight || 'normal', this.fontStyle = f.fontStyle || 'normal', this.height = f.height || 50, this._id = f.id, this.curveSegments = f.curveSegments) : (this.font = s || 'helvetiker', this.size = r || 150, this.weight = o || 'normal', this.fontStyle = u || 'normal', this.height = i || 50, this.curveSegments = a)
    var l = {
      size: this.size,
      height: this.height,
      font: this.font,
      weight: this.weight,
      style: this.fontStyle,
      curveSegments: this.curveSegments || 30,
      bevelEnabled: !1,
      zMinusHalfAmount: !0
    }
    this.text = e
    var c = n.FontUtils.generateShapes(e, l)
    l.amount = l.height !== t ? l.height : 50, l.bevelThickness === t && (l.bevelThickness = 10), l.bevelSize === t && (l.bevelSize = 8), l.bevelEnabled === t && (l.bevelEnabled = !1), n.ShapeNode.call(this, c, l.curveSegments, this.height, !1, 50, !0)
  }, n.extend(n.TextNode, n.ShapeNode, {
    constructor: n.TextNode,
    className: 'TGL.TextNode',
    __accessor: ['text', 'size', 'height', 'font', 'weight', 'fontStyle'],
    __SizePropeties: ['text', 'size', 'height', 'font', 'weight', 'fontStyle'],
    computeData: function() {
      var e = {
          size: this.size,
          height: this.height,
          font: this.font,
          weight: this.weight,
          style: this.fontStyle,
          curveSegments: this.curveSegments || 30,
          bevelEnabled: !1,
          zMinusHalfAmount: !0
        },
        t = {
          curveSegments: this.curveSegments,
          amount: this.height,
          vertical: !1,
          zMinusHalfAmount: !0,
          repeat: 20
        },
        r = n.FontUtils.generateShapes(this.text, e)
      return n.ShapeNode.prototype.addShapes.call(this, r, t)
    }
  }), n.LatheNode = function(e, r, i, s, o, u) {
    this.materialSize = 3
    var a
    arguments.length === 1 && arguments[0] instanceof Object && !(arguments[0] instanceof n.Path) ? (a = arguments[0], this.path = a.path, this.segmentsH = a.segmentsH || 64, this.segmentsR = a.segmentsR || 20, this.arc = a.arc != t ? a.arc : Math.PI * 2, this.startClosed = a.startClosed, this.endClosed = a.endClosed, this._id = a.id) : (this.path = e, this.segmentsH = r || 64, this.segmentsR = i || 20, this.arc = s != t ? s : Math.PI * 2, this.startClosed = o, this.endClosed = u), n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.LatheNode, n.Entity, {
    constructor: n.LatheNode,
    className: 'TGL.LatheNode',
    __accessor: ['path', 'segmentsH', 'segmentsR', 'arc', 'startClosed', 'endClosed'],
    __SizePropeties: ['path', 'segmentsH', 'segmentsR', 'arc', 'startClosed', 'endClosed'],
    computeData: function() {
      function v(e) {
        var t = e.x,
          r = e.z,
          i = ((r === 0 ? t / Math.abs(t) : t / Math.abs(r)) + 1) / 2
        i = n.Math.clamp(i, 0, 1)
        var s = ((t === 0 ? r / Math.abs(r) : r / Math.abs(t)) + 1) / 2
        return s = n.Math.clamp(s, 0, 1), new n.Vec2(i, s)
      }
      var e = {},
        e = {}
      e.faces = [], e.uvs = [], e.vertices = []
      if (this.path == null) return e
      var t = [],
        r = this.path,
        i = this.segmentsH,
        s = this.segmentsR,
        o, u, f, l, h, p, d
      n.Shape.Utils.isClockWise(r.getPoints()) || (r = r.reverse())
      for (u = 0; u <= i; u++) {
        o = r.getPoint(u / i), t[u] = [], l = Math.abs(o.x), h = o.y, this.startClosed && u === 0 && e.vertices.push(new n.Vec3(0, h, 0))
        for (f = 0; f < s; f++) d = f / s * this.arc, p = new n.Vec3(l * Math.cos(d), h, l * Math.sin(d)), t[u][f] = e.vertices.push(p) - 1
        this.endClosed && u === i && e.vertices.push(new n.Vec3(0, h, 0))
      }
      var m = this.arc == Math.PI * 2
      if (this.startClosed) {
        a = 0
        for (f = 0; f < (m ? s : s - 1); f++) jp = (f + 1) % s, b = t[0][f], c = t[0][jp], uva = new n.Vec2(0.5, 0.5), uvb = v(e.vertices[b]), uvc = v(e.vertices[c]), e.faces.push(new n.Face3(a, b, c)), e.uvs.push([uva, uvb, uvc])
      }
      for (u = 0; u < i; u++) {
        for (f = 0; f < (m ? s : s - 1); f++) ip = u + 1, jp = (f + 1) % s, a = t[u][f], b = t[ip][f], c = t[ip][jp], zr = t[u][jp], uva = new n.Vec2(u / i, f / s), uvb = new n.Vec2((u + 1) / i, f / s), uvc = new n.Vec2((u + 1) / i, (f + 1) / s), uvd = new n.Vec2(u / i, (f + 1) / s), e.faces.push(new n.Face3(a, b, zr)), e.uvs.push([uva, uvb, uvd]), e.faces.push(new n.Face3(b, c, zr)), e.uvs.push([uvb.clone(), uvc, uvd.clone()])
      }
      if (this.endClosed) {
        a = e.vertices.length - 1
        for (f = 0; f < (m ? s : s - 1); f++) jp = (f + 1) % s, b = t[t.length - 1][f], c = t[t.length - 1][jp], uva = new n.Vec2(0, 0), uvb = new n.Vec2(1, f / s), uvc = new n.Vec2(1, (f + 1) / s), e.faces.push(new n.Face3(a, b, c)), e.uvs.push([uva, uvb, uvc])
      }
      return e
    }
  }), n.CurvePlane = function(e, t, r, i) {
    this.pathH = e, this.pathV = t, this.segmentsH = r || 20, this.segmentsV = i || 20, n.Entity.call(this)
  }, n.extend(n.CurvePlane, n.Entity, {
    constructor: n.CurvePlane,
    className: 'TGL.CurvePlane',
    computeData: function() {
      var e = {}
      e.faces = [], e.uvs = [], e.vertices = []
      if (this.pathV == null || this.pathH == null) return e
      var t = this.pathV,
        n = this.pathH,
        r = this.segmentsV,
        i = this.segmentsH,
        u, a, f = r + 1,
        l = i + 1,
        c, h, p, d, v, m, g, y
      this.grid = []
      for (u = 0; u < l; u++) {
        this.grid[u] = []
        var b = n.getPointAt(u / l)
        for (a = 0; a < f; a++) {
          var w = t.getPointAt(a / f)
          this.grid[u][a] = e.vertices.push(new o(b.x, w.y, b.z + w.z)) - 1
        }
      }
      for (u = 0; u < i; u++) {
        for (a = 0; a < r; a++) c = this.grid[u][a], h = this.grid[u][a + 1], p = this.grid[u + 1][a + 1], d = this.grid[u + 1][a], v = new s(u / l, a / f), m = new s(u / l, (a + 1) / f), uvc = new s((u + 1) / l, (a + 1) / f), y = new s((u + 1) / l, a / f), e.faces.push(new O(c, p, h)), e.uvs.push([v, uvc, m]), e.faces.push(new O(c, d, p)), e.uvs.push([v.clone(), y.clone(), uvc])
      }
      return e
    }
  }), n.ComboNode = function(e, t, r, i, s) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var o = e
      this.combos = o.combos || [], this.operators = o.operators, this.centralized = r, this.names = s, this._id = o.id
    } else this.combos = e || [], this.operators = t, this.centralized = r, this._id = i, this.names = s
    this.csgs = [], n.Entity.call(this)
  }, n.extend(n.ComboNode, n.Entity, {
    constructor: n.ComboNode,
    className: 'TGL.ComboNode',
    __accessor: ['combos', 'operators', 'centralized', 'names'],
    __SizePropeties: ['combos', 'operators', 'centralized'],
    getOffsetPosition: function() {
      return this._offsetPosition
    },
    getSideIndexMapping: function() {
      var e = this.combos,
        t = this.names || [],
        n, r, i, s, o = {},
        u = 0
      if (e && e.length) {
        for (i = 0; i < e.length; i++) {
          n = e[i], r = t[i], r || (s = n.getClassName(), s && s.indexOf('.') > 0 && (s = s.substr(s.lastIndexOf('.') + 1)), r = s + '' + i, r = r.toLowerCase())
          var a = n.getSideIndexMapping()
          if (a) {
            for (var f in a) o[r + '-' + f] = u++
          } else o[r] = u++
        }
      }
      return o
    },
    computeData: function() {
      this.csgs = []
      var e = {
        vertices: [],
        faces: [],
        uvs: [],
        uv2s: []
      }
      if (!this.combos) return e
      if (this.operators == null || this.operators.length == 0) {
        var r = P.mergeElements(this.combos)
        this.materialSize = r.material.materials.length, this.material = r.material, this.orgMaterial = r.material, e = {
          vertices: r.vertices,
          faces: r.faces,
          uvs: r.uvs,
          uv2s: r.uv2s || []
        }
        if (this.centralized && e.vertices) {
          var i = new n.BoundingBox()
          i.setFromPoints(e.vertices)
          var s = i.center()
          for (u = 0; u < e.vertices.length; u++) {
            var o = e.vertices[u]
            o.sub(s)
          }
          this._offsetPosition = s
        }
        return e
      }
      this.operators = this.operators || []
      var u, a, f = this.combos.length,
        l, c
      for (u = 0; u < f; u++) this.csgs.push(new n.CSG(this.combos[u]))
      for (u = 0; u < f; u++) a == null ? a = this.csgs[u] : (l = this.operators[u - 1], l === '+' || l == t ? a = a.union(this.csgs[u]) : l === '-' ? a = a.substract(this.csgs[u]) : l === '^' && (a = a.intersect(this.csgs[u])))
      if (!a) return e
      c = a.toMesh()
      if (this.changeProperty != 'centralized' || this.material == null) this.materialSize = c.material.materials.length, this.material = c.material, this.orgMaterial = c.material
      e = {
        vertices: c.vertices,
        faces: c.faces,
        uvs: c.uvs,
        uv2s: c.uv2s
      }
      if (this.centralized && e.vertices) {
        var i = new n.BoundingBox()
        i.setFromPoints(e.vertices)
        var s = i.center()
        for (u = 0; u < e.vertices.length; u++) {
          var o = e.vertices[u]
          o.sub(s)
        }
        this._offsetPosition = s
      }
      return c = t, e
    },
    computeNodeMaterial: function(e) {
      this.material = e.material, this.materialSize = e.materialSize
    },
    cacheNodeMaterial: function(e) {
      e.material = this.material, e.materialSize = this.materialSize
    },
    needComputeVertexNormal: function() {
      return !0
    },
    generatePrimitiveKey: function() {
      return null
    },
    changeMapping: function(e) {
      var t = this.getMaterialMapping()
      n.Utils.isSame(e, t) || (this.batch ? this.materialMappingChanges = [e, t] : (this.onMaterialMapping(), this.firePropertyChange('materialMapping', e, t)))
    },
    isStyleEquals: function(e, t, n) {
      return !1
    },
    getSelectStyle: function() {
      var e = this.getStyle('select.style')
      if (e == 'outline.normal' || e == 'outline') e = 'outline.wireframe'
      return e
    },
    onMaterialMapping: function() {
      this.groups = t, this.primitive.groups = t
    }
  }), n.Terrain = function(e) {
    e = e || {}, this._id = e.id, this.width = e.width, this.depth = e.depth, this.segmentsW = e.segmentsW || 30, this.segmentsD = e.segmentsD || 30, this.heightMap = e.heightMap, this.heightUnit = e.heightUnit || 1, this.maxHeight = e.maxHeight || 255, this.minHeight = e.minHeight || 0, this.baseLayerHeight = e.baseLayerHeight || 0, typeof this.heightMap === 'string' ? (this.image = new Image(), this.image.src = this.heightMap) : h.isCanvas(this.heightMap) ? this.canvas = this.heightMap : h.isImage(this.heightMap) && (this.image = this.heightMap)
    if (this.image) {
      var t = this
      this.image.onload = function(e) {
        var n = document.createElement('canvas')
        n.width = t.image.width, n.height = t.image.height
        var r = n.getContext('2d')
        r.drawImage(t.image, 0, 0), t.canvas = n, t.computed = !1, t.computeNodeData(), t.firePropertyChange('width', 0, 1)
      }
    }
    this.materialSize = 2, n.Entity.call(this), this.computeCentroids(), this.computeFaceNormals()
  }, n.extend(n.Terrain, n.Entity, {
    constructor: n.Terrain,
    className: 'TGL.Terrain',
    __accessor: ['width', 'heightUnit', 'depth', 'segmentsW', 'segmentsD', 'heightMap', 'heightUnit', 'maxHeight', 'minHeight', 'baseLayerHeight', 'smooth'],
    __SizePropeties: ['width', 'heightUnit', 'depth', 'segmentsW', 'segmentsD', 'heightMap', 'heightUnit', 'maxHeight', 'minHeight', 'baseLayerHeight', 'smooth'],
    __bool: ['smooth'],
    computeLayerData: function(e, t, r) {
      var i, s, o = this.width / 2,
        u = this.depth / 2,
        a = r ? this.segmentsW : 1,
        f = r
          ? this.segmentsD : 1,
        l = a + 1,
        c = f + 1,
        h = this.width / a,
        p = this.depth / f,
        d = new n.Vec3(0, 0, 1),
        v = e.vertices.length
      for (s = 0; s < c; s++) {
        for (i = 0; i < l; i++) {
          var m = i * h - o,
            g = s * p - u,
            y = 0
          r ? y = r.call(this, i / l, s / c) : y = this.baseLayerHeight * this.heightUnit, e.vertices.push(new n.Vec3(m, y, g))
        }
      }
      for (s = 0; s < f; s++) {
        for (i = 0; i < a; i++) {
          var b = i + l * s + v,
            w = i + l * (s + 1) + v,
            E = i + 1 + l * (s + 1) + v,
            S = i + 1 + l * s + v,
            x = new n.Vec2(i / a, 1 - s / f),
            T = new n.Vec2(i / a, 1 - (s + 1) / f),
            N = new n.Vec2((i + 1) / a, 1 - (s + 1) / f),
            C = new n.Vec2((i + 1) / a, 1 - s / f)
          if (r) {
            var k = new n.Face3(b, w, S)
            k.materialIndex = t, e.faces.push(k), e.uvs.push([x, T, C]), k = new n.Face3(w, E, S), k.materialIndex = t, e.faces.push(k), e.uvs.push([T.clone(), N, C.clone()])
          } else {
            var k = new n.Face4(b, w, E, S)
            k.normal.copy(d), k.vertexNormals.push(d.clone(), d.clone(), d.clone(), d.clone()), k.materialIndex = t, e.faces.push(k), e.uvs.push([x, T, N, C])
          }
        }
      }
    },
    computeData: function() {
      var e = {}
      return e.vertices = [], e.faces = [], e.uvs = [], this.computeLayerData(e, 0), this.computeLayerData(e, 1, this.getHeight), e
    },
    getFaceNormal: function(e, t) {
      this.computeFaceNormals()
      var n = this.segmentsW * e,
        r = this.segmentsD * t,
        i = Math.floor(n),
        s = Math.floor(r),
        o = s * this.segmentsW + i
      o = o * 2 + 1, i != Math.round(n) && s != Math.round(r) && o++
      var u = this.faces[o],
        a = this.vertices[u.a],
        f = this.vertices[u.b],
        l = this.vertices[u.c]
      return u.normal.clone()
    },
    setHeightMap: function(e) {
      this.heightMap = e, typeof this.heightMap === 'string' ? (this.image = new Image(), this.image.src = this.heightMap) : h.isCanvas(this.heightMap) ? this.canvas = this.heightMap : h.isImage(this.heightMap) && (this.image = this.heightMap)
      if (this.image) {
        var t = this
        if (this.image.width) {
          var n = document.createElement('canvas')
          n.width = t.image.width, n.height = t.image.height
          var r = n.getContext('2d')
          r.drawImage(t.image, 0, 0), t.canvas = n, t.computed = !1, t.computeNodeData(), t.firePropertyChange('width', 0, 1)
        } else {
          this.image.onload = function(e) {
            var n = document.createElement('canvas')
            n.width = t.image.width, n.height = t.image.height
            var r = n.getContext('2d')
            r.drawImage(t.image, 0, 0), t.canvas = n, t.computed = !1, t.computeNodeData(), t.firePropertyChange('width', 0, 1)
          }
        }
      }
    },
    getHeight: function(e, t) {
      if (this.canvas == null) return 0
      var r = this.canvas
      if (this.heightData == null) {
        var i = r.width * r.height,
          s = new Float32Array(i)
        for (var o = 0; o < i; o++) s[o] = 0
        var u = r.getContext('2d'),
          a = u.getImageData(0, 0, r.width, r.height),
          f = a.data,
          l = 0
        for (var o = 0, c = f.length; o < c; o += 4) {
          var h = f[o] + f[o + 1] + f[o + 2]
          s[l++] = h / 3
        }
        this.heightData = s
      }
      var p = e * r.width,
        d = t * r.height,
        v = Math.floor(p),
        m = Math.floor(d),
        g = [],
        y = []
      g.push(v), p != v && g.push(v + 1), y.push(m), d != m && y.push(m + 1)
      var b = g.length * y.length,
        o, l, w = 0,
        E
      for (o = 0; o < g.length; o++) {
        for (l = 0; l < y.length; l++) E = y[l] * r.width + g[o], w += this.heightData[E]
      }
      return w /= b, w = n.Math.clamp(w, this.minHeight, this.maxHeight), w *= this.heightUnit, w
    },
    getSideIndexMapping: function() {
      return n.Terrain.SideIndexMapping
    },
    refreshUniforms: function(e) {
      e.heightUnit && (e.heightUnit.value = this.heightUnit)
    }
  }), n.Terrain.SideIndexMapping = {
    layer0: 0,
    layer1: 1
  }, n.Link = function(e, t, r) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var i = arguments[0]
      e = i.fromNode, t = i.toNode, this._id = i.id
    } else this._id = r
    n.Line.call(this), this.setFromNode(e), this.setToNode(t), this._editable = !1
  }, n.extend(n.Link, n.Line, {
    className: 'TGL.Link',
    ___accessor: ['linkType', 'extend', 'controls'],
    __SizePropeties: ['fromNode', 'toNode', 'linkType', 'extend', 'controls'],
    setFromNode: function(e) {
      if (this._fromNode != e) {
        var t = this._fromNode
        this._fromNode = e, this.onPropertyChange(), this.firePropertyChange('fromNode', t, e), t, this._fromNode = e, t && (t._removeFromLink(this), t.removePropertyChangeListener(this.handleNodePropertyChange)), this._fromNode && (this._fromNode._addFromLink(this), this._fromNode.addPropertyChangeListener(this.handleNodePropertyChange, this))
      }
    },
    getFromNode: function() {
      return this._fromNode
    },
    setToNode: function(e) {
      if (this._toNode != e) {
        var t = this._toNode
        this._toNode = e, this.onPropertyChange(), this.firePropertyChange('toNode', t, e), t && (t.removePropertyChangeListener(this.handleNodePropertyChange), t._removeToLink(this)), this._toNode && (this._toNode._addToLink(this), this._toNode.addPropertyChangeListener(this.handleNodePropertyChange, this))
      }
    },
    getToNode: function() {
      return this._toNode
    },
    isLooped: function() {
      return this._fromNode === this._toNode && this._fromNode != null && this._toNode != null
    },
    handleNodePropertyChange: function(e) {
      if (e.property.startsWith('position') || e.property == 'worldMatrix') {
        var t = this.vertices
        this.onPropertyChange(), this.firePropertyChange('vertices', t, this.vertices)
      }
    },
    computeNodeData: function() {
      this.computeData()
    },
    updateMatrix: function() {},
    updateWorldMatrix: function() {},
    computeData: function() {
      if (this._fromNode == null || this._toNode == null) return
      this._extend == null && (this._extend = 0)
      var e = this._fromNode.worldMatrix.getPosition(),
        t = this._toNode.worldMatrix.getPosition(),
        n = []
      n.push(e.clone())
      if (this._linkType == 'orthogonal.x') {
        var r = Math.max(e.x, t.x),
          i = new o(r + this._extend, e.y, e.z)
        n.push(i), i = new o(r + this._extend, t.y, t.z), n.push(i)
      } else if (this._linkType == 'orthogonal.x.n') {
        var s = Math.min(e.x, t.x),
          i = new o(s - this._extend, e.y, e.z)
        n.push(i), i = new o(s - this._extend, t.y, t.z), n.push(i)
      } else if (this._linkType == 'orthogonal.y') {
        var u = Math.max(e.y, t.y),
          i = new o(e.x, u + this._extend, e.z)
        n.push(i), i = new o(t.x, u + this._extend, t.z), n.push(i)
      } else if (this._linkType == 'orthogonal.y.n') {
        var a = Math.min(e.y, t.y),
          i = new o(e.x, a - this._extend, e.z)
        n.push(i), i = new o(t.x, a - this._extend, t.z), n.push(i)
      } else if (this._linkType == 'orthogonal.z') {
        var f = Math.max(e.z, t.z),
          i = new o(e.x, e.y, f + this._extend)
        n.push(i), i = new o(t.x, t.y, f + this._extend), n.push(i)
      } else if (this._linkType == 'orthogonal.z.n') {
        var l = Math.min(e.z, t.z),
          i = new o(e.x, e.y, l - this._extend)
        n.push(i), i = new o(t.x, t.y, l - this._extend), n.push(i)
      } else if (this._linkType == 'control') {
        var c = this._controls
        if (c && c.length > 0) {
          for (var h = 0; h < c.length; h++) c[h] instanceof o && n.push(c[h].clone())
        }
      }
      n.push(t.clone()), this.vertices = n
    },
    onPropertyChange: function() {
      this.vertices = this.vertices || [], this.computeData(), this.computeBoundingBox(), this.selectionData = null, this.boundingSphere = null
    }
  }), n.PathLink = function(e, t, r) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var i = arguments[0]
      e = i.fromNode, t = i.toNode, this._id = i.id
    } else this._id = r
    n.PathNode.call(this), this._autoAjust = !0, this.setFromNode(e), this.setToNode(t)
  }, n.PathLink.allLinkTypes = ['extend.x', 'extend.y', 'extend.z', 'extend.x.n', 'extend.y.n', 'extend.z.n', 'orthogonal.x', 'orthogonal.y', 'orthogonal.z', 'orthogonal.x.n', 'orthogonal.y.n', 'orthogonal.z.n', 'flex.x', 'flex.y', 'flex.z', 'flex.yz', 'flex.xz', 'flex.xy'], n.extend(n.PathLink, n.PathNode, {
    className: 'TGL.PathLink',
    ___accessor: ['linkType', 'extend', 'controls', 'fromOffset', 'toOffset'],
    __SizePropeties: ['fromOffset', 'toOffset', 'path', 'segments', 'radius', 'segmentsR', 'startCap', 'endCap', 'shape', 'startCapSize', 'endCapSize', 'segmentsCap', 'arc', 'arcStart', 'cutSurface', 'startCapR', 'endCapR', 'startCapExtend', 'endCapExtend', 'fromNode', 'toNode', 'linkType', 'extend', 'controls'],
    setFromNode: function(e) {
      if (this._fromNode != e) {
        var t = this._fromNode
        this._fromNode = e, this._dirtyPath = !0, this.onPropertyChange('fromNode', t, e), this.firePropertyChange('fromNode', t, e), t, this._fromNode = e, t && (t._removeFromLink(this), t.removePropertyChangeListener(this.handleNodePropertyChange)), this._fromNode && (this._fromNode._addFromLink(this), this._fromNode.addPropertyChangeListener(this.handleNodePropertyChange, this))
      }
    },
    getFromNode: function() {
      return this._fromNode
    },
    setToNode: function(e) {
      if (this._toNode != e) {
        var t = this._toNode
        this._toNode = e, this.onPropertyChange('toNode', t, e), this.firePropertyChange('toNode', t, e), t && (t.removePropertyChangeListener(this.handleNodePropertyChange), t._removeToLink(this)), this._toNode && (this._toNode._addToLink(this), this._toNode.addPropertyChangeListener(this.handleNodePropertyChange, this))
      }
    },
    getToNode: function() {
      return this._toNode
    },
    isLooped: function() {
      return this._fromNode === this._toNode && this._fromNode != null && this._toNode != null
    },
    handleNodePropertyChange: function(e) {
      var t = e.source,
        n = e.property
      if (n.startsWith('position') || n.startsWith('rotation') || n.startsWith('scale') || n == 'worldMatrix' || n === 'linkAgent' || t.isSizeChangedProperty(n) || n === 'parent') {
        var r = this.vertices
        this._dirtyPath = !0
        var i = this
        D.PATH_LINK_COMPUTE_DELAY ? setTimeout(function() {
          i._computePath()
        }, 10) : i._computePath()
      }
    },
    _resetPath: function() {
      if (!this.path) return
      var e = !1
      if (this.endCap !== 'arrow') return this.path
      if (this.endCapExtend * this.endCapR > 1) return this.path
      e = !0
      var t = this.path,
        r = new n.Path(),
        i, s, u = t.actions.length,
        a = null,
        f
      for (s = 0; s < u - 1; s++) i = t.actions[s], f = i.args, a = new n.Vec3(f[0], f[1], f[2]), i.action === 'moveTo' ? r.moveTo(f[0], f[1], f[2]) : i.action === 'lineTo' ? r.lineTo(f[0], f[1], f[2]) : i.action === 'quadraticCurveTo' && (r.curveTo(f[0], f[1], f[2], f[3], f[4], f[5]), a = new n.Vec3(f[3], f[4], f[5]))
      s = u - 1, i = t.actions[s], f = i.args
      if (i.action === 'lineTo') {
        var l = new n.Vec3(f[0], f[1], f[2]),
          c = (new o()).subVectors(l, a).normalize(),
          u = this.radius * this.endCapSize,
          h = null;
        (new o()).subVectors(l, a).length() < u ? h = a.add(c.multiplyScalar(0.1)) : h = l.clone().sub(c.multiplyScalar(u)), r.lineTo(h.x, h.y, h.z)
      }
      return r
    },
    _getNodeOffset: function(e, t, n) {
      t = e.worldToLocal(t.clone()), n = e.worldToLocal(n.clone())
      var r = (new o()).subVectors(n, t),
        i = r.length(),
        s = e.getLinkOffset(r)
      return s && s.length() > i && s.normalize().multiplyScalar(i - 0.1), s || new o(0, 0, 0)
    },
    updateMatrix: function() {},
    updateWorldMatrix: function(e, t) {},
    onPropertyChange: function(e, t, r) {
      if (e === 'fromNode' || e === 'toNode' || e === 'linkType' || e === 'extend' || e === 'controls' || e === 'fromOffset' || e === 'toOffset') this._dirtyPath = !0
      n.Node.prototype.onPropertyChange.call(this, e, t, r)
    },
    computeData: function() {
      return this._computePath(), n.PathNode.prototype.computeData.call(this)
    },
    _clearFromNodeExtend: function(e, t, n) {},
    _flex: function(e, t, n, r, i) {
      e = e.substr(e.indexOf('.') + 1)
      var s = ['x', 'y', 'z'],
        u, a = new o(),
        f = new o()
      for (var l = 0; l < 3; l++) u = s[l], a[u] = u === e ? r[u] : t[u], f[u] = u === e ? r[u] : n[u]
      i.push(a, f)
    },
    _flex2: function(e, t, n, r) {
      e = e.substr(e.indexOf('.') + 1)
      var i = ['x', 'y', 'z'],
        s = e[0],
        o = e[1]
      if (t[s] != n[s]) {
        var u = new mono.Vec3()
        for (var a = 0; a < i.length; a++) u[i[a]] = i[a] == s ? n[i[a]] : t[i[a]]
        r.push(u)
      }
      if (t[o] != n[o]) {
        var f = new mono.Vec3()
        for (var a = 0; a < i.length; a++) f[i[a]] = i[a] == s || i[a] == o ? n[i[a]] : t[i[a]]
        r.push(f)
      }
    },
    _orthogonal: function(e, t, n, r) {
      e = e.substr(e.indexOf('.') + 1)
      var i = !1,
        s = ['x', 'y', 'z'],
        u, a = new o(),
        f = 0
      e.endsWith('.n') && (i = !0, e = e[0])
      var l = i ? t[e] : n[e]
      for (var c = 0; c < s.length; c++) u = s[c], u !== e && t[u] == n[u] && f++
      if (f === 2) return
      for (var c = 0; c < s.length; c++) u = s[c], u !== e ? a[u] = l : a[u] = i ? n[u] : t[u]
      r.push(a)
    },
    _removeSamePoint: function(e) {},
    _computePath: function() {
      if (!this._dirtyPath) return
      this._dirtyPath = !1
      if (this._fromNode == null || this._toNode == null) return
      this._extend == null && (this._extend = 0)
      var e = this._fromNode.getLinkAgent() || this._fromNode,
        t = this._toNode.getLinkAgent() || this._toNode,
        r = e.localToWorld2(new o(0, 0, 0)),
        i = t.localToWorld2(new o(0, 0, 0))
      if (e == t) {
        var s = new mono.Path()
        return s.moveTo(r.x, r.y, r.z), s.lineTo(r.x, r.y + 200, r.z), s.lineTo(r.x + 200, r.y + 200, r.z), s.lineTo(r.x + 200, r.y, r.z), s.lineTo(r.x, r.y, r.z), this.setPath(s), s
      }
      if (r.equals(i)) {
        this.setPath(null)
        return
      }
      var s, u = [],
        a = this.radius * this.endCapSize,
        f
      if (this._linkType && this._linkType.startsWith('extend')) {
        var r, i, l, c = [],
          h, p, d, v
        if (this._linkType === 'extend.x') {
          l = new o(1, 0, 0)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.max(r.x, i.x), d = v + this._extend + a + 0.1, h = new o(d, r.y, r.z), p = new o(d, i.y, i.z)
        } else if (this._linkType === 'extend.y') {
          l = new o(0, 1, 0)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.max(r.y, i.y), d = v + this._extend + a + 0.1, h = new o(r.x, d, r.z), p = new o(i.x, d, i.z)
        } else if (this._linkType === 'extend.z') {
          l = new o(0, 0, 1)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.max(r.z, i.z), d = v + this._extend + a + 0.1, h = new o(r.x, r.y, d), p = new o(i.x, i.y, d)
        } else if (this._linkType === 'extend.x.n') {
          l = new o(-1, 0, 0)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.min(r.x, i.x), d = v - this._extend - a - 0.1, h = new o(d, r.y, r.z), p = new o(d, i.y, i.z)
        } else if (this._linkType === 'extend.y.n') {
          l = new o(0, -1, 0)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.min(r.y, i.y), d = v - this._extend - a - 0.1, h = new o(r.x, d, r.z), p = new o(i.x, d, i.z)
        } else if (this._linkType === 'extend.z.n') {
          l = new o(0, 0, -1)
          var r = e.localToWorld2(e.getLinkExtend(l.clone())),
            i = t.localToWorld2(t.getLinkExtend(l))
          v = Math.min(r.z, i.z), d = v - this._extend - a - 0.1, h = new o(r.x, r.y, d), p = new o(i.x, i.y, d)
        }
        h ? u.push(r, h, p, i) : u.push(r, i)
      } else {
        u.push(r)
        if (this._linkType === 'orthogonal.x') {
          if (r.y != i.y || r.z != i.z) {
            var m = i.x,
              g = new o(m, r.y, r.z)
            u.push(g)
          }
        } else if (this._linkType === 'orthogonal.x.n') {
          var m = r.x,
            g = new o(m, i.y, i.z)
          u.push(g)
        } else if (this._linkType === 'orthogonal.y') {
          var y = i.y,
            g = new o(r.x, y, r.z)
          u.push(g)
        } else if (this._linkType === 'orthogonal.y.n') {
          var y = r.y,
            g = new o(i.x, y, i.z)
          u.push(g)
        } else if (this._linkType === 'orthogonal.z') {
          var g = new o(r.x, r.y, i.z)
          u.push(g)
        } else if (this._linkType === 'orthogonal.z.n') {
          var g = new o(i.x, i.y, r.z)
          u.push(g)
        }
        var b = (new o(r.x + i.x, r.y + i.y, r.z + i.z)).multiplyScalar(0.5);
        (this._linkType === 'flex.x' || this._linkType === 'flex.y' || this._linkType === 'flex.z') && this._flex(this._linkType, r, i, b, u), (this._linkType === 'flex.yz' || this._linkType === 'flex.zy' || this._linkType === 'flex.xy' || this._linkType === 'flex.yx' || this._linkType === 'flex.xz' || this._linkType === 'flex.zx') && this._flex2(this._linkType, r, i, u)
        if (this._linkType === 'control') {
          var w = this.getControls()
          P.isArray(w) && (u = u.concat(w))
        }
        u.push(i), f = u.length
        var E = this._getNodeOffset(e, u[0].clone(), u[1].clone()),
          S = this._getNodeOffset(t, u[f - 1].clone(), u[f - 2].clone())
        r = e.localToWorld2(E), i = t.localToWorld2(S), u[0] = r, u[f - 1] = i
      }
      var f = u.length,
        x = this.getFromOffset(),
        T = this.getToOffset()
      x && u[0].add(x), T && u[f - 1].add(T)
      var s = new n.Path(),
        N
      for (var C = 0; C < f; C++) N = u[C], C === 0 ? s.moveTo(N.x, N.y, N.z) : s.lineTo(N.x, N.y, N.z)
      return this.setPath(s), s
    }
  }), mono.LoadingManager = function(e, n, r) {
    var i = this,
      s = 0,
      o = 0
    this.onLoad = e, this.onProgress = n, this.onError = r, this.itemStart = function(e) {
      o++
    }, this.itemEnd = function(e) {
      s++, i.onProgress !== t && i.onProgress(e, s, o), s === o && i.onLoad !== t && i.onLoad()
    }
  }, mono.DefaultLoadingManager = new mono.LoadingManager(), mono.ImageLoader = function(e) {
    this.manager = e !== t ? e : mono.DefaultLoadingManager
  }, mono.ImageLoader.prototype = {
    constructor: mono.ImageLoader,
    load: function(e, n, r, i) {
      var s = this,
        o = document.createElement('img')
      return n !== t && o.addEventListener('load', function(t) {
        s.manager.itemEnd(e), n(this)
      }, !1), r !== t && o.addEventListener('progress', function(e) {
        r(e)
      }, !1), i !== t && o.addEventListener('error', function(e) {
        i(e)
      }, !1), this.crossOrigin !== t && (o.crossOrigin = this.crossOrigin), o.src = e, s.manager.itemStart(e), o
    },
    loadFile: function(e, n, r, i) {
      var s = this,
        o = new FileReader()
      n !== t && (o.onload = function() {
        n(o.result), s.manager.itemEnd(e.name)
      }), r !== t && o.addEventListener('progress', function(e) {
        r(e)
      }, !1), i !== t && o.addEventListener('error', function(e) {
        i(e)
      }, !1), o.readAsDataURL(e), s.manager.itemStart(e.name)
    },
    setCrossOrigin: function(e) {
      this.crossOrigin = e
    }
  }, mono.XHRLoader = function(e) {
    this.manager = e !== t ? e : mono.DefaultLoadingManager
  }, mono.XHRLoader.prototype = {
    constructor: mono.XHRLoader,
    load: function(e, n, r, i) {
      var s = this,
        o = new XMLHttpRequest()
      n !== t && o.addEventListener('load', function(t) {
        n(t.target.responseText), s.manager.itemEnd(e)
      }, !1), r !== t && o.addEventListener('progress', function(e) {
        r(e)
      }, !1), i !== t && o.addEventListener('error', function(e) {
        i(e)
      }, !1), this.crossOrigin !== t && (o.crossOrigin = this.crossOrigin), o.open('GET', e, !0), o.send(null), s.manager.itemStart(e)
    },
    loadFile: function(e, n, r, i) {
      if (!e) return
      var s = this,
        o = new FileReader()
      n !== t && (o.onload = function() {
        n(o.result), s.manager.itemEnd(e.name)
      }), r !== t && o.addEventListener('progress', function(e) {
        r(e)
      }, !1), i !== t && o.addEventListener('error', function(e) {
        i(e)
      }, !1), o.readAsText(e), s.manager.itemStart(e.name)
    },
    setCrossOrigin: function(e) {
      this.crossOrigin = e
    }
  }, mono.MTLLoader = function(e, t, n) {
    this.baseUrl = e, this.options = t, this.crossOrigin = n
  }, mono.extend(mono.MTLLoader, null, {
    constructor: mono.MTLLoader,
    load: function(e, t, n, r) {
      var i = this,
        s = new mono.XHRLoader()
      s.setCrossOrigin(this.crossOrigin), s.load(e, function(e) {
        t(i.parse(e))
      })
    },
    loadFile: function(e, t, n, r) {
      var i = this,
        s = new mono.XHRLoader()
      s.loadFile(e, function(e) {
        t(i.parse(e))
      })
    },
    loadText: function(e, t) {
      t(this.parse(e))
    },
    parse: function(e) {
      var t = e.split('\n'),
        n = {},
        r = /\s+/,
        i = {}
      this.baseUrl || (this.baseUrl = {})
      for (var s = 0; s < t.length; s++) {
        var o = t[s]
        o = o.trim()
        if (o.length === 0 || o.charAt(0) === '#') continue
        var u = o.indexOf(' '),
          a = u >= 0 ? o.substring(0, u) : o
        a = a.toLowerCase()
        var f = u >= 0 ? o.substring(u + 1) : ''
        f = f.trim()
        if (a === 'newmtl') {
          n = {
            name: f
          }, i[f] = n
        } else if (n) {
          if (a === 'ka' || a === 'kd' || a === 'ks') {
            var l = f.split(r, 3)
            n[a] = [parseFloat(l[0]), parseFloat(l[1]), parseFloat(l[2])]
          } else if (a === 'map_kd' || a === 'map_ka') {
            var c = f
            if (f.indexOf('.') > 0) {
              f = f.substring(0, f.lastIndexOf('.')).toLowerCase()
              var h = {}
              if (/\-s/.test(f)) {
                var p = /\-s( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/
                h = p.exec(f)
                var d = f.split(h[0])
                f = d[d.length - 1].trim()
                var v = c.split(h[0])
                c = v[v.length - 1].trim()
              }
              if (/\-t/.test(f)) {
                var p = /\-t( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/
                h = p.exec(f)
                var d = f.split(h[0])
                f = d[d.length - 1].trim()
                var v = c.split(h[0])
                c = v[v.length - 1].trim()
              }
            }
            this.baseUrl[f] = c, n[a] = c
          } else n[a] = f
        }
      }
      var m = new mono.MTLLoader.MaterialCreator(this.baseUrl, this.options)
      return m.setMaterials(i), m
    }
  }), mono.MTLLoader.MaterialCreator = function(e, t) {
    this.baseUrl = e, this.options = t, this.materialsInfo = {}, this.materials = {}, this.materialsArray = [], this.nameLookup = {}, this.side = this.options && this.options.side ? this.options.side : mono.FrontSide, this.wrap = this.options && this.options.wrap ? this.options.wrap : mono.RepeatWrapping
  }, mono.extend(mono.MTLLoader.MaterialCreator, mono.EventDispatcher, {
    constructor: mono.MTLLoader.MaterialCreator,
    setMaterials: function(e) {
      this.materialsInfo = this.convert(e), this.materials = {}, this.materialsArray = [], this.nameLookup = {}
    },
    convert: function(e) {
      if (!this.options) return e
      var t = {}
      for (var n in e) {
        var r = e[n],
          i = {}
        t[n] = i
        for (var s in r) {
          var o = !0,
            u = r[s],
            a = s.toLowerCase()
          switch (a) {
            case 'kd':
            case 'ka':
            case 'ks':
              this.options && this.options.normalizeRGB && (u = [u[0] / 255, u[1] / 255, u[2] / 255]), this.options && this.options.ignoreZeroRGBs && u[0] === 0 && u[1] === 0 && u[1] === 0 && (o = !1)
              break
            case 'd':
              this.options && this.options.invertTransparency && (u = 1 - u)
              break
            default:
          }
          o && (i[a] = u)
        }
      }
      return t
    },
    preload: function() {
      for (var e in this.materialsInfo) this.create(e)
    },
    getIndex: function(e) {
      return this.nameLookup[e]
    },
    getAsArray: function() {
      var e = 0
      for (var t in this.materialsInfo) this.materialsArray[e] = this.create(t), this.nameLookup[t] = e, e++
      return this.materialsArray
    },
    create: function(e) {
      return this.materials[e] === t && this.createMaterial_(e), this.materials[e]
    },
    createMaterial_: function(e) {
      var t = this,
        n = this.materialsInfo[e],
        r = {
          name: e,
          side: this.side
        }
      for (var i in n) {
        var s = n[i]
        switch (i.toLowerCase()) {
          case 'kd':
            r.diffuse = (new mono.Color()).setRGB(s[0], s[1], s[2])
            break
          case 'ka':
            r.ambient = (new mono.Color()).setRGB(s[0], s[1], s[2])
            break
          case 'ks':
            r.specular = (new mono.Color()).setRGB(s[0], s[1], s[2])
            break
          case 'map_kd':
            if (typeof this.baseUrl === 'string') r.map = {}, r.map.img = this.baseUrl + s, r.map.wrapS = this.wrap, r.map.wrapT = this.wrap
            else if (typeof this.baseUrl === 'object' && s.indexOf('.') > 0) {
              s = s.substring(0, s.lastIndexOf('.')).toLowerCase()
              var o = {}
              if (/\-s/.test(s)) {
                var u = /\-s( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/
                o = u.exec(s)
                var a = s.split(o[0])
                s = a[a.length - 1].trim(), o.repeatR = parseInt(o[1]), o.repeatC = parseInt(o[2])
              }
              if (/\-t/.test(s)) {
                var u = /\-t( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/
                o = u.exec(s)
                var a = s.split(o[0])
                s = a[a.length - 1].trim(), o.repeatR = parseInt(o[1]), o.repeatC = parseInt(o[2])
              }
              this.baseUrl[s] && (r.map = {}, r.map.img = this.baseUrl[s], r.map.wrapS = t.wrap, r.map.wrapT = t.wrap, r.map.repeatR = o.repeatR || 1, r.map.repeatC = o.repeatC || 1)
            }
            break
          case 'ns':
            r.shininess = s
            break
          case 'd':
            s < 1 && (r.transparent = !0, r.opacity = s)
            break
          default:
        }
      }
      return r.diffuse && (r.ambient || (r.ambient = r.diffuse), r.color = r.diffuse), this.materials[e] = r, this.materials[e]
    },
    loadTexture: function(e, t, n, r) {
      var i = /\.dds$/i.test(e)
      if (i) var s = mono.ImageUtils.loadCompressedTexture(e, t, n, r)
      else {
        var o = new Image(),
          s = new mono.Texture(o, t),
          u = new mono.ImageLoader()
        u.crossOrigin = this.crossOrigin, u.load(e, function(e) {
          s.image = mono.MTLLoader.ensurePowerOfTwo_(e), s.needsUpdate = !0, n && n(s)
        })
      }
      return s
    }
  }), mono.MTLLoader.ensurePowerOfTwo_ = function(e) {
    if (!mono.MTLLoader.isPowerOfTwo_(e.width) || !mono.MTLLoader.isPowerOfTwo_(e.height)) {
      var t = document.createElement('canvas')
      t.width = mono.MTLLoader.nextHighestPowerOfTwo_(e.width), t.height = mono.MTLLoader.nextHighestPowerOfTwo_(e.height)
      var n = t.getContext('2d')
      return n.drawImage(e, 0, 0, e.width, e.height, 0, 0, t.width, t.height), t
    }
    return e
  }, mono.MTLLoader.isPowerOfTwo_ = function(e) {
    return (e & e - 1) === 0
  }, mono.MTLLoader.nextHighestPowerOfTwo_ = function(e) {
    --e
    for (var t = 1; t < 32; t <<= 1) e |= e >> t
    return e + 1
  }, mono.OBJLoader = function(e) {
    this.manager = e !== t ? e : mono.DefaultLoadingManager
  }, mono.extend(mono.OBJLoader, Object, {
    constructor: mono.ObJLoader,
    load: function(e, t, n, r) {
      var i = this,
        s = new mono.XHRLoader(i.manager)
      s.setCrossOrigin(this.crossOrigin), s.load(e, function(e) {
        t(i.parse(e))
      })
    },
    parse: function(e) {
      function n(e, t, n) {
        return new mono.Vec3(e, t, n)
      }

      function r(e, t) {
        return new mono.Vec2(e, t)
      }

      function i(e, t, n, r) {
        return new mono.Face3(e, t, n, r)
      }

      function l(e, n, r, s) {
        s === t ? o.faces.push(i(parseInt(e) - (f + 1), parseInt(n) - (f + 1), parseInt(r) - (f + 1))) : o.faces.push(i(parseInt(e) - (f + 1), parseInt(n) - (f + 1), parseInt(r) - (f + 1), [v[parseInt(s[0]) - 1].clone(), v[parseInt(s[1]) - 1].clone(), v[parseInt(s[2]) - 1].clone()]))
      }

      function c(e, t, n) {
        o.uvs.push([m[parseInt(e) - 1].clone(), m[parseInt(t) - 1].clone(), m[parseInt(n) - 1].clone()])
      }

      function h(e, n, r) {
        e[3] === t ? (l(e[0], e[1], e[2], r), n !== t && n.length > 0 && c(n[0], n[1], n[2])) : (r !== t && r.length > 0 ? (l(e[0], e[1], e[3], [r[0], r[1], r[3]]), l(e[1], e[2], e[3], [r[1], r[2], r[3]])) : (l(e[0], e[1], e[3]), l(e[1], e[2], e[3])), n !== t && n.length > 0 && (c(n[0], n[1], n[3]), c(n[1], n[2], n[3])))
      }
      var s = new mono.Element(),
        o, u, a, f = 0;
      /^o /gm.test(e) === !1 && (o = new mono.Entity(), u = new mono.BasicMaterial(), o.setStyle('m.type', 'phong'), s.addChild(o))
      var p = [],
        d = 0,
        v = [],
        m = [],
        g = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        y = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        b = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        w = /f( +\d+)( +\d+)( +\d+)( +\d+)?/,
        E = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/,
        S = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/,
        x = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/,
        T = e.split('\n')
      for (var N = 0; N < T.length; N++) {
        var C = T[N]
        C = C.trim()
        var k
        if (C.length === 0 || C.charAt(0) === '#') continue
        if ((k = g.exec(C)) !== null) o.vertices.push(n(parseFloat(k[1]), parseFloat(k[2]), parseFloat(k[3])))
        else if ((k = y.exec(C)) !== null) v.push(n(parseFloat(k[1]), parseFloat(k[2]), parseFloat(k[3])))
        else if ((k = b.exec(C)) !== null) m.push(r(parseFloat(k[1]), parseFloat(k[2])))
        else if ((k = w.exec(C)) !== null) h([k[1], k[2], k[3], k[4]])
        else if ((k = E.exec(C)) !== null) h([k[2], k[5], k[8], k[11]], [k[3], k[6], k[9], k[12]])
        else if ((k = S.exec(C)) !== null) h([k[2], k[6], k[10], k[14]], [k[3], k[7], k[11], k[15]], [k[4], k[8], k[12], k[16]])
        else if ((k = x.exec(C)) !== null) h([k[2], k[5], k[8], k[11]], [], [k[3], k[6], k[9], k[12]])
        else if (/^o /.test(C)) o !== t && (f += o.vertices.length), o = new mono.Entity(), u = new mono.BasicMaterial(), o.setStyle('m.type', 'phong'), o._name = C.substring(2).trim(), s.addChild(o), d = 0
        else if (!/^g /.test(C)) {
          if (/^usemtl /.test(C)) var L = C.substring(7).trim()
          else /^mtllib /.test(C) || /^s /.test(C)
        }
      }
      for (var N = 0, A = s._childList._as.length; N < A; N++) {
        var o = s._childList._as[N]
        o.computed = !1, o.computeNodeData(), o.computeCentroids(), o.computeFaceNormals(), o.computeBoundingSphere()
      }
      return s
    }
  }), mono.OBJMTLLoader = function() {}, mono.extend(mono.OBJMTLLoader, mono.MTLLoader, {
    constructor: mono.OBJMTLLoader,
    load: function(e, t, n, r, i, s) {
      var o = this,
        u = new mono.MTLLoader(n)
      u.load(t, function(t) {
        var i = t
        i.preload()
        var s = new mono.XHRLoader(o.manager)
        s.setCrossOrigin(this.crossOrigin), s.load(e, function(t) {
          var s = o.parse(t), u = ''
          !n && e.lastIndexOf('/') > 0 && (u = e.substring(0, e.lastIndexOf('/') + 1))
          for (var a = 0; a < s._childList._as.length; a++) {
            var f = s._childList._as[a]
            if (f.mname) {
              var l = i.create(f.mname)
              o.setGeometryStyle(f, l, u)
            }
            for (var c = 0; c < f._childList._as.length; c++) {
              var h = f._childList._as[c]
              if (h.mname) {
                var p = i.create(h.mname)
                o.setGeometryStyle(h, p, u)
              }
            }
          }
          r(s)
        })
      })
    },
    setGeometryStyle: function(e, t, n) {
      if (t.map) {
        this.loadTexture(e, n + t.map.img)
        var r = t.map.repeatR,
          i = t.map.repeatC
        r && i && e.setStyle('m.texture.repeat', new mono.Vec2(r, i))
      }
      e.setStyle('m.ambient', t.ambient), e.setStyle('m.specular', t.specular), e.setStyle('m.color', t.color), t.transparent && (e.setStyle('m.transparent', !0), e.setStyle('m.opacity', t.opacity))
    },
    loadBase64: function(e, t, n, r, i, s) {
      var o = this,
        u = mono.base64decode(t),
        a = mono.base64decode(e),
        f = new mono.MTLLoader(n)
      f.loadText(u, function(e) {
        var t = e
        t.preload()
        var i = o.parse(a), s = ''
        !n && url.lastIndexOf('/') > 0 && (s = url.substring(0, url.lastIndexOf('/') + 1))
        for (var u = 0; u < i._childList._as.length; u++) {
          var f = i._childList._as[u]
          if (f.mname) {
            var l = t.create(f.mname)
            o.setGeometryStyle(f, l, s)
          }
          for (var c = 0; c < f._childList._as.length; c++) {
            var h = f._childList._as[c]
            if (h.mname) {
              var p = t.create(h.mname)
              o.setGeometryStyle(h, p, s)
            }
          }
        }
        r(i)
      })
    },
    loadFiles: function(e, t, n, r, i, s) {
      var o = this,
        u = new mono.MTLLoader(n)
      u.loadFile(t, function(t) {
        var n = t
        n.preload()
        var i = new mono.XHRLoader(o.manager)
        i.loadFile(e, function(e) {
          var t = o.parse(e)
          for (var i = 0; i < t._childList._as.length; i++) {
            var s = t._childList._as[i]
            if (s.mname) {
              var u = n.create(s.mname)
              o.setGeometryStyle(s, u)
            }
            for (var a = 0; a < s._childList._as.length; a++) {
              var f = s._childList._as[a]
              if (f.mname) {
                var l = n.create(f.mname)
                o.setGeometryStyle(f, l)
              }
            }
          }
          r(t)
        })
      })
    },
    loadTexture: function(e, t) {
      if (typeof t === 'string') e.setStyle('m.texture.image', t)
      else if (e && t) {
        var n = new mono.ImageLoader()
        n.loadFile(t, function(t) {
          e.setStyle('m.texture.image', t)
        })
      }
    },
    parse: function(e, r) {
      function i(e, t, n) {
        return new mono.Vec3(e, t, n)
      }

      function s(e, t) {
        return new mono.Vec2(e, t)
      }

      function o(e, t, n, r, i) {
        return new mono.Face3(e, t, n, r, null, i)
      }

      function a(e, r) {
        if (h.length > 0) {
          c.vertices = h, m.length > 0 && (c.setMaterialSize(m.length), c.setStyle('m.normalType', n.NormalTypeSmooth)), c.computed = !1, c.computeCentroids(), c.computeFaceNormals(), c.computeBoundingSphere()
          if (c.faces.length > 0) {
            var i = c._name
            l.addChild(c), c = new mono.Entity(), c._name = i, c.setStyle('m.type', 'phong'), p = 0
          }
        }
        e !== t && (c._name = e), r !== t && (c.mname = r)
      }

      function y(e, n, r, i, s) {
        i === t ? c.faces.push(o(parseInt(e) - (u + 1), parseInt(n) - (u + 1), parseInt(r) - (u + 1))) : c.faces.push(o(parseInt(e) - (u + 1), parseInt(n) - (u + 1), parseInt(r) - (u + 1), [d[parseInt(i[0]) - 1].clone(), d[parseInt(i[1]) - 1].clone(), d[parseInt(i[2]) - 1].clone()], s))
      }

      function b(e, t, n) {
        c.uvs.push([v[parseInt(e) - 1].clone(), v[parseInt(t) - 1].clone(), v[parseInt(n) - 1].clone()])
      }

      function w(e, n, r) {
        var i = m.length > 0 ? m.indexOf(g) : 0
        e[3] === t ? (y(e[0], e[1], e[2], r, i), n !== t && n.length > 0 && b(n[0], n[1], n[2])) : (r !== t && r.length > 0 ? (y(e[0], e[1], e[3], [r[0], r[1], r[3]], i), y(e[1], e[2], e[3], [r[1], r[2], r[3]], i)) : (y(e[0], e[1], e[3]), y(e[1], e[2], e[3])), n !== t && n.length > 0 && (b(n[0], n[1], n[3]), b(n[1], n[2], n[3])))
      }
      var u = 0,
        f = new mono.Entity(),
        l = f,
        c = new mono.Entity()
      c.setStyle('m.type', 'phong')
      var h = [],
        p = 0,
        d = [],
        v = [],
        m = [],
        g = 0,
        E = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        S = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        x = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/,
        T = /f( +\d+)( +\d+)( +\d+)( +\d+)?/,
        N = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/,
        C = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/,
        k = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/,
        L = /s( +(\d))?/,
        A = e.split('\n')
      for (var O = 0; O < A.length; O++) {
        var M = A[O]
        M = M.trim()
        var _
        if (M.length === 0 || M.charAt(0) === '#' && M.charAt(2) != 'o') continue
        if ((_ = E.exec(M)) !== null) h.push(i(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])))
        else if ((_ = S.exec(M)) !== null) d.push(i(parseFloat(_[1]), parseFloat(_[2]), parseFloat(_[3])))
        else if ((_ = x.exec(M)) !== null) v.push(s(parseFloat(_[1]), parseFloat(_[2])))
        else if ((_ = T.exec(M)) !== null) w([_[1], _[2], _[3], _[4]])
        else if ((_ = N.exec(M)) !== null) w([_[2], _[5], _[8], _[11]], [_[3], _[6], _[9], _[12]])
        else if ((_ = C.exec(M)) !== null) w([_[2], _[6], _[10], _[14]], [_[3], _[7], _[11], _[15]], [_[4], _[8], _[12], _[16]])
        else if ((_ = k.exec(M)) !== null) w([_[2], _[5], _[8], _[11]], [], [_[3], _[6], _[9], _[12]])
        else if (M.charAt(0) === '#' && M.charAt(2) === 'o') a(), u += h.length, h = [], l = new mono.Entity(), l._name = M.substring(2).trim(), f.addChild(l)
        else if (/^g /.test(M)) a(M.substring(2).trim(), t)
        else if (/^usemtl /.test(M)) a(t, M.substring(7).trim())
        else if (/^mtllib /.test(M)) {
          if (r) {
            var D = M.substring(7)
            D = D.trim(), r(D)
          }
        } else /^s /.test(M) && (_ = L.exec(M), m.indexOf(_[2]) < 0 && m.push(_[2]), g = _[2])
      }
      return a(t, t), f
    }
  }), DaeAdapter = mono.DaeAdapter = function() {
    function p(e, n, r) {
      var i = 0
      if (e !== t) {
        var s = e.split('/')
        s.pop(), f = (s.length < 1 ? '.' : s.join('/')) + '/'
      }
      var o = new XMLHttpRequest()
      o.onreadystatechange = function() {
        if (o.readyState == 4) {
          if (o.status == 0 || o.status == 200) {
            if (o.responseXML) d(o.responseXML, n, e)
            else if (o.responseText) {
              var t = new DOMParser(),
                s = t.parseFromString(o.responseText, 'application/xml')
              d(s, n, e)
            } else console.error('ColladaLoader: Empty or non-existing file (' + e + ')')
          }
        } else {
          o.readyState == 3 && r && (i == 0 && (i = o.getResponseHeader('Content-Length')), r({
            total: i,
            loaded: o.responseText.length
          }))
        }
      }, o.open('GET', e, !0), o.send(null)
    }

    function d(t, n, r) {
      e = t, q(), o = T(), i = new b(), i.parse()
      var s = Z()
      a = z(), u = X(), c = m()
      if (i) {
        for (var f = 0; f < i.nodes.length; f++) v(i.nodes[f])
      }
      var h = {
        lights: s,
        visualScenes: i,
        images: a,
        materials: c,
        geometries: o,
        entityies: l
      }
      n && n(h)
    }

    function v(e, t) {
      if (!e) return
      var n = {}
      for (var r = 0; r < e.geometries.length; r++) {
        var i = e.geometries[r],
          s = i.instance_material,
          a = o[i.url],
          f = {},
          h = [],
          p = 0,
          d
        if (a) {
          if (!a.mesh || !a.mesh.primitives) continue
          if (s) {
            for (var m = 0; m < s.length; m++) {
              var g = s[m],
                y = c[g.target],
                b = y.instance_effect.url,
                w = u[b].shader,
                E = w.material
              if (a.doubleSided) {
                if (!(g.symbol in n)) {
                  var S = E.clone()
                  S.side = mono.DoubleSide, n[g.symbol] = S
                }
                E = n[g.symbol]
              }
              E.opacity = E.opacity ? E.opacity : 1, f[g.symbol] = p, h.push(E), d = E, d.name = y.name == null || y.name === '' ? y.id : y.name, p++
            }
          }
          var x = d || new mono.LambertMaterial({
              color: 14540253,
              shading: mono.FlatShading,
              side: a.doubleSided ? mono.DoubleSide : mono.FrontSide
            }),
            T = a.mesh.node3D
          if (p > 1) {
            x = new mono.ArrayMaterial(h)
            for (m = 0; m < T.faces.length; m++) {
              var N = T.faces[m]
              N.materialIndex = f[N.daeMaterial]
            }
          }
          x instanceof mono.ArrayMaterial && T.setMaterialSize(x.materials.length), T.createMaterial(x), T.matrix = e.matrix, T.matrix.decompose(T._position, T.quaternion, T.scale)
          var C = T.quaternion
          if (C) {
            var k = C.x * C.x,
              L = C.y * C.y,
              A = C.z * C.z,
              O = C.w * C.w
            T._rotation.x = Math.atan2(2 * (C.x * C.w - C.y * C.z), O - k - L + A), T._rotation.y = Math.asin(mono.Math.clamp(2 * (C.x * C.z + C.y * C.w), -1, 1)), T._rotation.z = Math.atan2(2 * (C.z * C.w - C.x * C.y), O + k - L - A)
          }
          l.push(T)
        }
      }
      for (var m = 0; m < e.nodes.length; m++) v(e.nodes[m], e)
    }

    function m() {
      var t = e.querySelectorAll('library_materials material'),
        n = {}
      if (t && t.length > 0) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          if (i) {
            var s = (new g()).parse(i)
            s && (n[s.id] = s)
          }
        }
      }
      return n
    }

    function g() {
      this.id = '', this.name = '', this.instance_effect = null
    }

    function y() {
      this.url = ''
    }

    function b() {
      this.nodes = [], this.id = '', this.name = ''
    }

    function w() {
      this.nodes = [], this.id = '', this.name = '', this.sid = '', this.type = '', this.controllers = [], this.geometries = [], this.type = '', this.layer = '', this.matrix = new mono.Mat4(), this.transforms = []
    }

    function E() {
      this.sid = '', this.type = '', this.data = []
    }

    function S() {
      this.url = '', this.instance_material = []
    }

    function x() {
      this.symbol = '', this.target = ''
    }

    function T() {
      var t = {}
      t.entity = []
      var n = e.querySelectorAll('library_geometries geometry')
      if (n && n.length > 0) {
        for (var r = 0; r < n.length; r++) {
          var i = (new N()).parse(n[r])
          i && (t[i.id] = i, t.entity.push(i))
        }
      }
      return t
    }

    function N() {
      this.id = '', this.mesh = null
    }

    function C() {
      this.sources = {}, this.primitives = [], this.vertices = null, this.node3D = null
    }

    function k(e, t) {
      var n = [e[t], e[t + 1], e[t + 2]]
      return L(n, -1), new mono.Vec3(n[0], n[1], n[2])
    }

    function L(e, t) {
      if (h.convertUpAxis !== !0 || n === h.upAxis) return
      switch (r) {
        case 'XtoY':
          var i = e[0]
          e[0] = t * e[1], e[1] = i
          break
        case 'XtoZ':
          var i = e[2]
          e[2] = e[1], e[1] = e[0], e[0] = i
          break
        case 'YtoX':
          var i = e[0]
          e[0] = e[1], e[1] = t * i
          break
        case 'YtoZ':
          var i = e[1]
          e[1] = t * e[2], e[2] = i
          break
        case 'ZtoX':
          var i = e[0]
          e[0] = e[1], e[1] = e[2], e[2] = i
          break
        case 'ZtoY':
          var i = e[1]
          e[1] = e[2], e[2] = t * i
      }
    }

    function A() {
      this.id = '', this.input = {}
    }

    function O() {
      this.semantic = '', this.offset = 0, this.source = '', this.set = 0
    }

    function M() {
      this.inputs = [], this.count = 0, this.p = [], this.material = ''
    }

    function _() {
      M.call(this), this.vcount = 3
    }

    function D() {
      this.id, this.dataType, this.technique_common = {}, this.accessor = null, this.data = []
    }

    function P() {
      this.source = '', this.count = 0, this.stride = 0, this.params = []
    }

    function H(e) {
      return e ? parseInt(e, 10) : 0
    }

    function B(e) {
      return e.replace(/^\s+/, '').replace(/\s+$/, '')
    }

    function j(e) {
      var n = []
      if (!e) return e
      e = B(e)
      if (e.length > 0) {
        var r = e.split(/\s+/)
        for (var i = 0; i < r.length; i++) {
          var s = r[i]
          s != t && s != null && parseFloat(s) != null && n.push(parseFloat(s))
        }
      }
      return n
    }

    function F(e) {
      var n = []
      if (!e) return []
      e = B(e)
      if (e.length > 0) {
        var r = e.split(/\s+/)
        for (var i = 0; i < r.length; i++) {
          var s = r[i]
          s != t && s != null && parseInt(s) != null && n.push(parseInt(s))
        }
      }
      return n
    }

    function I(e) {
      var t = []
      if (!e) return []
      e = B(e)
      if (e.length > 0) {
        var n = e.split(/\s+/)
        for (var r = 0; r < n.length; r++) t.push(n[r] == 'true' || n[r] == '1' ? !0 : !1)
      }
      return t
    }

    function q() {
      if (h.convertUpAxis !== !0 || n === h.upAxis) r = null
      else {
        switch (n) {
          case 'X':
            r = h.upAxis === 'Y' ? 'XtoY' : 'XtoZ'
            break
          case 'Y':
            r = h.upAxis === 'X' ? 'YtoX' : 'YtoZ'
            break
          case 'Z':
            r = h.upAxis === 'X' ? 'ZtoX' : 'ZtoY'
        }
      }
    }

    function R(e) {
      if (h.convertUpAxis) {
        var t = [e[0], e[4], e[8]]
        L(t, -1), e[0] = t[0], e[4] = t[1], e[8] = t[2], t = [e[1], e[5], e[9]], L(t, -1), e[1] = t[0], e[5] = t[1], e[9] = t[2], t = [e[2], e[6], e[10]], L(t, -1), e[2] = t[0], e[6] = t[1], e[10] = t[2], t = [e[0], e[1], e[2]], L(t, -1), e[0] = t[0], e[1] = t[1], e[2] = t[2], t = [e[4], e[5], e[6]], L(t, -1), e[4] = t[0], e[5] = t[1], e[6] = t[2], t = [e[8], e[9], e[10]], L(t, -1), e[8] = t[0], e[9] = t[1], e[10] = t[2], t = [e[3], e[7], e[11]], L(t, -1), e[3] = t[0], e[7] = t[1], e[11] = t[2]
      }
      return new mono.Mat4(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
    }

    function U() {
      var t = e.querySelectorAll('scene instance_visual_scene')[0]
      if (t) {
        var n = t.getAttribute('url').replace(/^#/, '')
        return i[n.length > 0 ? n : 'visual_scene0']
      }
      return null
    }

    function z() {
      var t = e.querySelectorAll('library_images image'),
        n = {}
      if (t && t.length > 0) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          if (i) {
            var s = (new W()).parse(i)
            n[s.id] = s
          }
        }
      }
      return n
    }

    function W() {
      this.id = '', this.init_from = ''
    }

    function X() {
      var t = e.querySelectorAll('library_effects effect'),
        n = {}
      if (t && t.length > 0) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r]
          if (i) {
            var s = (new V()).parse(i)
            n[s.id] = s
          }
        }
      }
      return n
    }

    function V() {
      this.id = '', this.name = '', this.shader = null, this.surface = {}, this.sampler = {}
    }

    function $(e, t) {
      this.type = e, this.effect = t, this.material = null
    }

    function J() {
      this.color = new mono.Color(), this.color.setRGB(Math.random(), Math.random(), Math.random()), this.color.a = 1, this.texture = null, this.texcoord = null, this.texOpts = null
    }

    function K(e) {
      this.effect = e, this.init_from = null, this.format = null
    }

    function Q(e) {
      this.effect = e, this.source = null, this.wrap_s = null, this.wrap_t = null, this.minfilter = null, this.magfilter = null, this.mipfilter = null
    }

    function G(n) {
      var r = e.querySelectorAll('library_nodes node')
      for (var i = 0; i < r.length; i++) {
        var s = r[i].attributes.getNamedItem('id')
        if (s && s.value === n) return r[i]
      }
      return t
    }

    function Y(e, t) {
      e.doubleSided = !1
      var n = t.querySelectorAll('extra double_sided')[0]
      n && n && parseInt(n.textContent, 10) === 1 && (e.doubleSided = !0)
    }

    function Z() {
      var t = [],
        n = e.querySelectorAll('library_lights light')
      if (n && n.length > 0) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = (new et()).parse(n)
          t.push(s)
        }
      }
      return t
    }

    function et() {
      this.id = '', this.name = '', this.technique = ''
    }
    this.id = '', this.name = '', this.type = ''
    var e = null,
      n = 'Y',
      r = null,
      i = null,
      s = {},
      o = {},
      u = {},
      a = {},
      f = '',
      l = [],
      c = {},
      h = {}
    return g.prototype.parse = function(e) {
      this.id = e.getAttribute('id'), this.name = e.getAttribute('name')
      for (var t = 0; t < e.childNodes.length; t++) {
        if (e.childNodes[t].nodeName == 'instance_effect') {
          this.instance_effect = (new y()).parse(e.childNodes[t])
          break
        }
      }
      return this
    }, y.prototype.parse = function(e) {
      return this.url = e.getAttribute('url').replace(/^#/, ''), this
    }, b.prototype.parse = function() {
      var t = e.querySelectorAll('library_visual_scenes visual_scene')
      if (!t || t.length < 0) return this
      this.id = '', this.name = ''
      for (var n = 0; n < t.length; n++) {
        var r = t[n]
        if (r && r.childNodes && r.childNodes.length > 0) {
          for (var i = 0; i < r.childNodes.length; i++) {
            var s = r.childNodes[i]
            if (s && s.nodeName) {
              switch (s.nodeName) {
                case 'node':
                  this.nodes.push((new w()).parse(s))
                  break
                default:
              }
            }
          }
        }
      }
      return this
    }, w.prototype.parse = function(e) {
      if (!e) return this
      this.id = e.getAttribute('id'), this.sid = e.getAttribute('sid'), this.name = e.getAttribute('name'), this.type = e.getAttribute('type'), this.layer = e.getAttribute('layer'), this.type = this.type == 'JOINT' ? this.type : 'NODE'
      if (e.childNodes.length > 0) {
        for (var t = 0; t < e.childNodes.length; t++) {
          var n = e.childNodes[t]
          if (n && n.nodeName) {
            switch (n.nodeName) {
              case 'node':
                this.nodes.push((new w()).parse(n))
                break
              case 'instance_camera':
                break
              case 'instance_controller':
                break
              case 'instance_geometry':
                this.geometries.push((new S()).parse(n))
                break
              case 'instance_light':
                break
              case 'instance_node':
                var r = n.getAttribute('url').replace(/^#/, ''),
                  i = G(r)
                i && this.nodes.push((new w()).parse(i))
                break
              case 'rotate':
              case 'translate':
              case 'scale':
              case 'matrix':
              case 'lookat':
              case 'skew':
                this.transforms.push((new E()).parse(n))
                break
              case 'extra':
                break
              default:
                console.log(n.nodeName)
            }
          }
        }
      }
      return this.updateMatrix(), this
    }, w.prototype.updateMatrix = function() {
      this.matrix.identity()
      for (var e = 0; e < this.transforms.length; e++) this.transforms[e].apply(this.matrix)
    }, E.prototype.parse = function(e) {
      return this.sid = e.getAttribute('sid'), this.type = e.nodeName, this.data = j(e.textContent), this.convert(), this
    }, E.prototype.convert = function() {
      switch (this.type) {
        case 'matrix':
          this.obj = R(this.data)
          break
        case 'rotate':
          this.angle = mono.Math.degToRad(this.data[3])
        case 'translate':
          L(this.data, -1), this.obj = new mono.Vec3(this.data[0], this.data[1], this.data[2])
          break
        case 'scale':
          L(this.data, 1), this.obj = new mono.Vec3(this.data[0], this.data[1], this.data[2])
          break
        default:
          console.log('Can not convert Transform of type ' + this.type)
      }
    }, E.prototype.apply = (function() {
      var e = new mono.Mat4()
      return function(t) {
        switch (this.type) {
          case 'matrix':
            t.multiply(this.obj)
            break
          case 'translate':
            t.multiply(e.makeTranslation(this.obj.x, this.obj.y, this.obj.z))
            break
          case 'rotate':
            t.multiply(e.makeRotationAxis(this.obj, this.angle))
            break
          case 'scale':
            t.scale(this.obj)
        }
      }
    }()), E.prototype.update = function(e, t) {
      var n = ['X', 'Y', 'Z', 'ANGLE']
      switch (this.type) {
        case 'matrix':
          if (!t) this.obj.copy(e)
          else if (t.length === 1) {
            switch (t[0]) {
              case 0:
                this.obj.n11 = e[0], this.obj.n21 = e[1], this.obj.n31 = e[2], this.obj.n41 = e[3]
                break
              case 1:
                this.obj.n12 = e[0], this.obj.n22 = e[1], this.obj.n32 = e[2], this.obj.n42 = e[3]
                break
              case 2:
                this.obj.n13 = e[0], this.obj.n23 = e[1], this.obj.n33 = e[2], this.obj.n43 = e[3]
                break
              case 3:
                this.obj.n14 = e[0], this.obj.n24 = e[1], this.obj.n34 = e[2], this.obj.n44 = e[3]
            }
          } else if (t.length === 2) {
            var r = 'n' + (t[0] + 1) + (t[1] + 1)
            this.obj[r] = e
          } else console.log('Incorrect addressing of matrix in transform.')
          break
        case 'translate':
        case 'scale':
          Object.prototype.toString.call(t) === '[object Array]' && (t = n[t[0]])
          switch (t) {
            case 'X':
              this.obj.x = e
              break
            case 'Y':
              this.obj.y = e
              break
            case 'Z':
              this.obj.z = e
              break
            default:
              this.obj.x = e[0], this.obj.y = e[1], this.obj.z = e[2]
          }
          break
        case 'rotate':
          Object.prototype.toString.call(t) === '[object Array]' && (t = n[t[0]])
          switch (t) {
            case 'X':
              this.obj.x = e
              break
            case 'Y':
              this.obj.y = e
              break
            case 'Z':
              this.obj.z = e
              break
            case 'ANGLE':
              this.angle = mono.Math.degToRad(e)
              break
            default:
              this.obj.x = e[0], this.obj.y = e[1], this.obj.z = e[2], this.angle = mono.Math.degToRad(e[3])
          }
      }
    }, S.prototype.parse = function(e) {
      this.url = e.getAttribute('url').replace(/^#/, ''), this.instance_material = []
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        if (n.nodeName == 'bind_material') {
          var r = n.querySelectorAll('instance_material')
          for (var i = 0; i < r.length; i++) {
            var s = r[i]
            this.instance_material.push((new x()).parse(s))
          }
          break
        }
      }
      return this
    }, x.prototype.parse = function(e) {
      return this.symbol = e.getAttribute('symbol'), this.target = e.getAttribute('target').replace(/^#/, ''), this
    }, N.prototype.parse = function(e) {
      this.id = e.getAttribute('id')
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n && n.nodeName == 'mesh') {
          var r = new C(),
            i = r.parse(n)
          i && (this.mesh = i)
        }
      }
      return this
    }, C.prototype.parse = function(e) {
      if (e && e.childNodes && e.childNodes.length > 0) {
        for (var t = 0; t < e.childNodes.length; t++) {
          var n = e.childNodes[t]
          switch (n.nodeName) {
            case 'source':
              var r = n.getAttribute('id')
              this.sources[r] = (new D()).parse(n)
              break
            case 'vertices':
              var i = new A()
              this.vertices = i.parse(n)
              break
            case 'polygons':
              var s = (new M()).parse(n)
              s && this.primitives.push(s)
              break
            case 'triangles':
              var o = (new _()).parse(n)
              o && this.primitives.push(o)
              break
            case 'polylist':
              var u = null
              this.primitives.push(u)
              break
            default:
          }
        }
      }
      this.node3D = new mono.Entity()
      var a = null
      this.vertices && this.vertices.input && this.vertices.input.POSITION && (a = this.sources[this.vertices.input.POSITION.source].data)
      for (t = 0; t < this.primitives.length; t++) {
        var f = this.primitives[t]
        f.setVertices(this.vertices), this.handlePrimitive(f, this.node3D)
      }
      for (t = 0; t < a.length; t += 3) this.node3D.vertices.push(k(a, t).clone())
      return this.node3D.computeFaceNormals(), this
    }, C.prototype.handlePrimitive = function(e, n) {
      var r, i, s = e.p,
        o = e.inputs,
        u, a, f, l, c, p = 0,
        d = 3,
        v = 0,
        m = []
      for (r = 0; r < o.length; r++) {
        u = o[r]
        var g = u.offset + 1
        v = v < g ? g : v
        switch (u.semantic) {
          case 'TEXCOORD':
            m.push(u.set)
        }
      }
      for (var y = 0; y < s.length; ++y) {
        var b = s[y],
          w = 0
        while (w < b.length) {
          var E = [],
            S = [],
            x = null,
            T = []
          e.vcount ? d = e.vcount.length ? e.vcount[p++] : e.vcount : d = b.length / v
          for (r = 0; r < d; r++) {
            for (i = 0; i < o.length; i++) {
              u = o[i], l = this.sources[u.source], a = b[w + r * v + u.offset], c = l.accessor.params.length, f = a * c
              switch (u.semantic) {
                case 'VERTEX':
                  E.push(a)
                  break
                case 'NORMAL':
                  S.push(k(l.data, f))
                  break
                case 'TEXCOORD':
                  x = x || {}, x[u.set] === t && (x[u.set] = []), x[u.set].push(new mono.Vec2(l.data[f], l.data[f + 1]))
                  break
                case 'COLOR':
                  T.push((new mono.Color()).setRGB(l.data[f], l.data[f + 1], l.data[f + 2]))
                  break
                default:
              }
            }
          }
          if (S.length == 0) {
            u = this.vertices.input.NORMAL
            if (u) {
              l = l[u.source], c = l.accessor.params.length
              for (var N = 0, C = E.length; N < C; N++) S.push(k(l.data, E[N] * c))
            } else n.calcNormals = !0
          }
          if (!x) {
            x = {}, u = this.vertices.input.TEXCOORD
            if (u) {
              m.push(u.set), l = sources[u.source], c = l.accessor.params.length
              for (var N = 0, C = E.length; N < C; N++) f = E[N] * c, x[u.set] === t && (x[u.set] = []), x[u.set].push(new mono.Vec2(l.data[f], 1 - l.data[f + 1]))
            }
          }
          if (T.length == 0) {
            u = this.vertices.input.COLOR
            if (u) {
              l = sources[u.source], c = l.accessor.params.length
              for (var N = 0, C = E.length; N < C; N++) f = E[N] * c, T.push((new mono.Color()).setRGB(l.data[f], l.data[f + 1], l.data[f + 2]))
            }
          }
          var L = null,
            A = [],
            O, M
          if (d === 3) A.push(new mono.Face3(E[0], E[1], E[2], S, T.length ? T : new mono.Color(16711680)))
          else if (d === 4) A.push(new mono.Face3(E[0], E[1], E[3], [S[0], S[1], S[3]], T.length ? [T[0], T[1], T[3]] : new mono.Color(16711680))), A.push(new mono.Face3(E[1], E[2], E[3], [S[1], S[2], S[3]], T.length ? [T[1], T[2], T[3]] : new mono.Color(16711680)))
          else if (d > 4 && h.subdivideFaces) {
            var _ = T.length ? T : new mono.Color(),
              D, P, H, B, j, F
            for (i = 1; i < d - 1;) A.push(new mono.Face3(E[0], E[i], E[i + 1], [S[0], S[i++], S[i]], _))
          }
          if (A.length) {
            for (var N = 0, C = A.length; N < C; N++) {
              L = A[N], L.daeMaterial = e.material, n.faces.push(L)
              for (i = 0; i < m.length; i++) O = x[m[i]], d > 4 ? M = [O[0], O[N + 1], O[N + 2]] : d === 4 ? N === 0 ? M = [O[0], O[1], O[3]] : M = [O[1].clone(), O[2], O[3].clone()] : M = [O[0], O[1], O[2]], n.uvs === t && (n.uvs = []), n.uvs.push(M)
            }
          } else console.log('dropped face with vcount ' + d + ' for geometry with id: ' + n.id)
          w += v * d
        }
      }
    }, A.prototype.parse = function(e) {
      if (e) {
        this.id = e.getAttribute('id')
        if (e.childNodes.length > 0) {
          for (var t = 0; t < e.childNodes.length; t++) {
            var n = e.childNodes[t]
            if (n && n.nodeName) {
              switch (n.nodeName) {
                case 'input':
                  var r = (new O()).parse(n)
                  this.input[r.semantic] = r
                  break
                default:
              }
            }
          }
        }
      }
      return this
    }, O.prototype.parse = function(e) {
      return e && (this.semantic = e.getAttribute('semantic'), this.offset = H(e.getAttribute('offset')), this.set = H(e.getAttribute('set')), this.source = e.getAttribute('source').replace(/^#/, ''), this.semantic == 'TEXCOORD' && this.set < 0 && (this.set = 0)), this
    }, M.prototype.parse = function(e) {
      if (e) {
        this.count = e.getAttribute('count'), this.material = e.getAttribute('material')
        if (e.childNodes.length > 0) {
          for (var t = 0; t < e.childNodes.length; t++) {
            var n = e.childNodes[t]
            if (n && n.nodeName) {
              switch (n.nodeName) {
                case 'input':
                  var r = (new O()).parse(n)
                  r && this.inputs.push(r)
                  break
                case 'p':
                  this.p.push(F(n.textContent))
                  break
                default:
              }
            }
          }
        }
      }
      return this
    }, M.prototype.setVertices = function(e) {
      for (var t = 0; t < this.inputs.length; t++) this.inputs[t].source == e.id && (this.inputs[t].source = e.input.POSITION.source)
    }, _.prototype = Object.create(M.prototype), D.prototype.parse = function(e) {
      if (!e) return this
      this.id = e.getAttribute('id')
      if (e.childNodes.length > 0) {
        for (var t = 0; t < e.childNodes.length; t++) {
          var n = e.childNodes[t]
          if (n && n.nodeName) {
            switch (n.nodeName) {
              case 'float_array':
                this.dataType = n.nodeName, this.data = j(n.textContent)
                break
              case 'bool_array':
                this.dataType = n.nodeName, this.data = I(n.textContent)
                break
              case 'int_array':
                this.data = F(n.textContent), this.dataType = n.nodeName
                break
              case 'technique_common':
                if (n.childNodes && n.childNodes.length > 0) {
                  for (var r = 0; r < n.childNodes.length; r++) {
                    var i = n.childNodes[r]
                    if (i && i.nodeName) {
                      switch (i.nodeName) {
                        case 'accessor':
                          var s = (new P()).parse(i)
                          s.source && (this.technique_common[s.source] = s, this.accessor = s)
                          break
                        default:
                      }
                    }
                  }
                }
                break
              default:
            }
          }
        }
      }
      return this
    }, D.prototype.read = function() {
      var e = [],
        t = this.accessor.params[0]
      switch (t.type) {
        case 'IDREF':
        case 'Name':
        case 'name':
        case 'float':
          return this.data
        case 'float4x4':
          for (var n = 0; n < this.data.length; n += 16) {
            var r = this.data.slice(n, n + 16),
              i = R(r)
            e.push(i)
          }
          break
        default:
          console.log('ColladaLoader: Source: Read dont know how to read ' + t.type + '.')
      }
      return e
    }, P.prototype.parse = function(e) {
      if (!e) return this
      this.source = e.getAttribute('source'), this.count = H(e.getAttribute('count')), this.stride = H(e.getAttribute('stride'))
      if (e.childNodes.length > 0) {
        for (var t = 0; t < e.childNodes.length; t++) {
          var n = e.childNodes[t]
          if (n && n.nodeName) {
            switch (n.nodeName) {
              case 'param':
                var r = {}
                r.name = n.getAttribute('name'), r.type = n.getAttribute('type'), this.params.push(r)
                break
              default:
            }
          }
        }
      }
      return this
    }, W.prototype.parse = function(e) {
      this.id = e.getAttribute('id')
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        n.nodeName == 'init_from' && (this.init_from = n.textContent)
      }
      return this
    }, V.prototype.create = function() {
      if (this.shader == null) return null
    }, V.prototype.parse = function(e) {
      this.id = e.getAttribute('id'), this.name = e.getAttribute('name'), Y(this, e), this.shader = null
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'profile_COMMON':
            this.parseTechnique(this.parseProfileCOMMON(n))
            break
          default:
        }
      }
      return this
    }, V.prototype.parseNewparam = function(e) {
      var t = e.getAttribute('sid')
      for (var n = 0; n < e.childNodes.length; n++) {
        var r = e.childNodes[n]
        if (r.nodeType != 1) continue
        switch (r.nodeName) {
          case 'surface':
            this.surface[t] = (new K(this)).parse(r)
            break
          case 'sampler2D':
            this.sampler[t] = (new Q(this)).parse(r)
            break
          case 'extra':
            break
          default:
            console.log(r.nodeName)
        }
      }
    }, V.prototype.parseProfileCOMMON = function(e) {
      var t
      for (var n = 0; n < e.childNodes.length; n++) {
        var r = e.childNodes[n]
        if (r.nodeType != 1) continue
        switch (r.nodeName) {
          case 'profile_COMMON':
            this.parseProfileCOMMON(r)
            break
          case 'technique':
            t = r
            break
          case 'newparam':
            this.parseNewparam(r)
            break
          case 'image':
            var i = (new W()).parse(r)
            a[i.id] = i
            break
          case 'extra':
            break
          default:
            console.log(r.nodeName)
        }
      }
      return t
    }, V.prototype.parseTechnique = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'constant':
          case 'lambert':
          case 'blinn':
          case 'phong':
            this.shader = (new $(n.nodeName, this)).parse(n)
            break
          case 'extra':
            this.parseExtra(n)
            break
          default:
        }
      }
    }, V.prototype.parseExtra = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'technique':
            this.parseExtraTechnique(n)
            break
          default:
        }
      }
    }, V.prototype.parseExtraTechnique = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'bump':
            this.shader.parse(n)
            break
          default:
        }
      }
    }, $.prototype.parse = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'ambient':
          case 'emission':
          case 'diffuse':
          case 'specular':
          case 'transparent':
            this[n.nodeName] = (new J()).parse(n)
            break
          case 'bump':
            var r = n.getAttribute('bumptype')
            r ? r.toLowerCase() === 'heightfield' ? this.bump = (new J()).parse(n) : r.toLowerCase() === 'normalmap' ? this.normal = (new J()).parse(n) : (console.error("Shader.prototype.parse: Invalid value for attribute 'bumptype' (" + r + ") - valid bumptypes are 'HEIGHTFIELD' and 'NORMALMAP' - defaulting to 'HEIGHTFIELD'"), this.bump = (new J()).parse(n)) : (console.warn("Shader.prototype.parse: Attribute 'bumptype' missing from bump node - defaulting to 'HEIGHTFIELD'"), this.bump = (new J()).parse(n))
            break
          case 'shininess':
          case 'reflectivity':
          case 'index_of_refraction':
          case 'transparency':
            var i = n.querySelectorAll('float')
            i.length > 0 && (this[n.nodeName] = parseFloat(i[0].textContent))
            break
          default:
        }
      }
      return this.create(), this
    }, $.prototype.create = function() {
      var e = {},
        n = !1
      if (this.transparency !== t && this.transparent !== t) {
        var r = this.transparent,
          i = (this.transparent.color.r + this.transparent.color.g + this.transparent.color.b) / 3 * this.transparency
        i > 0 && (n = !0, e.transparent = !0, e.opacity = 1 - i)
      }
      var s = {
        diffuse: 'map',
        ambient: 'lightMap',
        specular: 'specularMap',
        emission: 'emissionMap',
        bump: 'bumpMap',
        normal: 'normalMap'
      }
      for (var o in this) {
        switch (o) {
          case 'ambient':
          case 'emission':
          case 'diffuse':
          case 'specular':
          case 'bump':
          case 'normal':
            var u = this[o]
            if (u instanceof J) {
              if (u.isTexture()) {
                var l = u.texture,
                  c = this.effect.sampler[l],
                  p = null
                if (c !== t && c.source !== t) {
                  var d = this.effect.surface[c.source]
                  p = a[d.init_from]
                } else p = a[l]
                if (p) {
                  var v = f + p.init_from,
                    m = new Image()
                  m.loaded = !1
                  var g = new mono.Texture()
                  g._imageSrc = v, g._image = m, g.setImage(v), g.wrapS = u.texOpts.wrapU ? mono.RepeatWrapping : mono.ClampToEdgeWrapping, g.wrapT = u.texOpts.wrapV ? mono.RepeatWrapping : mono.ClampToEdgeWrapping, g.offsetX = u.texOpts.offsetU, g.offsetY = u.texOpts.offsetV, g.repeatX = u.texOpts.repeatU, g.repeatY = u.texOpts.repeatV, e[s[o]] = g, o === 'emission' && (e.emissive = 16777215)
                }
              } else if (o === 'diffuse' || !n) o === 'emission' ? e.emissive = u.color.getHex() : e[o] = u.color.getHex()
            }
            break
          case 'shininess':
            e[o] = this[o]
            break
          case 'reflectivity':
            e[o] = this[o], e[o] > 0 && (e.envMap = h.defaultEnvMap), e.combine = mono.MixOperation
            break
          case 'index_of_refraction':
            e.refractionRatio = this[o], this[o] !== 1 && (e.envMap = h.defaultEnvMap)
            break
          case 'transparency':
            break
          default:
        }
      }
      e.shading = mono.SmoothShading, e.side = this.effect.doubleSided ? mono.DoubleSide : mono.FrontSide
      switch (this.type) {
        case 'constant':
          e.emissive != t && (e.color = e.emissive), this.material = new mono.EntityMaterial(e)
          break
        case 'phong':
        case 'blinn':
          e.diffuse != t && (e.color = e.diffuse), this.material = new mono.EntityMaterial(e)
          break
        case 'lambert':
        default:
          e.diffuse != t && (e.color = e.diffuse), this.material = new mono.LambertMaterial(e)
      }
      return this.material
    }, J.prototype.isColor = function() {
      return this.texture == null
    }, J.prototype.isTexture = function() {
      return this.texture != null
    }, J.prototype.parse = function(e) {
      e.nodeName == 'transparent' && (this.opaque = e.getAttribute('opaque'))
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'color':
            var r = j(n.textContent)
            this.color = new mono.Color(), this.color.setRGB(r[0], r[1], r[2]), this.color.a = r[3]
            break
          case 'texture':
            this.texture = n.getAttribute('texture'), this.texcoord = n.getAttribute('texcoord'), this.texOpts = {
              offsetU: 0,
              offsetV: 0,
              repeatU: 1,
              repeatV: 1,
              wrapU: 1,
              wrapV: 1
            }, this.parseTexture(n)
            break
          default:
        }
      }
      return this
    }, J.prototype.parseTexture = function(e) {
      if (!e.childNodes) return this
      e.childNodes[1] && e.childNodes[1].nodeName === 'extra' && (e = e.childNodes[1], e.childNodes[1] && e.childNodes[1].nodeName === 'technique' && (e = e.childNodes[1]))
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        switch (n.nodeName) {
          case 'offsetU':
          case 'offsetV':
          case 'repeatU':
          case 'repeatV':
            this.texOpts[n.nodeName] = parseFloat(n.textContent)
            break
          case 'wrapU':
          case 'wrapV':
            n.textContent.toUpperCase() === 'TRUE' ? this.texOpts[n.nodeName] = 1 : this.texOpts[n.nodeName] = parseInt(n.textContent)
            break
          default:
            this.texOpts[n.nodeName] = n.textContent
        }
      }
      return this
    }, K.prototype.parse = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'init_from':
            this.init_from = n.textContent
            break
          case 'format':
            this.format = n.textContent
            break
          default:
            console.log('unhandled Surface prop: ' + n.nodeName)
        }
      }
      return this
    }, Q.prototype.parse = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'source':
            this.source = n.textContent
            break
          case 'minfilter':
            this.minfilter = n.textContent
            break
          case 'magfilter':
            this.magfilter = n.textContent
            break
          case 'mipfilter':
            this.mipfilter = n.textContent
            break
          case 'wrap_s':
            this.wrap_s = n.textContent
            break
          case 'wrap_t':
            this.wrap_t = n.textContent
            break
          default:
            console.log('unhandled Sampler2D prop: ' + n.nodeName)
        }
      }
      return this
    }, et.prototype.parse = function(e) {
      this.id = e.getAttribute('id'), this.name = e.getAttribute('name')
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        if (n.nodeType != 1) continue
        switch (n.nodeName) {
          case 'technique_common':
            this.parseCommon(n)
            break
          case 'technique':
            this.parseTechnique(n)
            break
          default:
        }
      }
      return this
    }, et.prototype.parseCommon = function(e) {
      for (var t = 0; t < e.childNodes.length; t++) {
        switch (e.childNodes[t].nodeName) {
          case 'directional':
          case 'point':
          case 'spot':
          case 'ambient':
            this.technique = e.childNodes[t].nodeName
            var n = e.childNodes[t]
            for (var r = 0; r < n.childNodes.length; r++) {
              var i = n.childNodes[r]
              switch (i.nodeName) {
                case 'color':
                  var s = j(i.textContent)
                  this.color = new mono.Color(0), this.color.setRGB(s[0], s[1], s[2]), this.color.a = s[3]
                  break
                case 'falloff_angle':
                  this.falloff_angle = parseFloat(i.textContent)
                  break
                case 'quadratic_attenuation':
                  var o = parseFloat(i.textContent)
                  this.distance = o ? Math.sqrt(1 / o) : 0
              }
            }
        }
      }
      return this
    }, et.prototype.parseTechnique = function(e) {
      this.profile = e.getAttribute('profile')
      for (var t = 0; t < e.childNodes.length; t++) {
        var n = e.childNodes[t]
        switch (n.nodeName) {
          case 'intensity':
            this.intensity = parseFloat(n.textContent)
        }
      }
      return this
    }, {
      load: p,
      parse: d,
      geometries: s,
      options: h
    }
  }, n.DataBox = function(e) {
    n.DataBox.superClass.constructor.apply(this, arguments), arguments.length === 1 && (this._name = e), this._dataList = new N(), this._dataMap = {}, this._rootList = new N(), this._rootMap = {}, this._clientMap = {}, this._lightList = new N(), this._billboardList = new N(), this._nodeList = new N(), this._annotationList = new N(), this._particleList = new N(), this.nodes = [], this.particles = [], this.billboards = [], this._dataBoxChangeDispatcher = new n.EventDispatcher(), this._dataPropertyChangeDispatcher = new n.EventDispatcher(), this._groupLists = {}, this.selection = new N(), this instanceof n.AlarmBox || (this._selectionModel = new n.SelectionModel(this), this._alarmBox = new n.AlarmBox(this), this._alarmStatePropagator = new n.AlarmStatePropagator(this), this._alarmStatePropagator.setEnable(!0)), this.batch = !1, this._clientMap = {}
  }, n.extend(n.DataBox, n.PropertyChangeDispatcher, {
    constructor: n.DataBox,
    className: 'TGL.DataBox',
    ___accessor: ['name'],
    add: function(e, t) {
      if (!e) return
      arguments.length === 1 && (t = -1)
      var r = e.getId()
      if (this._dataMap.hasOwnProperty(r)) {
        if (this._dataMap[r] !== e) throw "Data with ID '" + r + "' already exists"
        return
      }
      this._dataMap[r] = e, this._dataList.add(e), e.getParent() || (this._rootMap[r] = e, t >= 0 ? this._rootList.add(e, t) : this._rootList.add(e)), e instanceof n.Billboard ? this._billboardList.add(e) : e instanceof n.Node ? this._nodeList.add(e) : e instanceof n.Particle ? this._particleList.add(e) : e instanceof n.Annotation ? this._annotationList.add(e) : e instanceof n.Light && this._lightList.add(e), this._dataBoxChangeDispatcher.fire({
        kind: 'add',
        data: e,
        source: this
      }), e.getGroupId() && this.groupElements(e, null, e.getGroupId()), e.addPropertyChangeListener(this.handleDataPropertyChange, this), e._selected = !1
    },
    onPropertyChange: function() {},
    firePropertyChange: function() {},
    addByDescendant: function(e, t) {
      if (t && t(e) == 0) return
      e && (this.add(e), e.getChildren().size() > 0 && e.getChildren().forEach(function(e) {
        this.addByDescendant(e, t)
      }, this))
    },
    getAlarmBox: function() {
      return this._alarmBox
    },
    removeById: function(e, t) {
      var n = this.getDataById(e)
      this.remove(n, t)
    },
    remove: function(e, t) {
      if (!e) return
      if (!this._dataMap.hasOwnProperty(e.getId())) return
      e instanceof n.Link && (e.setFromNode(null), e.setToNode(null)), e instanceof n.Node && e.getLinks() && e.getLinks().toList().forEach(function(e) {
        this.remove(e)
      }, this), t && (e.getChildren().forEach(function(t) {
        e.removeChild(t)
      }, this), e.getParent() && e.getParent().removeChild(e)), this._dataList.remove(e)
      var r = e._id
      delete this._dataMap[r], this._rootMap[r] && (delete this._rootMap[r], this._rootList.remove(e)), e instanceof n.Billboard ? this._billboardList.remove(e) : e instanceof n.Node ? this._nodeList.remove(e) : e instanceof n.Particle ? this._particleList.remove(e) : e instanceof n.Annotation ? this._annotationList.remove(e) : e instanceof n.Light && this._lightList.remove(e), e.getGroupId() && this.groupElements(e, e.getGroupId(), null), e.removePropertyChangeListener(this.handleDataPropertyChange, this), this._dataBoxChangeDispatcher.fire({
        kind: 'remove',
        data: e,
        source: this
      }), this._selectionModel && this._selectionModel.removeSelection(e)
    },
    removeByDescendant: function(e, t, n) {
      if (!e) return
      var r = this
      e.hasChildren() && e.getChildren().forEachReverse(function(e) {
        r.removeByDescendant(e, t, n)
      })
      if (n && n(e) == 0) return
      this.remove(e, t)
    },
    containsById: function(e) {
      return this._dataMap.hasOwnProperty(e)
    },
    contains: function(e) {
      return e ? this._dataMap[e._id] === e : !1
    },
    lightsSize: function() {
      return this._lightList.size()
    },
    getLights: function() {
      return this._lightList
    },
    getLightsArray: function() {
      return this._lightList.toArray()
    },
    getAnnotations: function() {
      return this._annotationList
    },
    clear: function(e) {
      if (this._dataList.size() > 0) {
        var t = this._dataList.toList(function(t) {
          return !this._lightList.contains(t) || e
        }, this)
        t.forEach(function(e) {
          e.removePropertyChangeListener(this.handleDataPropertyChange, this)
        }, this), this._dataList.clear(), this._dataMap = {}, this._rootList.clear(), this._rootMap = {}, this._nodeList.clear(), this._billboardList.clear()
        if (e) this._lightList.clear()
        else {
          var n = this
          this._lightList.forEach(function(e) {
            n._dataList.add(e)
            var t = e.getId()
            n._dataMap[t] = e, e.getParent() == null && (n._rootList.add(e), n._rootMap[t] = e)
          })
        }
        this._dataBoxChangeDispatcher.fire({
          kind: 'clear',
          datas: t
        }), this.clearSelection()
      }
    },
    startBatch: function() {
      this.batch = !0
    },
    endBatch: function() {
      this.batch = !1, this._dataBoxChangeDispatcher.fire({
        kind: 'batchEnd'
      })
    },
    removeSelection: function() {
      var e = this._selectionModel.toSelection()
      e.forEach(function(e) {
        this.remove(e)
      }, this)
    },
    clearSelection: function() {
      this._selectionModel && this._selectionModel.clearSelection()
    },
    clearEditing: function() {
      this._nodeList.forEach(function(e) {
        e.editing = !1
      }), this._billboardList.forEach(function(e) {
        e.editing = !1
      })
    },
    getDataById: function(e) {
      return this._dataMap[e]
    },
    groupElements: function(e, t, n) {
      var r
      t && (r = this._groupLists[t], r && (r.remove(e), r.isEmpty() && delete this._groupLists[t])), n && (r = this._groupLists[n], r == null && (r = new N(), this._groupLists[n] = r), r.contains(e) || r.add(e))
    },
    synchronizeGroup: function(e, t, r, i) {
      if (this.isAdjustingGroup) return
      this.isAdjustingGroup = !0
      var s = e.getGroupId(),
        o = new n.Vec3()
      if (s) {
        var u = this._groupLists[s]
        u && u.size() > 1 && u.forEach(function(s) {
          s !== e && !s.isDescendantOf(e) && !e.isDescendantOf(s) && (o.subVectors(r, t), s[n.setter(i)](s[n.getter(i)]().clone().add(o)))
        })
      }
      this.isAdjustingGroup = !1
    },
    handleDataPropertyChange: function(e) {
      var t = e.source
      if (e.property === 'parent') {
        var n = t.getId()
        t.getParent() ? this._rootMap[n] && (delete this._rootMap[n], this._rootList.remove(t)) : this._rootMap[n] || (this._rootMap[n] = t, this._rootList.add(t))
      } else if (e.property === 'groupId') {
        var r = e.oldValue,
          i = e.newValue
        this.groupElements(t, r, i)
      } else e.property === 'position' || e.property === 'scale' || e.property === 'rotation' ? this.synchronizeGroup(t, e.oldValue, e.newValue, e.property) : e.property === 'selected' && (t._selected ? this._selectionModel.appendSelection(t) : this._selectionModel.removeSelection(t))
      this.onDataPropertyChanged(t, e), this._dataPropertyChangeDispatcher.fire(e)
    },
    onDataPropertyChanged: function(e, t) {},
    addDataBoxChangeListener: function(e, t, n) {
      this._dataBoxChangeDispatcher.add(e, t, n)
    },
    removeDataBoxChangeListener: function(e, t) {
      this._dataBoxChangeDispatcher.remove(e, t)
    },
    addDataPropertyChangeListener: function(e, t, n) {
      this._dataPropertyChangeDispatcher.add(e, t, n)
    },
    removeDataPropertyChangeListener: function(e, t) {
      this._dataPropertyChangeDispatcher.remove(e, t)
    },
    allocateLights: function() {
      var e, t, r, i, s, o, u, r
      i = s = o = u = 0
      var a = this._lightList
      for (e = 0, t = a.size(); e < t; e++) {
        r = a.get(e)
        if (r.onlyShadow) continue
        r instanceof n.DirectionalLight && i++, r instanceof n.PointLight && s++, r instanceof n.SpotLight && o++
      }
      return {
        directional: i,
        point: s,
        spot: o,
        hemi: u
      }
    },
    allocateShadows: function() {
      var e, t, r, i = 0,
        s = this._lightList
      for (e = 0, t = s.size(); e < t; e++) {
        r = s.get(e)
        if (!r.castShadow) continue
        r instanceof n.SpotLight && i++, r instanceof n.DirectionalLight && !r.shadowCascade && i++
      }
      return i
    },
    allocatePointShadows: function() {
      var e, t, r, i = 0,
        s = this._lightList
      for (e = 0, t = s.size(); e < t; e++) {
        r = s.get(e)
        if (!r.castShadow) continue
        r instanceof n.PointLight && i++
      }
      return i
    },
    getSelectionModel: function() {
      return this._selectionModel
    },
    size: function() {
      return this._dataList.size()
    },
    isEmpty: function() {
      return this._dataList.isEmpty()
    },
    getLimit: function() {
      return this._limit
    },
    setLimit: function(e) {
      var t = this._limit
      this._limit = e, this.firePropertyChange('limit', t, e), this._checkLimit()
    },
    _checkLimit: function() {
      this._limit >= 0 && this.size() > this._limit && this.removeFirst(this.size() - this._limit)
    },
    removeFirst: function(e) {
      arguments.length === 0 && (e = 1)
      while (e > 0 && this._dataList.size() > 0) {
        var t = this._dataList.get(0)
        this.remove(t), e--
      }
    },
    getSiblings: function(e) {
      if (!this.contains(e)) throw e + " dosen't belong to this dataBox"
      var t = e.getParent()
      return t ? t.getChildren() : this._rootList
    },
    getRoots: function() {
      return this._rootList
    },
    getSiblingIndex: function(e) {
      return e.getParent() ? e.getParent().getChildren().indexOf(e) : this._rootList.indexOf(e)
    },
    getNodes: function() {
      return this._nodeList
    },
    getBillboards: function() {
      return this._billboardList
    },
    getDatas: function() {
      return this._dataList
    },
    getDataAt: function(e) {
      return this._dataList.get(e)
    },
    toDatas: function(e, t) {
      return this._dataList.toList(e, t)
    },
    forEach: function(e, t) {
      this._dataList.forEach(e, t)
    },
    forEachReverse: function(e, t) {
      this._dataList.forEachReverse(e, t)
    },
    forEachByDepthFirst: function(e, t, n) {
      if (t) this._depthFirst(e, t, n)
      else {
        var r = this._rootList.size()
        for (var i = 0; i < r; i++) {
          var s = this._rootList.get(i)
          if (this._depthFirst(e, s, n) === !1) return
        }
      }
    },
    _depthFirst: function(e, t, n) {
      var r = t.getChildrenSize()
      for (var i = 0; i < r; i++) {
        var s = t.getChildAt(i)
        if (this._depthFirst(e, s, n) === !1) return !1
      }
      if (n) {
        if (e.call(n, t) === !1) return !1
      } else if (e(t) === !1) return !1
    },
    forEachByBreadthFirst: function(e, t, n) {
      var r = new N()
      t ? r.add(t) : this._rootList.forEach(r.add, r)
      while (r.size() > 0) {
        t = r.removeAt(0), t.getChildren().forEach(r.add, r)
        if (n) {
          if (e.call(n, t) === !1) return
        } else if (e(t) === !1) return
      }
    },
    getAlarmStatePropagator: function() {
      return this._alarmStatePropagator
    },
    setAlarmStatePropagator: function(e) {
      if (this._alarmStatePropagator == e) return
      this._alarmStatePropagator && this._alarmStatePropagator.setEnable(!1), this._alarmStatePropagator = e, this._alarmStatePropagator.setEnable(!0)
    },
    setClient: function(e, t) {
      if (e == null) return this
      this._clientMap == null && (this._clientMap = new Object())
      var n = this._clientMap[e]
      if (n === t) return
      return t == null ? delete this._clientMap[e] : this._clientMap[e] = t, this._clientMap[e] = t, this.firePropertyChange('C:' + e, n, t), this
    },
    getClient: function(e) {
      return this._clientMap[e]
    }
  }), n.QuickFinder = function(e, t, r, i, s) {
    this._map = {}
    if (!e) throw 'dataBox can not be null'
    if (!t) throw 'propertyName can not be null'
    this._dataBox = e, this._propertyName = t, this._propertyType = r || 'accessor', this._propertyType === 'accessor' && (this._getter = n.getter(t)), this._valueFunction = i || this.getValue, this._filterFunction = s || this.isInterested, this._dataBox.forEach(this._addData, this), this._dataBox.addDataBoxChangeListener(this.handleDataBoxChange, this, !0), this._dataBox.addDataPropertyChangeListener(this.handleDataPropertyChange, this, !0)
  }, n.extend(n.QuickFinder, Object, {
    _NULL_: 'mono-null-key',
    getValueFunction: function() {
      return this._valueFunction
    },
    getFilterFunction: function() {
      return this._filterFunction
    },
    handleDataBoxChange: function(e) {
      e.kind === 'add' ? this._addData(e.data) : e.kind === 'remove' ? this._removeData(e.data) : e.kind === 'clear' && (this._map = {})
    },
    handleDataPropertyChange: function(e) {
      if (!this._filterFunction.call(this, e.source)) return
      if (this._propertyType !== 'accessor' || this._propertyName !== e.property) {
        if (this._propertyType !== 'style' || !e.source.IStyle || 'S:' + this._propertyName !== e.property) {
          if (this._propertyType !== 'client' || 'C:' + this._propertyName !== e.property) return
        }
      }
      var t = this._getMap(e.oldValue)
      t && t.remove(e.source), this._addData(e.source)
    },
    _getMap: function(e) {
      return e = e == null ? this._NULL_ : e, this._map[e]
    },
    find: function(e) {
      var t = this._getMap(e)
      return t ? t.toList() : new N()
    },
    findFirst: function(e) {
      var t = this._getMap(e)
      return !t || t.isEmpty() ? null : t.get(0)
    },
    _addData: function(e) {
      if (!this._filterFunction.call(this, e)) return
      var t = this._valueFunction.call(this, e),
        n = this._getMap(t)
      n || (n = new N(), t = t == null ? this._NULL_ : t, this._map[t] = n), n.add(e)
    },
    _removeData: function(e) {
      if (!this._filterFunction.call(this, e)) return
      var t = this._valueFunction.call(this, e),
        n = this._getMap(t)
      n && (n.remove(e), n.isEmpty() && (t = t == null ? this._NULL_ : t, delete this._map[t]))
    },
    dispose: function() {
      this._dataBox.removeDataBoxChangeListener(this.handleDataBoxChange, this), this._dataBox.removeDataPropertyChangeListener(this.handleDataPropertyChange, this), delete this._dataBox
    },
    getDataBox: function() {
      return this._dataBox
    },
    getPropertyType: function() {
      return this._propertyType
    },
    getPropertyName: function() {
      return this._propertyName
    },
    isInterested: function(e) {
      return this._propertyType === 'style' && !e.IStyle ? !1 : this._propertyType === 'accessor' && this._valueFunction === this.getValue && !e[this._getter] ? !1 : !0
    },
    getValue: function(e) {
      return this._propertyType === 'accessor' ? e[this._getter]() : this._propertyType === 'style' && e.getStyle ? e.getStyle(this._propertyName) : this._propertyType === 'client' && e.getClient ? e.getClient(this._propertyName) : null
    }
  }), n.SelectionModel = function(e) {
    n.SelectionModel.superClass.constructor.apply(this, arguments), this._selectionMode = 'multipleSelection', this._selectionList = new N(), this._selectionChangeDispatcher = new n.EventDispatcher(), this._selectionMap = {}, this._setDataBox(e)
  }, n.extend(n.SelectionModel, n.PropertyChangeDispatcher, {
    getSelectionMode: function() {
      return this._selectionMode
    },
    setSelectionMode: function(e) {
      if (this._selectionMode === e) return
      if (e !== 'noneSelection' && e !== 'singleSelection' && e !== 'multipleSelection') return
      this.clearSelection()
      var t = this._selectionMode
      this._selectionMode = e, this.firePropertyChange('selectionMode', t, this._selectionMode)
    },
    getDataBox: function() {
      return this._dataBox
    },
    _setDataBox: function(e) {
      if (!e) throw 'dataBox can not be null'
      if (this._dataBox === e) return
      this._dataBox && (this.clearSelection(), this._dataBox.removeDataBoxChangeListener(this.handleDataBoxChange, this))
      var t = this._dataBox
      this._dataBox = e, this._dataBox.addDataBoxChangeListener(this.handleDataBoxChange, this, !0), this.firePropertyChange('dataBox', t, this._dataBox)
    },
    dispose: function() {
      this.clearSelection(), this._dataBox.removeDataBoxChangeListener(this.handleDataBoxChange, this)
    },
    handleDataBoxChange: function(e) {
      if (e.kind === 'remove') {
        var t = e.data
        this.contains(t) && (this._selectionList.remove(t), delete this._selectionMap[t.getId()], this.fireSelectionChange('remove', new N(t))), t._selected = !1
      } else e.kind === 'clear' && this.clearSelection()
    },
    getFilterFunction: function() {
      return this._filterFunction
    },
    setFilterFunction: function(e) {
      if (this._filterFunction === e) return
      this.clearSelection()
      var t = this._filterFunction
      this._filterFunction = e, this.firePropertyChange('filterFunction', t, this._filterFunction)
    },
    fireSelectionChange: function(e, t, n) {
      n && (this._selectionList.forEach(function(e) {
        n.contains(e) ? n.remove(e) : n.add(e)
      }), t = n.toList()), this._selectionChangeDispatcher.fire({
        kind: e,
        datas: new N(t)
      })
    },
    addSelectionChangeListener: function(e, t, n) {
      this._selectionChangeDispatcher.add(e, t, n)
    },
    removeSelectionChangeListener: function(e, t) {
      this._selectionChangeDispatcher.remove(e, t)
    },
    _filterList: function(e, t) {
      var n = new N(e)
      for (var r = 0; r < n.size(); r++) {
        var i = n.get(r)
        if (this._filterFunction && !this._filterFunction(i) || t && this.contains(i) || !t && !this.contains(i) || !this._dataBox.contains(i)) n.removeAt(r), r--
      }
      return n
    },
    appendSelection: function(e) {
      if (this._selectionMode === 'noneSelection') return
      var t = this._filterList(e, !0)
      if (t.isEmpty()) return
      var n = null
      this._selectionMode === 'singleSelection' && (n = new N(this._selectionList), this._selectionList.forEach(function(e) {
        e._selected = !1
      }), this._selectionList.clear(), this._selectionMap = {}, t = new N(t.get(t.size() - 1)))
      for (var r = 0; r < t.size(); r++) {
        var i = t.get(r)
        i._selected = !0, this._selectionList.add(i), this._selectionMap[i._id] = i
      }
      this.fireSelectionChange('append', t, n)
    },
    removeSelection: function(e) {
      var t = this._filterList(e)
      if (t.size() === 0) return
      for (var n = 0; n < t.size(); n++) {
        var r = t.get(n)
        r._selected = !1, this._selectionList.remove(r), delete this._selectionMap[r.getId()]
      }
      this.fireSelectionChange('remove', t)
    },
    toSelection: function(e, t) {
      return this._selectionList.toList(e, t)
    },
    getSelection: function() {
      return this._selectionList
    },
    setSelection: function(e) {
      if (this._selectionMode === 'noneSelection') return
      if (this._selectionList.size() === 0 && e == null) return
      var t = new N(this._selectionList)
      this._selectionList.clear(), this._selectionMap = {}
      var n = this._filterList(e, !0)
      this._selectionMode === 'singleSelection' && n.size() > 1 && (n = new N(n.get(n.size() - 1)))
      for (var r = 0; r < n.size(); r++) {
        var i = n.get(r)
        i._selected = !0, this._selectionList.add(i), this._selectionMap[i.getId()] = i
      }
      this.fireSelectionChange('set', null, t)
    },
    clearSelection: function() {
      if (this._selectionList.size() > 0) {
        var e = this._selectionList.toList()
        this._selectionList.forEach(function(e) {
          e._selected = !1
        }), this._selectionList.clear(), this._selectionMap = {}, this.fireSelectionChange('clear', e)
      }
    },
    selectAll: function() {
      if (this._selectionMode === 'noneSelection') return
      var e = this._dataBox.toDatas(),
        t = 0,
        n = null
      if (this._filterFunction) {
        for (t = 0; t < e.size(); t++) n = e.get(t), this._filterFunction(n) || (e.removeAt(t), t--)
      }
      var r = new N(this._selectionList)
      this._selectionList.clear(), this._selectionMap = {}, this._selectionMode === 'singleSelection' && e.size() > 1 && (e = new N(e.get(e.size() - 1)))
      for (t = 0; t < e.size(); t++) n = e.get(t), this._selectionList.add(n), this._selectionMap[n.getId()] = n
      this.fireSelectionChange('all', null, r)
    },
    size: function() {
      return this._selectionList.size()
    },
    contains: function(e) {
      return e ? this._selectionMap[e._id] != null : !1
    },
    getLastData: function() {
      return this._selectionList.size() > 0 ? this._selectionList.get(this._selectionList.size() - 1) : null
    },
    getFirstData: function() {
      return this._selectionList.size() > 0 ? this._selectionList.get(0) : null
    },
    isSelectable: function(e) {
      return e ? this._selectionMode === 'noneSelection' ? !1 : this._filterFunction && !this._filterFunction(e) ? !1 : !0 : !1
    }
  }), n.AlarmSeverity = function(e, t, n, r, i) {
    this.value = e, this.name = t, this.nickName = n, this.color = r, this.displayName = i
  }, n.extend(n.AlarmSeverity, Object, {
    toString: function() {
      return this.displayName ? this.displayName : this.name
    }
  }), (function() {
    var e = n.AlarmSeverity
    e.severities = new N(), e._vm = {}, e._nm = {}, e._cp = function(e, t) {
      if (e && t) {
        var n = e.value - t.value
        return n > 0 ? 1 : n < 0 ? -1 : 0
      }
      return e && !t ? 1 : !e && t ? -1 : 0
    }, e.forEach = function(t, n) {
      e.severities.forEach(t, n)
    }, e.getSortFunction = function() {
      return e._cp
    }, e.setSortFunction = function(t) {
      e._cp = t, e.severities.sort(t)
    }, e.add = function(t, n, r, i, s) {
      var o = new e(t, n, r, i, s)
      return e._vm[t] = o, e._nm[n] = o, e.severities.add(o), e.severities.sort(e._cp), o
    }, e.remove = function(t) {
      var n = e._nm[t]
      return n && (delete e._nm[t], delete e._vm[n.value], e.severities.remove(n)), n
    }, e.CRITICAL = e.add(500, 'Critical', 'C', '#FF0000'), e.MAJOR = e.add(400, 'Major', 'M', '#FFA000'), e.MINOR = e.add(300, 'Minor', 'm', '#FFFF00'), e.WARNING = e.add(200, 'Warning', 'W', '#00FFFF'), e.INDETERMINATE = e.add(100, 'Indeterminate', 'N', '#C800FF'), e.CLEARED = e.add(0, 'Cleared', 'R', '#00FF00'), e.isClearedAlarmSeverity = function(e) {
      return e ? e.value === 0 : !1
    }, e.getByName = function(t) {
      return e._nm[t]
    }, e.getByValue = function(t) {
      return e._vm[t]
    }, e.clear = function() {
      e.severities.clear(), e._vm = {}, e._nm = {}
    }, e.compare = function(t, n) {
      return e._cp(t, n)
    }
  }()), n.AlarmState = function(e) {
    this._e = e, this._nm = {}, this._am = {}, this._ps = null, this._haa = null, this._hna = null, this._hoa = null, this._hta = null, this._hls = !1, this._aac = 0, this._nac = 0
  }, n.extend(n.AlarmState, Object, {
    _ep: !0,
    _f: function() {
      this._c1(), this._c2(), this._c3(), this._c4(), this._c5(), this._c6(), this._c7(), this._e.firePropertyChange('alarmState', null, this)
    },
    getHighestAcknowledgedAlarmSeverity: function() {
      return this._haa
    },
    getHighestNewAlarmSeverity: function() {
      return this._hna
    },
    getHighestOverallAlarmSeverity: function() {
      return this._hoa
    },
    getHighestNativeAlarmSeverity: function() {
      return this._hta
    },
    hasLessSevereNewAlarms: function() {
      return this._hls
    },
    _c1: function() {
      var e = null
      for (var t in this._am) {
        t = n.AlarmSeverity.getByName(t)
        if (n.AlarmSeverity.isClearedAlarmSeverity(t)) continue
        if (this.getAcknowledgedAlarmCount(t) === 0) continue
        e ? e = n.AlarmSeverity.compare(e, t) > 0 ? e : t : e = t
      }
      this._haa = e
    },
    _c2: function() {
      var e = null
      for (var t in this._nm) {
        t = n.AlarmSeverity.getByName(t)
        if (n.AlarmSeverity.isClearedAlarmSeverity(t)) continue
        if (this.getNewAlarmCount(t) === 0) continue
        e ? e = n.AlarmSeverity.compare(e, t) > 0 ? e : t : e = t
      }
      this._hna = e
    },
    _c3: function() {
      if (!this._hna) {
        this._hls = !1
        return
      }
      for (var e in this._nm) {
        e = n.AlarmSeverity.getByName(e)
        if (n.AlarmSeverity.isClearedAlarmSeverity(e)) continue
        if (this.getNewAlarmCount(e) === 0) continue
        if (n.AlarmSeverity.compare(this._hna, e) > 0) {
          this._hls = !0
          return
        }
      }
      this._hls = !1
    },
    _c4: function() {
      var e = this._haa,
        t = this._hna,
        r = this._ps
      this._hoa = e, n.AlarmSeverity.compare(t, this._hoa) > 0 && (this._hoa = t), n.AlarmSeverity.compare(r, this._hoa) > 0 && (this._hoa = r)
    },
    _c5: function() {
      var e = this._haa,
        t = this._hna
      this._hta = e, n.AlarmSeverity.compare(t, this._hta) > 0 && (this._hta = t)
    },
    increaseAcknowledgedAlarm: function(e, t) {
      t == null && (t = 1)
      if (t === 0) return
      var n = this._am[e.name]
      n == null && (n = 0), n += t, this._am[e.name] = n, this._f(), this._e.onAlarmChange()
    },
    increaseNewAlarm: function(e, t) {
      t == null && (t = 1)
      if (t === 0) return
      var n = this._nm[e.name]
      n == null && (n = 0), n += t, this._nm[e.name] = n, this._f(), this._e.onAlarmChange()
    },
    decreaseAcknowledgedAlarm: function(e, t) {
      t == null && (t = 1)
      if (t === 0) return
      var n = this._am[e.name]
      n == null && (n = 0), n -= t
      if (n < 0) throw 'Alarm count can not be negative'
      this._am[e.name] = n, this._f(), this._e.onAlarmChange()
    },
    decreaseNewAlarm: function(e, t) {
      t == null && (t = 1)
      if (t === 0) return
      var n = this._nm[e.name]
      n == null && (n = 0), n -= t
      if (n < 0) throw 'Alarm count can not be negative'
      this._nm[e.name] = n, this._f(), this._e.onAlarmChange()
    },
    acknowledgeAlarm: function(e) {
      this.decreaseNewAlarm(e, 1), this.increaseAcknowledgedAlarm(e, 1)
    },
    acknowledgeAllAlarms: function(e) {
      if (e) {
        var t = this.getNewAlarmCount(e)
        this.decreaseNewAlarm(e, t), this.increaseAcknowledgedAlarm(e, t)
      } else {
        for (var r in this._nm) this.acknowledgeAllAlarms(n.AlarmSeverity.getByName(r))
      }
    },
    _c6: function() {
      this._aac = 0
      for (var e in this._am) e = n.AlarmSeverity.getByName(e), this._aac += this.getAcknowledgedAlarmCount(e)
    },
    getAcknowledgedAlarmCount: function(e) {
      if (e) {
        var t = this._am[e.name]
        return t == null ? 0 : t
      }
      return this._aac
    },
    getAlarmCount: function(e) {
      return this.getAcknowledgedAlarmCount(e) + this.getNewAlarmCount(e)
    },
    _c7: function() {
      this._nac = 0
      for (var e in this._nm) e = n.AlarmSeverity.getByName(e), this._nac += this.getNewAlarmCount(e)
    },
    getNewAlarmCount: function(e) {
      if (e) {
        var t = this._nm[e.name]
        return t == null ? 0 : t
      }
      return this._nac
    },
    setNewAlarmCount: function(e, t) {
      this._nm[e.name] = t, this._f()
    },
    removeAllNewAlarms: function(e) {
      e ? delete this._nm[e] : this._nm = {}, this._f()
    },
    setAcknowledgedAlarmCount: function(e, t) {
      this._am[e.name] = t, this._f()
    },
    removeAllAcknowledgedAlarms: function(e) {
      e ? delete this._am[e.name] : this._am = {}, this._f()
    },
    isEmpty: function() {
      return this._hoa == null
    },
    clear: function() {
      this._am = {}, this._nm = {}, this._f()
    },
    getPropagateSeverity: function() {
      return this._ps
    },
    setPropagateSeverity: function(e) {
      this._ep || (e = null)
      if (this._ps === e) return
      var t = this._ps
      this._ps = e, this._f(), this._e.onAlarmChange(), this._e.firePropertyChange('propagateSeverity', t, e)
    },
    isEnablePropagation: function() {
      return this._ep
    },
    setEnablePropagation: function(e) {
      var t = this._ep
      this._ep = e, this._e.firePropertyChange('enablePropagation', t, e) && (e || this.setPropagateSeverity(null))
    }
  }), n.Alarm = function(e, t, r, i, s) {
    n.Data.call(this, e), this._id = e != null ? e : n.id('A'), this._elementId = t, this._alarmSeverity = r, this._acked = i || !1, this._cleared = s || !1
  }, n.extend(n.Alarm, n.Data, {
    IAlarm: !0,
    getElementId: function() {
      return this._elementId
    },
    ___accessor: ['acked', 'cleared', 'alarmSeverity']
  }), n.AlarmBox = function(e) {
    if (!e) throw 'elementBox can not be null.'
    n.AlarmBox.superClass.constructor.call(this), this._elementBox = e, this._alarmElementMapping = new n.AlarmElementMapping(this, e), this._elementBox.addDataBoxChangeListener(this.handleElementBoxChange, this, !0), this.addDataBoxChangeListener(this.handleAlarmBoxChange, this, !0), this.addDataPropertyChangeListener(this.handleAlarmPropertyChange, this, !0)
  }, n.extend(n.AlarmBox, n.DataBox, {
    __accessor: ['removeAlarmWhenElementIsRemoved'],
    _name: 'AlarmBox',
    _removeAlarmWhenAlarmIsCleared: !1,
    _removeAlarmWhenElementIsRemoved: !0,
    getElementBox: function() {
      return this._elementBox
    },
    isRemoveAlarmWhenAlarmIsCleared: function() {
      return this._removeAlarmWhenAlarmIsCleared
    },
    setRemoveAlarmWhenAlarmIsCleared: function(e) {
      var t = this._removeAlarmWhenAlarmIsCleared
      this._removeAlarmWhenAlarmIsCleared = e, this.firePropertyChange('removeAlarmWhenAlarmIsCleared', t, e)
      if (e) {
        for (var n in this.datas) {
          var r = this.datas[n]
          r.isCleard() && this.remove(r)
        }
      }
    },
    getAlarmElementMapping: function() {
      return this._alarmElementMapping
    },
    setAlarmElementMapping: function(e) {
      if (!e) throw 'alarmElementMapping can not be null'
      if (this._alarmElementMapping === e) return
      var t = this._alarmElementMapping
      this.getDatas().forEach(this._decreaseAlarmState, this), this._alarmElementMapping = e, this.getDatas().forEach(this._increaseAlarmState, this), this.firePropertyChange('alarmElementMapping', t, e)
    },
    handleElementBoxChange: function(e) {
      e.kind === 'add' ? this.handleElementAdded(e.data) : e.kind === 'remove' ? (this.handleElementRemoved(e.data), this._removeAlarmWhenElementIsRemoved && this.removeAlarmsByElement(e.data)) : e.kind === 'clear' && (e.datas.forEach(this.handleElementRemoved, this), this._removeAlarmWhenElementIsRemoved && this.clear())
    },
    handleAlarmBoxChange: function(e) {
      e.kind === 'add' ? this._increaseAlarmState(e.data) : e.kind === 'remove' ? this._decreaseAlarmState(e.data) : e.kind === 'clear' && e.datas.forEach(this._decreaseAlarmState, this)
    },
    handleAlarmPropertyChange: function(e) {
      var t = e.source
      t.isCleared() || (e.property === 'alarmSeverity' ? this.handleAlarmSeverityChange(t, e) : e.property === 'acked' && this.handleAckedChange(t, e)), e.property === 'cleared' && (t.isCleared() ? (this._decreaseAlarmState(t, !0), this._removeAlarmWhenAlarmIsCleared && this.remove(t)) : this._increaseAlarmState(t, !0))
    },
    handleAckedChange: function(e, t) {
      if (!e.getAlarmSeverity()) return
      var n = this.getCorrespondingElements(e)
      if (n) {
        for (var r = 0; r < n.size(); r++) {
          var i = n.get(r)
          t.oldValue ? i.getAlarmState().decreaseAcknowledgedAlarm(e.getAlarmSeverity()) : i.getAlarmState().decreaseNewAlarm(e.getAlarmSeverity()), t.newValue ? i.getAlarmState().increaseAcknowledgedAlarm(e.getAlarmSeverity()) : i.getAlarmState().increaseNewAlarm(e.getAlarmSeverity())
        }
      }
    },
    handleAlarmSeverityChange: function(e, t) {
      var n = t.oldValue,
        r = t.newValue,
        i = this.getCorrespondingElements(e)
      if (i) {
        for (var s = 0; s < i.size(); s++) {
          var o = i.get(s)
          n && (e.isAcked() ? o.getAlarmState().decreaseAcknowledgedAlarm(n) : o.getAlarmState().decreaseNewAlarm(n)), r && (e.isAcked() ? o.getAlarmState().increaseAcknowledgedAlarm(r) : o.getAlarmState().increaseNewAlarm(r))
        }
      }
    },
    getCorrespondingAlarms: function(e) {
      return this._alarmElementMapping.getCorrespondingAlarms(e)
    },
    getCorrespondingElements: function(e) {
      return this._alarmElementMapping.getCorrespondingElements(e)
    },
    handleElementAdded: function(e) {
      var t = this.getCorrespondingAlarms(e)
      if (t) {
        for (var n = 0; n < t.size(); n++) {
          var r = t.get(n)
          if (r.isCleared()) continue
          var i = r.getAlarmSeverity()
          i && (r.isAcked() ? e.getAlarmState().increaseAcknowledgedAlarm(i) : e.getAlarmState().increaseNewAlarm(i))
        }
      }
    },
    _increaseAlarmState: function(e, t) {
      if (e.isCleared() && !t) return
      var n = e.getAlarmSeverity()
      if (n) {
        var r = this.getCorrespondingElements(e)
        if (r) {
          for (var i = 0; i < r.size(); i++) {
            var s = r.get(i)
            e.isAcked() ? s.getAlarmState().increaseAcknowledgedAlarm(n) : s.getAlarmState().increaseNewAlarm(n)
          }
        }
      }
    },
    _decreaseAlarmState: function(e, t) {
      e.isCleared || console.log()
      if (e.isCleared() && !t) return
      var n = e.getAlarmSeverity()
      if (!n) return
      var r = this.getCorrespondingElements(e)
      if (r) {
        for (var i = 0; i < r.size(); i++) {
          var s = r.get(i)
          e.isAcked() ? s.getAlarmState().decreaseAcknowledgedAlarm(n) : s.getAlarmState().decreaseNewAlarm(n)
        }
      }
    },
    handleElementRemoved: function(e) {
      var t = this.getCorrespondingAlarms(e)
      t && t.forEach(function(t) {
        !t.isCleared() && t.getAlarmSeverity() && (t.isAcked() ? e.getAlarmState().decreaseAcknowledgedAlarm(t.getAlarmSeverity()) : e.getAlarmState().decreaseNewAlarm(t.getAlarmSeverity()))
      })
    },
    removeAlarmsByElement: function(e) {
      var t = this.getCorrespondingAlarms(e)
      t && t.forEach(this.remove, this)
    },
    add: function(e, t) {
      if (!e.IAlarm) throw 'Only IAlarm can be added into AlarmBox'
      if (this._removeAlarmWhenAlarmIsCleared && e.isCleared()) return
      n.AlarmBox.superClass.add.apply(this, arguments)
    }
  }), n.AlarmElementMapping = function(e, t) {
    if (!t) throw 'ElementBox can not be null'
    if (!e) throw 'AlarmBox can not be null'
    this._elementBox = t, this._alarmBox = e, this._alarmsFinder = new n.QuickFinder(e, 'elementId')
  }, n.extend(n.AlarmElementMapping, Object, {
    getCorrespondingAlarms: function(e) {
      return this._alarmsFinder.find(e.getId())
    },
    getCorrespondingElements: function(e) {
      var t = this._elementBox.getDataById(e.getElementId())
      return new N(t)
    },
    dispose: function() {
      delete this._elementBox, delete this._alarmBox, delete this._alarmsFinder
    }
  }), n.PropertyPropagator = function(e, t, r) {
    if (!e) throw 'dataBox can not be null'
    if (!t) throw 'propertyName can not be null'
    this._dataBox = e, this._propertyName = t, this._propertyType = r || 'accessor', this._propertyType === 'accessor' && (this._getter = n.getter(t), this._setter = n.setter(t)), this._enable = !1, this._isPropagating = !1
  }, n.extend(n.PropertyPropagator, Object, {
    getDataBox: function() {
      return this._dataBox
    },
    getPropertyType: function() {
      return this._propertyType
    },
    getPropertyName: function() {
      return this._propertyName
    },
    isEnable: function() {
      return this._enable
    },
    setEnable: function(e) {
      if (this._enable === e) return
      this._enable = e
      if (this._enable) {
        this._dataBox.addDataBoxChangeListener(this.handleDataBoxChange, this), this._dataBox.addDataPropertyChangeListener(this.handleDataPropertyChange, this)
        for (var t in this._dataBox.datas) this.propagate(this._dataBox.datas[t])
      } else this._dataBox.removeDataBoxChangeListener(this.handleDataBoxChange, this), this._dataBox.removeDataPropertyChangeListener(this.handleDataPropertyChange, this)
    },
    handleDataBoxChange: function(e) {
      e.data && this.propagate(e.data)
    },
    handleDataPropertyChange: function(e) {
      if (this.isInterestedProperty(e)) this.propagate(e.source)
      else if (e.property === 'parent') {
        var t = e.oldValue
        t && this.propagate(t), this.propagate(e.source)
      }
    },
    isInterestedProperty: function(e) {
      return this._propertyType === 'accessor' && this._propertyName === e.property ? !0 : this._propertyType === 'style' && e.IElement && 'S:' + this._propertyName === e.property ? !0 : this._propertyType === 'client' && 'C:' + this._propertyName === e.property ? !0 : !1
    },
    propagate: function(e) {
      if (!e || this._isPropagating) return
      this._isPropagating = !0, this.propagateToTop(e), this._isPropagating = !1
    },
    propagateToTop: function(e) {
      this.propagateToParent(null, e)
      while (e && e.getParent()) this.propagateToParent(e, e.getParent()), e = e.getParent()
    },
    propagateToParent: function(e, t) {}
  }), n.AlarmStatePropagator = function(e) {
    n.AlarmStatePropagator.superClass.constructor.call(this, e, 'alarmState')
  }, n.extend(n.AlarmStatePropagator, n.PropertyPropagator, {
    handleDataPropertyChange: function(e) {
      e.property === 'enablePropagation' ? this.propagate(e.source) : n.AlarmStatePropagator.superClass.handleDataPropertyChange.call(this, e)
    },
    propagateToParent: function(e, t) {
      var r = null
      t.getChildren().forEach(function(e) {
        var t = e.getAlarmState().getHighestOverallAlarmSeverity()
        n.AlarmSeverity.compare(t, r) > 0 && (r = t)
      }), t.getAlarmState && t.getAlarmState().setPropagateSeverity(r)
    }
  })
  var D = {
    KEEP_DEFAULT_FUNCTION: function(e) {
      return e.target.keepDefault || e.target.getAttribute('keepDefault') ? !0 : e.target.parentNode && (e.target.parentNode.keepDefault || e.target.parentNode.getAttribute('keepDefault')) ? !0 : e.shiftKey ? !0 : !1
    }
  }
  D.paintSortFunction = function(e, t) {
    return e.z !== t.z ? e.z - t.z : 0
  }, D.doubleClickToLookAtFunction = function(e) {
    return !0
  }, D.needSmoothNormalFunction = function(e) {
    var t = e instanceof _ || e instanceof n.TextNode || e instanceof n.PathCube || e instanceof n.ShapeNode || e instanceof n.ComboNode || e.getClassName() == 'TGL.Entity'
    return !t
  }, D.PATH_LINK_COMPUTE_DELAY = !1, n.Defaults = D, n.BasicShader = {
    vertex_shader: '',
    fragment_shader: ''
  }, n.ShaderUtil = {}, n.ShaderUtil.getShader = function(e) {}, n.ShaderChunk = {
    gradient_parts_fragment: ['#ifdef MAX_GRADIENT', 'uniform vec3 gradientColor[MAX_GRADIENT];', 'uniform float gradientStop[MAX_GRADIENT];', 'uniform int gradientType;', '#endif'].join('\n'),
    gradient_basic_fragment: ['#ifdef MAX_GRADIENT', 'float gradientUV = 1.0;', 'float PI = 3.14;', 'if(gradientType == 1){', 'gradientUV = oUv.x;', '} else if(gradientType == 2){', 'gradientUV = oUv.y;', '} else if(gradientType == 3){', 'gradientUV = (oUv.x + oUv.y)/2.0;', '} else if(gradientType == 4){', 'gradientUV = (oUv.x + 1.0 - oUv.y)/2.0;', '} else if(gradientType == 5){', 'gradientUV = 1.414 * sqrt((oUv.x - 0.5) * (oUv.x - 0.5) + (oUv.y - 0.5) * (oUv.y - 0.5));', '} else if(gradientType == 6){', 'gradientUV = (atan(oUv.y - 0.5,oUv.x - 0.5)) / (2.0 * PI);', 'if(gradientUV < 0.0){', 'gradientUV = 1.0 + gradientUV;', '}', '}', 'for( int i = 1; i < MAX_GRADIENT; i ++ ){', 'if(gradientStop[i - 1] <= gradientUV){', 'if((gradientStop[i] >= gradientUV)){', 'vec3 color1 = gradientColor[i-1];', 'vec3 color2 = gradientColor[i];', 'float stop1 = gradientStop[i-1];', 'float stop2 =gradientStop[i]; ', 'gl_FragColor = vec4( (color1 * (stop2 - gradientUV )  + color2 * (gradientUV - stop1))/(stop2 - stop1),opacity);', 'break;', '}', '}', '}', '#endif'].join('\n'),
    gradient_phong_fragment: ['#ifdef MAX_GRADIENT', 'float gradientUV = 1.0;', 'float PI = 3.14;', 'if(gradientType == 1){', 'gradientUV = oUv.x;', '} else if(gradientType == 2){', 'gradientUV = oUv.y;', '} else if(gradientType == 3){', 'gradientUV = (oUv.x + oUv.y)/2.0;', '} else if(gradientType == 4){', 'gradientUV = (oUv.x + 1.0 - oUv.y)/2.0;', '} else if(gradientType == 5){', 'gradientUV = 1.414 * sqrt((oUv.x - 0.5) * (oUv.x - 0.5) + (oUv.y - 0.5) * (oUv.y - 0.5));', '} else if(gradientType == 6){', 'gradientUV = (atan(oUv.y - 0.5,oUv.x - 0.5)) / (2.0 * PI);', 'if(gradientUV < 0.0){', 'gradientUV = 1.0 + gradientUV;', '}', '}', 'for( int i = 1; i < MAX_GRADIENT; i ++ ){', 'if(gradientStop[i - 1] < gradientUV){', 'if((gradientStop[i] > gradientUV)){', 'vec3 color1 = gradientColor[i-1];', 'vec3 color2 = gradientColor[i];', 'float stop1 = gradientStop[i-1];', 'float stop2 = gradientStop[i]; ', 'tempDiffuse = (color1 * (stop2 - gradientUV )  + color2 * (gradientUV - stop1))/(stop2 - stop1);', 'break;', '}', '}', '}', '#endif'].join('\n'),
    fog_pars_fragment: ['#ifdef USE_FOG', 'uniform vec3 fogColor;', '#ifdef FOG_EXP2', 'uniform float fogDensity;', '#else', 'uniform float fogNear;', 'uniform float fogFar;', '#endif', '#endif'].join('\n'),
    fog_fragment: ['#ifdef USE_FOG', 'float depth = gl_FragCoord.z / gl_FragCoord.w;', '#ifdef FOG_EXP2', 'const float LOG2 = 1.442695;', 'float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );', 'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );', '#else', 'float fogFactor = smoothstep( fogNear, fogFar, depth );', '#endif', 'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );', '#endif'].join('\n'),
    envmap_pars_fragment: ['#ifdef USE_ENVMAP', 'uniform float reflectivity;', 'uniform samplerCube envMap;', 'uniform float flipEnvMap;', 'uniform int combine;', '#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )', 'uniform bool useRefract;', 'uniform float refractionRatio;', '#else', 'varying vec3 vReflect;', '#endif', '#endif'].join('\n'),
    envmap_fragment: ['#ifdef USE_ENVMAP', 'vec3 reflectVec;', '#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )', 'vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );', 'if ( useRefract ) {', 'reflectVec = refract( cameraToVertex, normal, refractionRatio );', '} else { ', 'reflectVec = reflect( cameraToVertex, normal );', '}', '#else', 'reflectVec = vReflect;', '#endif', '#ifdef DOUBLE_SIDED', 'float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );', 'vec4 cubeColor = textureCube( envMap, flipNormal * vec3( reflectVec.x*flipEnvMap,  reflectVec.y,reflectVec.z) );', '#else', 'vec4 cubeColor = textureCube( envMap, vec3(reflectVec.x*flipEnvMap,  reflectVec.y,reflectVec.z) );', '#endif', '#ifdef GAMMA_INPUT', 'cubeColor.xyz *= cubeColor.xyz;', '#endif', '#ifdef PHONG', '#else', 'float specularStrength = 1.0;', '#endif', 'if ( combine == 1 ) {', 'gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );', '} else if ( combine == 2 ) {', 'gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;', '} else {', 'gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );', '}', '#endif'].join('\n'),
    envmap_pars_vertex: ['#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )', 'varying vec3 vReflect;', 'uniform float refractionRatio;', 'uniform bool useRefract;', '#endif'].join('\n'),
    worldpos_vertex: ['#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP ) ', '#ifdef USE_SKINNING', 'vec4 worldPosition = modelMatrix * skinned;', '#endif', '#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )', 'vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );', '#endif', '#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )', 'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );', '#endif', '#endif'].join('\n'),
    envmap_vertex: ['#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )', 'vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;', 'worldNormal = normalize( worldNormal );', 'vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );', 'if ( useRefract ) {', 'vReflect = refract( cameraToVertex, worldNormal, refractionRatio );', '} else {', 'vReflect = reflect( cameraToVertex, worldNormal );', '}', '#endif'].join('\n'),
    map_particle_pars_fragment: ['#ifdef USE_MAP', 'uniform sampler2D map;', '#endif'].join('\n'),
    map_particle_fragment: ['#ifdef USE_MAP', 'gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );', '#endif'].join('\n'),
    map_pars_vertex: ['#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined(MAX_GRADIENT)', 'varying vec2 vUv;', 'varying vec2 oUv;', 'uniform vec4 offsetRepeat;', 'uniform bool flipX; ', '#endif'].join('\n'),
    map_pars_fragment: ['#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined(MAX_GRADIENT)', 'varying vec2 vUv;', 'varying vec2 oUv;', '#endif', '#ifdef USE_MAP', 'uniform bool mapLoaded;', 'uniform sampler2D map;', '#endif'].join('\n'),
    map_vertex: ['#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined(MAX_GRADIENT)', 'if(flipX){', 'vUv.x = uv.x * offsetRepeat.z * (-1.0) + offsetRepeat.x + offsetRepeat.z;', 'vUv.y = uv.y * offsetRepeat.w  + offsetRepeat.y;', '}else{', 'vUv = uv * offsetRepeat.zw  + offsetRepeat.xy;', '}', 'oUv = uv;', '#endif'].join('\n'),
    map_fragment: ['#ifdef USE_MAP', 'if(mapLoaded){', 'vec4 texelColor = texture2D( map, vUv );', '#ifdef GAMMA_INPUT', 'texelColor.xyz *= texelColor.xyz;', '#endif', 'gl_FragColor = texelColor * gl_FragColor;', '}', '#endif'].join('\n'),
    lightmap_pars_fragment: ['#ifdef USE_LIGHTMAP', 'varying vec2 vUv2;', 'uniform sampler2D lightMap;', '#endif'].join('\n'),
    lightmap_pars_vertex: ['#ifdef USE_LIGHTMAP', 'varying vec2 vUv2;', '#endif'].join('\n'),
    lightmap_fragment: ['#ifdef USE_LIGHTMAP', 'gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );', '#endif'].join('\n'),
    lightmap_vertex: ['#ifdef USE_LIGHTMAP', 'vUv2 = uv2;', '#endif'].join('\n'),
    bumpmap_pars_fragment: ['#ifdef USE_BUMPMAP', 'uniform sampler2D bumpMap;', 'uniform float bumpScale;', 'vec2 dHdxy_fwd() {', 'vec2 dSTdx = dFdx( vUv );', 'vec2 dSTdy = dFdy( vUv );', 'float Hll = bumpScale * texture2D( bumpMap, vUv ).x;', 'float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;', 'float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;', 'return vec2( dBx, dBy );', '}', 'vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {', 'vec3 vSigmaX = dFdx( surf_pos );', 'vec3 vSigmaY = dFdy( surf_pos );', 'vec3 vN = surf_norm;', 'vec3 R1 = cross( vSigmaY, vN );', 'vec3 R2 = cross( vN, vSigmaX );', 'float fDet = dot( vSigmaX, R1 );', 'vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );', 'return normalize( abs( fDet ) * surf_norm - vGrad );', '}', '#endif'].join('\n'),
    normalmap_pars_fragment: ['#ifdef USE_NORMALMAP', 'uniform sampler2D normalMap;', 'uniform vec2 normalScale;', 'vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {', 'vec3 q0 = dFdx( eye_pos.xyz );', 'vec3 q1 = dFdy( eye_pos.xyz );', 'vec2 st0 = dFdx( vUv.st );', 'vec2 st1 = dFdy( vUv.st );', 'vec3 S = normalize(  q0 * st1.t - q1 * st0.t );', 'vec3 T = normalize( -q0 * st1.s + q1 * st0.s );', 'vec3 N = normalize( surf_norm );', 'vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;', 'mapN.xy = normalScale * mapN.xy;', 'mat3 tsn = mat3( S, T, N );', 'return normalize( tsn * mapN );', '}', '#endif'].join('\n'),
    specularmap_pars_fragment: ['#ifdef USE_SPECULARMAP', 'uniform sampler2D specularMap;', '#endif'].join('\n'),
    specularmap_fragment: ['float specularStrength;', '#ifdef USE_SPECULARMAP', 'vec4 texelSpecular = texture2D( specularMap, vUv );', 'specularStrength = texelSpecular.r;', '#else', 'specularStrength = uspecularStrength;', '#endif'].join('\n'),
    lights_lambert_pars_vertex: ['uniform vec3 ambient;', 'uniform vec3 diffuse;', 'uniform vec3 emissive;', 'uniform vec3 ambientLightColor;', '#if MAX_DIR_LIGHTS > 0', 'uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];', 'uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];', '#endif', '#if MAX_POINT_LIGHTS > 0', 'uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];', 'uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];', 'uniform float pointLightDistance[ MAX_POINT_LIGHTS ];', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];', '#endif', '#ifdef WRAP_AROUND', 'uniform vec3 wrapRGB;', '#endif'].join('\n'),
    lights_lambert_vertex: ['vLightFront = vec3( 0.0 );', '#ifdef DOUBLE_SIDED', 'vLightBack = vec3( 0.0 );', '#endif', 'transformedNormal = normalize( transformedNormal );', '#if MAX_DIR_LIGHTS > 0', 'for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );', 'vec3 dirVector = normalize( lDirection.xyz );', 'float dotProduct = dot( transformedNormal, dirVector );', 'vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );', '#ifdef DOUBLE_SIDED', 'vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );', '#ifdef WRAP_AROUND', 'vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );', '#endif', '#endif', '#ifdef WRAP_AROUND', 'vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );', 'directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );', '#ifdef DOUBLE_SIDED', 'directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );', '#endif', '#endif', 'vLightFront += directionalLightColor[ i ] * directionalLightWeighting;', '#ifdef DOUBLE_SIDED', 'vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;', '#endif', '}', '#endif', '#if MAX_POINT_LIGHTS > 0 ', 'for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz - mvPosition.xyz;', 'float lDistance = 1.0;', 'if ( pointLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );', 'lVector = normalize( lVector );', 'float dotProduct = dot( transformedNormal, lVector );', 'vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );', '#ifdef DOUBLE_SIDED', 'vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );', '#ifdef WRAP_AROUND', 'vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );', '#endif', '#endif', '#ifdef WRAP_AROUND', 'vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );', 'pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );', '#ifdef DOUBLE_SIDED', 'pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );', '#endif', '#endif', 'vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;', '#ifdef DOUBLE_SIDED', 'vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;', '#endif', '}', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz - mvPosition.xyz;', 'float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );', 'if ( spotEffect > spotLightAngleCos[ i ] ) {', 'spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );', 'float lDistance = 1.0;', 'if ( spotLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );', 'lVector = normalize( lVector );', 'float dotProduct = dot( transformedNormal, lVector );',
      'vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );', '#ifdef DOUBLE_SIDED', 'vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );', '#ifdef WRAP_AROUND', 'vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );', '#endif', '#endif', '#ifdef WRAP_AROUND', 'vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );', 'spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );', '#ifdef DOUBLE_SIDED', 'spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );', '#endif', '#endif', 'vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;', '#ifdef DOUBLE_SIDED', 'vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;', '#endif', '}', '}', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );', 'vec3 lVector = normalize( lDirection.xyz );', 'float dotProduct = dot( transformedNormal, lVector );', 'float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;', 'float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;', 'vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );', '#ifdef DOUBLE_SIDED', 'vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );', '#endif', '}', '#endif', 'vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;', '#ifdef DOUBLE_SIDED', 'vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;', '#endif'
    ].join('\n'),
    lights_phong_pars_vertex: ['#ifndef PHONG_PER_PIXEL', '#if MAX_POINT_LIGHTS > 0', 'uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];', 'uniform float pointLightDistance[ MAX_POINT_LIGHTS ];', 'varying vec4 vPointLight[ MAX_POINT_LIGHTS ];', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];', 'varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];', '#endif', '#endif', '#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )', 'varying vec3 vWorldPosition;', '#endif'].join('\n'),
    lights_phong_vertex: ['#ifndef PHONG_PER_PIXEL', '#if MAX_POINT_LIGHTS > 0', 'for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz - mvPosition.xyz;', 'float lDistance = 1.0;', 'if ( pointLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );', 'vPointLight[ i ] = vec4( lVector, lDistance );', '}', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz - mvPosition.xyz;', 'float lDistance = 1.0;', 'if ( spotLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );', 'vSpotLight[ i ] = vec4( lVector, lDistance );', '}', '#endif', '#endif', '#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ', 'vWorldPosition = worldPosition.xyz;', '#endif'].join('\n'),
    lights_phong_pars_fragment: ['uniform vec3 ambientLightColor;', '#if MAX_DIR_LIGHTS > 0', 'uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];', 'uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];', '#endif', '#if MAX_POINT_LIGHTS > 0', 'uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];', '#ifdef PHONG_PER_PIXEL', 'uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];', 'uniform float pointLightDistance[ MAX_POINT_LIGHTS ];', '#else', 'varying vec4 vPointLight[ MAX_POINT_LIGHTS ];', '#endif', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];', '#ifdef PHONG_PER_PIXEL', 'uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];', '#else', 'varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];', '#endif', '#endif', '#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )', 'varying vec3 vWorldPosition;', '#endif', '#ifdef WRAP_AROUND', 'uniform vec3 wrapRGB;', '#endif', 'varying vec3 vViewPosition;', 'varying vec3 vNormal;'].join('\n'),
    lights_phong_fragment: ['vec3 normal = normalize( vNormal );', 'vec3 viewPosition = normalize( vViewPosition );', '#ifdef DOUBLE_SIDED', 'normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );', '#endif', '#ifdef USE_NORMALMAP', 'normal = perturbNormal2Arb( -viewPosition, normal );', '#elif defined( USE_BUMPMAP )', 'normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );', '#endif', '#if MAX_POINT_LIGHTS > 0', 'vec3 pointDiffuse  = vec3( 0.0 );', 'vec3 pointSpecular = vec3( 0.0 );', 'for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {', '#ifdef PHONG_PER_PIXEL', 'vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz + vViewPosition.xyz;', 'float lDistance = 1.0;', 'if ( pointLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );', 'lVector = normalize( lVector );', '#else', 'vec3 lVector = normalize( vPointLight[ i ].xyz );', 'float lDistance = vPointLight[ i ].w;', '#endif', 'float dotProduct = dot( normal, lVector );', '#ifdef WRAP_AROUND', 'float pointDiffuseWeightFull = max( dotProduct, 0.0 );', 'float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );', 'vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );', '#else', 'float pointDiffuseWeight = max( dotProduct, 0.0 );', '#endif', 'pointDiffuse  += tempDiffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;', 'vec3 pointHalfVector = normalize( lVector + viewPosition );', 'float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );', 'float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( shininess + 2.0001 ) / 8.0;', 'vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );', 'pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;', '#else', 'pointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;', '#endif', '}', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'vec3 spotDiffuse  = vec3( 0.0 );', 'vec3 spotSpecular = vec3( 0.0 );', 'for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {', '#ifdef PHONG_PER_PIXEL', 'vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz + vViewPosition.xyz;', 'float lDistance = 1.0;', 'if ( spotLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );', 'lVector = normalize( lVector );', '#else', 'vec3 lVector = normalize( vSpotLight[ i ].xyz );', 'float lDistance = vSpotLight[ i ].w;', '#endif', 'float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );', 'if ( spotEffect > spotLightAngleCos[ i ]) {', 'spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );', 'float dotProduct = dot( normal, lVector );', '#ifdef WRAP_AROUND', 'float spotDiffuseWeightFull = max( dotProduct, 0.0 );', 'float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );', 'vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );', '#else', 'float spotDiffuseWeight = max( dotProduct, 0.0 );', '#endif', 'spotDiffuse += tempDiffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;', 'vec3 spotHalfVector = normalize( lVector + viewPosition );', 'float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );', 'float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( shininess + 2.0001 ) / 8.0;', 'vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );', 'spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;', '#else', 'spotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;', '#endif', '}', '}', '#endif', '#if MAX_DIR_LIGHTS > 0', 'vec3 dirDiffuse  = vec3( 0.0 );', 'vec3 dirSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );', 'vec3 dirVector = normalize( lDirection.xyz );', 'float dotProduct = dot( normal, dirVector );', '#ifdef WRAP_AROUND', 'float dirDiffuseWeightFull = max( dotProduct, 0.0 );', 'float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );', 'vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );', '#else', 'float dirDiffuseWeight = max( dotProduct, 0.0 );', '#endif', 'dirDiffuse  += tempDiffuse * directionalLightColor[ i ] * dirDiffuseWeight;', 'vec3 dirHalfVector = normalize( dirVector + viewPosition );', 'float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );', 'float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( shininess + 2.0001 ) / 8.0;', 'vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );', 'dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;', '#else', 'dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;', '#endif', '}', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'vec3 hemiDiffuse  = vec3( 0.0 );', 'vec3 hemiSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );', 'vec3 lVector = normalize( lDirection.xyz );', 'float dotProduct = dot( normal, lVector );', 'float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;', 'vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );', 'hemiDiffuse += tempDiffuse * hemiColor;', 'vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );', 'float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;', 'float hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );', 'vec3 lVectorGround = -lVector;', 'vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );', 'float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;', 'float hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float dotProductGround = dot( normal, lVectorGround );', 'float specularNormalization = ( shininess + 2.0001 ) / 8.0;', 'vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );', 'vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );', 'hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );', '#else', 'hemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;', '#endif', '}', '#endif', 'vec3 totalDiffuse = vec3( 0.0 );', 'vec3 totalSpecular = vec3( 0.0 );', '#if MAX_DIR_LIGHTS > 0', 'totalDiffuse += dirDiffuse;', 'totalSpecular += dirSpecular;', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'totalDiffuse += hemiDiffuse;', 'totalSpecular += hemiSpecular;', '#endif', '#if MAX_POINT_LIGHTS > 0', 'totalDiffuse += pointDiffuse;', 'totalSpecular += pointSpecular;', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'totalDiffuse += spotDiffuse;', 'totalSpecular += spotSpecular;', '#endif', 'float ssao = 1.0;', '#ifdef USE_SSAO', 'ssao = clamp(1.0 - texture2D(mapSSAO, (finalPosition.xy / finalPosition.w / 2.0 + vec2(0.5,0.5))).x,0.0,1.0);', '#endif', '#ifdef METAL', 'gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + (ambientLightColor * ambient * ssao) + totalSpecular );', '#else', 'gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + (ambientLightColor * ambient) * ssao ) + totalSpecular;', '#endif'].join('\n'),
    color_pars_fragment: ['#ifdef USE_COLOR', 'varying vec3 vColor;', '#endif'].join('\n'),
    color_fragment: ['#ifdef USE_COLOR', 'gl_FragColor = gl_FragColor * vec4( vColor, opacity );', '#endif'].join('\n'),
    color_pars_vertex: ['#ifdef USE_COLOR', 'varying vec3 vColor;', '#endif'].join('\n'),
    color_vertex: ['#ifdef USE_COLOR', '#ifdef GAMMA_INPUT', 'vColor = color * color;', '#else', 'vColor = color;', '#endif', '#endif'].join('\n'),
    skinning_pars_vertex: ['#ifdef USE_SKINNING', '#ifdef BONE_TEXTURE', 'uniform sampler2D boneTexture;', 'mat4 getBoneMatrix( const in float i ) {', 'float j = i * 4.0;', 'float x = mod( j, N_BONE_PIXEL_X );', 'float y = floor( j / N_BONE_PIXEL_X );', 'const float dx = 1.0 / N_BONE_PIXEL_X;', 'const float dy = 1.0 / N_BONE_PIXEL_Y;', 'y = dy * ( y + 0.5 );', 'vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );', 'vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );', 'vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );', 'vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );', 'mat4 bone = mat4( v1, v2, v3, v4 );', 'return bone;', '}', '#else', 'uniform mat4 boneGlobalMatrices[ MAX_BONES ];', 'mat4 getBoneMatrix( const in float i ) {', 'mat4 bone = boneGlobalMatrices[ int(i) ];', 'return bone;', '}', '#endif', '#endif'].join('\n'),
    skinbase_vertex: ['#ifdef USE_SKINNING', 'mat4 boneMatX = getBoneMatrix( skinIndex.x );', 'mat4 boneMatY = getBoneMatrix( skinIndex.y );', '#endif'].join('\n'),
    skinning_vertex: ['#ifdef USE_SKINNING', '#ifdef USE_MORPHTARGETS', 'vec4 skinVertex = vec4( morphed, 1.0 );', '#else', 'vec4 skinVertex = vec4( position, 1.0 );', '#endif', 'vec4 skinned  = boneMatX * skinVertex * skinWeight.x;', 'skinned 	  += boneMatY * skinVertex * skinWeight.y;', '#endif'].join('\n'),
    morphtarget_pars_vertex: ['#ifdef USE_MORPHTARGETS', '#ifndef USE_MORPHNORMALS', 'uniform float morphTargetInfluences[ 8 ];', '#else', 'uniform float morphTargetInfluences[ 4 ];', '#endif', '#endif'].join('\n'),
    morphtarget_vertex: ['#ifdef USE_MORPHTARGETS', 'vec3 morphed = vec3( 0.0 );', 'morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];', 'morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];', 'morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];', 'morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];', '#ifndef USE_MORPHNORMALS', 'morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];', 'morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];', 'morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];', 'morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];', '#endif', 'morphed += position;', '#endif'].join('\n'),
    default_vertex: ['vec4 mvPosition;', '#ifdef USE_SKINNING', 'mvPosition = modelViewMatrix * skinned;', '#endif', '#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )', 'mvPosition = modelViewMatrix * vec4( morphed, 1.0 );', '#endif', '#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )', 'mvPosition = modelViewMatrix * vec4( position, 1.0 );', '#endif', 'gl_Position = projectionMatrix * mvPosition;'].join('\n'),
    morphnormal_vertex: ['#ifdef USE_MORPHNORMALS', 'vec3 morphedNormal = vec3( 0.0 );', 'morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];', 'morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];', 'morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];', 'morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];', 'morphedNormal += normal;', '#endif'].join('\n'),
    skinnormal_vertex: ['#ifdef USE_SKINNING', 'mat4 skinMatrix = skinWeight.x * boneMatX;', 'skinMatrix 	+= skinWeight.y * boneMatY;', '#ifdef USE_MORPHNORMALS', 'vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );', '#else', 'vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );', '#endif', '#endif'].join('\n'),
    defaultnormal_vertex: ['vec3 objectNormal;', '#ifdef USE_SKINNING', 'objectNormal = skinnedNormal.xyz;', '#endif', '#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )', 'objectNormal = morphedNormal;', '#endif', '#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )', 'objectNormal = normal;', '#endif', '#ifdef FLIP_SIDED', 'objectNormal = -objectNormal;', '#endif', 'vec3 transformedNormal = normalMatrix * objectNormal;'].join('\n'),
    shadowmap_pars_fragment: ['#ifdef USE_SHADOWMAP', 'uniform sampler2D shadowMap[ MAX_SHADOWS ];', 'uniform vec2 shadowMapSize[ MAX_SHADOWS ];', 'uniform float shadowDarkness[ MAX_SHADOWS ];', 'uniform float shadowBias[ MAX_SHADOWS ];', 'varying vec4 vShadowCoord[ MAX_SHADOWS ];', '#endif', '#ifdef USE_POINT_SHADOWMAP', 'uniform samplerCube pShadowMap[MAX_POINT_SHADOWS];', 'uniform float pShadowDarkness[MAX_POINT_SHADOWS];', 'uniform vec3 pPosition[MAX_POINT_SHADOWS];', 'varying vec4 pWorldPosition;', '#endif', '#if defined(USE_SHADOWMAP) || defined(USE_POINT_SHADOWMAP)', 'float unpackDepth( const in vec4 rgba_depth ) {', 'const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );', 'float depth = dot( rgba_depth, bit_shift );', 'return depth;', '}', 'float unpack (vec4 colour){', 'const vec4 bitShifts = vec4(1.0,1.0 / 255.0,1.0 / (255.0 * 255.0),1.0 / (255.0 * 255.0 * 255.0));', 'return dot(colour, bitShifts) * 100000.0;', '}', '#endif'].join('\n'),
    shadowmap_fragment: ['#ifdef USE_SHADOWMAP', '#ifdef SHADOWMAP_DEBUG', 'vec3 frustumColors[3];', 'frustumColors[0] = vec3( 1.0, 0.5, 0.0 );', 'frustumColors[1] = vec3( 0.0, 1.0, 0.8 );', 'frustumColors[2] = vec3( 0.0, 0.5, 1.0 );', '#endif', '#ifdef SHADOWMAP_CASCADE', 'int inFrustumCount = 0;', '#endif', 'float fDepth;', 'vec3 shadowColor = vec3( 1.0 );', 'for( int i = 0; i < MAX_SHADOWS; i ++ ) {', 'vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;', 'bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );', 'bool inFrustum = all( inFrustumVec );', '#ifdef SHADOWMAP_CASCADE', 'inFrustumCount += int( inFrustum );', 'bvec3 frustumTestVec = bvec3(inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );', '#else', 'bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0 );', '#endif', 'bool frustumTest = all( frustumTestVec );', 'if ( frustumTest) {', 'shadowCoord.z += shadowBias[ i ];', '#if defined( SHADOWMAP_TYPE_PCF )', 'float shadow = 0.0;', 'const float shadowDelta = 1.0 / 9.0;', 'float xPixelOffset = 1.0 / shadowMapSize[ i ].x;', 'float yPixelOffset = 1.0 / shadowMapSize[ i ].y;', 'float dx0 = -1.25 * xPixelOffset;', 'float dy0 = -1.25 * yPixelOffset;', 'float dx1 = 1.25 * xPixelOffset;', 'float dy1 = 1.25 * yPixelOffset;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );', 'if ( fDepth < shadowCoord.z ) shadow += shadowDelta;', 'shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );', '#elif defined( SHADOWMAP_TYPE_PCF_SOFT )', 'float shadow = 0.0;', 'float xPixelOffset = 1.0 / shadowMapSize[ i ].x;', 'float yPixelOffset = 1.0 / shadowMapSize[ i ].y;', 'float dx0 = -1.0 * xPixelOffset;', 'float dy0 = -1.0 * yPixelOffset;', 'float dx1 = 1.0 * xPixelOffset;', 'float dy1 = 1.0 * yPixelOffset;', 'mat3 shadowKernel;', 'mat3 depthKernel;', 'depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );', 'if ( depthKernel[0][0] < shadowCoord.z ) shadowKernel[0][0] = 0.25;', 'else shadowKernel[0][0] = 0.0;', 'depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );', 'if ( depthKernel[0][1] < shadowCoord.z ) shadowKernel[0][1] = 0.25;', 'else shadowKernel[0][1] = 0.0;', 'depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i], shadowCoord.xy + vec2( dx0, dy1 ) ) );', 'if ( depthKernel[0][2] < shadowCoord.z ) shadowKernel[0][2] = 0.25;', 'else shadowKernel[0][2] = 0.0;', 'depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );', 'if ( depthKernel[1][0] < shadowCoord.z ) shadowKernel[1][0] = 0.25;', 'else shadowKernel[1][0] = 0.0;', 'depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );', 'if ( depthKernel[1][1] < shadowCoord.z ) shadowKernel[1][1] = 0.25;', 'else shadowKernel[1][1] = 0.0;', 'depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );', 'if ( depthKernel[1][2] < shadowCoord.z ) shadowKernel[1][2] = 0.25;', 'else shadowKernel[1][2] = 0.0;', 'depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );', 'if ( depthKernel[2][0] < shadowCoord.z ) shadowKernel[2][0] = 0.25;', 'else shadowKernel[2][0] = 0.0;', 'depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );', 'if ( depthKernel[2][1] < shadowCoord.z ) shadowKernel[2][1] = 0.25;', 'else shadowKernel[2][1] = 0.0;', 'depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );', 'if ( depthKernel[2][2] < shadowCoord.z ) shadowKernel[2][2] = 0.25;', 'else shadowKernel[2][2] = 0.0;', 'vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );', 'shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );', 'shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );', 'vec4 shadowValues;', 'shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );', 'shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );', 'shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );', 'shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );', 'shadow = dot( shadowValues, vec4( 1.0 ) );', 'shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );', '#else', 'vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );', 'float fDepth = unpackDepth( rgbaDepth );', 'if ( fDepth < shadowCoord.z )', 'shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );', '#endif', '}', '#ifdef SHADOWMAP_DEBUG', '#ifdef SHADOWMAP_CASCADE', 'if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];', '#else', 'if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];', '#endif', '#endif', '}', '#ifdef GAMMA_OUTPUT', 'shadowColor *= shadowColor;', '#endif', 'gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;', '#endif', '#ifdef USE_POINT_SHADOWMAP', 'for( int i = 0; i < MAX_POINT_SHADOWS; i ++ ) {', 'vec3 lightVec = normalize(pWorldPosition.xyz - pPosition[i]);', 'float depth = length(pWorldPosition.xyz - pPosition[i]);', 'float shadowDepth = unpack (textureCube(pShadowMap[i], lightVec));', 'depth = depth * 0.95;', 'if ( depth > shadowDepth){', 'gl_FragColor.xyz *= 0.8;', '}', '}', '#endif'].join('\n'),
    shadowmap_pars_vertex: ['#ifdef USE_SHADOWMAP', 'varying vec4 vShadowCoord[ MAX_SHADOWS ];', 'uniform mat4 shadowMatrix[ MAX_SHADOWS ];', '#endif', '#ifdef USE_POINT_SHADOWMAP', 'varying vec4 pWorldPosition;', '#endif'].join('\n'),
    shadowmap_vertex: ['#ifdef USE_SHADOWMAP', 'for( int i = 0; i < MAX_SHADOWS; i ++ ) {', 'vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;', '}', '#endif', '#ifdef USE_POINT_SHADOWMAP', 'pWorldPosition = modelMatrix * vec4(position,1.0);', '#endif'].join('\n'),
    alphatest_fragment: ['#ifdef ALPHATEST', 'if ( gl_FragColor.a < ALPHATEST ) discard;', '#endif'].join('\n'),
    linear_to_gamma_fragment: ['#ifdef GAMMA_OUTPUT', 'gl_FragColor.xyz = sqrt( gl_FragColor.xyz );', '#endif'].join('\n')
  }, n.UniformsUtils = {
    merge: function(e) {
      var t, n, r, i = {}
      for (t = 0; t < e.length; t++) {
        r = this.clone(e[t])
        for (n in r) i[n] = r[n]
      }
      return i
    },
    clone: function(e) {
      var t, r, i, s, o = {}
      for (t in e) {
        o[t] = {}
        for (r in e[t]) s = e[t][r], s instanceof n.Color || s instanceof n.Vec2 || s instanceof n.Vec3 || s instanceof n.Vec4 || s instanceof n.Mat4 || s instanceof n.Texture ? o[t][r] = s.clone() : s instanceof Array ? o[t][r] = s.slice() : o[t][r] = s
      }
      return o
    }
  }, n.UniformsLib = {
    outline: {
      diffuse: {
        type: 'c',
        value: new n.Color(15658734)
      },
      outline_offset: {
        type: 'f',
        value: 0
      }
    },
    glow: {
      map: {
        type: 't',
        value: null
      }
    },
    blur: {
      orientation: {
        type: 'i',
        value: 0
      },
      texelSize: {
        type: 'v2',
        value: new n.Vec2(512, 512)
      },
      blurAmount: {
        type: 'i',
        value: 10
      },
      blurScale: {
        type: 'f',
        value: 1
      },
      blurStrength: {
        type: 'f',
        value: 0.2
      },
      map: {
        type: 't',
        value: null
      },
      useBlur: {
        type: 'i',
        value: 1
      },
      blurGlobalAlpha: {
        type: 'f',
        value: 1
      }
    },
    deferred: {
      linearDepth: {
        type: 'f',
        value: 9e3
      },
      isNormal: {
        type: 'i',
        value: 1
      }
    },
    ssao: {
      map0: {
        type: 't',
        value: null
      },
      map1: {
        type: 't',
        value: null
      },
      map2: {
        type: 't',
        value: null
      },
      occluderBias: {
        type: 'f',
        value: 0.05
      },
      samplingRadius: {
        type: 'f',
        value: 20
      },
      attenuation: {
        type: 'v2',
        value: new s(1, 0)
      },
      texelSize: {
        type: 'v2',
        value: new s(1 / 512, 1 / 512)
      }
    },
    common: {
      diffuse: {
        type: 'c',
        value: new n.Color(15658734)
      },
      opacity: {
        type: 'f',
        value: 1
      },
      map: {
        type: 't',
        value: null
      },
      mapLoaded: {
        type: 'i',
        value: 0
      },
      offsetRepeat: {
        type: 'v4',
        value: new n.Vec4(0, 0, 1, 1)
      },
      flipX: {
        type: 'i',
        value: 0
      },
      lightMap: {
        type: 't',
        value: null
      },
      specularMap: {
        type: 't',
        value: null
      },
      envMap: {
        type: 't',
        value: null
      },
      flipEnvMap: {
        type: 'f',
        value: -1
      },
      useRefract: {
        type: 'i',
        value: 0
      },
      reflectivity: {
        type: 'f',
        value: 1
      },
      refractionRatio: {
        type: 'f',
        value: 0.98
      },
      combine: {
        type: 'i',
        value: 0
      },
      morphTargetInfluences: {
        type: 'f',
        value: 0
      }
    },
    gradient: {
      gradientColor: {
        type: 'v3v',
        value: []
      },
      gradientStop: {
        type: 'fv1',
        value: []
      },
      gradientType: {
        type: 'i',
        value: 0
      }
    },
    bump: {
      bumpMap: {
        type: 't',
        value: null
      },
      bumpScale: {
        type: 'f',
        value: 1
      }
    },
    normalmap: {
      normalMap: {
        type: 't',
        value: null
      },
      normalScale: {
        type: 'v2',
        value: new n.Vec2(1, 1)
      }
    },
    fog: {
      fogDensity: {
        type: 'f',
        value: 25e-5
      },
      fogNear: {
        type: 'f',
        value: 1
      },
      fogFar: {
        type: 'f',
        value: 2e3
      },
      fogColor: {
        type: 'c',
        value: new n.Color(16777215)
      }
    },
    lights: {
      ambientLightColor: {
        type: 'fv',
        value: []
      },
      directionalLightDirection: {
        type: 'fv',
        value: []
      },
      directionalLightColor: {
        type: 'fv',
        value: []
      },
      hemisphereLightDirection: {
        type: 'fv',
        value: []
      },
      hemisphereLightSkyColor: {
        type: 'fv',
        value: []
      },
      hemisphereLightGroundColor: {
        type: 'fv',
        value: []
      },
      pointLightColor: {
        type: 'fv',
        value: []
      },
      pointLightPosition: {
        type: 'fv',
        value: []
      },
      pointLightDistance: {
        type: 'fv1',
        value: []
      },
      spotLightColor: {
        type: 'fv',
        value: []
      },
      spotLightPosition: {
        type: 'fv',
        value: []
      },
      spotLightDirection: {
        type: 'fv',
        value: []
      },
      spotLightDistance: {
        type: 'fv1',
        value: []
      },
      spotLightAngleCos: {
        type: 'fv1',
        value: []
      },
      spotLightExponent: {
        type: 'fv1',
        value: []
      }
    },
    particle: {
      psColor: {
        type: 'c',
        value: new n.Color(15658734)
      },
      opacity: {
        type: 'f',
        value: 1
      },
      size: {
        type: 'f',
        value: 1
      },
      scale: {
        type: 'f',
        value: 1
      },
      map: {
        type: 't',
        value: null
      },
      fogDensity: {
        type: 'f',
        value: 25e-5
      },
      fogNear: {
        type: 'f',
        value: 1
      },
      fogFar: {
        type: 'f',
        value: 2e3
      },
      fogColor: {
        type: 'c',
        value: new n.Color(16777215)
      }
    },
    shadowmap: {
      shadowMap: {
        type: 'tv',
        value: []
      },
      shadowMapSize: {
        type: 'v2v',
        value: []
      },
      shadowBias: {
        type: 'fv1',
        value: []
      },
      shadowDarkness: {
        type: 'fv1',
        value: []
      },
      shadowMatrix: {
        type: 'm4v',
        value: []
      },
      pShadowMap: {
        type: 'tv',
        value: []
      },
      pShadowMapSize: {
        type: 'v2v',
        value: []
      },
      pShadowDarkness: {
        type: 'fv1',
        value: []
      },
      pPosition: {
        type: 'v3v',
        value: []
      }
    }
  }, n.ShaderLib = {
    outline: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.outline]),
      vertexShader: ['uniform float outline_offset;', 'void main() {', 'vec4 mvPosition = modelViewMatrix * vec4( position + normalize(position)  * outline_offset, 1.0 );', 'gl_Position = projectionMatrix * mvPosition;', '}'].join('\n'),
      fragmentShader: ['uniform vec3 diffuse;', 'void main() {', 'gl_FragColor = vec4(diffuse, 1.0 );', '}'].join('\n')
    },
    blur: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.blur]),
      vertexShader: ['varying vec2 vUv;', 'void main (){', 'gl_Position = vec4(position, 1.0);', 'vUv = uv;', '}'].join('\n'),
      fragmentShader: ['uniform vec2 texelSize;', 'uniform sampler2D map;', 'uniform int orientation;', 'uniform int blurAmount;', 'uniform float blurScale;', 'uniform float blurStrength;', 'uniform int useBlur;', 'uniform float blurGlobalAlpha;', 'uniform sampler2D depthMap;', 'varying vec2 vUv;', 'float Gaussian (float x, float deviation){', 'return (1.0 / sqrt(2.0 * 3.141592 * deviation)) * exp(-((x * x) / (2.0 * deviation)));', '}', 'void main (){', 'float halfBlur = float(blurAmount) * 0.5;', 'vec4 colour = vec4(0.0);', 'if(useBlur == 0){', 'colour = texture2D(map,vUv);', '}else {', 'vec4 texColour = vec4(0.0);', 'float deviation = halfBlur * 0.35;', 'deviation *= deviation;', 'float strength = 1.0 - blurStrength;', 'if ( orientation == 0 ){', 'for (int i = 0; i < 20; ++i){', 'if ( i >= blurAmount ){', 'break;', '}', 'float offset = float(i) - halfBlur;', 'texColour = texture2D(map, vUv + vec2(offset / texelSize.x * blurScale, 0.0)) * Gaussian(offset * strength, deviation);', 'colour += texColour;', '}', '}else{', 'for (int i = 0; i < 20; ++i){', 'if ( i >= blurAmount )', 'break;', 'float offset = float(i) - halfBlur;', 'texColour = texture2D(map, vUv + vec2(0.0, offset / texelSize.y * blurScale)) * Gaussian(offset * strength, deviation);', 'colour += texColour;', '}', '}', '}', 'gl_FragColor = clamp(colour, 0.0, 1.0);', 'if(useBlur == 0){', 'gl_FragColor.w *=  gl_FragColor.w * gl_FragColor.w * gl_FragColor.w * blurGlobalAlpha;', '}', '}'].join('\n')
    },
    deferred: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.deferred]),
      vertexShader: ['varying vec4 vPosition;', 'varying vec3 vNormal;', 'void main (){', 'vNormal = mat3(modelViewMatrix) * normal;', 'vPosition = modelViewMatrix * vec4(position, 1.0);', 'gl_Position = projectionMatrix * vPosition;', '}'].join('\n'),
      fragmentShader: ['uniform float linearDepth;', 'uniform int isNormal;', 'varying vec4 vPosition;', 'varying vec3 vNormal;', 'void main (){', 'float linear_depth = length(vPosition) / linearDepth;', 'if(isNormal == 1){', 'vec3 normal = normalize(vNormal);', 'gl_FragColor = vec4(normal.x, normal.y, normal.z, 1.0);', '}else{', 'gl_FragColor = vec4(vPosition.x, vPosition.y, vPosition.z, linear_depth);', '}', '}'].join('\n')
    },
    ssao: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.ssao]),
      vertexShader: ['varying vec2 vUv;', 'void main (){', 'gl_Position = vec4(position, 1.0);', 'vUv = uv;', '}'].join('\n'),
      fragmentShader: ['uniform sampler2D map0;', 'uniform sampler2D map1;', 'uniform sampler2D map2;', 'uniform vec2 texelSize;', 'uniform float occluderBias;', 'uniform float samplingRadius;', 'uniform vec2 attenuation;', 'varying vec2 vUv;', 'float samplePixels (vec3 srcPosition, vec3 srcNormal, vec2 uv){', 'vec3 dstPosition = texture2D(map0, uv).xyz;', 'vec3 positionVec = dstPosition - srcPosition;', 'float intensity = max(dot(normalize(positionVec), srcNormal) - occluderBias, 0.0);', 'float dist = length(positionVec);', 'float attenuationValue = 1.0 / (attenuation.x + (attenuation.y * dist));', 'return intensity * attenuationValue;', '}', 'void main (){', 'vec3 srcPosition = texture2D(map0, vUv).xyz;', 'vec3 srcNormal = texture2D(map1, vUv).xyz;', 'vec2 randVec = normalize(texture2D(map2, vUv).xy * 2.0 - 1.0);', 'float srcDepth = texture2D(map0, vUv).w;', 'float kernelRadius = samplingRadius * (1.0 - srcDepth);', 'vec2 kernel[4];', 'kernel[0] = vec2(0.0, 1.0);', 'kernel[1] = vec2(1.0, 0.0);', 'kernel[2] = vec2(0.0, -1.0);', 'kernel[3] = vec2(-1.0, 0.0);', 'const float sin45 = 0.707107;', 'float occlusion = 0.0;', 'for (int i = 0; i < 4; ++i){', 'vec2 k1 = reflect(kernel[i], randVec);', 'vec2 k2 = vec2(k1.x * sin45 - k1.y * sin45,k1.x * sin45 + k1.y * sin45);', 'k1 *= texelSize;', 'k2 *= texelSize;', 'occlusion += samplePixels(srcPosition, srcNormal, vUv + k1 * kernelRadius);',
        'occlusion += samplePixels(srcPosition, srcNormal, vUv + k2 * kernelRadius * 0.75);', 'occlusion += samplePixels(srcPosition, srcNormal, vUv + k1 * kernelRadius * 0.5);', 'occlusion += samplePixels(srcPosition, srcNormal, vUv + k2 * kernelRadius * 0.25);', '}', 'occlusion /= 16.0;', 'occlusion = clamp(occlusion, 0.0, 1.0);', 'gl_FragColor =  vec4(occlusion,0.0,0.0,1.0);', '}'
      ].join('\n')
    },
    basic: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.gradient, n.UniformsLib.fog]),
      vertexShader: [n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, 'void main() {', n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.skinbase_vertex, '#ifdef USE_ENVMAP', n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, '#endif', n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, '}'].join('\n'),
      fragmentShader: ['uniform vec3 diffuse;', 'uniform float opacity;', n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.gradient_parts_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, 'void main() {', 'gl_FragColor = vec4( diffuse, opacity );', n.ShaderChunk.gradient_basic_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n')
    },
    lambert: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
        ambient: {
          type: 'c',
          value: new n.Color(16777215)
        },
        emissive: {
          type: 'c',
          value: new n.Color(0)
        },
        wrapRGB: {
          type: 'v3',
          value: new n.Vec3(1, 1, 1)
        }
      }]),
      vertexShader: ['#define LAMBERT', 'varying vec3 vLightFront;', '#ifdef DOUBLE_SIDED', 'varying vec3 vLightBack;', '#endif', n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_lambert_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, 'void main() {', n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_lambert_vertex, n.ShaderChunk.shadowmap_vertex, '}'].join('\n'),
      fragmentShader: ['uniform float opacity;', 'varying vec3 vLightFront;', '#ifdef DOUBLE_SIDED', 'varying vec3 vLightBack;', '#endif', n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, 'void main() {', 'gl_FragColor = vec4( vec3 ( 1.0 ), opacity );', n.ShaderChunk.map_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, '#ifdef DOUBLE_SIDED', 'if ( gl_FrontFacing )', 'gl_FragColor.xyz *= vLightFront;', 'else', 'gl_FragColor.xyz *= vLightBack;', '#else', 'gl_FragColor.xyz *= vLightFront;', '#endif', n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n')
    },
    phong: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.gradient, n.UniformsLib.bump, n.UniformsLib.normalmap, n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
        ambient: {
          type: 'c',
          value: new n.Color(16777215)
        },
        emissive: {
          type: 'c',
          value: new n.Color(0)
        },
        specular: {
          type: 'c',
          value: new n.Color(1118481)
        },
        uspecularStrength: {
          type: 'f',
          value: 1
        },
        shininess: {
          type: 'f',
          value: 30
        },
        wrapRGB: {
          type: 'v3',
          value: new n.Vec3(1, 1, 1)
        },
        mapSSAO: {
          type: 't',
          value: null
        }
      }]),
      vertexShader: ['#define PHONG', 'varying vec3 vViewPosition;', 'varying vec3 vNormal;', 'varying vec4 finalPosition;', n.ShaderChunk.map_pars_vertex, n.ShaderChunk.lightmap_pars_vertex, n.ShaderChunk.envmap_pars_vertex, n.ShaderChunk.lights_phong_pars_vertex, n.ShaderChunk.color_pars_vertex, n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, 'void main() {', n.ShaderChunk.map_vertex, n.ShaderChunk.lightmap_vertex, n.ShaderChunk.color_vertex, n.ShaderChunk.morphnormal_vertex, n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, n.ShaderChunk.defaultnormal_vertex, 'vNormal = normalize( transformedNormal );', n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, 'vViewPosition = -mvPosition.xyz;', n.ShaderChunk.worldpos_vertex, n.ShaderChunk.envmap_vertex, n.ShaderChunk.lights_phong_vertex, n.ShaderChunk.shadowmap_vertex, 'finalPosition = gl_Position;', '}'].join('\n'),
      fragmentShader: ['#define PHONG', 'uniform vec3 diffuse;', 'uniform float opacity;', 'uniform vec3 ambient;', 'uniform vec3 emissive;', 'uniform vec3 specular;', 'uniform float uspecularStrength;', 'uniform float shininess;', 'varying vec4 finalPosition;', n.ShaderChunk.color_pars_fragment, n.ShaderChunk.gradient_parts_fragment, n.ShaderChunk.map_pars_fragment, n.ShaderChunk.lightmap_pars_fragment, n.ShaderChunk.envmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.lights_phong_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.bumpmap_pars_fragment, n.ShaderChunk.normalmap_pars_fragment, n.ShaderChunk.specularmap_pars_fragment, '#ifdef USE_SSAO', 'uniform sampler2D mapSSAO;', '#endif', 'void main() {', 'gl_FragColor = vec4( vec3 ( 1.0 ), opacity );', 'vec3 tempDiffuse = diffuse;', n.ShaderChunk.gradient_phong_fragment, n.ShaderChunk.map_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.specularmap_fragment, n.ShaderChunk.lights_phong_fragment, n.ShaderChunk.lightmap_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.envmap_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n')
    },
    particle_basic: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.particle, n.UniformsLib.shadowmap]),
      vertexShader: ['uniform float size;', 'uniform float scale;', n.ShaderChunk.color_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, 'void main() {', n.ShaderChunk.color_vertex, 'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', '#ifdef USE_SIZEATTENUATION', 'gl_PointSize = size * ( scale / length( mvPosition.xyz ) );', '#else', 'float s = normal.x;', 'if(s == 0.0){', '   s = 1.0;', '}', 'gl_PointSize = size * s;', '#endif', 'gl_Position = projectionMatrix * mvPosition;', n.ShaderChunk.worldpos_vertex, n.ShaderChunk.shadowmap_vertex, '}'].join('\n'),
      fragmentShader: ['uniform vec3 psColor;', 'uniform float opacity;', n.ShaderChunk.color_pars_fragment, n.ShaderChunk.map_particle_pars_fragment, n.ShaderChunk.fog_pars_fragment, n.ShaderChunk.shadowmap_pars_fragment, 'void main() {', 'gl_FragColor = vec4( psColor, opacity );', n.ShaderChunk.map_particle_fragment, n.ShaderChunk.alphatest_fragment, n.ShaderChunk.color_fragment, n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n')
    },
    billboard: {
      vertexShader: ['uniform int useScreenCoordinates;', 'uniform int sizeAttenuation;', 'uniform vec3 screenPosition;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform float rotation;', 'uniform vec2 scale;', 'uniform vec2 alignment;', 'uniform vec2 uvOffset;', 'uniform vec2 uvScale;', 'attribute vec2 position;', 'attribute vec2 uv;', 'varying vec2 vUV;', 'void main() {', 'vUV = uvOffset + uv * uvScale;', 'vec2 alignedPosition = position + alignment;', 'vec2 rotatedPosition;', 'rotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;', 'rotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;', 'vec4 finalPosition;', 'if( useScreenCoordinates != 0 ) {', 'finalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );', '} else {', 'finalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );', 'finalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );', '}', 'gl_Position = finalPosition;', '}'].join('\n'),
      fragmentShader: ['uniform vec3 color;', 'uniform sampler2D map;', 'uniform float opacity;', 'uniform int fogType;', 'uniform vec3 fogColor;', 'uniform float fogDensity;', 'uniform float fogNear;', 'uniform float fogFar;', 'uniform float alphaTest;', 'varying vec2 vUV;', 'void main() {', 'vec4 texture = texture2D( map, vUV );', 'if ( texture.a < alphaTest ) discard;', 'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );', 'if ( fogType > 0 ) {', 'float depth = gl_FragCoord.z / gl_FragCoord.w;', 'float fogFactor = 0.0;', 'if ( fogType == 1 ) {', 'fogFactor = smoothstep( fogNear, fogFar, depth );', '} else {', 'const float LOG2 = 1.442695;', 'float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );', 'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );', '}', 'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );', '}', '}'].join('\n')
    },
    dashed: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.common, n.UniformsLib.fog, {
        scale: {
          type: 'f',
          value: 1
        },
        dashSize: {
          type: 'f',
          value: 1
        },
        totalSize: {
          type: 'f',
          value: 2
        }
      }]),
      vertexShader: ['uniform float scale;', 'attribute float lineDistance;', 'varying float vLineDistance;', n.ShaderChunk.color_pars_vertex, 'void main() {', n.ShaderChunk.color_vertex, 'vLineDistance = scale * lineDistance;', 'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', 'gl_Position = projectionMatrix * mvPosition;', '}'].join('\n'),
      fragmentShader: ['uniform vec3 diffuse;', 'uniform float opacity;', 'uniform float dashSize;', 'uniform float totalSize;', 'varying float vLineDistance;', n.ShaderChunk.color_pars_fragment, n.ShaderChunk.fog_pars_fragment, 'void main() {', 'if ( mod( vLineDistance, totalSize ) > dashSize ) {', 'discard;', '}', 'gl_FragColor = vec4( diffuse, opacity );', n.ShaderChunk.color_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n')
    },
    depth: {
      uniforms: {
        mNear: {
          type: 'f',
          value: 1
        },
        mFar: {
          type: 'f',
          value: 2e3
        },
        opacity: {
          type: 'f',
          value: 1
        }
      },
      vertexShader: ['void main() {', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
      fragmentShader: ['uniform float mNear;', 'uniform float mFar;', 'uniform float opacity;', 'void main() {', 'float depth = gl_FragCoord.z / gl_FragCoord.w;', 'float color = 1.0 - smoothstep( mNear, mFar, depth );', 'gl_FragColor = vec4( vec3( color ), opacity );', '}'].join('\n')
    },
    normal: {
      uniforms: {
        opacity: {
          type: 'f',
          value: 1
        }
      },
      vertexShader: ['varying vec3 vNormal;', 'void main() {', 'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', 'vNormal = normalize( normalMatrix * normal );', 'gl_Position = projectionMatrix * mvPosition;', '}'].join('\n'),
      fragmentShader: ['uniform float opacity;', 'varying vec3 vNormal;', 'void main() {', 'gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );', '}'].join('\n')
    },
    normalmap: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
        enableAO: {
          type: 'i',
          value: 0
        },
        enableDiffuse: {
          type: 'i',
          value: 0
        },
        enableSpecular: {
          type: 'i',
          value: 0
        },
        enableReflection: {
          type: 'i',
          value: 0
        },
        enableDisplacement: {
          type: 'i',
          value: 0
        },
        tDisplacement: {
          type: 't',
          value: null
        },
        tDiffuse: {
          type: 't',
          value: null
        },
        tCube: {
          type: 't',
          value: null
        },
        tNormal: {
          type: 't',
          value: null
        },
        tSpecular: {
          type: 't',
          value: null
        },
        tAO: {
          type: 't',
          value: null
        },
        uNormalScale: {
          type: 'v2',
          value: new n.Vec2(1, 1)
        },
        uDisplacementBias: {
          type: 'f',
          value: 0
        },
        uDisplacementScale: {
          type: 'f',
          value: 1
        },
        uDiffuseColor: {
          type: 'c',
          value: new n.Color(16777215)
        },
        uSpecularColor: {
          type: 'c',
          value: new n.Color(1118481)
        },
        uSpecualarStrength: {
          type: 'f',
          value: 1
        },
        uAmbientColor: {
          type: 'c',
          value: new n.Color(16777215)
        },
        uShininess: {
          type: 'f',
          value: 30
        },
        uOpacity: {
          type: 'f',
          value: 1
        },
        useRefract: {
          type: 'i',
          value: 0
        },
        uRefractionRatio: {
          type: 'f',
          value: 0.98
        },
        uReflectivity: {
          type: 'f',
          value: 0.5
        },
        uOffset: {
          type: 'v2',
          value: new n.Vec2(0, 0)
        },
        uRepeat: {
          type: 'v2',
          value: new n.Vec2(1, 1)
        },
        wrapRGB: {
          type: 'v3',
          value: new n.Vec3(1, 1, 1)
        }
      }]),
      fragmentShader: ['uniform vec3 uAmbientColor;', 'uniform vec3 uDiffuseColor;', 'uniform vec3 uSpecularColor;', 'uniform vec3 uSpecularStrength;', 'uniform float uShininess;', 'uniform float uOpacity;', 'uniform bool enableDiffuse;', 'uniform bool enableSpecular;', 'uniform bool enableAO;', 'uniform bool enableReflection;', 'uniform sampler2D tDiffuse;', 'uniform sampler2D tNormal;', 'uniform sampler2D tSpecular;', 'uniform sampler2D tAO;', 'uniform samplerCube tCube;', 'uniform vec2 uNormalScale;', 'uniform bool useRefract;', 'uniform float uRefractionRatio;', 'uniform float uReflectivity;', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'uniform vec3 ambientLightColor;', '#if MAX_DIR_LIGHTS > 0', 'uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];', 'uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];', '#endif', '#if MAX_POINT_LIGHTS > 0', 'uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];', 'uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];', 'uniform float pointLightDistance[ MAX_POINT_LIGHTS ];', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];', 'uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];', 'uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];', '#endif', '#ifdef WRAP_AROUND', 'uniform vec3 wrapRGB;', '#endif', 'varying vec3 vWorldPosition;', 'varying vec3 vViewPosition;', n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, 'void main() {', 'gl_FragColor = vec4( vec3( 1.0 ), uOpacity );', 'vec3 specularTex = vec3( 1.0 );', 'vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;', 'normalTex.xy *= uNormalScale;', 'normalTex = normalize( normalTex );', 'if( enableDiffuse ) {', '#ifdef GAMMA_INPUT', 'vec4 texelColor = texture2D( tDiffuse, vUv );', 'texelColor.xyz *= texelColor.xyz;', 'gl_FragColor = gl_FragColor * texelColor;', '#else', 'gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );', '#endif', '}', 'if( enableAO ) {', '#ifdef GAMMA_INPUT', 'vec4 aoColor = texture2D( tAO, vUv );', 'aoColor.xyz *= aoColor.xyz;', 'gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;', '#else', 'gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;', '#endif', '}', 'if( enableSpecular )', 'specularTex = texture2D( tSpecular, vUv ).xyz;', 'mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );', 'vec3 finalNormal = tsb * normalTex;', '#ifdef FLIP_SIDED', 'finalNormal = -finalNormal;', '#endif', 'vec3 normal = normalize( finalNormal );', 'vec3 viewPosition = normalize( vViewPosition );', '#if MAX_POINT_LIGHTS > 0', 'vec3 pointDiffuse = vec3( 0.0 );', 'vec3 pointSpecular = vec3( 0.0 );', 'for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );', 'vec3 pointVector = lPosition.xyz + vViewPosition.xyz;', 'float pointDistance = 1.0;', 'if ( pointLightDistance[ i ] > 0.0 )', 'pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );', 'pointVector = normalize( pointVector );', '#ifdef WRAP_AROUND', 'float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );', 'float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );', 'vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );', '#else', 'float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );', '#endif', 'pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;', 'vec3 pointHalfVector = normalize( pointVector + viewPosition );', 'float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );', 'float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( uShininess + 2.0001 ) / 8.0;', 'vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );', 'pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;', '#else', 'pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;', '#endif', '}', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'vec3 spotDiffuse = vec3( 0.0 );', 'vec3 spotSpecular = vec3( 0.0 );', 'for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );', 'vec3 spotVector = lPosition.xyz + vViewPosition.xyz;', 'float spotDistance = 1.0;', 'if ( spotLightDistance[ i ] > 0.0 )', 'spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );', 'spotVector = normalize( spotVector );', 'float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );', 'if ( spotEffect > spotLightAngleCos[ i ] ) {', 'spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );', '#ifdef WRAP_AROUND', 'float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );', 'float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );', 'vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );', '#else', 'float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );', '#endif', 'spotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;', 'vec3 spotHalfVector = normalize( spotVector + viewPosition );', 'float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );', 'float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( uShininess + 2.0001 ) / 8.0;', 'vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );', 'spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;', '#else', 'spotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;', '#endif', '}', '}', '#endif', '#if MAX_DIR_LIGHTS > 0', 'vec3 dirDiffuse = vec3( 0.0 );', 'vec3 dirSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {', 'vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );', 'vec3 dirVector = normalize( lDirection.xyz );', '#ifdef WRAP_AROUND', 'float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );', 'float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );', 'vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );', '#else', 'float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );', '#endif', 'dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;', 'vec3 dirHalfVector = normalize( dirVector + viewPosition );', 'float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );', 'float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float specularNormalization = ( uShininess + 2.0001 ) / 8.0;', 'vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );', 'dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;', '#else', 'dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;', '#endif', '}', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'vec3 hemiDiffuse  = vec3( 0.0 );', 'vec3 hemiSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );', 'vec3 lVector = normalize( lDirection.xyz );', 'float dotProduct = dot( normal, lVector );', 'float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;', 'vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );', 'hemiDiffuse += uDiffuseColor * hemiColor;', 'vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );', 'float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;', 'float hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );', 'vec3 lVectorGround = -lVector;', 'vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );', 'float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;', 'float hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );', '#ifdef PHYSICALLY_BASED_SHADING', 'float dotProductGround = dot( normal, lVectorGround );', 'float specularNormalization = ( uShininess + 2.0001 ) / 8.0;', 'vec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );', 'vec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );', 'hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );', '#else', 'hemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;', '#endif', '}', '#endif', 'vec3 totalDiffuse = vec3( 0.0 );', 'vec3 totalSpecular = vec3( 0.0 );', '#if MAX_DIR_LIGHTS > 0', 'totalDiffuse += dirDiffuse;', 'totalSpecular += dirSpecular;', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'totalDiffuse += hemiDiffuse;', 'totalSpecular += hemiSpecular;', '#endif', '#if MAX_POINT_LIGHTS > 0', 'totalDiffuse += pointDiffuse;', 'totalSpecular += pointSpecular;', '#endif', '#if MAX_SPOT_LIGHTS > 0', 'totalDiffuse += spotDiffuse;', 'totalSpecular += spotSpecular;', '#endif', '#ifdef METAL', 'gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );', '#else', 'gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;', '#endif', 'if ( enableReflection ) {', 'vec3 vReflect;', 'vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );', 'if ( useRefract ) {', 'vReflect = refract( cameraToVertex, normal, uRefractionRatio );', '} else {', 'vReflect = reflect( cameraToVertex, normal );', '}', 'vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );', '#ifdef GAMMA_INPUT', 'cubeColor.xyz *= cubeColor.xyz;', '#endif', 'gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );', '}', n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, '}'].join('\n'),
      vertexShader: ['attribute vec4 tangent;', 'uniform vec2 uOffset;', 'uniform vec2 uRepeat;', 'uniform bool enableDisplacement;', '#ifdef VERTEX_TEXTURES', 'uniform sampler2D tDisplacement;', 'uniform float uDisplacementScale;', 'uniform float uDisplacementBias;', '#endif', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'varying vec3 vWorldPosition;', 'varying vec3 vViewPosition;', n.ShaderChunk.skinning_pars_vertex, n.ShaderChunk.shadowmap_pars_vertex, 'void main() {', n.ShaderChunk.skinbase_vertex, n.ShaderChunk.skinnormal_vertex, '#ifdef USE_SKINNING', 'vNormal = normalize( normalMatrix * skinnedNormal.xyz );', 'vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );', 'vTangent = normalize( normalMatrix * skinnedTangent.xyz );', '#else', 'vNormal = normalize( normalMatrix * normal );', 'vTangent = normalize( normalMatrix * tangent.xyz );', '#endif', 'vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );', 'vUv = uv * uRepeat + uOffset;', 'vec3 displacedPosition;', '#ifdef VERTEX_TEXTURES', 'if ( enableDisplacement ) {', 'vec3 dv = texture2D( tDisplacement, uv ).xyz;', 'float df = uDisplacementScale * dv.x + uDisplacementBias;', 'displacedPosition = position + normalize( normal ) * df;', '} else {', '#ifdef USE_SKINNING', 'vec4 skinVertex = vec4( position, 1.0 );', 'vec4 skinned  = boneMatX * skinVertex * skinWeight.x;', 'skinned 	  += boneMatY * skinVertex * skinWeight.y;', 'displacedPosition  = skinned.xyz;', '#else', 'displacedPosition = position;', '#endif', '}', '#else', '#ifdef USE_SKINNING', 'vec4 skinVertex = vec4( position, 1.0 );', 'vec4 skinned  = boneMatX * skinVertex * skinWeight.x;', 'skinned 	  += boneMatY * skinVertex * skinWeight.y;', 'displacedPosition  = skinned.xyz;', '#else', 'displacedPosition = position;', '#endif', '#endif', 'vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );', 'vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );', 'gl_Position = projectionMatrix * mvPosition;', 'vWorldPosition = worldPosition.xyz;', 'vViewPosition = -mvPosition.xyz;', '#ifdef USE_SHADOWMAP', 'for( int i = 0; i < MAX_SHADOWS; i ++ ) {', 'vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;', '}', '#endif', '}'].join('\n')
    },
    cube: {
      uniforms: {
        tCube: {
          type: 't',
          value: null
        },
        tFlip: {
          type: 'f',
          value: -1
        }
      },
      vertexShader: ['varying vec3 vWorldPosition;', 'void main() {', 'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );', 'vWorldPosition = worldPosition.xyz;', 'gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
      fragmentShader: ['uniform samplerCube tCube;', 'uniform float tFlip;', 'varying vec3 vWorldPosition;', 'void main() {', 'gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );', '}'].join('\n')
    },
    depthRGBA: {
      uniforms: {
        isCube: {
          type: 'i',
          value: 0
        }
      },
      vertexShader: [n.ShaderChunk.morphtarget_pars_vertex, n.ShaderChunk.skinning_pars_vertex, 'varying vec4 vPosition1;', 'void main() {', n.ShaderChunk.skinbase_vertex, n.ShaderChunk.morphtarget_vertex, n.ShaderChunk.skinning_vertex, n.ShaderChunk.default_vertex, 'vPosition1 = modelViewMatrix * vec4( position, 1.0 );', '}'].join('\n'),
      fragmentShader: ['uniform int isCube;', 'varying vec4 vPosition1;', 'varying vec3 vPosition2;', 'vec4 pack_depth( const in float depth ) {', 'const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );', 'const vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );', 'vec4 res = fract( depth * bit_shift );', 'res -= res.xxyz * bit_mask;', 'return res;', '}', 'vec4 pack (float depth){', 'const vec4 bias = vec4(1.0 / 255.0,1.0 / 255.0,1.0 / 255.0, 0.0);', 'float r = depth;', 'float g = fract(r * 255.0);', 'float b = fract(g * 255.0);', 'float a = fract(b * 255.0);', 'vec4 colour = vec4(r, g, b, a);', 'return colour - (colour.yzww * bias);', '}', 'void main() {', 'if(isCube == 1){', 'gl_FragData[ 0 ] = pack(length(vPosition1) / 100000.0);', '}else{', 'gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );', '}', '}'].join('\n')
    }
  }, n.ShaderTerrain = {
    terrain: {
      uniforms: n.UniformsUtils.merge([n.UniformsLib.fog, n.UniformsLib.lights, n.UniformsLib.shadowmap, {
        enableDiffuse1: {
          type: 'i',
          value: 0
        },
        enableDiffuse2: {
          type: 'i',
          value: 0
        },
        enableDiffuse3: {
          type: 'i',
          value: 0
        },
        enableDisplacement: {
          type: 'i',
          value: 0
        },
        enableSpecular: {
          type: 'i',
          value: 0
        },
        enableReflection: {
          type: 'i',
          value: 0
        },
        tDiffuse1: {
          type: 't',
          value: null
        },
        tDiffuse2: {
          type: 't',
          value: null
        },
        tDiffuse3: {
          type: 't',
          value: null
        },
        tDetail: {
          type: 't',
          value: null
        },
        tNormal: {
          type: 't',
          value: null
        },
        tSpecular: {
          type: 't',
          value: null
        },
        tDisplacement: {
          type: 't',
          value: null
        },
        heightUnit: {
          type: 'f',
          value: 1
        },
        blendRange: {
          type: 'fv1',
          value: null
        },
        uNormalScale: {
          type: 'f',
          value: 1
        },
        uDisplacementBias: {
          type: 'f',
          value: 0
        },
        uDisplacementScale: {
          type: 'f',
          value: 1
        },
        uDiffuseColor: {
          type: 'c',
          value: new n.Color(15658734)
        },
        uSpecularColor: {
          type: 'c',
          value: new n.Color(1118481)
        },
        uAmbientColor: {
          type: 'c',
          value: new n.Color(328965)
        },
        uShininess: {
          type: 'f',
          value: 30
        },
        uOpacity: {
          type: 'f',
          value: 1
        },
        uRepeatBase: {
          type: 'v2',
          value: new n.Vec2(1, 1)
        },
        uRepeatOverlay: {
          type: 'v2',
          value: new n.Vec2(1, 1)
        },
        uOffset: {
          type: 'v2',
          value: new n.Vec2(0, 0)
        }
      }]),
      fragmentShader: ['uniform vec3 uAmbientColor;', 'uniform vec3 uDiffuseColor;', 'uniform vec3 uSpecularColor;', 'uniform float uShininess;', 'uniform float uOpacity;', 'uniform bool enableDiffuse1;', 'uniform bool enableDiffuse2;', 'uniform bool enableDiffuse3;', 'uniform bool enableSpecular;', 'uniform bool enableDisplacement;', 'uniform float blendRange[2];', 'uniform float heightUnit;', 'uniform sampler2D tDiffuse1;', 'uniform sampler2D tDiffuse2;', 'uniform sampler2D tDiffuse3;', 'uniform sampler2D tDetail;', 'uniform sampler2D tNormal;', 'uniform sampler2D tSpecular;', 'uniform sampler2D tDisplacement;', 'uniform float uNormalScale;', 'uniform vec2 uRepeatOverlay;', 'uniform vec2 uRepeatBase;', 'uniform vec2 uOffset;', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'varying vec4 vPosition;', 'uniform vec3 ambientLightColor;', '#if MAX_DIR_LIGHTS > 0', 'uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];', 'uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];', 'uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];', '#endif', '#if MAX_POINT_LIGHTS > 0', 'uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];', 'uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];', 'uniform float pointLightDistance[ MAX_POINT_LIGHTS ];', '#endif', 'varying vec3 vViewPosition;', n.ShaderChunk.shadowmap_pars_fragment, n.ShaderChunk.fog_pars_fragment, 'void main() {', 'gl_FragColor = vec4( vec3( 1.0 ), uOpacity );', 'vec3 specularTex = vec3( 1.0 );', 'vec2 uvOverlay = uRepeatOverlay * vUv + uOffset;', 'vec2 uvBase = uRepeatBase * vUv;', 'vec3 normalTex = texture2D( tDetail, uvOverlay ).xyz * 2.0 - 1.0;', 'normalTex.xy *= uNormalScale;', 'normalTex = normalize( normalTex );', 'if( (enableDiffuse1 && enableDiffuse2)  || (enableDiffuse1 && enableDiffuse3) || (enableDiffuse2 && enableDiffuse3) ){', 'vec4 colDiffuse1 = texture2D( tDiffuse1, uvOverlay );', 'vec4 colDiffuse2 = texture2D( tDiffuse2, uvOverlay );', 'vec4 colDiffuse3 = texture2D( tDiffuse3, uvOverlay );', 'vec4 allDefiuuses[3];', 'allDefiuuses[0] = colDiffuse1;', 'allDefiuuses[1] = colDiffuse2;', 'allDefiuuses[2] = colDiffuse3;', '#ifdef GAMMA_INPUT', 'colDiffuse1.xyz *= colDiffuse1.xyz;', 'colDiffuse2.xyz *= colDiffuse2.xyz;', 'colDiffuse3.xyz *= colDiffuse3.xyz;', '#endif', 'vec4 mixColor;', 'if(enableDisplacement){', 'vec4 dis = texture2D( tDisplacement, uvBase );', 'if(enableDiffuse1 && enableDiffuse2 && enableDiffuse3){', 'float total = dis.r + dis.g + dis.b;', 'if(total == 0.0){', 'mixColor = colDiffuse1 * 1.0/3.0 + colDiffuse2 * 1.0/3.0 + colDiffuse3 * 1.0/3.0;', '}else{', 'mixColor = colDiffuse1 * dis.r/total + colDiffuse2 * dis.g/total + colDiffuse3 * dis.b/total;', '}', '}', '}else {', 'mixColor = colDiffuse2;', 'float y = vPosition.y;', 'float blend2Bottom = blendRange[1] * heightUnit * 255.0;', 'float percent = 0.0;', 'if(y < blendRange[0] * heightUnit * 255.0){', 'mixColor = colDiffuse1;', 'percent = y / (blendRange[0] * heightUnit * 255.0);', 'if(percent >=0.8){', 'mixColor = mix(colDiffuse1,colDiffuse2,(percent - 0.8) / 0.2);', '}', '} else if(y > blend2Bottom){', 'mixColor = colDiffuse3;', 'percent = (y - blend2Bottom) / (heightUnit * 255.0 - blend2Bottom);', 'if(percent <= 0.2){', 'mixColor = mix(colDiffuse2,colDiffuse3,percent/0.2);', '}', '}', '}', 'gl_FragColor = gl_FragColor * mixColor;', ' } else if( enableDiffuse1 ) {', 'gl_FragColor = gl_FragColor * texture2D( tDiffuse1, uvOverlay );', '} else if( enableDiffuse2 ) {', 'gl_FragColor = gl_FragColor * texture2D( tDiffuse2, uvOverlay );', '}', 'if( enableSpecular )', 'specularTex = texture2D( tSpecular, uvOverlay ).xyz;', 'mat3 tsb = mat3( vTangent, vBinormal, vNormal );', 'vec3 finalNormal = tsb * normalTex;', 'vec3 normal = normalize( finalNormal );', 'vec3 viewPosition = normalize( vViewPosition );', '#if MAX_POINT_LIGHTS > 0', 'vec3 pointDiffuse = vec3( 0.0 );', 'vec3 pointSpecular = vec3( 0.0 );', 'for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {', 'vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );', 'vec3 lVector = lPosition.xyz + vViewPosition.xyz;', 'float lDistance = 1.0;', 'if ( pointLightDistance[ i ] > 0.0 )', 'lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );',
        'lVector = normalize( lVector );', 'vec3 pointHalfVector = normalize( lVector + viewPosition );', 'float pointDistance = lDistance;', 'float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );', 'float pointDiffuseWeight = max( dot( normal, lVector ), 0.0 );', 'float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );', 'pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;', 'pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;', '}', '#endif', '#if MAX_DIR_LIGHTS > 0', 'vec3 dirDiffuse = vec3( 0.0 );', 'vec3 dirSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {', 'vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );', 'vec3 dirVector = normalize( lDirection.xyz );', 'vec3 dirHalfVector = normalize( dirVector + viewPosition );', 'float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );', 'float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );', 'float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );', 'dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;', 'dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;', '}', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'vec3 hemiDiffuse  = vec3( 0.0 );', 'vec3 hemiSpecular = vec3( 0.0 );', 'for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {', 'vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );', 'vec3 lVector = normalize( lDirection.xyz );', 'float dotProduct = dot( normal, lVector );', 'float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;', 'hemiDiffuse += uDiffuseColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );', 'float hemiSpecularWeight = 0.0;', 'vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );', 'float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;', 'hemiSpecularWeight += specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );', 'vec3 lVectorGround = -lVector;', 'vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );', 'float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;', 'hemiSpecularWeight += specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );', 'hemiSpecular += uSpecularColor * mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight ) * hemiSpecularWeight * hemiDiffuseWeight;', '}', '#endif', 'vec3 totalDiffuse = vec3( 0.0 );', 'vec3 totalSpecular = vec3( 0.0 );', '#if MAX_DIR_LIGHTS > 0', 'totalDiffuse += dirDiffuse;', 'totalSpecular += dirSpecular;', '#endif', '#if MAX_HEMI_LIGHTS > 0', 'totalDiffuse += hemiDiffuse;', 'totalSpecular += hemiSpecular;', '#endif', '#if MAX_POINT_LIGHTS > 0', 'totalDiffuse += pointDiffuse;', 'totalSpecular += pointSpecular;', '#endif', n.ShaderChunk.shadowmap_fragment, n.ShaderChunk.linear_to_gamma_fragment, n.ShaderChunk.fog_fragment, '}'
      ].join('\n'),
      vertexShader: ['attribute vec4 tangent;', 'uniform vec2 uRepeatBase;', 'uniform sampler2D tNormal;', '#ifdef VERTEX_TEXTURES', 'uniform sampler2D tDisplacement;', 'uniform float uDisplacementScale;', 'uniform float uDisplacementBias;', '#endif', 'varying vec3 vTangent;', 'varying vec3 vBinormal;', 'varying vec3 vNormal;', 'varying vec2 vUv;', 'varying vec4 vPosition;', 'varying vec3 vViewPosition;', n.ShaderChunk.shadowmap_pars_vertex, 'void main() {', 'vNormal = normalize( normalMatrix * normal );', 'vTangent = normalize( normalMatrix * tangent.xyz );', 'vBinormal = cross( vNormal, vTangent ) * tangent.w;', 'vBinormal = normalize( vBinormal );', 'vUv = uv;', 'vec2 uvBase = uv * uRepeatBase;', '#ifdef VERTEX_TEXTURES', 'vec3 dv = texture2D( tDisplacement, uvBase ).xyz;', 'float df = uDisplacementScale * dv.x + uDisplacementBias;', 'vec3 displacedPosition = normal * df + position;', 'vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );', 'vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );', '#else', 'vPosition = vec4(position,1.0);', 'vec4 worldPosition = modelMatrix * vec4( position, 1.0 );', 'vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );', '#endif', 'gl_Position = projectionMatrix * mvPosition;', 'vViewPosition = -mvPosition.xyz;', 'vec3 normalTex = texture2D( tNormal, uvBase ).xyz * 2.0 - 1.0;', 'vNormal = normalMatrix * normalTex;', n.ShaderChunk.shadowmap_vertex, '}'].join('\n')
    }
  }, n.ShaderLib.terrain = n.ShaderTerrain.terrain, n.Fog = function(e, r, i) {
    this.name = '', this.color = new n.Color(e), this.near = r !== t ? r : 1, this.far = i !== t ? i : 1e3
  }, n.Fog.prototype = {
    constructor: n.Fog,
    clone: function() {
      return new n.Flog(this.color.getHex(), this.near, this.far)
    },
    refreshUniforms: function(e) {
      e.fogNear.value = this.near, e.fogFar.value = this.far, e.fogColor.value = this.color
    }
  }, n.FogExp2 = function(e, r) {
    this.name = '', this.color = new n.Color(e), this.density = r !== t ? r : 1
  }, n.FogExp2.prototype = {
    DensityFactor: 25e-5,
    constructor: n.FogExp2,
    clone: function() {
      return new n.FogExp2(this.color.getHex(), this.density)
    },
    refreshUniforms: function(e) {
      e.fogDensity.value = this.density * this.DensityFactor, e.fogColor.value = this.color
    }
  }
  var P = {},
    H = P.RADIANS_TO_DEGREES = 180 / Math.PI,
    B = P.DEGREES_TO_RADIANS = Math.PI / 180
  P.isPowerOfTwo = function(e) {
    return (e & e - 1) === 0
  }, P.clone = function(e, n) {
    n == t && (n = new e.prototype.constructor())
    for (var r in e) {
      if (r === 'id') continue
      var i = e[r]
      if (i.copy && typeof i.copy === 'function') n[r].copy(i)
      else if (i instanceof Array) {
        var s = i,
          o = n[r]
        o == null && (o = [])
        for (var u = 0; u < s.length; u++) {
          var a = s[u]
          o.push(a.clone())
        }
      } else cloneObjet[r] = i
    }
  }, P.paramToGL = function(e, t) {
    if (!t) {
      console.error('No webgl context')
      return
    }
    switch (e) {
      case n.RepeatWrapping:
        return t.REPEAT
      case n.ClampToEdgeWrapping:
        return t.CLAMP_TO_EDGE
      case n.MirroredRepeatWrapping:
        return t.MIRRORED_REPEAT
      case n.NearestFilter:
        return t.NEAREST
      case n.NearestMipMapNearestFilter:
        return t.NEAREST_MIPMAP_NEAREST
      case n.NearestMipMapLinearFilter:
        return t.NEAREST_MIPMAP_LINEAR
      case n.LinearFilter:
        return t.LINEAR
      case n.LinearMipMapNearestFilter:
        return t.LINEAR_MIPMAP_NEAREST
      case n.LinearMipMapLinearFilter:
        return t.LINEAR_MIPMAP_LINEAR
      case n.ByteType:
        return t.BYTE
      case n.UnsignedByteType:
        return t.UNSIGNED_BYTE
      case n.ShortType:
        return t.SHORT
      case n.UnsignedShortType:
        return t.UNSIGNED_SHORT
      case n.IntType:
        return t.INT
      case n.UnsignedIntType:
        return t.UNSIGNED_INT
      case n.FloatType:
        return t.FLOAT
      case n.AlphaFormat:
        return t.ALPHA
      case n.RGBFormat:
        return t.RGB
      case n.RGBAFormat:
        return t.RGBA
      case n.LuminanceFormat:
        return t.LUMINANCE
      case n.LuminanceAlphaFormat:
        return t.LUMINANCE_ALPHA
      case n.AddEquation:
        return t.FUNC_ADD
      case n.SubtractEquation:
        return t.FUNC_SUBTRACT
      case n.ReverseSubtractEquation:
        return t.FUNC_REVERSE_SUBTRACT
      case n.ZeroFactor:
        return t.ZERO
      case n.OneFactor:
        return t.ONE
      case n.SrcColorFactor:
        return t.SRC_COLOR
      case n.OneMinusSrcColorFactor:
        return t.ONE_MINUS_SRC_COLOR
      case n.SrcAlphaFactor:
        return t.SRC_ALPHA
      case n.OneMinusSrcAlphaFactor:
        return t.ONE_MINUS_SRC_ALPHA
      case n.DstAlphaFactor:
        return t.DST_ALPHA
      case n.OneMinusDstAlphaFactor:
        return t.ONE_MINUS_DST_ALPHA
      case n.DstColorFactor:
        return t.DST_COLOR
      case n.OneMinusDstColorFactor:
        return t.ONE_MINUS_DST_COLOR
      case n.SrcAlphaSaturateFactor:
        return t.SRC_ALPHA_SATURATE
    }
    return 0
  }, P.createElement = function(e, r, i, o) {
    var u, a, l, c, h = e.vertices.length,
      p = e.uvs.length,
      d = e.vertices,
      v = r.vertices,
      m = e.faces,
      g = r.faces,
      y = e.uvs,
      b = r.uvs,
      w = [],
      E = [],
      S = []
    o === t && (o = 0), e instanceof n.Element && (e.matrixAutoUpdate && e.updateMatrix(), u = e.matrix, a = (new f()).getNormalMatrix(u)), r instanceof n.Element && (r.matrixAutoUpdate && r.updateMatrix(), l = r.matrix, c = (new f()).getNormalMatrix(l))
    for (var x = 0, T = d.length; x < T; x++) {
      var N = d[x],
        C = N.clone()
      u && C.applyMatrix4(u), E.push(C)
    }
    for (var x = 0, T = v.length; x < T; x++) {
      var N = v[x],
        C = N.clone()
      l && C.applyMatrix4(l), E.push(C)
    }
    for (x = 0, T = m.length; x < T; x++) {
      var k = m[x],
        L, A, _, D = k.vertexNormals,
        P = k.vertexColors
      k instanceof O ? L = new O(k.a, k.b, k.c) : L = new M(k.a, k.b, k.c, k.d), L.normal.copy(k.normal), a && L.normal.applyMatrix3(a).normalize()
      for (var H = 0, B = D.length; H < B; H++) A = D[H].clone(), a && A.applyMatrix3(a).normalize(), L.vertexNormals.push(A)
      L.color.copy(k.color)
      for (var H = 0, B = P.length; H < B; H++) _ = P[H], L.vertexColors.push(_.clone())
      L.materialIndex = k.materialIndex, L.centroid.copy(k.centroid), u && L.centroid.applyMatrix4(u), w.push(L)
    }
    for (x = 0, T = g.length; x < T; x++) {
      var k = g[x],
        L, A, _, D = k.vertexNormals,
        P = k.vertexColors
      k instanceof O ? L = new O(k.a + h, k.b + h, k.c + h) : L = new M(k.a + h, k.b + h, k.c + h, k.d + h), L.normal.copy(k.normal), c && L.normal.applyMatrix3(c).normalize()
      for (var H = 0, B = D.length; H < B; H++) A = D[H].clone(), c && A.applyMatrix3(c).normalize(), L.vertexNormals.push(A)
      L.color.copy(k.color)
      for (var H = 0, B = P.length; H < B; H++) _ = P[H], L.vertexColors.push(_.clone())
      L.materialIndex = k.materialIndex + o, L.centroid.copy(k.centroid), l && L.centroid.applyMatrix4(l), w.push(L)
    }
    for (x = 0, T = y.length; x < T; x++) {
      var j = y[x],
        F = []
      for (var H = 0, B = j.length; H < B; H++) F.push(new s(j[H].x, j[H].y))
      S.push(F)
    }
    for (x = 0, T = b.length; x < T; x++) {
      var j = b[x],
        F = []
      for (var H = 0, B = j.length; H < B; H++) F.push(new s(j[H].x, j[H].y))
      S.push(F)
    }
    var I = new n.Entity()
    return I.vertices = E, I.faces = w, I.uvs = S, I.material = i === t ? e.material : i, I
  }, P.transformElement = function(e, t) {
    var r, i, o = e.vertices,
      u = e.faces,
      a = e.uvs,
      l = [],
      c = [],
      h = []
    e instanceof n.Element && (e.matrixAutoUpdate && e.updateMatrix(), r = e.matrix, i = (new f()).getNormalMatrix(r))
    for (var p = 0, d = o.length; p < d; p++) {
      var v = o[p],
        m = v.clone()
      r && m.applyMatrix4(r), c.push(m)
    }
    for (p = 0, d = u.length; p < d; p++) {
      var g = u[p],
        y, b, w, E = g.vertexNormals,
        S = g.vertexColors
      g instanceof O ? y = new O(g.a, g.b, g.c) : y = new M(g.a, g.b, g.c, g.d), y.normal.copy(g.normal), i && y.normal.applyMatrix3(i).normalize()
      for (var x = 0, T = E.length; x < T; x++) b = E[x].clone(), i && b.applyMatrix3(i).normalize(), y.vertexNormals.push(b)
      y.color.copy(g.color)
      for (var x = 0, T = S.length; x < T; x++) w = S[x], y.vertexColors.push(w.clone())
      y.materialIndex = g.materialIndex, y.centroid.copy(g.centroid), r && y.centroid.applyMatrix4(r), l.push(y)
    }
    for (p = 0, d = a.length; p < d; p++) {
      var N = a[p],
        C = []
      for (var x = 0, T = N.length; x < T; x++) C.push(new s(N[x].x, N[x].y))
      h.push(C)
    }
    if (t) {
      var k = new n.Entity(e.material)
      k.vertices = c, k.faces = l, k.uvs = h, k.setPosition(0, 0, 0), k.setRotation(0, 0, 0), k.setScale(1, 1, 1)
      var L = {}
      return L.vertices = c, L.faces = l, L.uvs = h, k.primitive = new n.Primitive(L), k
    }
    e.vertices = c, e.faces = l, e.uvs = h, e.setPosition(0, 0, 0), e.setRotation(0, 0, 0), e.setScale(1, 1, 1)
    var L = {}
    L.vertices = c, L.faces = l, L.uvs = h, e.primitive = new n.Primitive(L)
    for (var p in r.elements) e._attachId += r.elements[p]
    return e
  }, P.mergeElements = function(e) {
    var t, r, i, u = 0,
      a = 0,
      l = 0,
      c, h, p
    for (t = 0; t < e.length; t++) i = e[t], u += i.materialSize
    var d = new n.Entity(u),
      v = {},
      m = {},
      g = new o(0, 0, 0),
      y = [],
      b = [],
      w = [],
      E = [],
      S = new n.ArrayMaterial()
    for (t = 0; t < e.length; t++) {
      i = e[t], i.matrixAutoUpdate && i.updateWorldMatrix(), c = i.worldMatrix.clone(), h = (new f()).getNormalMatrix(c)
      for (r = 0; r < i.vertices.length; r++) p = i.vertices[r], y.push(p.clone().applyMatrix4(c))
      for (r = 0; r < i.faces.length; r++) {
        var x = i.faces[r],
          T, N, C, k = x.vertexNormals,
          L = x.vertexColors
        x instanceof O ? T = new O(x.a + a, x.b + a, x.c + a) : T = new M(x.a + a, x.b + a, x.c + a, x.d + a), T.normal.copy(x.normal), h && T.normal.applyMatrix3(h).normalize(), T.materialIndex = x.materialIndex + l, T.centroid.copy(x.centroid), c && T.centroid.applyMatrix4(c), b.push(T)
      }
      for (r = 0, len = i.uvs.length; r < len; r++) {
        var A = i.uvs[r],
          _ = []
        for (var D = 0, H = A.length; D < H; D++) _.push(new s(A[D].x, A[D].y))
        w.push(_)
      }
      if (i.uv2s && i.uv2s.length > 0) {
        for (r = 0, len = i.uv2s.length; r < len; r++) {
          var B = i.uv2s[r],
            j = []
          for (var D = 0, H = B.length; D < H; D++) j.push(new s(B[D].x, B[D].y))
          E.push(j)
        }
      }
      S.materials = S.materials.concat(i.material.materials), a += i.vertices.length, l += i.materialSize
      for (var F in i.styleMap) {
        var I = v[F]
        I == null && (I = [])
        var q = i.styleMap[F],
          R = !0
        if (P.isArray(q)) {
          for (var D = 0; D < q.length; D++) I.push(q[t]), D > 0 && q[D] != q[D - 1] && (R = !1)
        } else {
          for (var D = 0; D < i.materialSize; D++) I.push(q)
        }
        if (m[F] == 1 || m[F] == null) m[F] = R
        v[F] = I
      }
    }
    for (var F in m) m[F] == 1 && (v[F] = v[F][0])
    return d.styleMap = v, d.material = S, d.vertices = y, d.faces = b, d.setUvs(w), d.uv2s = E, d.setUpdateFlags(!0), d
  }, P.mergeElement = function(e, r, i) {
    var o, u, a, l, c = e.vertices.length,
      h = e.uvs.length,
      p = e.vertices,
      d = r.vertices,
      v = e.faces,
      m = r.faces,
      g = e.uvs,
      y = r.uvs,
      b = [],
      w = [],
      E = []
    i === t && (i = 0), e instanceof n.Element && (e.matrixAutoUpdate && e.updateMatrix(), o = e.matrix, u = (new f()).getNormalMatrix(o)), r instanceof n.Element && (r.matrixAutoUpdate && r.updateMatrix(), a = r.matrix, l = (new f()).getNormalMatrix(a))
    for (var S = 0, x = p.length; S < x; S++) {
      var T = p[S],
        N = T.clone()
      o && N.applyMatrix4(o), w.push(N)
    }
    for (var S = 0, x = d.length; S < x; S++) {
      var T = d[S],
        N = T.clone()
      a && N.applyMatrix4(a), w.push(N)
    }
    for (S = 0, x = v.length; S < x; S++) {
      var C = v[S],
        k, L, A, _ = C.vertexNormals,
        D = C.vertexColors
      C instanceof O ? k = new O(C.a, C.b, C.c) : k = new M(C.a, C.b, C.c, C.d), k.normal.copy(C.normal), u && k.normal.applyMatrix3(u).normalize()
      for (var P = 0, H = _.length; P < H; P++) L = _[P].clone(), u && L.applyMatrix3(u).normalize(), k.vertexNormals.push(L)
      k.color.copy(C.color)
      for (var P = 0, H = D.length; P < H; P++) A = D[P], k.vertexColors.push(A.clone())
      k.materialIndex = C.materialIndex, k.centroid.copy(C.centroid), o && k.centroid.applyMatrix4(o), b.push(k)
    }
    for (S = 0, x = m.length; S < x; S++) {
      var C = m[S],
        k, L, A, _ = C.vertexNormals,
        D = C.vertexColors
      C instanceof O ? k = new O(C.a + c, C.b + c, C.c + c) : k = new M(C.a + c, C.b + c, C.c + c, C.d + c), k.normal.copy(C.normal), l && k.normal.applyMatrix3(l).normalize()
      for (var P = 0, H = _.length; P < H; P++) L = _[P].clone(), l && L.applyMatrix3(l).normalize(), k.vertexNormals.push(L)
      k.color.copy(C.color)
      for (var P = 0, H = D.length; P < H; P++) A = D[P], k.vertexColors.push(A.clone())
      k.materialIndex = C.materialIndex + i, k.centroid.copy(C.centroid), a && k.centroid.applyMatrix4(a), b.push(k)
    }
    for (S = 0, x = g.length; S < x; S++) {
      var B = g[S],
        j = []
      for (var P = 0, H = B.length; P < H; P++) j.push(new s(B[P].x, B[P].y))
      E.push(j)
    }
    for (S = 0, x = y.length; S < x; S++) {
      var B = y[S],
        j = []
      for (var P = 0, H = B.length; P < H; P++) j.push(new s(B[P].x, B[P].y))
      E.push(j)
    }
    return e.vertices = w, e.faces = b, e.uvs = E, e._position.set(0, 0, 0), e._rotation.set(0, 0, 0), e._scale.set(1, 1, 1), e
  }, P.autoAdjustNetworkBounds = function(t, n, r, i, s, o) {
    s = s || 0, o = o || 0, t.adjustBounds(n[r] - s, n[i] - o), e.addEventListener ? e.addEventListener('resize', function() {
      t.adjustBounds(n[r] - s, n[i] - o, o, s)
    }, !0) : e.attachEvent ? e.attachEvent('onresize', function() {
      t.adjustBounds(n[r] - s, n[i] - o, o, s)
    }) : e.onresize = function() {
      t.adjustBounds(n[r] - s, n[i] - o, o, s)
    }
  }, P.isEmptyObject = function(e) {
    for (var t in e) return !1
    return !0
  }, P.isArray = function(e) {
    return Object.prototype.toString.call(e) === '[object Array]'
  }, P.isSame = function(e, t) {
    if (e === t) return !0
    if (e == null && t != null) return !1
    if (e != null && t == null) return !1
    if (typeof e !== typeof t) return !1
    for (var n in e) {
      if (e[n] != t[n]) return !1
    }
    for (var n in t) {
      if (e[n] != t[n]) return !1
    }
    return !0
  }, P.toString = function(e) {
    if (e) {
      var t = ''
      for (var n in e) t += n + ':' + e[n]
      return t
    }
  }, P.validateLicense = function(e) {
    G = e, Ir()
  }, P.getLicense = function() {
    return G
  }, P.getObjectCount = function(e) {
    if (!e) return 0
    var t = 0
    for (var n in e) t++
    return t
  }, P.isNaN = function(e) {
    return e === '' || e === null || isNaN(e)
  }, P.getTransformVertices = function(e, t, r) {
    r == null && (r = [])
    var i, s
    if (e instanceof n.Node || e instanceof n.Billboard) {
      for (i = 0; i < e.vertices.length; i++) s = e.vertices[i].clone(), e instanceof n.Billboard ? (s.x *= e.rotation3d.x, s.y *= e.rotation3d.y, s.add(e.getPosition())) : s.applyMatrix4(e.worldMatrix), r.push(s)
      for (var i = 0; i < (e._childList ? e._childList.size() : 0); i++) {
        var o = e._childList.get(i)
        P.getTransformVertices(o, t, r)
      }
    }
    return r
  }, P.getBoundingBox = function(e, t) {
    var r, i, s, o, u
    if (e == null) return null
    e instanceof N ? r = e._as : P.isArray(e) ? r = e : r = [e]
    var a = []
    for (i = 0; i < r.length; i++) o = r[i], P.getTransformVertices(o, t, a)
    var f = new n.BoundingBox()
    return f.setFromPoints(a), f
  }, P.mergeWrapMap = function(e) {
    if (!(e instanceof _)) return
    if (e.getWrapMap()) return
    var t = [],
      n = e.getMaterialMapping(),
      r = e.material.materials,
      i
    for (var s = 0; s < r.length; s++) i = r[s], i.map && t.indexOf(i.map._image) == -1 && t.push(i.map._image)
    e.setWrapMap(!0)
  }, P.setWrapMap = function(e, t, n, r) {
    P.loadImages(t, function(i) {
      var s = mono.Utils.createWrapMapFromImages(i, n, r)
      s.__uniqueCode = ''
      for (var o = 0; o < t.length; o++) s.__uniqueCode += t[o].src
      for (var o in n) s.__uniqueCode += o + ':' + n[o]
      if (P.isArray(e)) {
        for (var o = 0; o < e.length; o++) e[o].setStyle('m.texture.image', s), e[o].setClient('_originalImage', t), e[o].setClient('_wrapMapping', n)
      } else e.setStyle('m.texture.image', s), e.setClient('_wrapMapping', n)
    })
  }, P.loadImages = function(e, t) {
    function i(e) {
      e.onload = function() {
        e.loaded = !0, s(), e.onload = null
      }
    }

    function s() {
      for (var n = 0; n < e.length; n++) {
        if (!e[n].loaded) return
      }
      t(e)
    }
    if (e == null || e.length == 0 || t == null) return
    for (var n = 0; n < e.length; n++) {
      var r = e[n]
      typeof r === 'string' && (e[n] = new Image(), e[n].crossOrigin = '', e[n].src = r), r = e[n], i(r)
    }
  }, P.createWrapMapFromImages = function(e, t, n, r, i) {
    if (e == null || e.length == 0) return null
    n = (n || 'six-each').toLowerCase()
    var s = n == 'six-each' || n == 'front-other' || n == 'back-other' || n == 'left-other' || n == 'right-other' || n == 'top-other' || n == 'bottom-other'
    if (!s) return
    t == null && (t = {
      0: 'bottom',
      1: 'top',
      2: 'back',
      3: 'left',
      4: 'front',
      5: 'right'
    })
    var o = document.createElement('canvas'),
      u = o.getContext('2d'),
      a = 0,
      f = 0
    if (n == 'six-each') {
      var l = {
        bottom: [0, 0],
        top: [1 / 3, 0],
        back: [2 / 3, 0],
        left: [0, 0.5],
        front: [1 / 3, 0.5],
        right: [2 / 3, 0.5]
      }
      if (r == null || i == null) {
        for (var c = 0; c < e.length; c++) a = Math.max(e[c].width, a), f = Math.max(e[c].height, f)
      }
      a *= 3, f *= 2, a > 1024 && (a = 1024), f > 1024 && (f = 1024)
      var h = ['front', 'back', 'right', 'left', 'top', 'bottom'],
        p = [],
        d
      for (var c in t) {
        var v = t[c]
        v !== 'other' ? (p.push(v), h.splice(h.indexOf(v), 1)) : d = c
      }
      d != null && (t[d] = h), r = r || a, i = i || f, o.setAttribute('width', r), o.setAttribute('height', i)
      var m = Math.min(e.length, 6)
      for (var c = 0; c < 6; c++) {
        var g = t[c]
        if (g) {
          var y = g
          P.isArray(g) ? y = g : g.indexOf(',') != -1 ? y = g.split(',') : y = [g]
          for (var b = 0; b < y.length; b++) {
            var v = y[b],
              w = l[v][0],
              E = l[v][1]
            u.drawImage(e[c], w * r, E * i, r / 3, i / 2)
          }
        }
      }
    } else {
      var S = n.split('-')[0]
      if (r == null || i == null) {
        for (var c = 0; c < e.length; c++) a += e[c].width, f = Math.max(e[c].height, f)
      }
      r = r || a, i = i || f, o.setAttribute('width', r), o.setAttribute('height', i)
      var x = t[S],
        m = Math.min(e.length, 2)
      for (var c = 0; c < 2; c++) {
        var g = t[c]
        g && (g == S ? u.drawImage(e[c], 0, 0, r / 2, i) : u.drawImage(e[c], r / 2, 0, r / 2, i))
      }
    }
    return o
  }, P.getVectorAngles = function(e, t) {
    var n = e
    t && (n = t.clone().sub(e)), n = n.normalize()
    var r = Math.asin(n.y) * H,
      i = Math.atan2(n.x, n.z) * H
    return [i, r]
  }, P.getPixelFromImage = function(e, t, n) {
    var r
    h.isCanvas(e) ? r = e : (r = document.createElement('canvas'), r.width = e.width, r.height = e.height, r.getContext('2d').drawImage(e, 0, 0, e.width, e.height)), t -= Math.floor(t), n -= Math.floor(n), n = 1 - n
    var i = r.getContext('2d').getImageData(e.width * t, e.height * n, 1, 1).data
    return i
  }, P.nextPowerOfTwo = function(e) {
    var t = e
    return e--, e |= e >> 1, e |= e >> 2, e |= e >> 4, e |= e >> 8, e |= e >> 16, e++, e
  }, P.createTextBillboard = function(e, t) {
    var n = new mono.Billboard()
    e = e || '', t = t || {}
    var r = P.createTextImage(e, t)
    return n.setStyle('m.texture.image', r), n.setScale(r.width, r.height, 1), n
  }, P.createTextImage = function(e, n) {
    e = e || ''
    var r = n.font,
      i = n.color,
      s = n.background,
      o = n.powerOfTwo,
      u = n.canvas,
      a = n.drawFunction
    u = u || document.createElement('canvas'), r = r || '20px "Dialog"', i = i || 'white', s = s === t ? '#0F90C4' : s, o = o || !1
    var f = n.textAlign || 'center',
      l
    P.isArray(e) ? l = e : l = e.split('\n')
    var c = mono.Utils.getMaxTextSize(l, r),
      h = n.ratio || c.width / c.height,
      p = u.realSize = {
        width: c.width,
        height: c.height
      }
    o && (c.width = mono.Utils.nextPowerOfTwo(c.width), c.height = mono.Utils.nextPowerOfTwo(c.height))
    var d = u.drawRect = {
      width: p.width / p.height > h ? p.width : p.height * h,
      height: p.width / p.height > h ? p.width / h : p.height
    }
    Number.isNaN(d.width) && console.log('debug -- b', p.width, p.height, h), d.width = Math.min(d.width, c.width), d.height = Math.min(d.height, c.height), u.width = c.width, u.height = c.height, Number.isNaN(d.width) && console.log('debug -- a')
    var v = u.getContext('2d')
    s && (v.fillStyle = s)
    if (a) a(v, u.width, u.height)
    else {
      s && v.fillRect(0, 0, u.width, u.height), v.font = r, v.fillStyle = i, v.strokeStyle = 'gray', v.textBaseline = 'middle', v.textAlign = f
      var m = l.length,
        g = p.height / m,
        y
      for (var b = 0; b < m; b++) {
        P.isArray(i) && (y = i[b], y && (v.fillStyle = y))
        var w = mono.Utils.getTextSize(r, l[b]),
          E = w.width,
          S = w.height,
          x = u.height,
          T = (d.width - p.width) / 2
        f === 'center' ? T = d.width / 2 : f === 'right' && (T = d.width)
        var N = (d.height - p.height) / 2 + g / 2 + b * g + (u.height - d.height)
        v.strokeText(l[b], T, N), v.fillText(l[b], T, N)
      }
    }
    return u
  }, P.createTextImage2 = function(e, n) {
    e = e || '', e = String(e)
    var r = n.font,
      i = n.color,
      s = n.background,
      o = n.powerOfTwo,
      u = n.canvas,
      a = n.drawFunction
    u = u || document.createElement('canvas'), r = r || '20px "Dialog"', i = i || 'white', s = s === t ? '#0F90C4' : s, o = o || !1
    var f = n.align || 'center',
      l = n.sizeScale || 1,
      c = P.getMaxTextSize(e.split('\n'), r)
    u.realSize = {
      width: c.width,
      height: c.height
    }, c.width *= l, c.height *= l, o && (c.width = P.nextPowerOfTwo(c.width), c.height = P.nextPowerOfTwo(c.height)), u.width = c.width, u.height = c.height
    var h = u.getContext('2d')
    return s && (h.fillStyle = s), a ? a(h, u.width, u.height) : (s && h.fillRect(0, 0, u.width, u.height), F(h, e, r, i, u, 'center')), u
  }, P.getMaxTextSize = function(e, t) {
    if (e && e.length > 0) {
      var n = e.length,
        r = y.getTextSize(t, e[0]),
        i = r.width,
        s = r.height * n
      for (var o = 0; o < n; o++) {
        var u = y.getTextSize(t, e[o]).width
        i < u && (i = u)
      }
      return {
        width: i,
        height: s
      }
    }
    return null
  }, P.getTextSize = function(e, t) {
    return y.getTextSize(e, t)
  }, P.playCameraAnimation = function(e, t, n, r, i) {
    t = t || e.p(), n = n || e.getTarget(), r = r || 2e3
    var s = mono.Utils.getVectorAngles(e.getTarget(), e.p()),
      o = mono.Utils.getVectorAngles(n, t),
      u = e.getTarget(),
      a = n,
      f = e.getDistance(),
      l = (new mono.Vec3()).subVectors(t, n).length();
    (new mono.Animate({
      from: 0,
      to: 1,
      repeat: 1,
      dur: r,
      onPlay: function() {},
      onUpdate: function(t) {
        var n = s[0] + (o[0] - s[0]) * t,
          r = s[1] + (o[1] - s[1]) * t,
          i = (new mono.Vec3()).lerpVectors(u, a, t),
          c = f + (l - f) * t,
          h = new mono.Vec3()
        h.x = i.x + c * Math.sin(n * B) * Math.cos(r * B), h.z = i.z + c * Math.cos(n * B) * Math.cos(r * B), h.y = i.y + c * Math.sin(r * B), e.lookAt(i), e.p(h)
      },
      onDone: function() {
        i && i()
      }
    })).play()
  }, P.stopAnimate = function(e, t) {
    Ai(e, t)
  }, P.stopAllAnimates = function(e) {
    Oi(e)
  }, n.Utils = P, n.GLParameters = function(e, t, r) {
    this.material = e, this.network = t, this.precision = t._precision, this.map = !!e.map, this.mapLoaded = !0, this.envMap = !!e.envMap, this.lightMap = !!e.lightMap, this.bumpMap = !!e.bumpMap && e._type === 'phong', this.normalMap = !!e.normalMap && e._type === 'phong', this.specularMap = !!e.specularMap, this.vertexColors = e.vertexColors, this.fog = t._fog, this.useFog = e.fog, this.fogExp = this.fog instanceof n.FogExp2, this.sizeAttenuation = e.sizeAttenuation, this.skinning = e.skinning, this.maxBones = t.maxBones, this.useVertexTexture = t._supportsBoneTextures && r && r.useVertexTexture, this.boneTextureWidth = r && r.boneTextureWidth, this.boneTextureHeight = r && r.boneTextureHeight, this.morphTargets = e.morphTargets, this.morphNormals = e.morphNormals, this.maxMorphTargets = t.maxMorphTargets, this.maxMorphNormals = t.maxMorphNormals, this.maxDirLights = t.maxLightCount.directional, this.maxPointLights = t.maxLightCount.point, this.maxSpotLights = t.maxLightCount.spot, this.maxHemiLights = t.maxLightCount.hemi, this.maxShadows = t.maxShadows, this.maxPointShadows = t.maxPointShadows, this.shadowMapEnable = t._shadowMapEnable && r.receiveShadow && this.maxShadows > 0, this.pointShadowMapEnable = t._shadowMapEnable && r.receiveShadow && this.maxPointShadows > 0, this.shadowMapType = t.shadowMapType, this.shadowMapDebug = t.shadowMapDebug, this.shadowMapCascade = t.shadowMapCascade, this.alphaTest = e.alphaTest, this.metal = e.metal, this.perPixel = e.perPixel, this.wrapAround = e.wrapAround, this.doubleSided = e.side === n.DoubleSide && !p.isIE, this.flipSided = e.side === n.BackSide, this.useSSAO = t.isSSAOEnable() && t.pm.isLightMaterial(e), this.gammaInput = t.gammaInput, this.gammaOutput = t.gammaOutput, this.physicallyBasedShading = t.physicallyBasedShading, this.supportsVertexTextures = !1, this.shadowMapTypeDefine = 'SHADOWMAP_TYPE_BASIC', this.shadowMapType === n.PCFShadowMap ? this.shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF' : this.shadowMapType === n.PCFSoftShadowMap && (this.shadowMapTypeDefine = 'SHADOWMAP_TYPE_PCF_SOFT'), this.maxGrandient = P.getObjectCount(e.gradient)
  }, n.GLParameters.prototype.getShaders = function(e) {
    e = e === t ? '' : e
    var n = this,
      r = ['precision ' + n.precision + ' float;', e, this.supportsVertexTextures ? '#define VERTEX_TEXTURES' : '', n.gammaInput ? '#define GAMMA_INPUT' : '', n.gammaOutput ? '#define GAMMA_OUTPUT' : '', n.physicallyBasedShading ? '#define PHYSICALLY_BASED_SHADING' : '', '#define MAX_DIR_LIGHTS ' + n.maxDirLights, '#define MAX_POINT_LIGHTS ' + n.maxPointLights, '#define MAX_SPOT_LIGHTS ' + n.maxSpotLights, '#define MAX_HEMI_LIGHTS ' + n.maxHemiLights, '#define MAX_SHADOWS ' + n.maxShadows, '#define MAX_POINT_SHADOWS ' + n.maxPointShadows, '#define MAX_BONES ' + n.maxBones, n.map ? '#define USE_MAP' : '', n.envMap ? '#define USE_ENVMAP' : '', n.lightMap ? '#define USE_LIGHTMAP' : '', n.bumpMap ? '#define USE_BUMPMAP' : '', n.normalMap ? '#define USE_NORMALMAP' : '', n.specularMap ? '#define USE_SPECULARMAP' : '', n.vertexColors ? '#define USE_COLOR' : '', n.maxGrandient > 0 ? '#define MAX_GRADIENT ' + n.maxGrandient : '', n.skinning ? '#define USE_SKINNING' : '', n.useVertexTexture ? '#define BONE_TEXTURE' : '', n.boneTextureWidth ? '#define N_BONE_PIXEL_X ' + n.boneTextureWidth.toFixed(1) : '', n.boneTextureHeight ? '#define N_BONE_PIXEL_Y ' + n.boneTextureHeight.toFixed(1) : '', n.morphTargets ? '#define USE_MORPHTARGETS' : '', n.morphNormals ? '#define USE_MORPHNORMALS' : '', n.perPixel ? '#define PHONG_PER_PIXEL' : '', n.wrapAround ? '#define WRAP_AROUND' : '', n.doubleSided ? '#define DOUBLE_SIDED' : '', n.flipSided ? '#define FLIP_SIDED' : '', n.shadowMapEnable ? '#define USE_SHADOWMAP' : '', n.shadowMapEnable ? '#define ' + n.shadowMapTypeDefine : '', n.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '', n.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '', n.pointShadowMapEnable ? '#define USE_POINT_SHADOWMAP' : '', n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '', 'uniform mat4 modelMatrix;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform mat4 viewMatrix;', 'uniform mat3 normalMatrix;', 'uniform vec3 cameraPosition;', 'attribute vec3 position;', 'attribute vec3 normal;', 'attribute vec2 uv;', 'attribute vec2 uv2;', '#ifdef USE_COLOR', 'attribute vec3 color;', '#endif', '#ifdef USE_MORPHTARGETS', 'attribute vec3 morphTarget0;', 'attribute vec3 morphTarget1;', 'attribute vec3 morphTarget2;', 'attribute vec3 morphTarget3;', '#ifdef USE_MORPHNORMALS', 'attribute vec3 morphNormal0;', 'attribute vec3 morphNormal1;', 'attribute vec3 morphNormal2;', 'attribute vec3 morphNormal3;', '#else', 'attribute vec3 morphTarget4;', 'attribute vec3 morphTarget5;', 'attribute vec3 morphTarget6;', 'attribute vec3 morphTarget7;', '#endif', '#endif', '#ifdef USE_SKINNING', 'attribute vec4 skinIndex;', 'attribute vec4 skinWeight;', '#endif', ''].join('\n'),
      i = ['precision ' + this.precision + ' float;', n.bumpMap || n.normalMap ? '#extension GL_OES_standard_derivatives : enable' : '', e, '#define MAX_DIR_LIGHTS ' + n.maxDirLights, '#define MAX_POINT_LIGHTS ' + n.maxPointLights, '#define MAX_SPOT_LIGHTS ' + n.maxSpotLights, '#define MAX_HEMI_LIGHTS ' + n.maxHemiLights, '#define MAX_SHADOWS ' + n.maxShadows, '#define MAX_POINT_SHADOWS ' + n.maxPointShadows, n.useSSAO ? '#define USE_SSAO' : '', n.alphaTest ? '#define ALPHATEST ' + n.alphaTest : '', this.gammaInput ? '#define GAMMA_INPUT' : '', this.gammaOutput ? '#define GAMMA_OUTPUT' : '', this.physicallyBasedShading ? '#define PHYSICALLY_BASED_SHADING' : '', n.useFog && n.fog ? '#define USE_FOG' : '', n.useFog && n.fogExp ? '#define FOG_EXP2' : '', n.map ? '#define USE_MAP' : '', n.envMap ? '#define USE_ENVMAP' : '', n.lightMap ? '#define USE_LIGHTMAP' : '', n.bumpMap ? '#define USE_BUMPMAP' : '', n.normalMap ? '#define USE_NORMALMAP' : '', n.specularMap ? '#define USE_SPECULARMAP' : '', n.maxGrandient > 0 ? '#define MAX_GRADIENT ' + n.maxGrandient : '', n.vertexColors ? '#define USE_COLOR' : '', n.metal ? '#define METAL' : '', n.perPixel ? '#define PHONG_PER_PIXEL' : '', n.wrapAround ? '#define WRAP_AROUND' : '', n.doubleSided ? '#define DOUBLE_SIDED' : '', n.flipSided ? '#define FLIP_SIDED' : '', n.shadowMapEnable ? '#define USE_SHADOWMAP' : '', n.shadowMapEnable ? '#define ' + n.shadowMapTypeDefine : '', n.shadowMapDebug ? '#define SHADOWMAP_DEBUG' : '', n.shadowMapCascade ? '#define SHADOWMAP_CASCADE' : '', n.pointShadowMapEnable ? '#define USE_POINT_SHADOWMAP' : '', 'uniform mat4 viewMatrix;', 'uniform vec3 cameraPosition;', ''].join('\n')
    return [r, i]
  }
  var I = {}
  I.setDepthTest = function(e, t) {
    var n = t._gl
    t._oldDepthTest !== e && (e ? n.enable(n.DEPTH_TEST) : n.disable(n.DEPTH_TEST), t._oldDepthTest = e)
  }, I.setSmapleAlphaToCoverage = function(e, t) {
    var n = t._gl
    t._oldSmapleAlphaToCoverage !== e && (e ? n.enable(n.SAMPLE_ALPHA_TO_COVERAGE) : n.disable(n.SAMPLE_ALPHA_TO_COVERAGE), t._oldSmapleAlphaToCoverage = e)
  }, I.setDepthWrite = function(e, t) {
    var n = t._gl
    t._oldDepthWrite !== e && (n.depthMask(e), t._oldDepthWrite = e)
  }, I.clear = function(e, n, r, i) {
    var s = i._gl,
      o = 0
    if (e === t || e) o |= s.COLOR_BUFFER_BIT
    if (n === t || n) o |= s.DEPTH_BUFFER_BIT
    if (r === t || r) o |= s.STENCIL_BUFFER_BIT
    i._gl.clear(o)
  }, I.setPolygonOffset = function(e, t, n, r) {
    var i = r._gl
    r._oldPolygonOffset !== e && (e ? i.enable(i.POLYGON_OFFSET_FILL) : i.disable(i.POLYGON_OFFSET_FILL), r._oldPolygonOffset = e), e && (r._oldPolygonOffsetFactor !== t || r._oldPolygonOffsetUnits !== n) && (i.polygonOffset(t, n), r._oldPolygonOffsetFactor = t, r._oldPolygonOffsetUnits = n)
  }, I.setBlending = function(e, t, r, i, s) {
    var o = s._gl
    e !== s._oldBlending && (e === n.NoBlending ? o.disable(o.BLEND) : e === n.AdditiveBlending ? (o.enable(o.BLEND), o.blendEquation(o.FUNC_ADD), o.blendFunc(o.SRC_ALPHA, o.ONE)) : e === n.SubtractiveBlending ? (o.enable(o.BLEND), o.blendEquation(o.FUNC_ADD), o.blendFunc(o.ZERO, o.ONE_MINUS_SRC_COLOR)) : e === n.MultiplyBlending ? (o.enable(o.BLEND), o.blendEquation(o.FUNC_ADD), o.blendFunc(o.ZERO, o.SRC_COLOR)) : e === n.CustomBlending ? o.enable(o.BLEND) : (o.enable(o.BLEND), o.blendEquationSeparate(o.FUNC_ADD, o.FUNC_ADD), o.blendFuncSeparate(o.SRC_ALPHA, o.ONE_MINUS_SRC_ALPHA, o.ONE, o.ONE_MINUS_SRC_ALPHA)), s._oldBlending = e)
    if (e === n.CustomBlending) {
      t !== this._oldBlendEquation && (o.blendEquation(paramThreeToGL(t)), s._oldBlendEquation = t)
      if (r !== _oldBlendSrc || i !== _oldBlendDst) o.blendFunc(paramToGL(r), paramToGL(i)), s._oldBlendSrc = r, s._oldBlendDst = i
    } else s._oldBlendEquation = null, s._oldBlendSrc = null, s._oldBlendDst = null
  }, I.enableStencil = function(e) {
    e.enable(e.STENCIL_TEST), e.stencilFunc(e.ALWAYS, 1, 1), e.stencilOp(e.KEEP, e.KEEP, e.REPLACE), e.stencilMask(1), e.clearStencil(0), e.clear(e.STENCIL_BUFFER_BIT)
  }, I.stencilTest = function(e) {
    e.enable(e.STENCIL_TEST), e.stencilFunc(e.EQUAL, 0, 1), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.stencilMask(0)
  }, I.disableStencil = function(e) {
    e.disable(e.STENCIL_TEST)
  }, I.r = function(e, t, n, r, i, s, o) {
    e._AK47(t, n, r, i, s, o)
  }, I.g = function(e, t, n, r, i, s) {
    e.renderGroup(t, n, r, i, s)
  }, n.GLUtils = I, n.GPU = function(e) {
    var t = e._gl
    this._glExtensionTextureFloat = t.getExtension('OES_texture_float'), this._glExtensionStandardDerivatives = t.getExtension('OES_standard_derivatives'), this._glExtensionTextureFilterAnisotropic = t.getExtension('EXT_texture_filter_anisotropic') || t.getExtension('MOZ_EXT_texture_filter_anisotropic') || t.getExtension('WEBKIT_EXT_texture_filter_anisotropic'), this._glExtensionCompressedTextureS3TC = t.getExtension('WEBGL_compressed_texture_s3tc') || t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'), this._glExtensionTextureFloat || console.log('Float textures not supported.'), this._glExtensionStandardDerivatives || console.log('Standard derivatives not supported.'), this._glExtensionTextureFilterAnisotropic || console.log('Anisotropic texture filtering not supported.'), this._glExtensionCompressedTextureS3TC || console.log('S3TC compressed textures not supported.'), this._maxTextures = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this._maxVertexTextures = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this._maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this._maxCubemapSize = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE), this._maxAnisotropy = this._glExtensionTextureFilterAnisotropic ? t.getParameter(this._glExtensionTextureFilterAnisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0, this._supportsVertexTextures = this._maxVertexTextures > 0, this._supportsBoneTextures = this._supportsVertexTextures && this._glExtensionTextureFloat, this._compressedTextureFormats = this._glExtensionCompressedTextureS3TC ? t.getParameter(t.COMPRESSED_TEXTURE_FORMATS) : [], this._vertexShaderPrecisionHighpFloat = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT), this._vertexShaderPrecisionMediumpFloat = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT), this._vertexShaderPrecisionLowpFloat = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_FLOAT), this._fragmentShaderPrecisionHighpFloat = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT), this._fragmentShaderPrecisionMediumpFloat = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT), this._fragmentShaderPrecisionLowpFloat = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_FLOAT), this._vertexShaderPrecisionHighpInt = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_INT), this._vertexShaderPrecisionMediumpInt = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_INT), this._vertexShaderPrecisionLowpInt = t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.LOW_INT), this._fragmentShaderPrecisionHighpInt = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_INT), this._fragmentShaderPrecisionMediumpInt = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_INT), this._fragmentShaderPrecisionLowpInt = t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.LOW_INT)
    var n = this._vertexShaderPrecisionHighpFloat.precision > 0 && this._fragmentShaderPrecisionHighpFloat
        .precision > 0,
      r = this._vertexShaderPrecisionMediumpFloat.precision > 0 && this._fragmentShaderPrecisionMediumpFloat.precision > 0,
      i = e._precision
    i === 'highp' && !n && (r ? (i = 'mediump', console.log('highp not supported, using mediump')) : (i = 'lowp', console.log('highp and mediump not supported, using lowp'))), i === 'mediump' && !r && (i = 'lowp', console.log('mediump not supported, using lowp')), e._precision = i
  }, n.Program = function(e, t, n, r) {
    this.entity = e, this.group = t, this.material = n, this.network = r
  }, n.Program.prototype.setEntity = function() {
    this.entity
  }, n.Program.prototype.buildGLProgram = function() {}, n.Uniform = function(e, n, r) {
    this.id = e, this.type = n, this.value = r, this.location = t
  }, n.Uniform.prototype = {
    constructor: n.Uniform,
    setValue: function(e) {
      this.value = e
    },
    getUniformLocation: function(e, t) {
      return e.getUniformLocation(this.id)
    }
  }, n.Uniform.loadUniform = function(e, n, r) {
    type = n.type, value = n.value
    if (type === 'i') r.uniform1i(e, value)
    else if (type === 'f') r.uniform1f(e, value)
    else if (type === 'v2') r.uniform2f(e, value.x, value.y)
    else if (type === 'v3') r.uniform3f(e, value.x, value.y, value.z)
    else if (type === 'v4') r.uniform4f(e, value.x, value.y, value.z, value.w)
    else if (type === 'c') r.uniform3f(e, value.r, value.g, value.b)
    else if (type === 'iv1') r.uniform1iv(e, value)
    else if (type === 'iv') r.uniform3iv(e, value)
    else if (type === 'fv1') r.uniform1fv(e, value)
    else if (type === 'fv') r.uniform3fv(e, value)
    else if (type === 'v2v') {
      n._array === t && (n._array = new Float32Array(2 * value.length))
      for (i = 0, il = value.length; i < il; i++) offset = i * 2, n._array[offset] = value[i].x, n._array[offset + 1] = value[i].y
      r.uniform2fv(e, n._array)
    } else if (type === 'v3v') {
      n._array === t && (n._array = new Float32Array(3 * value.length))
      for (i = 0, il = value.length; i < il; i++) offset = i * 3, n._array[offset] = value[i].x, n._array[offset + 1] = value[i].y, n._array[offset + 2] = value[i].z
      r.uniform3fv(e, n._array)
    } else if (type === 'v4v') {
      n._array === t && (n._array = new Float32Array(4 * value.length))
      for (i = 0, il = value.length; i < il; i++) offset = i * 4, n._array[offset] = value[i].x, n._array[offset + 1] = value[i].y, n._array[offset + 2] = value[i].z, n._array[offset + 3] = value[i].w
      r.uniform4fv(e, n._array)
    } else if (type === 'm4') n._array === t && (n._array = new Float32Array(16)), value.flattenToArray(n._array), r.uniformMatrix4fv(e, !1, n._array)
    else if (type === 'm4v') {
      n._array === t && (n._array = new Float32Array(16 * value.length))
      for (i = 0, il = value.length; i < il; i++) value[i].flattenToArrayOffset(n._array, i * 16)
      r.uniformMatrix4fv(e, !1, n._array)
    } else if (type === 't') texture = value, textureUnit = getTextureUnit(), r.uniform1i(e, textureUnit), !texture || (texture.image instanceof Array && texture.image.length === 6 ? setCubeTexture(texture, textureUnit) : texture instanceof $CubeRenderTargetCube ? setCubeTextureDynamic(texture, textureUnit) : _this.setTexture(texture, textureUnit))
    else if (type === 'tv') {
      n._array === t && (n._array = [])
      for (i = 0, il = n.value.length; i < il; i++) n._array[i] = getTextureUnit()
      r.uniform1iv(e, n._array)
      for (i = 0, il = n.value.length; i < il; i++) {
        texture = n.value[i], textureUnit = n._array[i]
        if (!texture) continue
        _this.setTexture(texture, textureUnit)
      }
    }
  }, n.Uniform.loadGeneralUniforms = function(e, t, r) {
    var i, s, o, u, a, f, l, c, h, p, d
    for (h = 0, p = t.length; h < p; h++) {
      u = e.uniforms[t[h][1]]
      if (!u) continue
      i = t[h][0], n.Uniform.loadUniform(i, r)
    }
  }, n.ProgramManager = function(e) {
    this.id = n.ProgramManagerId++, n.ProgramManagerCache.count++, this.network = e, this.gl = this.network._gl, this.gpu = this.network.gpu, this.programs = [], this.currentProgram = null, this.currentEntity = null, this.currentGroup = null, this.currentMaterial = null, this.info = {
      memory: {
        programs: 0,
        geometries: 0,
        textures: 0
      },
      render: {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
      },
      currentMaterialId: -1
    }, this.textures = [], this.textureCount = 0, this._lightNeedsUpdate = !0, this._lights = {
      ambient: [0, 0, 0],
      directional: {
        length: 0,
        colors: new Array(),
        positions: new Array()
      },
      point: {
        length: 0,
        colors: new Array(),
        positions: new Array(),
        distances: new Array()
      },
      spot: {
        length: 0,
        colors: new Array(),
        positions: new Array(),
        distances: new Array(),
        directions: new Array(),
        anglesCos: new Array(),
        exponents: new Array()
      },
      hemi: {
        length: 0,
        skyColors: new Array(),
        groundColors: new Array(),
        positions: new Array()
      }
    }, this.gammaInput = !1, this.textureCount = 0, this.programMap = {}, this.textureMap = {}, this.textureUpdateFlags = {}, this.glTextureMap = {}, this.textureMaterialMap = {}, this.unLoadedImage = {}, this.materialMap = {}, this.materialUpdateFlags = {}, this.handleTextureChange = function(e) {
      if (e.property === 'image' || e.property === 'loaded') {
        var t = e.source
        this.changeTextureUpdateFlags(t, !0), delete this.unLoadedImage[t._image]
      } else if (e.property === 'disposed') {
        var t = e.source
        this.deallocateTexture(t), t.removePropertyChangeListener(this.handleTextureChange), delete this.textureUpdateFlags[t.id], delete this.textureMap[t.id]
      }
      P.getObjectCount(this.unLoadedImage) <= 0 && this.network.dirtyNetwork()
    }, this.handleMaterialChange = function(e) {
      if (e.property == 'map' || e.property.endsWith('Map') || e.property === 'needsUpdate') {
        var t = e.source
        this.materialUpdateFlags[t.id] = !0
      } else if (e.property === 'disposed') {
        var t = e.source
        this.deallocateMaterial(t), t.removePropertyChangeListener(this.handleMaterialChange), delete this.materialUpdateFlags[t.id], delete this.materialMap[t.id], delete this.programMap[t.id]
      }
      P.getObjectCount(this.unLoadedImage) <= 0 && this.network.dirtyNetwork()
    }
  }, n.ProgramManager.prototype.addMaterial = function(e) {
    this.materialMap[e.id] == null && (this.materialMap[e.id] = e, e.addPropertyChangeListener(this.handleMaterialChange, this))
  }, n.ProgramManager.prototype.needsUpdateMaterial = function(e) {
    return this.materialUpdateFlags[e.id] === t || this.materialUpdateFlags[e.id] === !0 ? !0 : e.map instanceof $ || e.map instanceof J ? !0 : !1
  }, n.ProgramManager.prototype.changeMaterialUpdateFlags = function(e, t) {
    this.materialUpdateFlags[e.id] = t
  }, n.ProgramManager.prototype.isLightMaterial = function(e) {
    return e instanceof n.LambertMaterial || e instanceof n.PhongMaterial || e.lights || e._type === 'lambert' || e._type === 'phong' || e._type === 'terrain'
  }, n.ProgramManager.prototype.changeAllMaterialUpdateFlags = function(e, t, n) {
    for (var r in this.materialMap) {
      var i = this.materialMap[r]
      if (t == null || t.call(n, i)) this.materialUpdateFlags[i.id] = e
    }
  }, n.ProgramManager.prototype.changeAllLightMaterialUpdateFlags = function(e) {
    this.changeAllMaterialUpdateFlags(e, this.isLightMaterial, this)
  }, n.ProgramManager.prototype.addTexture = function(e) {
    e.id != null && this.textureMap[e.id] === t && (this.textureMap[e.id] = e, e.addPropertyChangeListener(this.handleTextureChange, this), e._image.loaded || (this.unLoadedImage[e._image] = 1))
  }, n.ProgramManager.prototype.needsUpdateTexture = function(e) {
    return this.textureUpdateFlags[e.id] === t || this.textureUpdateFlags[e.id] === !0 ? !0 : !1
  }, n.ProgramManager.prototype.changeTextureUpdateFlags = function(e, t) {
    this.textureUpdateFlags[e.id] = t
    for (var n in this.materialMap) {
      var r = this.materialMap[n];
      (r.map === e || r.lightMap === e || r.envMap === e || r.normalMap === e || r.specularMap === e) && this.changeMaterialUpdateFlags(r, !0)
    }
  }, n.ProgramManager.prototype.buildProgram = function(e, t, r) {
    this.currentEntity = e, this.currentGroup = t, this.currentMaterial = r, r.shaderID || r.setupMaterialShader()
    var i = new n.GLParameters(this.currentMaterial, this.network, e),
      s, o, u, a, f = []
    r.shaderID ? f.push(r.shaderID) : (f.push(r.vertexShader), f.push(r.fragmentShader))
    for (Wr in i) Wr !== 'material' && Wr !== 'network' && Wr !== 'node' && (f.push(Wr), f.push(i[Wr]))
    a = f.join()
    for (s = 0, o = this.programs.length; s < o; s++) {
      if (this.programs[s].code === a) {
        r.program = this.programs[s].program, r.uniformsList = []
        for (d in r.uniforms) r.uniformsList.push([r.uniforms[d], d])
        return this.programs[s].usedTimes++, this.programs[s].program
      }
    }
    u = this.gl.createProgram()
    var l = i.getShaders(),
      c = l[1],
      h = l[0]
    this.gl.attachShader(u, z('fragment', c + r.fragmentShader, this.gl)), this.gl.attachShader(u, z('vertex', h + r.vertexShader, this.gl)), this.gl.linkProgram(u), this.gl.getProgramParameter(u, this.gl.LINK_STATUS) || console.log('Could not initialise shader\nVALIDATE_STATUS: ' + this.gl.getProgramParameter(u, this.gl.VALIDATE_STATUS) + ', gl error [' + this.gl.getError() + ']'), u.uniforms = {}, u.attributes = {}
    var p, d, v, s
    p = ['viewMatrix', 'modelViewMatrix', 'projectionMatrix', 'normalMatrix', 'modelMatrix', 'cameraPosition', 'boneGlobalMatrices', 'morphTargetInfluences']
    for (d in r.uniforms) p.push(d)
    this.attachGLLocations(u, p, 'uniform'), p = ['position', 'normal', 'uv', 'uv2', 'tangent', 'color', 'skinVertexA', 'skinVertexB', 'skinIndex', 'skinWeight']
    for (s = 0; s < i.maxMorphTargets; s++) p.push('morphTarget' + s)
    for (s = 0; s < i.maxMorphNormals; s++) p.push('morphNormal' + s)
    for (v in r.attributes) p.push(v)
    this.attachGLLocations(u, p, 'attribute'), u.id = this.programs.length, this.programs.push({
      program: u,
      code: a,
      usedTimes: 1
    }), this.info.memory.programCount = this.programs.length, r.program = u, r.uniformsList = []
    for (d in r.uniforms) r.uniformsList.push([r.uniforms[d], d])
    return u
  }, n.ProgramManager.prototype.enableAttribute = function(e, n) {
    var r = n.program.attributes
    r.position >= 0 && _gl.enableVertexAttribArray(r.position), r.color >= 0 && _gl.enableVertexAttribArray(r.color), r.normal >= 0 && _gl.enableVertexAttribArray(r.normal)
    if (n.attributes) {
      for (a in n.attributes) r[a] !== t && r[a] >= 0 && _gl.enableVertexAttribArray(r[a])
    }
  }, n.ProgramManager.prototype.attachGLLocations = function(e, t, n) {
    var r, i, s, o = this.gl
    if (n === 'uniform') {
      for (r = 0, i = t.length; r < i; r++) s = t[r], e.uniforms[s] = o.getUniformLocation(e, s)
    } else if (n === 'attribute') {
      for (r = 0, i = t.length; r < i; r++) s = t[r], e.attributes[s] = o.getAttribLocation(e, s)
    }
  }, n.ProgramManager.prototype.getGLShaders = function(e, t) {
    var n
    return e === 'fragment' ? n = this.gl.createShader(this.gl.FRAGMENT_SHADER) : tpye === 'vertex' && (n = this.gl.createShader(this.gl.VERTEX_SHADER)), this.gl.shaderSource(n, string), this.gl.compileShader(n), gl.getShaderParameter(n, gl.COMPILE_STATUS) ? n : (console.log(gl.getShaderInfoLog(n)), console.log(string), null)
  }, n.ProgramManager.prototype.setProgram = function(e, t, r, i, s, o) {
    this.textureCount = 0, this.addMaterial(i)
    if (this.needsUpdateMaterial(i)) {
      i.setupMaterialShader(), this.programMap[i.id] && this.deallocateMaterial(i)
      var u = this.buildProgram(o, s, i)
      this.programMap[i.id] = u, this.changeMaterialUpdateFlags(i, !1)
    }
    var a = !1,
      f = this.programMap[i.id],
      l = f.uniforms,
      c = i.uniforms
    f != this.currentProgram && (this.gl.useProgram(f), this.currentProgram = f, a = !0), i.id !== this.currentMaterialId && (this.currentMaterialId = i.id, a = !0)
    if (a || e !== this.network._currentCamera) this.gl.uniformMatrix4fv(l.projectionMatrix, !1, e.projectionMatrix.elements), e !== this.network._currentCamera && (this.network._currentCamera = e)
    r && i.fog && r.refreshUniforms(c)
    if (i.lights || i._type === 'phong' || i._type === 'lambert' || i._type === 'terrain') this._lightNeedsUpdate && (this.setupLights(f, t), this._lightNeedsUpdate = !1), W(c, this._lights)
    return a && i.refreshUniforms(!1, {
      camera: this.network._camera
    }), o.receiveShadow && !i._shadowPass && this.network.isShadowable() && (q(c, t), R(c, t)), a && this.loadUniformsGeneric(f, i.uniformsList, i), i.loadCameraPosition(l, e, this.gl), (i.skinning || i._type === 'phong' || i._type === 'lambert' || i._type === 'terrain' || i instanceof n.ShaderMaterial) && l.viewMatrix !== null && this.gl.uniformMatrix4fv(l.viewMatrix, !1, e.worldMatrixInverse.elements), U(l, o, this.gl), l.modelMatrix != null && this.gl.uniformMatrix4fv(l.modelMatrix, !1, o.worldMatrix.elements), this.network._baseRender && this.loadSSAOUniforms(l, i, a), f
  }, n.ProgramManager.prototype.loadSSAOUniforms = function(e, t, n) {
    if (e.mapSSAO != null && this.network._sSAOEnable) {
      var r = e.mapSSAO,
        i = n ? this.getTextureUnit() : t._ssaoSlot
      this.gl.uniform1i(r, i), this.setTexture(this.network.finalSSAOTarget, i), t._ssaoSlot = i
    }
  }, n.ProgramManager.prototype.onTextureDispose = function(e) {
    var t = e.target
    t.removeEventListener('dispose', onTextureDispose), deallocateTexture(t), this.info.memory.textures--
  }, n.ProgramManager.prototype.deallocateTexture = function(e) {
    var t = this.gl
    if (e._image && e._image.__webglTextureCube) t.deleteTexture(e._image.__webglTextureCube)
    else {
      if (!e.__webglInit) return
      e.__webglInit = !1, t.deleteTexture(e.__webglTexture)
    }
  }, n.ProgramManager.prototype.setTextureParameters = function(e, t, r, i) {
    var s = this.gl,
      o = this.gpu,
      u = n.Utils.paramToGL
    r && !i ? (s.texParameteri(e, s.TEXTURE_WRAP_S, u(t.wrapS, s)), s.texParameteri(e, s.TEXTURE_WRAP_T, u(t.wrapT, s)), s.texParameteri(e, s.TEXTURE_MAG_FILTER, u(t.magFilter, s)), s.texParameteri(e, s.TEXTURE_MIN_FILTER, u(t.minFilter, s))) : (s.texParameteri(e, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(e, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.texParameteri(e, s.TEXTURE_MAG_FILTER, this.filterFallback(t.magFilter)), s.texParameteri(e, s.TEXTURE_MIN_FILTER, this.filterFallback(t.minFilter))), o._glExtensionTextureFilterAnisotropic && t.type !== n.FloatType && (t.anisotropy > 1 || t.__oldAnisotropy) && (s.texParameterf(e, o._glExtensionTextureFilterAnisotropic.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, o._maxAnisotropy)), t.__oldAnisotropy = t.anisotropy)
  }, n.ProgramManager.prototype.setCubeTexture = function(e, r) {
    var i = this.gl
    this.addTexture(e)
    var s = e.id
    if (e._image.length === 6) {
      if (!e._image.loaded) return
      var o = n.Utils.isPowerOfTwo,
        u = n.Utils.paramToGL
      if (this.needsUpdateTexture(e)) {
        this.glTextureMap[s] === t && (this.glTextureMap[s] = i.createTexture(), this.info.memory.texture++), this.changeTextureUpdateFlags(e, !1), i.activeTexture(i.TEXTURE0 + r), i.bindTexture(i.TEXTURE_CUBE_MAP, this.glTextureMap[s]), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, e.flipY)
        var a = e instanceof n.CompressedTexture,
          f = []
        for (var l = 0; l < 6; l++) this.autoScaleCubemaps && !a ? f[l] = clampToMaxSize(e._image[l], _maxCubemapSize) : f[l] = e._image[l]
        var c = f[0],
          h = o(c.width) && o(c.height),
          p = u(e.format, i),
          d = u(e.type, i)
        this.setTextureParameters(i.TEXTURE_CUBE_MAP, e, h)
        for (var l = 0; l < 6; l++) {
          if (a) {
            var v, m = f[l].mipmaps
            for (var g = 0, y = m.length; g < y; g++) v = m[g], i.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + l, g, p, v.width, v.height, 0, v.data)
          } else i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + l, 0, p, p, d, f[l])
        }
        e.generateMipmaps && h && i.generateMipmap(i.TEXTURE_CUBE_MAP), e.needsUpdate = !1, e.onUpdate && e.onUpdate()
      } else i.activeTexture(i.TEXTURE0 + r), i.bindTexture(i.TEXTURE_CUBE_MAP, this.glTextureMap[s])
    }
  }, n.ProgramManager.prototype.setCubeTextureDynamic = function(e, t) {
    var n = this.gl
    n.activeTexture(n.TEXTURE0 + t), n.bindTexture(n.TEXTURE_CUBE_MAP, e.__webglTexture)
  }, n.ProgramManager.prototype.loadUniformsGeneric = function(e, r, i) {
    var s = this.gl,
      o, u, a, f, l, c, h, p, d, v, m
    for (d = 0, v = r.length; d < v; d++) {
      f = e.uniforms[r[d][1]]
      if (!f) continue
      o = r[d][0], a = o.type, u = o.value
      if (a === 'i') s.uniform1i(f, u)
      else if (a === 'f') s.uniform1f(f, u)
      else if (a === 'v2') s.uniform2f(f, u.x, u.y)
      else if (a === 'v3') s.uniform3f(f, u.x, u.y, u.z)
      else if (a === 'v4') s.uniform4f(f, u.x, u.y, u.z, u.w)
      else if (a === 'c') s.uniform3f(f, u.r, u.g, u.b)
      else if (a === 'iv1') s.uniform1iv(f, u)
      else if (a === 'iv') s.uniform3iv(f, u)
      else if (a === 'fv1') s.uniform1fv(f, u)
      else if (a === 'fv') s.uniform3fv(f, u)
      else if (a === 'v2v') {
        o._array === t && (o._array = new Float32Array(2 * u.length))
        for (h = 0, p = u.length; h < p; h++) m = h * 2, o._array[m] = u[h].x, o._array[m + 1] = u[h].y
        s.uniform2fv(f, o._array)
      } else if (a === 'v3v') {
        o._array === t && (o._array = new Float32Array(3 * u.length))
        for (h = 0, p = u.length; h < p; h++) m = h * 3, u[h] instanceof n.Color ? (o._array[m] = u[h].r, o._array[m + 1] = u[h].g, o._array[m + 2] = u[h].b) : (o._array[m] = u[h].x, o._array[m + 1] = u[h].y, o._array[m + 2] = u[h].z)
        s.uniform3fv(f, o._array)
      } else if (a === 'v4v') {
        o._array === t && (o._array = new Float32Array(4 * u.length))
        for (h = 0, p = u.length; h < p; h++) m = h * 4, o._array[m] = u[h].x, o._array[m + 1] = u[h].y, o._array[m + 2] = u[h].z, o._array[m + 3] = u[h].w
        s.uniform4fv(f, o._array)
      } else if (a === 'm4') o._array === t && (o._array = new Float32Array(16)), u.flattenToArray(o._array), s.uniformMatrix4fv(f, !1, o._array)
      else if (a === 'm4v') {
        o._array === t && (o._array = new Float32Array(16 * u.length))
        for (h = 0, p = u.length; h < p; h++) u[h].flattenToArrayOffset(o._array, h * 16)
        s.uniformMatrix4fv(f, !1, o._array)
      } else if (a === 't') {
        l = u, c = this.getTextureUnit(), s.uniform1i(f, c)
        if (!l) continue
        if (l._image instanceof Array && l._image.length === 6) this.setCubeTexture(l, c)
        else {
          var g = l._image
          this.setTexture(l, c, g ? !g.loaded : !0)
        }
      } else if (a === 'tv') {
        o._array === t && (o._array = [])
        for (h = 0, p = o.value.length; h < p; h++) o._array[h] = this.getTextureUnit()
        s.uniform1iv(f, o._array)
        for (h = 0, p = o.value.length; h < p; h++) {
          l = o.value[h], c = o._array[h]
          if (!l) continue
          var g = l._image
          l instanceof J ? this.setCubeTextureDynamic(l, c) : this.setTexture(l, c, g ? !g.loaded : !0)
        }
      }
    }
  }, n.ProgramManager.prototype.setTexture = function(e, r, i) {
    var s = this.gl,
      o = n.Utils.isPowerOfTwo,
      u = e.id
    this.addTexture(e)
    if (!this.needsUpdateTexture(e) || e instanceof $) s.activeTexture(s.TEXTURE0 + r), e instanceof $ ? s.bindTexture(s.TEXTURE_2D, e.__webglTexture) : s.bindTexture(s.TEXTURE_2D, this.glTextureMap[u])
    else {
      if (!e._image) return
      this.glTextureMap[u] === t && (this.glTextureMap[u] = s.createTexture(), this.info.memory.textures++), this.changeTextureUpdateFlags(e, !1), s.activeTexture(s.TEXTURE0 + r), s.bindTexture(s.TEXTURE_2D, this.glTextureMap[u]), s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, !e.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, e.unpackAlignment)
      var a = n.Utils.paramToGL,
        f = i ? n.ImageCache.Logo : e._image,
        l = o(f.width) && o(f.height),
        c = a(e.format, s),
        h = a(e.type, s)
      this.setTextureParameters(s.TEXTURE_2D, e, l, i)
      var p, d = e.mipmaps
      if (e instanceof n.PixelsTexture) {
        if (d.length > 0 && l) {
          for (var v = 0, m = d.length; v < m; v++) p = d[v], s.texImage2D(s.TEXTURE_2D, v, c, p.width, p.height, 0, c, h, p.data)
          e.generateMipmaps = !1
        } else s.texImage2D(s.TEXTURE_2D, 0, c, f.width, f.height, 0, c, h, f.data)
      } else if (e instanceof n.CompressedTexture) {
        for (var v = 0, m = d.length; v < m; v++) p = d[v], s.compressedTexImage2D(s.TEXTURE_2D, v, c, p.width, p.height, 0, p.data)
      } else if (d.length > 0 && l) {
        for (var v = 0, m = d.length; v < m; v++) p = d[v], s.texImage2D(s.TEXTURE_2D, v, c, c, h, p)
        e.generateMipmaps = !1
      } else {
        try {
          s.texImage2D(s.TEXTURE_2D, 0, c, c, h, f)
        } catch (g) {
          console.log(g)
        }
      }
      e.generateMipmaps && l && s.generateMipmap(s.TEXTURE_2D), e.onUpdate && e.onUpdate()
    }
  }, n.ProgramManager.prototype.getTextureUnit = function() {
    var e = this.textureCount
    return e >= this.gpu._maxTextures && console.warn('Network3D: trying to use ' + e + ' texture units while this GPU supports only ' + this.gpu._maxTextures), this.textureCount++, e
  }, n.ProgramManager.prototype.deallocateMaterial = function(e) {
    var n = e.program
    if (n === t) return
    e.program = t
    var r, i, s, o = !1
    for (r = 0, i = this.programs.length; r < i; r++) {
      s = this.programs[r]
      if (s.program === n) {
        s.usedTimes--, s.usedTimes === 0 && (o = !0)
        break
      }
    }
    if (o === !0) {
      var u = []
      for (r = 0, i = this.programs.length; r < i; r++) s = this.programs[r], s.program !== n && u.push(s)
      this.programs = u, this.gl.deleteProgram(n), this.info.memory.programs--
    }
  }, n.ProgramManager.prototype.filterFallback = function(e) {
    return e === n.NearestFilter || e === n.NearestMipMapNearestFilter || e === n.NearestMipMapLinearFilter ? this.gl.NEAREST : this.gl.LINEAR
  }, n.ProgramManager.prototype.setupLights = function(e, t) {
    var r, i, s, o, u = 0,
      a = 0,
      f = 0,
      l, c, h, p, d, v, m, g = this._lights,
      y = g.directional.colors,
      b = g.directional.positions,
      w = g.point.colors,
      E = g.point.positions,
      S = g.point.distances,
      x = g.spot.colors,
      T = g.spot.positions,
      N = g.spot.distances,
      C = g.spot.directions,
      k = g.spot.anglesCos,
      L = g.spot.exponents,
      A = g.hemi.skyColors,
      O = g.hemi.groundColors,
      M = g.hemi.positions,
      _ = 0,
      D = 0,
      P = 0,
      H = 0,
      B = 0,
      j = 0,
      F = 0,
      I = 0,
      q = 0,
      R = 0,
      U = 0,
      z = 0,
      W = new n.Vec3()
    for (r = 0, i = t.size(); r < i; r++) {
      s = t.get(r)
      if (s.onlyShadow) continue
      l = s.color, p = s.intensity * this.network.lightIntensityRatio, m = s.distance, s.updateWorldMatrix(!0)
      if (s instanceof n.AmbientLight) {
        if (!s._visible) continue
        this.gammaInput ? (u += l.r * l.r, a += l.g * l.g, f += l.b * l.b) : (u += l.r, a += l.g, f += l.b)
      } else if (s instanceof n.DirectionalLight) {
        B += 1
        if (!s._visible) continue
        s.direction ? W.copy(s.direction) : (W.copy(s.worldMatrix.getPosition()), W.sub(s.target.worldMatrix.getPosition())), W.normalize()
        if (W.x === 0 && W.y === 0 && W.z === 0) continue
        q = _ * 3, b[q] = W.x, b[q + 1] = W.y, b[q + 2] = W.z, this.gammaInput ? V(y, q, l, p * p) : X(y, q, l, p), _ += 1
      } else if (s instanceof n.PointLight) {
        j += 1
        if (!s._visible) continue
        R = D * 3, this.gammaInput ? V(w, R, l, p * p) : X(w, R, l, p), v = s.worldMatrix.getPosition(), E[R] = v.x, E[R + 1] = v.y, E[R + 2] = v.z, S[D] = m, D += 1
      } else if (s instanceof n.SpotLight) {
        F += 1
        if (!s._visible) continue
        U = P * 3, this.gammaInput ? V(x, U, l, p * p) : X(x, U, l, p), v = s.worldMatrix.getPosition(), T[U] = v.x, T[U + 1] = v.y, T[U + 2] = v.z, N[P] = m, W.copy(v), W.sub(s.target.worldMatrix.getPosition()), W.normalize(), C[U] = W.x, C[U + 1] = W.y, C[U + 2] = W.z, k[P] = Math.cos(s.angle), L[P] = s.exponent, P += 1
      } else if (s instanceof n.HemisphereLight) {
        I += 1
        if (!s._visible) continue
        W.copy(s.worldMatrix.getPosition()), W.normalize()
        if (W.x === 0 && W.y === 0 && W.z === 0) continue
        z = H * 3, M[z] = W.x, M[z + 1] = W.y, M[z + 2] = W.z, c = s.color, h = s.groundColor, this.gammaInput ? (d = p * p, V(A, z, c, d), V(O, z, h, d)) : (X(A, z, c, p), X(O, z, h, p)), H += 1
      }
    }
    for (r = _ * 3, i = Math.max(y.length, B * 3); r < i; r++) y[r] = 0
    for (r = D * 3, i = Math.max(w.length, j * 3); r < i; r++) w[r] = 0
    for (r = P * 3, i = Math.max(x.length, F * 3); r < i; r++) x[r] = 0
    for (r = H * 3, i = Math.max(A.length, I * 3); r < i; r++) A[r] = 0
    for (r = H * 3, i = Math.max(O.length, I * 3); r < i; r++) O[r] = 0
    g.directional.length = _, g.point.length = D, g.spot.length = P, g.hemi.length = H, g.ambient[0] = u, g.ambient[1] = a, g.ambient[2] = f
  }, n.ProgramManagerId = 0, n.ProgramManagerCache = {
    count: 0
  }
  var $ = function(e, r, i) {
    this.width = e, this.height = r, i = i || {}, this.wrapS = i.wrapS !== t ? i.wrapS : n.ClampToEdgeWrapping, this.wrapT = i.wrapT !== t ? i.wrapT : n.ClampToEdgeWrapping, this.magFilter = i.magFilter !== t ? i.magFilter : n.LinearFilter, this.minFilter = i.minFilter !== t ? i.minFilter : n.LinearMipMapLinearFilter, this.anisotropy = i.anisotropy !== t ? i.anisotropy : 1, this.offset = new n.Vec2(0, 0), this.repeat = new n.Vec2(1, 1), this.format = i.format !== t ? i.format : n.RGBAFormat, this.type = i.type !== t ? i.type : n.UnsignedByteType, this.depthBuffer = i.depthBuffer !== t ? i.depthBuffer : !0, this.stencilBuffer = i.stencilBuffer !== t ? i.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = null
  }
  $.prototype = {
    constructor: $,
    clone: function() {
      var e = new $(this.width, this.height)
      return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
    },
    getUniqueCode: function() {
      return this._id
    },
    dispose: function() {
      this.dispatchEvent({
        type: 'dispose'
      })
    }
  }
  var J = function(e, t, n) {
    $.call(this, e, t, n), this.activeCubeFace = 0
  }
  n.extend(J, $, {}), n.Network3D = function(r, i, s, u) {
    n.Element.call(this), this.id = n.Network3DId++, this._interactionDispatcher = new n.EventDispatcher(), u = u || {}, this.helperBox = new n.DataBox(), this.helperBox.addDataBoxChangeListener(this.handleDataBoxChange, this), this._rootView = h.createView('hidden'), this._canvas = this.initCanvas(s), this._topCanvas = h.createCanvas(this), this._bottomCanvas = h.createCanvas(this)
    var a = this._canvas.parentNode
    a && (a.removeChild(this._canvas), a.appendChild(this._rootView), this.adjustRootViewBounds(0, 0, this._canvas.width, this._canvas.height)), this._rootView.appendChild(this._bottomCanvas), this._rootView.appendChild(this._canvas), this._rootView.appendChild(this._topCanvas), this.setCanvasPropety(), this._camera = i || new n.PerspectiveCamera(), this._camera.addPropertyChangeListener(this.dirtyNetwork, this), this._clearColor = u.clearColor !== t ? u.clearColor : new n.Color(16777215), this._clearAlpha = u.clearAlpha != t ? u.clearAlpha : 1, this._precision = u.precision !== t ? u.precision : 'mediump', this.__fog = new n.FogExp2(), this.devicePixelRatio = u.devicePixelRatio !== t ? u.devicePixelRatio : e.devicePixelRatio !== t ? e.devicePixelRatio : 1, this._premultipliedAlpha = u.premultipliedAlpha == null ? !0 : u.premultipliedAlpha, this.lightIntensityRatio = 1, p.isIOS || p.isAndroid ? (this._antialias = !1, this._preserveDrawingBuffer = !1, this.lightIntensityRatio = 0.1) : (this._preserveDrawingBuffer = u.preserveDrawingBuffer == null ? !0 : u.preserveDrawingBuffer, this._antialias = u.antialias == t ? !0 : u.antialias), this._gl = this.initGL(), this._programs = [], this._currentProgram = null, this.overrideMaterial = null, this._maxLights = u.maxLights !== t ? u.maxLights : 4, this._projScreenMatrix = new l(), this._projScreenMatrixPS = new l(), this._frustum = new n.Frustum(), this._vector3 = new o(), this._oldDoubleSided = -1, this._oldFlipSided = -1, this._oldBlending = null, this._oldBlendEquation = null, this._oldBlendSrc = null, this._oldBlendDst = null, this._currentCamera = null, this._enabledAttributes = {}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.gpu = new n.GPU(this), this.pm = new n.ProgramManager(this), this.setDefaultGLState(), this.paintSortFunction = n.Defaults.paintSortFunction, this.sortNodes = !0, this.sortOpaqueOrderByMaterial = !0, this.glNodeList = [], this.helperGLNodeList = [], this.info = {
      memory: {
        programs: 0,
        geometries: 0,
        textures: 0
      },
      render: {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
      },
      currentMaterialId: -1
    }, this.projector = new n.Projector(), this.up = new n.Vec3(0, 1, 0), this.position = new n.Vec3(0, 0, 0), this.seletionMaterial = new n.BasicMaterial(), this.seletionMaterial.wireframe = !0, this.seletionMaterial.wireframeLinewidth = 1, this.seletionMaterial.color = new n.Color(65280), this.selectionCube = new _(), this.selectionCube.material = this.seletionMaterial, this.outlineMaterialMap = {}, this.selectionCube._modelViewMatrix = new l(), this.selectionCube._normalMatrix = new f(), this.selectionCube.name = 'select', this.alarmMaterial = new n.BasicMaterial(), this.alarmMaterial.wireframe = !0, this.alarmMaterial.wireframeLinewidth = 1, this.alarmMaterial.color = new n.Color(16711680), this.alarmCube = new _(), this.alarmCube.material = this.alarmMaterial, this.alarmCube._modelViewMatrix = new l(), this.alarmCube._normalMatrix = new f(), this.alarmCube.name = 'alarm'
    var c = 512
    this._glowSurface = new n.Plane(2, 2), this._glowSurface2 = new n.Plane(c, c), this._glowSurface.target = new $(c, c, {
      type: n.UnsignedByteType
    }), this._glowSurface.target1 = new $(c, c, {
      type: n.UnsignedByteType
    }), this._glowSurface.target2 = new $(c, c, {
      type: n.UnsignedByteType
    }), this._glowSurfaceMaterial = new n.BlurMaterial(), this._blurMaterialH = new n.BlurMaterial(), this._blurMaterialH.orientation = 1, this._blurMaterialV = new n.BlurMaterial(), this.deferredPostionMaterial = new n.DeferredMaterial(), this.deferredNormalMaterial = new n.DeferredMaterial({
      isNormal: 1
    }), this.ssaoMaterial = new n.SSAOMaterial(), this.ssaoMaterial.map2 = new n.Texture(C.ssaoNormalImage)
    var d = 1024
    this.deferredPostionTarget = new $(d, d, {
      type: n.FloatType,
      magFilter: n.NearestFilter,
      minFilter: n.NearestFilter
    }), this.deferredNormalTarget = new $(d, d, {
      type: n.FloatType,
      magFilter: n.NearestFilter,
      minFilter: n.NearestFilter,
      format: n.RGBFormat
    }), this.ssaoTarget = new $(d, d, {
      type: n.FloatType,
      magFilter: n.NearestFilter,
      minFilter: n.NearestFilter
    }), this.ssaoTarget1 = new $(c, c, {
      type: n.UnsignedByteType
    }), this.ssaoTarget2 = new $(c, c, {
      type: n.UnsignedByteType
    }), this.finalSSAOTarget = null, this._interactions = null, this.billboardRenderer = null, this._groupCounter = 0, this.groupMap = {}, this.groupCountMap = {}, this.bufferNodeMap = {}, this.lineMap = {}, this.particleMap = {}, this.glInited = {}, this.glNodeMap = {}, this.normalNodeMap = {}, this.showAxis = !1, this.axisSize = 20, this.axisPosition = new n.Vec3(0, 0, 0), this.axis = new n.Axis(this.axisSize), this.alarmBillboards = [], this.areaPickingRect = {}, this.setDataBox(r === t ? new n.DataBox() : r), this.renderCallback = null, this.beforeRenderFunction = null, this.dirtyNetwork(), this.prepareData(), this.autoUpdateCameraAspect = !0, this.shadowMapRenderer = null, this.shadowMapType = n.PCFSoftShadowMap, this.shadowMapCullFace = n.CullFaceFront, this.adjustBounds(this._canvas.width, this._canvas.height, 0, 0)
    var v = new n.DefaultInteraction(this)
    v.panSpeed = 3, v.zoomSpeed = 10
    var m = this
    this.getRootView().addEventListener('mousedown', function(e) {
      m.handleMouseDown(e)
    }), this.getRootView().addEventListener('mouseup', function(e) {
      m.handleClick(e)
    })
    var g = [v, new n.SelectionInteraction(this)]
    this.setInteractions(g), this.doubleClickToLookAtFunction = D.doubleClickToLookAtFunction, K(this), this.initSurfaceGroup(), this.materialRenderListMap = {}, this._selectTransparencyThreshold = 0, this._dynamicBatchDraw = !1, this._dynamicBatchDrawCountLimit = 1024, this.needSmoothNormalFunction = D.needSmoothNormalFunction, this._annotationMap = {}, this._activeAnnotation = null
  }, n.extend(n.Network3D, n.Data, {
    ___accessor: ['shadowMapEnable', 'editableFunction', 'keyboardRemoveEnabled', 'selectTransparencyThreshold', 'dynamicBatchDraw', 'showFps'],
    setUseFog: function(e) {
      this._useFog = e, this._useFog ? this._fog = this.__fog : this._fog = null
    },
    setOverloadMaterial: function(e) {
      this._overloadMaterial = e
    },
    setFogColor: function(e) {
      this.__fog.color = e
    },
    setFogDensity: function(e) {
      this.__fog.density = e
    },
    setDataBox: function(e) {
      if (!e) throw 'DataBox can not be null'
      if (this.dataBox === e) return
      var t = this.dataBox
      t && (this._clearDataBox(t), t.removeDataBoxChangeListener(this.handleDataBoxChange, this), t.removeDataPropertyChangeListener(this.handleDataPropertyChange, this), t.getAlarmBox().removeDataBoxChangeListener(this.dirtyNetwork, this), t.getSelectionModel().removeSelectionChangeListener(this.dirtyNetwork, this)), this.dataBox = e, this.dataBox.addDataBoxChangeListener(this.handleDataBoxChange, this), this.dataBox.addDataPropertyChangeListener(this.handleDataPropertyChange, this), this.dataBox.getAlarmBox().addDataBoxChangeListener(this.dirtyNetwork, this), this.dataBox.getSelectionModel().addSelectionChangeListener(this.dirtyNetwork, this), this.firePropertyChange('dataBox', t, this._box), this.glNodeList = [], this.dirtyNetwork(), this._clearNodeCache()
    },
    setRenderCallback: function(e) {
      this.renderCallback = e
    },
    setBeforeRenderFunction: function(e) {
      this.beforeRenderFunction = e
    },
    getDataBox: function() {
      return this.dataBox
    },
    getClearColor: function() {
      return this._clearColor
    },
    setClearColor: function(e) {
      arguments.length == 3 ? (this._clearColor = new n.Color(), this._clearColor.setRGB(arguments[0], arguments[1], arguments[2])) : (this._clearColor = e, this._clearColor instanceof n.Color || (this._clearColor = new n.Color(e))), this._gl.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha), this.dirtyNetwork()
    },
    setClearAlpha: function(e) {
      this._clearAlpha = e, this._gl.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha), this.dirtyNetwork()
    },
    getClearAlpha: function() {
      return this._clearAlpha
    },
    getPrecision: function() {
      return this._precision
    },
    setPrecision: function(e) {
      this._precesion = e
    },
    setSSAOBlur: function(e) {
      this._ssaoBlur = e
    },
    setSSAOEnable: function(e) {
      return e && !this.isFloatTextureSupport() ? !1 : (this._sSAOEnable = e, this._dirty = !0, !0)
    },
    isSSAOEnable: function() {
      return this._sSAOEnable && this._baseRender
    },
    setSSAOOccluderBias: function(e) {
      this._occluderBias = e, this._dirty = !0
    },
    setSSAOSamplingRadius: function(e) {
      this._samplingRadius = e, this._dirty = !0
    },
    setSSAOAttenuation: function(e) {
      this._attenuation = e, this._dirty = !0
    },
    isFloatTextureSupport: function() {
      return this._glExtensionTextureFloat != null
    },
    getCamera: function() {
      return this._camera
    },
    setCamera: function(e, t) {
      if (this._camera != e) {
        var n = this._camera
        n.removePropertyChangeListener(this.dirtyNetwork), this._camera = e, this._camera.addPropertyChangeListener(this.dirtyNetwork, this)
        if (this.autoUpdateCameraAspect) {
          this._camera.setAspect(n.aspect)
          var r = this.getDefaultInteraction()
          r && (r.object = this._camera)
        }
        t && (this._camera.p(n.p()), this._camera.lookAt(n.getTarget())), this.dirtyNetwork()
      }
    },
    isVisible: function(e) {
      if (e) {
        if (e instanceof n.Link || e instanceof n.PathLink) {
          if (!e.isVisible()) return !1
          if (!this.isVisible(e._fromNode)) return !1
          if (!this.isVisible(e._toNode)) return !1
        }
        if (!e.isVisible()) return !1
        if (e._parent) return this.isVisible(e._parent)
        if (this.visibleFunction) return this.visibleFunction(e)
      }
      return !0
    },
    setCanvasPropety: function() {
      this._canvas && (this._canvas.setAttribute('tabindex', this.id), this._canvas.style.outline = 'none', this._canvas.style.position = 'absolute')
    },
    initCanvas: function(e) {
      return e === t ? document.createElement('canvas') : (typeof e === 'string' && (e = document.getElementById(e)), e)
    },
    initGL: function() {
      var e
      try {
        e = this._canvas.getContext('webgl', {
          preserveDrawingBuffer: this._preserveDrawingBuffer,
          premultipliedAlpha: this._premultipliedAlpha,
          antialias: this._antialias,
          stencil: !0
        }) || this._canvas.getContext('experimental-webgl', {
            preserveDrawingBuffer: this._preserveDrawingBuffer,
            premultipliedAlpha: this._premultipliedAlpha,
            antialias: this._antialias,
            stencil: !0
          })
      } catch (t) {
        console.log(t)
      }
      e || console.error('Can not init webgl context'), this._glExtensionTextureFloat = e.getExtension('OES_texture_float'), this._glExtensionStandardDerivatives = e.getExtension('OES_standard_derivatives'), this._glExtensionTextureFilterAnisotropic = e.getExtension('EXT_texture_filter_anisotropic') || e.getExtension('MOZ_EXT_texture_filter_anisotropic') || e.getExtension('WEBKIT_EXT_texture_filter_anisotropic'), this._glExtensionCompressedTextureS3TC = e.getExtension('WEBGL_compressed_texture_s3tc') || e.getExtension('MOZ_WEBGL_compressed_texture_s3tc') || e.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc'), this._glExtensionTextureFloat || console.log('TGL.Network3D: Float textures not supported.'), this._glExtensionStandardDerivatives || console.log('TGL.Network3D: Standard derivatives not supported.'), this._glExtensionTextureFilterAnisotropic || console.log('TGL.Network3D: Anisotropic texture filtering not supported.'), this._glExtensionCompressedTextureS3TC || console.log('TGL.Network3D: S3TC compressed textures not supported.')
      if (e) return e
      console.log('Error: Your browser does not support WebGL.')
    },
    resetRenderInfo: function() {
      this.info.render.calls = 0, this.info.render.vertices = 0, this.info.render.faces = 0, this.info.render.points = 0, this.info.currentMaterialId = -1
    },
    _clearDataBox: function(e) {
      var t = null
      e === this.helperBox ? t =
        this.helperGLNodeList : t = this.glNodeList
      for (var n = t.length - 1; n >= 0; n--) {
        var r = t[n]
        t.splice(n, 1)
      }
      t = [], this.prepareData(), this.pm._lightNeedsUpdate = !0, this.pm.changeAllLightMaterialUpdateFlags(!0), this._clearNodeCache(), this.deleteCloneNode()
    },
    handleDataBoxChange: function(e) {
      var t = e.kind,
        r = e.data,
        i = e.source,
        s = null
      i === this.helperBox ? s = this.helperGLNodeList : s = this.glNodeList, t === 'add' ? r instanceof n.Light ? (this.pm._lightNeedsUpdate = !0, this.pm.changeAllLightMaterialUpdateFlags(!0), this.prepareData()) : r instanceof n.Annotation ? this._createAnnotationDiv(r) : (this.addNodeMaterials(r), s.length === 0 ? this.initWebGLNodes(i, s) : this.addNode(r, s), r._alarmBillboard && this.alarmBillboards.push(r._alarmBillboard)) : t === 'remove' ? r instanceof n.Light ? (this.pm._lightNeedsUpdate = !0, this.pm.changeAllLightMaterialUpdateFlags(!0), this.prepareData()) : r instanceof n.Annotation ? this._removeAnnotationDiv(r) : (this.removeNode(r, s), this.deleteCloneNode(r)) : t === 'clear' && this._clearDataBox(), this.boundingBox = null, this.dirtyNetwork()
    },
    removeNode: function(e, t) {
      for (var n = t.length - 1; n >= 0; n--) {
        var r = t[n]
        r.node === e && t.splice(n, 1)
      }
      this._clearNodeCache(e)
    },
    _clearNodeCache: function(e) {
      if (e) {
        e.oldGroups = e.groups || e.oldGroups
        if (e.oldGroups != null) {
          for (var t in e.oldGroups) {
            var r = e.oldGroups[t],
              i = this.groupCountMap[r.id]
            i != null && (i--, i <= 0 ? (delete this.groupCountMap[r.id], delete this.groupMap[r.id]) : this.groupCountMap[r.id] = i)
          }
        }
        for (var s = 0; s < this.alarmBillboards.length; s++) {
          var o = this.alarmBillboards[s]
          o.getParent() === e && (this.alarmBillboards.splice(s, 1), s--)
        }
        e instanceof n.Annotation && this._removeAnnotationDiv(e)
      } else {
        for (var u in this.groupMap) {
          var a = this.groupMap[u],
            f = a._nodeId
          this.helperBox.containsById(f) || delete this.groupMap[u]
        }
        this.glInited = new Object(), this.alarmBillboards.splice(0), this.glNodeList = []
      }
      for (var u in this._annotationMap) this._removeAnnotationDiv(u)
    },
    addNode: function(e, t) {
      var n = this.addWebGLNode(t, e)
      for (var r = 0; r < n.length; r++) {
        var i = n[r]
        this.updateWebGLNode(i)
      }
    },
    addNodeMaterials: function(e) {
      var t = e.material,
        r
      if (t instanceof n.Material) this.addMaterial(t)
      else if (t instanceof n.ArrayMaterial) {
        var i = t.materials,
          s = i.length
        for (r = 0; r < s; r++) this.addMaterial(i[r])
      }
    },
    addMaterial: function(e) {
      this.pm.addMaterial(e), e.map && this.pm.addTexture(e.map)
    },
    handleDataPropertyChange: function(e) {
      var t = e.source
      if (t instanceof n.Node) {
        var r = e.property
        if (t.isSizeChangedProperty(r) || r === n.Styles.MaterailType || r === n.Styles.NormalType) {
          if (t instanceof n.Line) {
            t.verticesNeedUpdate = !0
            var i = this.lineMap[t._id]
            this.initLineBuffers(t), w.buildLineBufferData(t, this._gl.DYNAMIC_DRAW, this._gl, i)
          } else if (t.groups) {
            t.verticesNeedUpdate = !0
            if (r === n.Styles.MaterailType || r === n.Styles.NormalType) t.normalsNeedUpdate = !0
            for (var s in t.groups) {
              var o = t.groups[s],
                i = this.groupMap[o.id],
                u = w.getMaterial(t, o.materialIndex)
              t.normalsNeedUpdate && this.initGroupBuffer(t, o, i, !0), w.buildGroupBufferData(o, t, this._gl.DYNAMIC_DRAW, !t.dynamic, u, this._gl, i, this)
            }
          }
        } else if (r === 'materialMapping') this._currentGroupHash = null, this.glInited[t.getId()] = !1, this.removeNode(t, this.glNodeList), this.addNode(t, this.glNodeList)
        else if (r === 'alarmBillboard') {
          var a = e.oldValue,
            f = e.newValue
          this._addNodeAlarmBillboard(t, a, f)
        }
        this.addNodeMaterials(t)
      } else t instanceof n.Light && (this.pm._lightNeedsUpdate = !0)
      if (t.isSizeChangedProperty && t.isSizeChangedProperty(r) || r == 'parent' || t.isSpaceChangedProperty(r)) this.deleteCloneNode(t), this.boundingBox = null
      this.dirtyNetwork()
    },
    deleteCloneNode: function(e) {
      if (e) {
        var t = e.getId ? e.getId() : e,
          n = this.normalNodeMap[t]
        if (n != null) {
          n.setParent(null)
          for (var r in n.groups) {
            var i = n.groups[r]
            delete this.groupMap[i.id]
          }
        }
        delete this.normalNodeMap[t]
      } else {
        for (var t in this.normalNodeMap) this.deleteCloneNode(t)
      }
    },
    setBlurAmount: function(e) {
      this._blurAmount = e
    },
    setBlurScale: function(e) {
      this._blurScale = e
    },
    setBlurStrength: function(e) {
      this._blurStrength = e
    },
    setBlurGlobalAlpha: function(e) {
      this._blurGlobalAlpha = e
    },
    dirtyNetwork: function(e) {
      this.dataBox.batch || (this._dirty = !0)
    },
    _addNodeAlarmBillboard: function(e, n, r) {
      r === t && (r = e._alarmBillboard)
      if (n != null && this.alarmBillboards.indexOf(n) !== -1) {
        var i = this.alarmBillboards.indexOf(n)
        this.alarmBillboards.splice(i, 1), n.removePropertyChangeListener(this.dirtyNetwork, this)
      }
      r && this.alarmBillboards.indexOf(r) === -1 && (this.alarmBillboards.push(r), r.addPropertyChangeListener(this.dirtyNetwork, this))
    },
    initWebGLNodes: function(e, t) {
      var n = e.getNodes(),
        r, i
      for (r = 0, i = n.size(); r < i; r++) {
        var s = n.get(r)
        s.renderSelected = !1, this.addWebGLNode(t, s), this.glNodeMap[s.id] = s
      }
      for (r = 0, i = t.length; r < i; r++) this.updateWebGLNode(t[r])
    },
    updateWebGLNode: function(e) {
      var t = e.node,
        r = t,
        i, s, o
      if (t instanceof n.Entity) {
        for (var u in t.groups) {
          i = t.groups[u], o = w.getMaterial(t, i.materialIndex)
          if (t.buffersNeedUpdate) {
            var a = this.groupMap[i.id]
            this.initGroupBuffer(t, i, a), w.buildGroupBufferData(i, t, this._gl.DYNAMIC_DRAW, !t.dynamic, o, this._gl, a, this)
          }
        }
        t.setUpdateFlags(!1), t.buffersNeedUpdate = !1
      } else if (t instanceof n.BufferNode) this.setBufferNodeData(t, this._gl.DYNAMIC_DRAW, !t.dynamic)
      else if (t instanceof n.Line) {
        var a = this.lineMap[t._id]
        w.buildLineBufferData(t, this._gl.DYNAMIC_DRAW, this._gl, a)
      } else if (t instanceof n.Particle) {
        var a = this.particleMap[t._id]
        x(t, this._gl.DYNAMIC_DRAW, this._gl, a)
      }
    },
    addWebGLNode: function(e, r) {
      var i, s, o, u = [],
        a
      this.glInited[r.getId()] || this._addNodeAlarmBillboard(r)
      if (!this.glInited[r.getId()]) {
        this.glInited[r.id] = !0, r._modelViewMatrix = new l(), r._normalMatrix = new f()
        if (r instanceof n.Entity) {
          r.groups == t && S(r)
          for (i in r.groups) {
            s = r.groups[i], s.id = s.id === t ? n.Network3D.GroupCache._groupCounter++ : s.id
            var c = this.groupCountMap[s.id] || 0
            c++, this.groupCountMap[s.id] = c, this.groupMap[s.id] === t && (this.groupMap[s.id] = {})
            var h = this.groupMap[s.id]
            h._nodeId = r.getId(), h.__webglVertexBuffer || (this.createGroupBuffer(s, h), this.initGroupBuffer(r, s, h), r.setUpdateFlags(!0))
          }
        } else if (r instanceof n.Line) {
          this.lineMap[r._id] == null && (this.lineMap[r._id] = {})
          var h = this.lineMap[r._id]
          h._nodeId = r.getId(), h.__webglVertexBuffer || (this.createLineBuffers(r), this.initLineBuffers(r), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0, r.lineDistancesNeedUpdate = !0)
        } else if (r instanceof n.Particle) {
          this.lineMap[r._id] == null && (this.lineMap[r._id] = {})
          var h = this.lineMap[r._id]
          h._nodeId = r.getId(), h.__webglVertexBuffer || (this.createParticleBuffers(r), this.initParticleBuffers(r), r.verticesNeedUpdate = !0, r.colorsNeedUpdate = !0)
        } else r instanceof n.BufferNode ? this.initBufferNode(r) : r instanceof n.Annotation && this._createAnnotationDiv(r)
      }
      if (r instanceof n.Entity) {
        for (i in r.groups) {
          s = r.groups[i], o = w.getMaterial(r, s.materialIndex), a = {
            group: s,
            node: r,
            opaque: o.transparent ? null : o,
            transparent: o.transparent ? o : null
          }, e.push(a), u.push(a)
        }
        r.groups === null
      } else {
        r instanceof n.Line ? (o = r.material, a = {
          group: r,
          node: r,
          opaque: o.transparent ? null : o,
          transparent: o.transparent ? o : null
        }, e.push(a), u.push(a)) : r instanceof n.Particle ? (o = r.material, a = {
          group: r,
          node: r,
          opaque: o.transparent ? null : o,
          transparent: o.transparent ? o : null
        }, e.push(a), u.push(a)) : r instanceof n.BufferNode && (o = r.material instanceof n.ArrayMaterial ? r.material.materials[0] : r.material, a = {
          group: r,
          node: r,
          opaque: o.transparent ? null : o,
          transparent: o.transparent ? o : null
        }, e.push(a), u.push(a))
      }
      return r.glActive = !0, u
    },
    onElementDispose: function(e) {
      var t = e.target
      t.removeEventListener('dispose', this.onElementDispose), deallocateElement(t), this.info.memory.geometries--
    },
    deallocateElement: function(e) {},
    _AK47: function(e, r, i, s, o, u) {
      var a = this._fog
      e.parent === t && e.updateWorldMatrix(!0, !1), e.worldMatrixInverse.getInverse(e.worldMatrix), this._projScreenMatrix.multiply(e.projectionMatrix, e.worldMatrixInverse), this._frustum.setFromMatrix(this._projScreenMatrix), i.length === 0 && (this.initWebGLNodes(r, i), this.prepareData()), this.resetRenderInfo()
      var f, l, c, h
      if (!u) {
        for (f = 0, l = i.length; f < l; f++) {
          c = i[f], h = c.node, h.renderSelected = !1, c.render = !1
          if (this.isVisible(h)) {
            this.unrollBufferMaterial(c), this.setupMatrices(h, e)
            if (!(h instanceof n.Entity || h instanceof n.Particle) || !h.frustumCulled || this._frustum.intersectsObject(h)) c.render = !0, this.sortNodes && (this._vector3.copy(h.worldMatrix.getPosition()), this._vector3.applyProjection(this._projScreenMatrix), h.renderDepth != null ? c.z = h.renderDepth + this._vector3.z : c.z = this._vector3.z)
          }
        }
      }
      var p = new N()
      p.addAll(s)
      if (!o && !u) {
        for (var d = this.alarmBillboards.length - 1; d >= 0; d--) {
          var v = this.alarmBillboards[d]
          v.getParent() == null && this.alarmBillboards.splice(d, 1)
        }
        p.addAll(this.alarmBillboards)
      }
      var m = this
      !u && p.forEach(function(e) {
        e.renderDepth ? e.z = e.renderDepth : (m._vector3.copy(e.worldMatrix.getPosition()), m._vector3.applyProjection(m._projScreenMatrix), e.z = m._vector3.z)
      }),
      p.size() > 0 && !u && this.billboardRenderer == null && (this.billboardRenderer = new n.BillboardRenderer())
      var g = [].concat(i).concat(p._as),
        y = this.sortNodesFunc(g)
      this.setBlending(n.NoBlending), this.renderNodes(y, !1, 'opaque', e, r.getLights(), !1, null, u, this.sortOpaqueOrderByMaterial), this.renderNodes(y, !0, 'transparent', e, r.getLights(), !0, null, u), this.setDepthTest(!0), this.setDepthWrite(!0)
    },
    unrollBufferMaterial: function(e) {
      var t = e.node,
        r = e.group,
        i, s, o
      o = t.material, o instanceof n.ArrayMaterial ? (s = r.materialIndex || 0, i = o.materials[s], i.transparent ? (e.transparent = i, e.opaque = null) : (e.opaque = i, e.transparent = null)) : (i = o, i && (i.transparent ? (e.transparent = i, e.opaque = null) : (e.opaque = i, e.transparent = null)))
    },
    renderLicense: function() {},
    isShadowable: function() {
      return this.isShadowMapEnable() && (this.maxShadows > 0 || this.maxPointShadows > 0)
    },
    render: function() {
      if (!this._dirty) return
      this._dirty = !1, this.beforeRenderFunction != null && this.beforeRenderFunction.call(this)
      if (this.isShadowable()) {
        this.shadowMapRender(), this.setRenderTarget(t)
        if (this.debugPointLight) return
      }
      qr.twm(this), this.paintBottom(this._bottomCanvas), this.getShowFps() && (this.__time = (new Date()).getTime()), this.innerRender(this._camera, !0), this.renderAnnotations(this._camera), this.extendRender(this._camera), this.paintTopCanvas()
      if (this.getShowFps()) {
        this._tpf = (new Date()).getTime() - this.__time
        var e = this._topCanvas.getContext('2d'),
          n = (1e3 / this._tpf).toFixed(0)
        n > 500 && (n = '> 500')
        var r = 'FPS:' + n + ',TPF:' + this._tpf + ' ms'
        e.font = '20px Arial sans-serif', e.fontWeight = 'bold', e.lineWith = 2, e.fillStyle = 'rgba(0, 0, 0, 1)', e.fillText(r, 10, 25)
      }
      if (this._xyz != t) {
        var i = this._xyz,
          s = i.markText,
          o = i.type,
          u = i.expired,
          r = i.innerHTML,
          a = 0,
          f = 0,
          l, c = this._topCanvas.getBoundingClientRect(),
          e = this._topCanvas.getContext('2d')
        s != t && s != null && s != '' || o == '2' ? (e.font = '24px Arial sans-serif', l = y.getTextSize(e.font, r), e.fillStyle = 'red', a = this._canvas.width - l.width - 20, f = this._canvas.height - l.height - 10) : (e.font = '15px Arial sans-serif', e.fillStyle = 'rgba(240, 120, 25, 0.6)', l = y.getTextSize(e.font, r), a = this._canvas.width - l.width - 20, f = this._canvas.height - l.height - 10), e.fillText(r, a, f)
      }
      this.renderCallback != null && this.renderCallback.call(this)
    },
    getTextSize: function(e, t) {
      return y.getTextSize(e, t)
    },
    shadowMapRender: function() {
      this.shadowMapRenderer == null && (this.shadowMapRenderer = new oi(), this.shadowMapRenderer.init(this)), this.glNodeList.length === 0 && (this.initWebGLNodes(this.dataBox, this.glNodeList), this.prepareData()), this.shadowMapRenderer.render(this.dataBox, this._camera)
    },
    handleMouseDown: function(e) {
      var t = e.target
      this.lastX = e.clientX, this.lastY = e.clientY, t.getAttribute('class') == 'tgl_annotation' && t.style.opacity == '1' && (e.stop = !0, e.stopPropagation())
    },
    handleClick: function(e) {
      var t = e.clientX - this.lastX,
        n = e.clientY - this.lastY
      if (Math.abs(t) < 0.1 && Math.abs(n) < 0.1) {
        var r = e.target
        if (r.getAttribute('clazz') != 'tgl_annotation') this._activeAnnotation && (this._activeAnnotation = null, this.dirtyNetwork())
        else if (r.style.opacity == '1') {
          var i = r.getAttribute('id'),
            s = this.getDataBox().getDataById(i),
            o = this._annotationMap[i]
          this.handleDefaultAnnotationClick(s, o), this.handleAnnotationClick(s, o), this.dirtyNetwork()
        }
      }
    },
    handleDefaultAnnotationClick: function(e, t) {
      this._activeAnnotation != e && (this._activeAnnotation = e)
    },
    handleAnnotationClick: function(e, t) {},
    renderAnnotations: function(e) {
      var t = this.dataBox.getAnnotations(),
        n = this
      t && (t.forEach(function(t) {
        n.renderAnnotation(e, t)
      }), this._createAnnotationStyle())
      if (this._activeAnnotation) {
        this._createAnnotationToolTipDiv()
        var r = this._annotationToolTipDiv
        r.innerHTML = this._activeAnnotation.getText()
        var i = this._annotationMap[this._activeAnnotation.getId()]
        r.parentNode != i && i.appendChild(r), r.style.opacity = i.style.opacity
      }
    },
    getAnnotationDiv: function(e) {
      return this._annotationMap[e.getId()]
    },
    renderAnnotation: function(e, t) {
      var n = this._annotationMap[t.getId()]
      n == null && (n = this._createAnnotationDiv(t)), n.innerHTML = t._label, t.updateWorldMatrix()
      var r = t.worldMatrix.getPosition(),
        i = t.getStyle('annotation.class')
      n.setAttribute('class', i)
      var s = this.getViewPosition(r),
        o = this._annotationToolTipDiv
      n.style.left = s.x + 'px', n.style.top = s.y + 'px', n.style.opacity = '1'
      var u = r.distanceTo(e.getPosition()),
        a = this.getElementByScreenPoint(s, !1)
      if (a && a.length > 0) {
        var f = a[0]
        f.distance < u && (n.style.opacity = '0.03')
      }
    },
    _addCSSRule: function(e, t, n, r) {
      r = r || (e.cssRules || e.rules).length, e.insertRule ? e.insertRule(t + '{' + n + '}', r) : e.addRule && e.addRule(t, n, r)
    },
    _createAnnotationStyle: function() {
      if (!this._annotationStyle) {
        var e = document.createElement('style')
        e.appendChild(document.createTextNode('')), document.head.appendChild(e)
        var t = e.sheet
        this._addCSSRule(t, '.tgl_annotation', 'position:absolute;width:16px;height:16px;border-radius:10px;text-align:center;border : 2px solid gray;'), this._addCSSRule(t, '.tgl_annotation:hover', 'border : 2px solid black;'), this._annotationStyle = e
      }
    },
    _removeAnnotationDiv: function(e) {
      var t = e.getId ? e.getId() : e,
        n = this._annotationMap[t]
      n != null && this.getRootView().removeChild(n)
    },
    _createAnnotationDiv: function(e) {
      var t = document.createElement('div'),
        n = this,
        r = e.getStyle('annotation.class')
      return t.setAttribute('id', e.getId()), t.setAttribute('class', r), t.setAttribute('clazz', 'tgl_annotation'), this._annotationMap[e.getId()] = t, this.getRootView().appendChild(t), t
    },
    _createAnnotationToolTipDiv: function() {
      if (this._annotationToolTipDiv == null) {
        var e = document.createElement('div')
        e.setAttribute('class', 'tgl_annotation_tooltip')
        var t = document.createElement('style')
        t.appendChild(document.createTextNode('')), document.head.appendChild(t)
        var n = t.sheet,
          r = "position: absolute;border: 3px solid #333; background-color: #ccd; padding: 3px;text-align: left;width: 220px;height: 'auto';border-radius: 10px;bottom:35px;left:-13px;"
        this._addCSSRule(n, '.tgl_annotation_tooltip', r), r = "content: ' ';position: absolute;top: 100%; border: 1px solid;", this._addCSSRule(n, '.tgl_annotation_tooltip:after, .tgl_annotation_tooltip:before', r), r = 'border-color: #333 transparent transparent transparent;border-width: 16px 17px 0 7px;left: 10px;', this._addCSSRule(n, '.tgl_annotation_tooltip:before', r), r = 'border-color: #ccd transparent transparent transparent;border-width: 12px 11px 0 4px;left: 14px;', this._addCSSRule(n, '.tgl_annotation_tooltip:after', r), this._annotationToolTipDiv = e
      }
    },
    extendRender: function(e) {},
    innerRender: function(e, n) {
      e === t && (e = this._camera)
      if (e === null) {
        console.log(' no camera')
        return
      }
      this.debug && console.log('inner Render')
      if (this.autoClear) {
        var r = this._clearColor
        this._gl.clearColor(r.r, r.g, r.b, this._clearAlpha), I.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil, this)
      }
      if (n) {
        for (var i = 0; i < this._interactions.length; i++) {
          var o = this._interactions[i]
          o.update && o.update()
        }
      }
      this.billboardRenderer && this.billboardRenderer.disable(), this._gl.viewport(0, 0, this._canvas.width, this._canvas.height)
      if (this._sSAOEnable) {
        this.linearDepth = e.far - e.near, this.ssaoing = !0, this._renderDeferredTarget(e, this.deferredPostionMaterial, this.deferredPostionTarget), this._renderDeferredTarget(e, this.deferredNormalMaterial, this.deferredNormalTarget), this._setSSAOMaterial(), this._overloadMaterial = null, this._renderSurface(e, this.ssaoTarget, this.ssaoMaterial)
        var u = this._canvas.width / this._canvas.height
        this._ssaoBlur ? (this._renderBlurTarget(e, this._blurMaterialH, this.ssaoTarget, this.ssaoTarget1, u), this._renderBlurTarget(e, this._blurMaterialV, this.ssaoTarget1, this.ssaoTarget2, u), this.finalSSAOTarget = this.ssaoTarget2) : this.finalSSAOTarget = this.ssaoTarget, this.setRenderTarget(t), this.ssaoing = !1
      }
      this.renderOutline = !1, this.renderOutlineGlow = !1, I.enableStencil(this._gl), this._baseRender = !0, I.r(this, e, this.dataBox, this.glNodeList, this.dataBox.getBillboards()), this._baseRender = !1, I.stencilTest(this._gl), this.renderOutline && I.r(this, e, this.dataBox, this.glNodeList, this.dataBox.getBillboards(), !1, 'stencil')
      if (this.renderOutlineGlow) {
        var a = this._glowSurface.target,
          c = this._glowSurface.target1,
          h = this._glowSurface.target2
        I.disableStencil(this._gl), this.setRenderTarget(a), a._id = a._id || (new Date()).getTime() + '0', c._id = c._id || (new Date()).getTime() + '1', h._id = h._id || (new Date()).getTime() + '2', this._gl.viewport(0, 0, a.width, a.height), this._gl.clearColor(0, 0, 0, 0), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._gl.colorMask(!1, !1, !1, !1), I.r(this, e, this.dataBox, this.glNodeList, this.dataBox.getBillboards(), !1, 'glow.unselect'), this._gl.colorMask(!0, !0, !0, !0), I.r(this, e, this.dataBox, this.glNodeList, this.dataBox.getBillboards(), !1, 'glow.select')
        var p, d
        this.setRenderTarget(c), this._gl.viewport(0, 0, c.width, c.height), this._gl.clearColor(0, 0, 0, 0), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._blurMaterialH.setMap(a)
        var u = this._canvas.width / this._canvas.height
        this._blurMaterialH.texelSize = new s(a.width, a.height / u), this._blurMaterialH.blurAmount = this._blurAmount || 5, this._blurMaterialH.blurScale = this._blurScale || 1, this._blurMaterialH.blurStrength = this._blurStrength || 1, this._blurMaterialH.orientation = 1
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._blurMaterialH, d, this._glowSurface2)
        this.setRenderTarget(h), this._gl.clearColor(0, 0, 0, 0), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._blurMaterialV.setMap(c), this._blurMaterialV.texelSize = new s(c.width, c.height / u), this._blurMaterialV.blurAmount = this._blurAmount || 5, this._blurMaterialV.blurScale = this._blurScale || 1, this._blurMaterialV.blurStrength = this._blurStrength || 1, this._blurMaterialV.orientation = 0
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._blurMaterialV, d, this._glowSurface2)
        this.setRenderTarget(t), this._glowSurface._modelViewMatrix = new l(), this._glowSurface._normalMatrix = new f(), this.setupMatrices(this._glowSurface, e), this._glowSurfaceMaterial.setMap(h), this._glowSurfaceMaterial.useBlur = 0, this._glowSurfaceMaterial.blurGlobalAlpha = this._blurGlobalAlpha || 1, I.setBlending(this._glowSurfaceMaterial.blendMode, this._glowSurfaceMaterial.blendEquation, this._glowSurfaceMaterial.blendSrc, this._glowSurfaceMaterial.blendDst, this), this._gl.enable(this._gl.STENCIL_TEST)
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._glowSurfaceMaterial, d, this._glowSurface)
        this.setRenderTarget(c), this._gl.viewport(0, 0, c.width, c.height), this._gl.clearColor(0, 0, 0, 0), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._blurMaterialH.setMap(a)
        var u = this._canvas.width / this._canvas.height
        this._blurMaterialH.texelSize = new s(a.width, a.height / u), this._blurMaterialH.blurAmount = this._blurAmount || 10, this._blurMaterialH.blurScale = this._blurScale || 1, this._blurMaterialH.blurStrength = this._blurStrength || 1, this._blurMaterialH.orientation = 0
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._blurMaterialH, d, this._glowSurface2)
        this.setRenderTarget(h), this._gl.clearColor(0, 0, 0, 0), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._blurMaterialV.setMap(c), this._blurMaterialV.texelSize = new s(c.width, c.height / u), this._blurMaterialV.blurAmount = this._blurAmount || 10, this._blurMaterialV.blurScale = this._blurScale || 1, this._blurMaterialV.blurStrength = this._blurStrength || 1, this._blurMaterialV.orientation = 1
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._blurMaterialV, d, this._glowSurface2)
        this.setRenderTarget(t), this._glowSurface._modelViewMatrix = new l(), this._glowSurface._normalMatrix = new f(), this.setupMatrices(this._glowSurface, e), this._glowSurfaceMaterial.setMap(h), this._glowSurfaceMaterial.useBlur = 0, this._glowSurfaceMaterial.blurGlobalAlpha = this._blurGlobalAlpha || 1, I.setBlending(this._glowSurfaceMaterial.blendMode, this._glowSurfaceMaterial.blendEquation, this._glowSurfaceMaterial.blendSrc, this._glowSurfaceMaterial.blendDst, this), this._gl.enable(this._gl.STENCIL_TEST)
        for (p in this._glowSurface.groups) d = this._glowSurface.groups[p], this.renderGroup(e, [], this._glowSurfaceMaterial, d, this._glowSurface)
        this._gl.clearColor(0, 0, 0, 0)
      }
      I.disableStencil(this._gl), this.renderHelper(e)
    },
    _renderDeferredTarget: function(e, t, r, i) {
      i = i || new n.Vec4(0, 0, 0, 0, 0), t.linearDepth = this.linearDepth, this.setRenderTarget(r), this._overloadMaterial = t, this._gl.clearColor(i.x, i.y, i.z, i.w), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), I.r(this, e, this.dataBox, this.glNodeList, this.dataBox.getBillboards())
    },
    _renderBlurTarget: function(e, t, r, i, o) {
      clearColor = clearColor || new n.Vec4(0, 0, 0, 0, 0), this.setRenderTarget(i), this._gl.viewport(0, 0, i.width, i.height), this._gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), t.setMap(r), t.texelSize = new s(r.width, r.height / o), t.blurAmount = this._blurAmount || 5, t.blurScale = this._blurScale || 1, t.blurStrength = this._blurStrength || 1
      var u, a
      for (u in this._glowSurface.groups) a = this._glowSurface.groups[u], this.renderGroup(e, [], t, a, this._glowSurface2)
    },
    _setSSAOMaterial: function() {
      this.ssaoMaterial.map = this.deferredPostionTarget, this.ssaoMaterial.map1 = this.deferredNormalTarget, this.ssaoMaterial.attenuation = this._attenuation || new s(1, 0.02), this.ssaoMaterial.occluderBias = this._occluderBias || 0.5, this.ssaoMaterial.samplingRadius = this._samplingRadius || 20, this.ssaoMaterial.texelSize = new s(1 / this.deferredPostionTarget.width, 1 / this.deferredPostionTarget.height)
    },
    _renderSurface: function(e, t, r, i) {
      i = i || new n.Vec4(1, 1, 1, 1), this.setRenderTarget(t), this._gl.clearColor(i.x, i.y, i.z, i.w), this._gl.clear(this._gl.COLOR_BUFFER_BIT | this._gl.DEPTH_BUFFER_BIT), this._glowSurface._modelViewMatrix = new l(), this._glowSurface._normalMatrix = new f(), this.setupMatrices(this._glowSurface, e)
      var s, o
      for (o in this._glowSurface.groups) s = this._glowSurface.groups[o], this.renderGroup(e, [], r, s, this._glowSurface)
    },
    renderHelper: function(e) {
      I.r(this, e, this.helperBox, this.helperGLNodeList, this.helperBox.getBillboards(), 'stencil')
    },
    initSurfaceGroup: function() {
      this._glowSurface.setUpdateFlags(!0), S(this._glowSurface)
      for (var e in this._glowSurface.groups) {
        var r = this._glowSurface.groups[e]
        r.id = r.id === t ? n.Network3D.GroupCache._groupCounter++ : r.id, this.groupMap[r.id] === t && (this.groupMap[r.id] = {})
        var i = this.groupMap[r.id]
        this.createGroupBuffer(r, i), this.initGroupBuffer(this._glowSurface, r, i), w.buildGroupBufferData(r, this._glowSurface, this._gl.DYNAMIC_DRAW, !1, this._glowSurfaceMaterial, this._gl, i, this)
      }
      this._glowSurface2.setUpdateFlags(!0), S(this._glowSurface2)
      for (var e in this._glowSurface2.groups) {
        var r = this._glowSurface2.groups[e]
        r.id = r.id === t ? n.Network3D.GroupCache._groupCounter++ : r.id, this.groupMap[r.id] === t && (this.groupMap[r.id] = {})
        var i = this.groupMap[r.id]
        this.createGroupBuffer(r, i), this.initGroupBuffer(this._glowSurface2, r, i), w.buildGroupBufferData(r, this._glowSurface2, this._gl.DYNAMIC_DRAW, !1, this._glowSurfaceMaterial, this._gl, i, this)
      }
    },
    getOutlineMaterial: function(e, t) {
      var r = (t.getStyle('select.width') || 1) + 1 + ' ' + (new n.Color(t.getStyle('select.color'))).getUniqueCode() + e,
        i = this.outlineMaterialMap[r]
      return i == null && (i = new n.EntityMaterial(), e == 'outline.normal' ? (i._type = 'outline', i.outline = t.getStyle('select.width') || 1) : e == 'outline.glow' ? i._type = 'basic' : (i.wireframe = !0, i.wireframeLinewidth = (t.getStyle('select.width') || 1) + 1), i.color = new n.Color(t.getStyle('select.color')), this.outlineMaterialMap[r] = i), i
    },
    renderNodes: function(e, t, r, i, s, o, u, a, f) {
      var l, c, h, p, d, v, m
      t ? (d = e.length - 1, v = -1, m = -1) : (d = 0, v = e.length, m = 1)
      var g = null
      for (var y = d; y !== v; y += m) {
        l = e[y], p = l.node ? l.transparent || l.opaque : l.material
        if (!p) continue
        this._overloadMaterial && (p = this._overloadMaterial)
        var b = this.getOverLoadMaterial(l.node ? l.node : l, p)
        if (b) {
          var w = b.getUniqueCode(),
            E = ni.getMaterial(w)
          E ? p = E : (ni.setMaterial(w, b), p = b)
        }
        if (r == 'opaque' && p.transparent == 1) continue
        if (r == 'transparent' && p.transparent == 0) continue
        o ? (I.setBlending(p.blendMode, p.blendEquation, p.blendSrc, p.blendDst, this), I.setDepthWrite(!1, this)) : I.setDepthWrite(p.depthMask, this)
        if (l instanceof n.Billboard) {
          var S = l.material.transparent ? 'transparent' : 'opaque'
          r == S && this.billboardRenderer.render(this, [l], i, this._canvas.width * 2, this._canvas.height * 2)
        } else if (l.render) {
          this.billboardRenderer && this.billboardRenderer.disable(), c = l.node, h = l.group, I.setDepthTest(p.depthTest, this), I.setPolygonOffset(p.polygonOffset, p.polygonOffsetFactor, p.polygonOffsetUnits, this), this.setGLFaces(p)
          if (c instanceof n.Particle) {
            if (c.verticesNeedUpdate || c.colorsNeedUpdate || c.sortParticles) {
              var T = this.particleMap[c._id]
              x(c, this._gl.DYNAMIC_DRAW, this._gl, T)
            }
            c.verticesNeedUpdate = !1, c.colorsNeedUpdate = !1
          }
          var N = a === 'stencil',
            C = this.getSelectStyle(c)
          C == 'outline' && (C = 'outline.normal'), a ? a === 'glow.unselect' && (c.isSelected() || (c instanceof n.BufferNode ? this.renderBufferNode(i, s, p, h, c) : I.g(this, i, s, p, h, c))) : (!c.isSelected() || C !== 'outline.normal' && C !== 'outline.wireframe' && C !== 'outline.glow' ? this.setStencilTest(!1) : (this.setStencilTest(!0), C === 'outline.glow' ? this.renderOutlineGlow = !0 : this.renderOutline = !0), c instanceof n.BufferNode ? this.renderBufferNode(i, s, p, h, c) : I.g(this, i, s, p, h, c))
          if (c.isSelected() && this.renderSelect(c)) {
            if (C === 'outline.normal' || C === 'outline.wireframe' || C === 'outline.glow') {
              if (a != null && a != 'glow.unselect') {
                if (C === 'outline.normal') {
                  if (c.renderSelected === !1) {
                    var k = this.getOutlineMaterial(C, c),
                      L = this.normalNodeMap[c.getId()]
                    if (L == null) {
                      var L = this.cloneNode(c, k)
                      this.normalNodeMap[c.getId()] = L
                    }
                    this.setupMatrices(L, i)
                    for (var A in L.groups) I.g(this, i, s, k, L.groups[A], L)
                    c.renderSelected = !0
                  }
                } else if (C !== 'outline.normal') {
                  var k = this.getOutlineMaterial(C, c)
                  I.g(this, i, s, k, h, c)
                }
              }
            } else c.renderSelected === !1 && (this.renderNodeSelection(i, s, c), c.renderSelected = !0)
          }
          c.getAlarmState().getPropagateSeverity() && this.renderAlarmBorder(c) && this.renderNodeAlarm(i, s, c)
        }
        c && c.setUpdateFlags(!1)
      }
    },
    cloneNode: function(e, t) {
      var r = new n.Entity(),
        i = {
          vertices: [],
          uvs: [],
          faces: []
        },
        s, o, u, a, c
      for (s = 0, o = e.vertices.length; s < o; s++) i.vertices.push(e.vertices[s].clone())
      for (s = 0, o = e.faces.length; s < o; s++) i.faces.push(e.faces[s].clone())
      for (s = 0, o = e.uvs.lenght; s < o; s++) {
        var h = uvs[s],
          p = []
        for (var d = 0; d < h; d++) p.push(h[d].clone())
        i.uvs.push(p)
      }
      return n.Node.prototype.mergeVertices.call(i), n.Node.prototype.computeFaceNormals.call(i), n.Node.prototype.computeVertexNormals.call(i, !0), r.setPosition(e.getPosition()), r.setScale(e.getScale()), r.setRotation(e.getRotation()), r.setParent(e.getParent()), r._modelViewMatrix = new l(), r._normalMatrix = new f(), r.data = i, r.vertices = i.vertices, r.uvs = i.uvs, r.faces = i.faces, r.material = t, r.primitive = new n.Primitive(i), r.setUpdateFlags(!0), S(r), this.buildNodeBufferData(r), r
    },
    buildNodeBufferData: function(e) {
      for (var r in e.groups) {
        var i = e.groups[r]
        i.id = i.id === t ? n.Network3D.GroupCache._groupCounter++ : i.id, this.groupMap[i.id] === t && (this.groupMap[i.id] = {})
        var s = this.groupMap[i.id]
        this.createGroupBuffer(i, s), this.initGroupBuffer(e, i, s), w.buildGroupBufferData(i, e, this._gl.DYNAMIC_DRAW, !1, e.material, this._gl, s, this)
      }
    },
    needSmoothNormal: function(e, r) {
      var i = r.normalType
      return i != t ? i === n.NormalTypeSmooth : this.needSmoothNormalFunction ? this.needSmoothNormalFunction(e) : !1
    },
    renderNodeSelection: function(e, r, i) {
      i.createSelectionCube(this.selectionCube), this.setupMatrices(this.selectionCube, e)
      var s = this.selectionCube.groups
      this.selectionCube.material.needsUpdate = !0
      for (var o in s) {
        var u = s[o]
        u.id = u.id === t ? n.Network3D.GroupCache._groupCounter++ : u.id, this.groupMap[u.id] === t && (this.groupMap[u.id] = {})
        var a = this.groupMap[u.id]
        a.__webglVertexBuffer || (this.createGroupBuffer(u, a), this.initGroupBuffer(i, u, a)), this.selectionCube.setUpdateFlags(!0), w.buildGroupBufferData(u, this.selectionCube, this._gl.DYNAMIC_DRAW, !1, this.selectionCube.material, this._gl, a, this), this.renderGroup(e, [], this.selectionCube.material, u, this.selectionCube)
      }
    },
    renderNodeAlarm: function(e, r, i) {
      i.createPropagateAlarmCube(this.alarmCube), this.setupMatrices(this.alarmCube, e)
      var s = this.alarmCube.groups
      this.alarmCube.material.needsUpdate = !0
      for (var o in s) {
        var u = s[o]
        u.id = u.id === t ? n.Network3D.GroupCache._groupCounter++ : u.id, this.groupMap[u.id] === t && (this.groupMap[u.id] = {})
        var a = this.groupMap[u.id]
        a.__webglVertexBuffer || (this.createGroupBuffer(u, a), this.initGroupBuffer(i, u, a)), this.alarmCube.setUpdateFlags(!0), w.buildGroupBufferData(u, this.alarmCube, this._gl.DYNAMIC_DRAW, !1, this.alarmCube.material, this._gl, a, this), this.renderGroup(e, [], this.alarmCube.material, u, this.alarmCube)
      }
    },
    renderBufferNode: function(e, t, n, r, i, s) {
      if (n.visible === !1) return
      var o, u, a, f, l, c
      o = this.pm.setProgram(e, t, this._fog, n, r, i), u = o.attributes
      var h = i,
        p = !1,
        d = n.wireframe ? 1 : 0,
        v = r._id * 16777215 + o.id * 2 + d
      if (v !== this._currentGroupHash || s) this._currentGroupHash = v, p = !0
      p && this.disableAttributes()
      var m = this._gl,
        g = h.attributes.index,
        y = this.bufferNodeMap[i._id]
      if (g) {
        var b = h.offsets
        b.length > 1 && (p = !0)
        for (var w = 0, E = b.length; w < E; w++) {
          var S = b[w].index
          if (p) {
            var x = h.attributes.position,
              T = x.itemSize
            m.bindBuffer(m.ARRAY_BUFFER, y.position), this.enableAttribute(u.position), m.vertexAttribPointer(u.position, T, m.FLOAT, !1, 0, S * T * 4)
            var N = h.attributes.normal
            if (u.normal >= 0 && N) {
              var C = N.itemSize
              m.bindBuffer(m.ARRAY_BUFFER, y.normal), this.enableAttribute(u.normal), m.vertexAttribPointer(u.normal, C, m.FLOAT, !1, 0, S * C * 4)
            }
            var k = h.attributes.uv
            if (u.uv >= 0 && k) {
              var L = k.itemSize
              m.bindBuffer(m.ARRAY_BUFFER, y.uv), this.enableAttribute(u.uv), m.vertexAttribPointer(u.uv, L, m.FLOAT, !1, 0, S * L * 4)
            }
            var A = h.attributes.color
            if (u.color >= 0 && A) {
              var O = A.itemSize
              m.bindBuffer(m.ARRAY_BUFFER, y.color), this.enableAttribute(u.color), m.vertexAttribPointer(u.color, O, m.FLOAT, !1, 0, S * O * 4)
            }
            m.bindBuffer(m.ELEMENT_ARRAY_BUFFER, y.index)
          }
          m.drawElements(m.TRIANGLES, b[w].count, m.UNSIGNED_SHORT, b[w].start * 2), this.info.render.calls++, this.info.render.vertices += b[w].count, this.info.render.faces += b[w].count / 3
        }
      } else {
        if (p) {
          var x = h.attributes.position,
            T = x.itemSize
          m.bindBuffer(m.ARRAY_BUFFER, x.buffer), this.enableAttribute(u.position), m.vertexAttribPointer(u.position, T, m.FLOAT, !1, 0, 0)
          var N = h.attributes.normal
          if (u.normal >= 0 && N) {
            var C = N.itemSize
            m.bindBuffer(m.ARRAY_BUFFER, N.buffer), this.enableAttribute(u.normal), m.vertexAttribPointer(u.normal, C, m.FLOAT, !1, 0, 0)
          }
          var k = h.attributes.uv
          if (u.uv >= 0 && k) {
            var L = k.itemSize
            m.bindBuffer(m.ARRAY_BUFFER, k.buffer), this.enableAttribute(u.uv), m.vertexAttribPointer(u.uv, L, m.FLOAT, !1, 0, 0)
          }
          var A = h.attributes.color
          if (u.color >= 0 && A) {
            var O = A.itemSize
            m.bindBuffer(m.ARRAY_BUFFER, A.buffer), this.enableAttribute(u.color), m.vertexAttribPointer(u.color, O, m.FLOAT, !1, 0, 0)
          }
        }
        var x = h.attributes.position
        m.drawArrays(m.TRIANGLES, 0, x.numItems / 3), this.info.render.calls++, this.info.render.vertices += x.numItems / 3, this.info.render.faces += x.numItems / 3 / 3
      }
    },
    getOverLoadMaterial: function(e, t) {
      return null
    },
    renderGroup: function(e, t, r, i, s) {
      r == null && console.log('material is null')
      if (r.visible === !1) return
      var o = this._gl,
        u
      s instanceof n.Entity ? u = this.groupMap[i.id] : s instanceof n.Line ? u = this.lineMap[i._id] : s instanceof n.Particle && (u = this.particleMap[i._id])
      if (u == null) {
        this.debug && console.error('tempGroup for id:' + (i.id || i._id) + ' is null,please check')
        return
      }
      var a, f, l, c, h, p, d, v
      a = this.pm.setProgram(e, t, this._fog, r, i, s), f = a.attributes
      var m = !1,
        g = r.wireframe ? 1 : 0,
        y
      i.id != null ? y = i.id * 16777215 + a.id * 2 + g : y = i._id + '' + (a.id * 2 + g), y !== this._currentGroupHash && (this._currentGroupHash = y, m = !0), m && this.disableAttributes(), f.position >= 0 && m && (o.bindBuffer(o.ARRAY_BUFFER, u.__webglVertexBuffer), this.enableAttribute(f.position), o.vertexAttribPointer(f.position, 3, o.FLOAT, !1, 0, 0))
      if (m) {
        if (i.__webglCustomAttributesList) {
          for (d = 0, v = i.__webglCustomAttributesList.length; d < v; d++) p = i.__webglCustomAttributesList[d], f[p.buffer.belongsToAttribute] >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, p.buffer), this.enableAttribute(f[p.buffer.belongsToAttribute]), o.vertexAttribPointer(f[p.buffer.belongsToAttribute], p.size, o.FLOAT, !1, 0, 0))
        }
        f.color >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, u.__webglColorBuffer), this.enableAttribute(f.color), o.vertexAttribPointer(f.color, 3, o.FLOAT, !1, 0, 0)), f.normal >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, u.__webglNormalBuffer), this.enableAttribute(f.normal), o.vertexAttribPointer(f.normal, 3, o.FLOAT, !1, 0, 0)), f.uv >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, u.__webglUVBuffer), this.enableAttribute(f.uv), o.vertexAttribPointer(f.uv, 2, o.FLOAT, !1, 0, 0)), f.uv2 >= 0 && (o.bindBuffer(o.ARRAY_BUFFER, u.__webglUV2Buffer), this.enableAttribute(f.uv2), o.vertexAttribPointer(f.uv2, 2, o.FLOAT, !1, 0, 0)), f.lineDistance >= 0 &&
          (o.bindBuffer(o.ARRAY_BUFFER, u.__webglLineDistanceBuffer), this.enableAttribute(f.lineDistance), o.vertexAttribPointer(f.lineDistance, 1, o.FLOAT, !1, 0, 0))
      }
      s instanceof n.Entity ? (r.wireframe ? (this.setLineWidth(r.wireframeLinewidth), this._gl.lineJoin = 'round', m && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, u.__webglLineBuffer), o.drawElements(o.LINES, u.__webglLineCount, o.UNSIGNED_SHORT, 0)) : (m && o.bindBuffer(o.ELEMENT_ARRAY_BUFFER, u.__webglFaceBuffer), o.drawElements(o.TRIANGLES, u.__webglFaceCount, o.UNSIGNED_SHORT, 0)), this.info.render.calls++, this.info.render.vertices += i.__webglFaceCount, this.info.render.faces += i.__webglFaceCount / 3) : s instanceof n.Line ? (c = s.type === n.LineStrip ? o.LINE_STRIP : o.LINES, this.setLineWidth(r.linewidth), o.drawArrays(c, 0, u.__webglLineCount), this.info.render.calls++) : s instanceof n.Particle ? (o.drawArrays(o.POINTS, 0, u.__webglParticleCount), this.info.render.calls++, this.info.render.points += u.__webglParticleCount) : s instanceof n.Ribbon && (o.drawArrays(o.TRIANGLE_STRIP, 0, i.__webglVertexCount), this.info.render.calls++)
    },
    prepareData: function() {
      this.maxLightCount = this.dataBox.allocateLights(this._maxLights), this.maxShadows = this.dataBox.allocateShadows(), this.maxPointShadows = this.dataBox.allocatePointShadows()
    },
    wrapBillboardMaterial: function(e) {
      e instanceof n.Billboard && e.material && (e.opaque = e.material.transparent ? null : e.material, e.transparent = e.material.transparent ? e.material : null)
    },
    sortNodesFunc: function(e) {
      if (this.sortNodes && (this.paintSortFunction !== null || this.sortOpaqueOrderByMaterial)) {
        var t = this
        this.sortOpaqueOrderByMaterial ? this.__st == null && (this.__st = function(e, n) {
          t.wrapBillboardMaterial(e), t.wrapBillboardMaterial(e)
          var r = 'opaque'
          if (e[r] && n[r]) return e[r].id - n[r].id
          if (!e[r] && n[r]) return -1
          if (e[r] && !n[r]) return 1
          var i = e.node ? e.node : e,
            s = n.node ? n.node : n
          i.z = e.z, s.z = n.z
          if (t.paintSortFunction) return t.paintSortFunction(i, s)
        }) : this.__st == null && (this.__st = function(e, n) {
          var r = e.node ? e.node : e,
            i = n.node ? n.node : n
          r.z = e.z, i.z = n.z
          if (t.paintSortFunction) return t.paintSortFunction(r, i)
        }), e.sort(this.__st)
      }
      return e
    },
    renderNode: function(e, t) {
      this.setupMatrices(e), e instanceof n.Entity && renderEntity(e)
    },
    paintTopCanvas: function() {
      var e = this._topCanvas.getContext('2d')
      e.clearRect(0, 0, this._topCanvas.width, this._topCanvas.height)
      var t = this.areaPickingRect
      t && (e.beginPath(), e.lineStyle = '#FFffff', e.rect(t.x, t.y, t.w, t.h), e.stroke()), this.renderLicense()
    },
    setBackgroundImage: function(e) {
      if (typeof e === 'string') {
        var t = new Image()
        e.startsWith('data:image') || (t.crossOrigin = 'use-credentials'), t.src = e, this._backgroundImage = t
        var n = this
        t.onload = function() {
          n.dirtyNetwork()
        }
      } else this._backgroundImage = e, this.dirtyNetwork()
    },
    paintBottom: function(e) {
      var t = e.getContext('2d')
      t.clearRect(0, 0, e.width, e.height)
      var n = this._backgroundImage
      n instanceof Image && n.height && t.drawImage(n, 0, 0, e.width, e.height)
    },
    initBufferNode: function(e) {
      if (!this.bufferNodeMap[e._id]) {
        var t = {}
        this.bufferNodeMap[e._id] = t
        var n, r, i, s = this._gl
        for (n in e.attributes) n === 'index' ? i = s.ELEMENT_ARRAY_BUFFER : i = s.ARRAY_BUFFER, r = e.attributes[n], t[n] = s.createBuffer(), s.bindBuffer(i, t[n]), s.bufferData(i, r.array, s.STATIC_DRAW)
      }
    },
    setBufferNodeData: function(e, n, r) {
      var i = this.bufferNodeMap[e._id],
        s = e.attributes,
        o = s.index,
        u = s.position,
        a = s.normal,
        f = s.uv,
        l = s.color,
        c = s.tangent,
        h = this._gl
      e.elementsNeedUpdate && o !== t && (h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, i.index), h.bufferData(h.ELEMENT_ARRAY_BUFFER, o.array, n)), e.verticesNeedUpdate && u !== t && (h.bindBuffer(h.ARRAY_BUFFER, i.position), h.bufferData(h.ARRAY_BUFFER, u.array, n)), e.normalsNeedUpdate && a !== t && (h.bindBuffer(h.ARRAY_BUFFER, i.normal), h.bufferData(h.ARRAY_BUFFER, a.array, n)), e.uvsNeedUpdate && f !== t && (h.bindBuffer(h.ARRAY_BUFFER, i.uv), h.bufferData(h.ARRAY_BUFFER, f.array, n)), e.colorsNeedUpdate && l !== t && (h.bindBuffer(h.ARRAY_BUFFER, i.color), h.bufferData(h.ARRAY_BUFFER, l.array, n)), e.tangentsNeedUpdate && c !== t && (h.bindBuffer(h.ARRAY_BUFFER, i.tangent), h.bufferData(h.ARRAY_BUFFER, c.array, n))
      if (r) {
        for (var p in e.attributes);
      }
    },
    initGroupBuffer: function(e, n, r, i) {
      var s = n.faces3,
        o = n.faces4,
        u = s.length * 3 + o.length * 4,
        a = s.length * 1 + o.length * 2,
        f = s.length * 3 + o.length * 4,
        l = w.getMaterial(e, n.materialIndex ? n.materialIndex : 0),
        c = l.needUV(),
        h = l.getNormalType(),
        p = l.isVertexColor()
      r.__vertexArray = new Float32Array(u * 3), h && (r.__normalArray = new Float32Array(u * 3))
      if (i) return
      p && (r.__colorArray = new Float32Array(u * 3)), c && (r.__uvArray = new Float32Array(u * 2), e.uv2s && (r.__uv2Array = new Float32Array(u * 2))), r.__faceArray = new Uint16Array(a * 3), r.__lineArray = new Uint16Array(f * 2)
      var d, v
      if (n.numMorphTargets) {
        r.__morphTargetsArrays = []
        for (d = 0, v = n.numMorphTargets; d < v; d++) r.__morphTargetsArrays.push(new Float32Array(u * 3))
      }
      if (n.numMorphNormals) {
        r.__morphNormalsArrays = []
        for (d = 0, v = n.numMorphNormals; d < v; d++) r.__morphNormalsArrays.push(new Float32Array(u * 3))
      }
      r.__webglFaceCount = a * 3, r.__webglLineCount = f * 2
      if (l.attributes) {
        r.__webglCustomAttributesList === t && (r.__webglCustomAttributesList = [])
        for (var m in l.attributes) {
          var g = l.attributes[m],
            y = {}
          for (var b in g) y[b] = g[b]
          if (!y.__webglInitialized || y.createUniqueBuffers) {
            y.__webglInitialized = !0
            var E = 1
            y.type === 'v2' ? E = 2 : y.type === 'v3' ? E = 3 : y.type === 'v4' ? E = 4 : y.type === 'c' && (E = 3), y.size = E, y.array = new Float32Array(u * E), y.buffer = _gl.createBuffer(), y.buffer.belongsToAttribute = m, g.needsUpdate = !0, y.__original = g
          }
          r.__webglCustomAttributesList.push(y)
        }
      }
      r.__inittedArrays = !0
    },
    createLineBuffers: function(e) {
      this.lineMap[e._id] == null && (this.lineMap[e._id] = {})
      var t = this.lineMap[e._id],
        n = this._gl
      t.__webglVertexBuffer = n.createBuffer(), t.__webglColorBuffer = n.createBuffer(), t.__webglLineDistanceBuffer = n.createBuffer(), this.info.memory.geometries++
    },
    initLineBuffers: function(e) {
      this.lineMap[e._id] == null && (this.lineMap[e._id] = {})
      var t = this.lineMap[e._id],
        n = e.vertices.length
      t.__vertexArray = new Float32Array(n * 3), t.__colorArray = new Float32Array(n * 3), t.__lineDistanceArray = new Float32Array(n * 1), t.__webglLineCount = n
    },
    createParticleBuffers: function(e) {
      this.particleMap[e._id] == null && (this.particleMap[e._id] = {})
      var t = this.particleMap[e._id],
        n = this._gl
      t.__webglVertexBuffer = n.createBuffer(), t.__webglColorBuffer = n.createBuffer(), t.__webglNormalBuffer = n.createBuffer(), this.info.memory.geometries++
    },
    initParticleBuffers: function(e) {
      this.particleMap[e._id] == null && (this.particleMap[e._id] = {})
      var t = this.particleMap[e._id],
        n = e.vertices.length
      t.__vertexArray = new Float32Array(n * 3), t.__colorArray = new Float32Array(n * 3), t.__normalArray = new Float32Array(n * 3), t.__sortArray = [], t.__webglParticleCount = n
    },
    createGroupBuffer: function(e, t) {
      var n = this._gl
      t.__webglVertexBuffer = n.createBuffer(), t.__webglNormalBuffer = n.createBuffer(), t.__webglTangentBuffer = n.createBuffer(), t.__webglColorBuffer = n.createBuffer(), t.__webglUVBuffer = n.createBuffer(), t.__webglUV2Buffer = n.createBuffer(), t.__webglSkinIndicesBuffer = n.createBuffer(), t.__webglSkinWeightsBuffer = n.createBuffer(), t.__webglFaceBuffer = n.createBuffer(), t.__webglLineBuffer = n.createBuffer(), this.info.memory.geometries++
    },
    setRenderTarget: function(e) {
      var r = e instanceof J,
        i = this._gl
      if (e && !e.__webglFramebuffer) {
        e.depthBuffer === t && (e.depthBuffer = !0), e.stencilBuffer === t && (e.stencilBuffer = !0), e.__webglTexture = i.createTexture(), this.info.memory.textures++
        var s = P.isPowerOfTwo,
          o = s(e.width) && s(e.height),
          u = P.paramToGL(e.format, i),
          a = P.paramToGL(e.type, i)
        e.type == n.FloatType
        var f = u
        if (r) {
          e.__webglFramebuffer = [], e.__webglRenderbuffer = [], i.bindTexture(i.TEXTURE_CUBE_MAP, e.__webglTexture), this.pm.setTextureParameters(i.TEXTURE_CUBE_MAP, e, o)
          for (var l = 0; l < 6; l++) e.__webglFramebuffer[l] = i.createFramebuffer(), e.__webglRenderbuffer[l] = i.createRenderbuffer(), i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + l, 0, f, e.width, e.height, 0, u, a, null), this.setupFrameBuffer(e.__webglFramebuffer[l], e, i.TEXTURE_CUBE_MAP_POSITIVE_X + l), this.setupRenderBuffer(e.__webglRenderbuffer[l], e)
          o && i.generateMipmap(i.TEXTURE_CUBE_MAP)
        } else e.__webglFramebuffer = i.createFramebuffer(), e.shareDepthFrom ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer : e.__webglRenderbuffer = i.createRenderbuffer(), i.bindTexture(i.TEXTURE_2D, e.__webglTexture), this.pm.setTextureParameters(i.TEXTURE_2D, e, o), i.texImage2D(i.TEXTURE_2D, 0, f, e.width, e.height, 0, u, a, null), this.setupFrameBuffer(e.__webglFramebuffer, e, i.TEXTURE_2D), e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, e.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, e.__webglRenderbuffer) : this.setupRenderBuffer(e.__webglRenderbuffer, e), o && i.generateMipmap(i.TEXTURE_2D)
        r ? i.bindTexture(i.TEXTURE_CUBE_MAP, null) : i.bindTexture(i.TEXTURE_2D, null), i.bindRenderbuffer(i.RENDERBUFFER, null), i.bindFramebuffer(i.FRAMEBUFFER, null)
      }
      var c, h, p, d, v
      e ? (r ? c = e.__webglFramebuffer[e.activeCubeFace] : c = e.__webglFramebuffer, h = e.width, p = e.height, d = 0, v = 0) : (c = null, h = this._viewportWidth, p = this._viewportHeight, d = this._viewportX, v = this._viewportY), c !== this._currentFramebuffer && (i.bindFramebuffer(i.FRAMEBUFFER, c), i.viewport(d, v, h, p), this._currentFramebuffer = c), this._currentWidth = h, this._currentHeight = p
    },
    setupFrameBuffer: function(e, t, n) {
      var r = this._gl
      r.bindFramebuffer(r.FRAMEBUFFER, e), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, n, t.__webglTexture, 0)
    },
    setupRenderBuffer: function(e, t) {
      var n = this._gl
      n.bindRenderbuffer(n.RENDERBUFFER, e), t.depthBuffer && !t.stencilBuffer ? (n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, t.width, t.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, t.width, t.height), n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, e)) : n.renderbufferStorage(n.RENDERBUFFER, n.RGBA4, t.width, t.height)
    },
    setLineWidth: function(e) {
      e !== this._oldLineWidth && (this._gl.lineWidth && this._gl.lineWidth(e), this._oldLineWidth = e)
    },
    setupMatrices: function(e, t) {
      e.fixSize(t), e.updateWorldMatrix(), e._modelViewMatrix.multiplyMatrices(t.worldMatrixInverse, e.worldMatrix), e._normalMatrix.getNormalMatrix(e._modelViewMatrix)
    },
    setDefaultGLState: function() {
      var e = this._gl,
        t = new n.Color(this._clearColor)
      e.clearColor(t.r, t.g, t.b, this._clearAlpha), e.clearDepth(1), p.isIE || e.clearStencil(0), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.frontFace(e.CCW), e.cullFace(e.BACK), e.enable(e.CULL_FACE), e.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
    },
    clear: function(e, n, r) {
      var i = this._gl,
        s = 0
      if (e === t || e) s |= i.COLOR_BUFFER_BIT
      if (n === t || n) s |= i.DEPTH_BUFFER_BIT
      if (r === t || r) s |= i.STENCIL_BUFFER_BIT
      i.clear(s)
    },
    setGLFaces: function(e) {
      var t = this._gl,
        r = e.side === n.DoubleSide,
        i = e.side === n.BackSide
      this._oldDoubleSided !== r && (r ? t.disable(t.CULL_FACE) : t.enable(t.CULL_FACE), this._oldDoubleSided = r), this._oldFlipSided !== i && (i ? t.frontFace(t.CW) : t.frontFace(t.CCW), this._oldFlipSided = i)
    },
    getView: function() {
      return this._canvas
    },
    getRootView: function() {
      return this._rootView
    },
    setBlending: function(e, t, n, r) {
      I.setBlending(e, t, n, r, this)
    },
    setDepthTest: function(e) {
      I.setDepthTest(e, this)
    },
    setStencilTest: function(e) {
      this._oldStencilTest != e && (e ? this._gl.enable(this._gl.STENCIL_TEST) : this._gl.disable(this._gl.STENCIL_TEST), this._oldStencilTest = e)
    },
    setDepthWrite: function(e) {
      I.setDepthWrite(e, this)
    },
    getLineWidthRange: function() {
      var e = this._gl
      return e.getParameter(e.ALIASED_LINE_WIDTH_RANGE)
    },
    setTexture: function(e, t) {
      this.pm.setTexture(e, t)
    },
    disableAttributes: function() {
      for (var e in this._enabledAttributes) this._enabledAttributes[e] && (this._gl.disableVertexAttribArray(e), this._enabledAttributes[e] = !1)
    },
    enableAttribute: function(e) {
      this._enabledAttributes[e] || (this._gl.enableVertexAttribArray(e), this._enabledAttributes[e] = !0)
    },
    adjustRootViewBounds: function(e, t) {
      var n = this._rootView
      n.style.width = e + 'px', n.style.height = t + 'px'
    },
    adjustCanvasBounds: function(e, t, n, r, i) {
      e.width = t * this.devicePixelRatio, e.height = n * this.devicePixelRatio, e.style.margin = '0px', e.style.padding = '0px', e.style.width = t + 'px', e.style.height = n + 'px'
    },
    adjustBounds: function(e, t, n, r) {
      var i = this.getView()
      this.adjustRootViewBounds(e, t, n, r), this.adjustCanvasBounds(i, e, t, n, r), this.adjustCanvasBounds(this._topCanvas, e, t, n, r), this.adjustCanvasBounds(this._bottomCanvas, e, t, n, r), this.adjustCallback(e, t, n, r), this.setViewport(0, 0, i.width, i.height)
      if (this.autoUpdateCameraAspect && t !== 0) {
        var s = this._camera
        s.aspect = e / t, s.updateProjectionMatrix(), this._currentCamera = null
      }
      this.dirtyNetwork()
    },
    adjustCallback: function() {},
    setViewport: function(e, n, r, i) {
      this._viewportX = e !== t ? e : 0, this._viewportY = n !== t ? n : 0, this._viewportWidth = r !== t ? r : _canvas.width, this._viewportHeight = i !== t ? i : _canvas.height, this._gl.viewport(this._viewportX, this._viewportY, this._viewportWidth, this._viewportHeight)
    },
    setShowAxis: function(e) {
      if (this.showAxis === e) return
      this.showAxis = e, this.showAxis && (this.helperBox.contains(this.axis) || this.helperBox.addByDescendant(this.axis)), this.axis._visible = e, this.dirtyNetwork()
    },
    setShowAxisText: function(e) {
      this.axis.showAxisText(e), this.dirtyNetwork()
    },
    setAxisSize: function(e) {
      this.axis.setSize(e)
    },
    onSelect: function(e) {
      this.onSelectFunction != null && this.onSelectFunction(e)
    },
    setOnSelectFunction: function(e) {
      this.onSelectFunction = e
    },
    isSelectable: function(e) {
      return e.isSelectable() ? this.selectableFunction ? this.selectableFunction(e) : !0 : !1
    },
    setSelectableFunction: function(e) {
      this.selectableFunction = e
    },
    setRenderSelectFunction: function(e) {
      this.renderSelectFunction = e
    },
    renderSelect: function(e) {
      return this.renderSelectFunction ? this.renderSelectFunction(e) : !0
    },
    renderAlarmBorder: function(e) {
      return this.renderAlarmBorderFunction ? this.renderAlarmBorderFunction(e) : !0
    },
    selectable: function(e) {
      return e.element.isVisible() && this.isSelectable(e.element) && this.getDataBox().getSelectionModel().isSelectable(e.element)
    },
    editable: function(e) {
      var t = this.selectable(e)
      return t && this.editableFunction != null ? this.editableFunction(e.element) : t
    },
    getFirstSelectElement: function(e) {
      if (e == null) return null
      var t = 0,
        n
      while (t < e.length) {
        var r = e[t]
        if (this.selectable(r)) {
          n = r.element
          break
        }
        t++
      }
      return n
    },
    getFirstEditElement: function(e) {
      if (e == null) return null
      var t = 0,
        n
      while (t < e.length) {
        var r = e[t]
        if (this.editable(r)) {
          n = r.element
          break
        }
        t++
      }
      return n
    },
    toImageData: function(e, t, n, r) {
      this.dirtyNetwork(), this.render(), e = e || 'PNG', e.toUpperCase()
      if (e === 'PNG') return d.saveAsPNG(this.getView(), t, !1, n, r)
      if (e === 'JPEG') return d.saveAsJPEG(this.getView(), t, !1, n, r)
      if (e === 'BMP') return d.saveAsBMP(this.getView(), t, !1, n, r)
      console.log('Not surport type ' + e)
    },
    getPickingByEvent: function(e) {
      var t = this._camera,
        r = {},
        i = this.getView(),
        s = i.getBoundingClientRect(),
        u = e.clientX,
        a = e.clientY
      e.touches && e.touches.length && (u = e.touches[0].pageX, a = e.touches[0].pageY)
      var f = (u - s.left) / s.width,
        l = (a - s.top) / s.height
      r.x = f * 2 - 1, r.y = -l * 2 + 1
      var c = new n.Vec3(r.x, r.y, 0.5)
      this.projector.unprojectVector(c, t)
      var h = null
      if (t instanceof n.PerspectiveCamera) h = new n.Picking(t._position, c.sub(t._position).normalize(), t.up, null, null, this)
      else {
        var p = c.clone().sub(t._position),
          d = t.getTarget().clone().sub(t.p()).normalize(),
          v = d.multiplyScalar(p.clone().dot(d)),
          m = p.sub(v),
          g = (new o()).addVectors(t._position, m)
        h = new n.Picking(g, c.sub(g).normalize(), t.up, null, null, this)
      }
      return h
    },
    getElementsByMouseEvent: function(e, t, n) {
      var r = this.getPickingByEvent(e),
        i = new N()
      i.addAll(this.dataBox.getNodes()), i.addAll(this.dataBox.getBillboards()), n && i.addAll(new N(this.alarmBillboards))
      var s = r.intersectObjects(i.toArray(), !1, t)
      return s
    },
    getElementByScreenPoint: function(e, t, r) {
      var i = {},
        s = this.getView(),
        o = this._camera,
        u = s.getBoundingClientRect()
      e.x && (r = t, t = e.y, e = e.x), e /= u.width, t /= u.height, i.x = e * 2 - 1, i.y = -t * 2 + 1
      var a = new n.Vec3(i.x, i.y, 0.5)
      this.projector.unprojectVector(a, o)
      var f = new n.Picking(o._position, a.sub(o._position).normalize(), o.up, null, null, this),
        l = new N()
      l.addAll(this.dataBox.getNodes()), l.addAll(this.dataBox.getBillboards())
      var c = f.intersectObjects(l.toArray(), !1, r)
      return c
    },
    getFirstElementByMouseEvent: function(e, t, n, r) {
      var i = this.getElementsByMouseEvent(e, t, r)
      if (i.length) {
        for (var s = 0; s < i.length; s++) {
          var o = i[s],
            u = o.element
          if (n == null || n.call(null, u)) return o
        }
      }
      return null
    },
    getUnProjectVector: function(e) {
      var t = {},
        r = this.getView().getBoundingClientRect(),
        i = e.x / r.width,
        s = e.y / r.height
      t.x = i * 2 - 1, t.y = -s * 2 + 1
      var o = new n.Vec3(t.x, t.y, 0.5)
      return this.projector.unprojectVector(o, this._camera), o
    },
    getFrustumByBounding: function(e) {
      var t = e,
        r = this.getUnProjectVector(new s(t.x, t.y)),
        i = this.getUnProjectVector(new s(t.x + t.w, t.y)),
        o = this.getUnProjectVector(new s(t.x, t.y + t.h)),
        u = this.getUnProjectVector(new s(t.x + t.w, t.y + t.h)),
        a = this.getNearFarPoints(r),
        f = this.getNearFarPoints(i),
        l = this.getNearFarPoints(o),
        c = this.getNearFarPoints(u),
        h = new n.math.Plane(),
        p = new n.math.Plane(),
        d = new n.math.Plane(),
        v = new n.math.Plane(),
        m = new n.math.Plane(),
        g = new n.math.Plane()
      h.setFromCoplanarPoints(a[0], f[0], l[0]), p.setFromCoplanarPoints(a[0], a[1], f[0]), d.setFromCoplanarPoints(a[0], l[0], a[1]), v.setFromCoplanarPoints(f[0], f[1], c[0]), m.setFromCoplanarPoints(l[0], c[0], l[1]), g.setFromCoplanarPoints(a[1], l[1], f[1])
      var y = new n.Frustum(h, p, d, v, m, g)
      return y.setPoints([a[0], f[0], l[0], c[0], a[1], f[1], l[1], c[1]]), y
    },
    getNearFarPoints: function(e) {
      var t = this._camera,
        n = e.sub(t._position).normalize(),
        r = t.target.clone().sub(t._position),
        i = n.angleTo(r),
        s = t.getNear() / Math.acos(i),
        o = t.getFar() / Math.acos(i),
        u = t._position.clone().add(n.clone().multiplyScalar(s)),
        a = t._position.clone().add(n.clone().multiplyScalar(o))
      return [u, a]
    },
    getSpacePointOnPlane: function(e, t) {
      var r = {},
        i = this.getView(),
        s = this._camera,
        o = i.getBoundingClientRect(),
        u = e.clientX,
        a = e.clientY
      e.touches && e.touches.length && (u = e.touches[0].pageX, a = e.touches[0].pageY)
      var f = (u - o.left) / o.width,
        l = (a - o.top) / o.height
      r.x = f * 2 - 1, r.y = -l * 2 + 1
      var c = new n.Vec3(r.x, r.y, 0.5)
      this.projector.unprojectVector(c, s)
      var h = s._position,
        p = c.sub(s._position).normalize(),
        d = new n.Ray(h, p),
        v = d.distanceToPlane(t)
      if (v < 0 || Math.abs(v) < n.Picking.prototype.precision) return null
      var m = d.at(v)
      return m
    },
    getElementsByBounding: function(e, t, r) {
      var i = new N()
      i.addAll(this.dataBox.getNodes()), i.addAll(this.dataBox.getBillboards())
      var s = this.getFrustumByBounding(e),
        u = [],
        a = new o(),
        f, l = this._camera
      return i.forEach(function(e) {
        if (e instanceof n.Billboard) {
          a.setFromMatrixPosition(e.worldMatrix)
          var t = e.material,
            i = t.alignment
          f = new n.Plane(1, 1)
          if (i.x || i.y) f.setPosition(i.x, i.y, 0), f = n.Utils.transformElement(f, !0)
          f.setPosition(a)
          var c = (new o()).getScaleFromMatrix(e.worldMatrix)
          f.setScale(c.x, c.y, 1)
          var h = l.getTarget().clone(),
            p = l.getPosition()
          h.sub(p)
          var d = f.getPosition().clone()
          t && t.vertical && (h.y = 0), d.sub(h), f.lookAt(d), f.updateWorldMatrix(!0), s.intersectsObjectAccurate(f, r) && u.push({
            element: e
          })
        } else {
          e instanceof n.Line ? s.intersectsObjectAccurate(e, r) && u.push({
            element: e
          }) : s.intersectsObjectAccurate(e, r) && u.push({
            element: e
          })
        }
      }), u
    },
    getViewPosition: function(e) {
      var t = new o()
      t = this.projector.projectVector(e, this._camera, t), t.x = t.x / 2 + 0.5, t.y = -t.y / 2 + 0.5
      var n = {
        x: this._canvas.width * t.x / this.devicePixelRatio,
        y: this._canvas.height * t.y / this.devicePixelRatio,
        h: this._canvas.height
      }
      return n
    },
    setInteractions: function(e) {
      var t = this._interactions,
        n, r
      if (t) {
        for (n = 0; n < t.length; n++) r = t[n], r.tearDown()
      }
      this._interactions = e
      if (e) {
        for (n = 0; n < e.length; n++) r = e[n], r.setUp()
      }
    },
    getDefaultInteraction: function() {
      if (this._interactions && this._interactions.length > 0) {
        for (var e = 0; e < this._interactions.length; e++) {
          var t = this._interactions[e]
          if (t instanceof n.DefaultInteraction) return t
        }
      }
      return null
    },
    getInteractions: function() {
      return this._interactions
    },
    fireInteractionEvent: function(e) {
      this._interactionDispatcher.fire(e)
    },
    addInteractionListener: function(e, t, n) {
      this._interactionDispatcher.add(e, t, n)
    },
    removeInteractionListener: function(e, t) {
      this._interactionDispatcher.remove(e, t)
    },
    dispose: function() {},
    setRenderInterval: function(e) {
      if (P.isNaN(e) || e <= 5) e = 5
      this._renderInterval = e
    },
    _computeNetworkBoundingBox: function() {
      function c(e, t) {
        e.applyMatrix4(t), a.push(e)
      }
      var e = this.getDataBox().size(),
        t = this.getDataBox().getDatas(),
        r, i, s, u, a = []
      for (r = 0; r < e; r++) {
        i = t.get(r)
        if (i instanceof n.Node) {
          s = i.getBoundingBox(), u = i.worldMatrix
          var f = s.min,
            l = s.max
          c(f.clone(), u), c(l.clone(), u), c(new o(f.x, f.y, l.z), u), c(new o(f.x, l.y, f.z), u), c(new o(l.x, f.y, f.z), u), c(new o(l.x, l.y, f.z), u), c(new o(l.x, f.y, l.z), u), c(new o(f.x, l.y, l.z), u)
        }
      }
      if (a.length <= 1) return null
      var h = new n.BoundingBox()
      return h.setFromPoints(a), h
    },
    getNetworkBoundingBox: function() {
      return this.boundingBox == null && (this.boundingBox = this._computeNetworkBoundingBox()), this.boundingBox
    },
    getSelectStyle: function(e) {
      return e.getSelectStyle()
    },
    setZoomStandard: function(e) {
      this._zoomStandard = e
    },
    getZoomStandard: function() {
      return this._zoomStandard
    },
    zoom: function(e, t) {
      t = t || this._zoomStandard
      var n = this._camera
      n.zoom(e, t)
    },
    zoomIn: function(e) {
      this.zoom(0.9, e)
    },
    zoomOut: function(e) {
      this.zoom(1.1, e)
    },
    move: function(e, t) {
      var n = new mono.Vec3(-e, -t, 0),
        r = this._camera.t(),
        i = this._camera.p()
      this._camera.translateX(-e), this._camera.translateY(-t)
      var s = this._camera.p()
      r.add(s.clone().sub(i)), this._camera.lookAt(r)
    },
    moveLeft: function(e) {
      e = e || 50, this.move(-e, 0)
    },
    moveRight: function(e) {
      e = e || 50, this.move(e, 0)
    },
    moveUp: function(e) {
      e = e || 30, this.move(0, e)
    },
    moveDown: function(e) {
      e = e || 30, this.move(0, -e)
    },
    zoomEstimateOverview: function(e) {
      var t = this.getNetworkBoundingBox()
      if (t == null) return
      var n = t.center(),
        r = new o(0, t.max.y - t.min.y, t.max.z - t.min.z),
        i = new o(t.max.x - t.min.x, 0, 0, 0),
        s = r.clone()
      s.length() < i.length() && (s = i.clone())
      var u
      if (e) {
        var a = r.length()
        r.y = r.z * Math.tan(e / 180 * Math.PI), r.setLength(a)
      }
      u = (new o()).addVectors(n, r.multiplyScalar(0.5))
      var f = this._camera.fov,
        l = this._camera.aspect,
        c = s.length() / 2 / Math.tan(f * Math.PI / 180)
      u.add(r.normalize().multiplyScalar(c)), this._camera.setPosition(u), this._camera.lookAt(n), this._overviewDistance = this._camera.getDistance()
    }
  }), n.Network3DId = 0, n.Network3D.GroupCache = {
    _groupCounter: 0
  }
  var Q = function() {
    function W() {
      if (r === s) {
        var e = new $RenderObject()
        return i.push(e), s++, r++, e
      }
      return i[r++]
    }

    function X() {
      if (u === f) {
        var e = new $RenderVertex()
        return a.push(e), f++, u++, e
      }
      return a[u++]
    }

    function V() {
      if (c === p) {
        var e = new n.RenderFace3()
        return h.push(e), p++, c++, e
      }
      return h[c++]
    }

    function $() {
      if (d === m) {
        var e = new n.RenderFace4()
        return v.push(e), m++, d++, e
      }
      return v[d++]
    }

    function J() {
      if (y === w) {
        var e = new n.RenderLine()
        return b.push(e), w++, y++, e
      }
      return b[y++]
    }

    function K() {
      if (S === T) {
        var e = new n.RenderableParticle()
        return x.push(e), T++, S++, e
      }
      return x[S++]
    }

    function Q(e, t) {
      return t.z - e.z
    }

    function G(e, t) {
      var n = 0,
        r = 1,
        i = e.z + e.w,
        s = t.z + t.w,
        o = -e.z + e.w,
        u = -t.z + t.w
      return i >= 0 && s >= 0 && o >= 0 && u >= 0 ? !0 : i < 0 && s < 0 || o < 0 && u < 0 ? !1 : (i < 0 ? n = Math.max(n, i / (i - s)) : s < 0 && (r = Math.min(r, i / (i - s))), o < 0 ? n = Math.max(n, o / (o - u)) : u < 0 && (r = Math.min(r, o / (o - u))), r < n ? !1 : (e.lerp(t, n), t.lerp(e, 1 - r), !0))
    }
    var e, r, i = [],
      s = 0,
      o, u, a = [],
      f = 0,
      l, c, h = [],
      p = 0,
      d, v = [],
      m = 0,
      g, y, b = [],
      w = 0,
      E, S, x = [],
      T = 0,
      N = {
        objects: [],
        sprites: [],
        lights: [],
        elements: []
      },
      C = new n.Vec3(),
      k = new n.Vec4(),
      L = new n.BoundingBox(new n.Vec3(-1, -1, -1), new n.Vec3(1, 1, 1)),
      A = new n.BoundingBox(),
      O = new Array(3),
      M = new Array(4),
      _ = new n.Mat4(),
      D = new n.Mat4(),
      P, H = new n.Mat4(),
      B = new n.Mat3(),
      j = new n.Mat3(),
      F = new n.Vec3(),
      I = new n.Frustum(),
      q = new n.Vec4(),
      R = new n.Vec4(),
      U
    this.projectVector = function(e, n, r) {
      return n.worldMatrixInverse.getInverse(n.worldMatrix), D.multiplyMatrices(n.projectionMatrix, n.worldMatrixInverse), r === t ? e.applyProjection(D) : (r.copy(e), r.applyProjection(D))
    }, this.unprojectVector = function(e, t) {
      return t.projectionMatrixInverse.getInverse(t.projectionMatrix), D.multiplyMatrices(t.worldMatrix, t.projectionMatrixInverse), e.applyProjection(D)
    }, this.pickingRay = function(e, t) {
      e.z = -1
      var r = new n.Vec3(e.x, e.y, 1)
      return this.unprojectVector(e, t), this.unprojectVector(r, t), r.sub(e).normalize(), new n.Picking(e, r)
    }
    var z = function(t, i) {
      r = 0, N.objects.length = 0, N.sprites.length = 0, N.lights.length = 0
      var s = function(t) {
        var r
        t instanceof n.DataBox ? r = t.getRoots() : r = t.getChildren(), r = r.toList()
        for (var i = 0, o = r.size(); i < o; i++) {
          var u = r.get(i)
          u.isSelected() && u instanceof n.Node && (r.add(u.createCanvasSelectionCube(), i), i++)
        }
        for (var i = 0, o = r.size(); i < o; i++) {
          var u = r.get(i)
          if (u._visible === !1) continue
          if (u instanceof n.Light) N.lights.push(u)
          else if (u instanceof n.Entity || u instanceof n.Line) {
            if (u.frustumCulled === !1 || I.intersectsObject(u) === !0) e = W(), e.object = u, u.renderDepth !== null ? e.z = u.renderDepth : (C.copy(u.worldMatrix.getPosition()), C.applyProjection(D), e.z = C.z), N.objects.push(e)
          } else u instanceof n.Billboard || u instanceof n.Particle ? (e = W(), e.object = u, u.renderDepth !== null ? e.z = u.renderDepth : (C.copy(u.worldMatrix.getPosition()), C.applyProjection(D), e.z = C.z), N.sprites.push(e)) : (e = W(), e.object = u, u.renderDepth !== null ? e.z = u.renderDepth : (C.copy(u.worldMatrix.getPosition()), C.applyProjection(D), e.z = C.z), N.objects.push(e))
          s(u)
        }
      }
      return s(t), i === !0 && N.objects.sort(Q), N
    }
    this.projectDataBox = function(e, r, i, s) {
      var f = !1,
        h, p, v, m, b, w, x, T, C, U, W, Y, Z, et, tt, nt, rt, it, st, ot, ut, at, ft, lt, ct, ht, pt, dt
      c = 0, d = 0, y = 0, S = 0, N.elements.length = 0
      for (var vt = 0; vt < e.getRoots().size(); vt++) {
        var mt = e.getRoots().get(vt)
        mt.updateWorldMatrix()
      }
      r.parent === t && r.updateWorldMatrix(!0, !1), _.copy(r.worldMatrixInverse.getInverse(r.worldMatrix)), D.multiplyMatrices(r.projectionMatrix, _), j.getInverse(_), j.transpose(), I.setFromMatrix(D), N = z(e, i)
      for (h = 0, p = N.objects.length; h < p; h++) {
        Z = N.objects[h].object, P = Z.worldMatrix, u = 0
        if (Z instanceof n.Entity) {
          et = Z, tt = et.vertices, it = et.faces, at = et.uvs, B.getInverse(P), B.transpose(), pt = Z.material instanceof n.ArrayMaterial, dt = pt === !0 ? Z.material : null
          for (v = 0, m = tt.length; v < m; v++) o = X(), o.positionWorld.copy(tt[v]).applyMatrix4(P), o.positionScreen.copy(o.positionWorld).applyMatrix4(D), o.positionScreen.x /= o.positionScreen.w, o.positionScreen.y /= o.positionScreen.w, o.positionScreen.z /= o.positionScreen.w, o.visible = !(o.positionScreen.x < -1 || o.positionScreen.x > 1 || o.positionScreen.y < -1 || o.positionScreen.y > 1 || o.positionScreen.z < -1 || o.positionScreen.z > 1)
          for (b = 0, w = it.length; b < w; b++) {
            st = it[b]
            var gt = pt === !0 ? dt.materials[st.materialIndex] : Z.material
            if (gt === t) continue
            var yt = gt.side
            if (st instanceof n.Face3) {
              ft = a[st.a], lt = a[st.b], ct = a[st.c], O[0] = ft.positionScreen, O[1] = lt.positionScreen, O[2] = ct.positionScreen
              if (ft.visible !== !0 && lt.visible !== !0 && ct.visible !== !0 && !L.isIntersectionBox(A.setFromPoints(O))) continue
              f = (ct.positionScreen.x - ft.positionScreen.x) * (lt.positionScreen.y - ft.positionScreen.y) - (ct.positionScreen.y - ft.positionScreen.y) * (lt.positionScreen.x - ft.positionScreen.x) < 0
              if (yt !== n.DoubleSide && f !== (yt === n.FrontSide)) continue
              l = V(), l.v1.copy(ft), l.v2.copy(lt), l.v3.copy(ct)
            } else if (st instanceof n.Face4) {
              ft = a[st.a], lt = a[st.b], ct = a[st.c], ht = a[st.d], M[0] = ft.positionScreen, M[1] = lt.positionScreen, M[2] = ct.positionScreen, M[3] = ht.positionScreen
              if (ft.visible !== !0 && lt.visible !== !0 && ct.visible !== !0 && ht.visible !== !0 && !L.isIntersectionBox(A.setFromPoints(M))) continue
              f = (ht.positionScreen.x - ft.positionScreen.x) * (lt.positionScreen.y - ft.positionScreen.y) - (ht.positionScreen.y - ft.positionScreen.y) * (lt.positionScreen.x - ft.positionScreen.x) < 0 || (lt.positionScreen.x - ct.positionScreen.x) * (ht.positionScreen.y - ct.positionScreen.y) - (lt.positionScreen.y - ct.positionScreen.y) * (ht.positionScreen.x - ct.positionScreen.x) < 0
              if (yt !== n.DoubleSide && f !== (yt === n.FrontSide)) continue
              l = $(), l.v1.copy(ft), l.v2.copy(lt), l.v3.copy(ct), l.v4.copy(ht)
            }
            l.normalModel.copy(st.normal), f === !1 && (yt === n.BackSide || yt === n.DoubleSide) && l.normalModel.negate(), l.normalModel.applyMatrix3(B).normalize(), l.normalModelView.copy(l.normalModel).applyMatrix3(j), l.centroidModel.copy(st.centroid).applyMatrix4(P), ot = st.vertexNormals
            for (x = 0, T = ot.length; x < T; x++) {
              var bt = l.vertexNormalsModel[x]
              bt.copy(ot[x]), f === !1 && (yt === n.BackSide || yt === n.DoubleSide) && bt.negate(), bt.applyMatrix3(B).normalize()
              var wt = l.vertexNormalsModelView[x]
              wt.copy(bt).applyMatrix3(j)
            }
            l.vertexNormalsLength = ot.length
            var Et = at[b]
            for (W = 0, Y = Et.length; W < Y; W++) l.uvs[0][W] = Et[W]
            l.color = st.color, l.material = gt, F.copy(l.centroidModel).applyProjection(D), l.z = F.z, N.elements.push(l)
          }
        } else if (Z instanceof n.Line) {
          H.multiplyMatrices(D, P), tt = Z.vertices, ft = X(), ft.positionScreen.copy(tt[0]).applyMatrix4(H)
          var St = Z.type === n.LinePieces ? 2 : 1
          for (v = 1, m = tt.length; v < m; v++) {
            ft = X(), ft.positionScreen.copy(tt[v]).applyMatrix4(H)
            if ((v + 1) % St > 0) continue
            lt = a[u - 2], q.copy(ft.positionScreen), R.copy(lt.positionScreen), G(q, R) === !0 && (q.multiplyScalar(1 / q.w), R.multiplyScalar(1 / R.w), g = J(), g.v1.positionScreen.copy(q), g.v2.positionScreen.copy(R), g.z = Math.max(q.z, R.z), g.material = Z.material, N.elements.push(g))
          }
        }
      }
      for (h = 0, p = N.sprites.length; h < p; h++) Z = N.sprites[h].object, P = Z.worldMatrix, Z instanceof n.Particle && (k.set(P.elements[12], P.elements[13], P.elements[14], 1), k.applyMatrix4(D), k.z /= k.w, k.z > 0 && k.z < 1 && (E = K(), E.object = Z, E.x = k.x / k.w, E.y = k.y / k.w, E.z = k.z, E.rotation = Z.rotation.z, E.scale.x = Z.scale.x * Math.abs(E.x - (k.x + r.projectionMatrix.elements[0]) / (k.w + r.projectionMatrix.elements[12])), E.scale.y = Z.scale.y * Math.abs(E.y - (k.y + r.projectionMatrix.elements[5]) / (k.w + r.projectionMatrix.elements[13])), E.material = Z.material, N.elements.push(E)))
      return s === !0 && N.elements.sort(Q), N
    }
  }
  n.Projector = Q, n.Billboard = function(e) {
    e != null && e.id != null ? this._id = e.id : this._id = e, n.Element.call(this, this._id), this.material = new n.BillboardMaterial(), this.rotation3d = this._rotation, this.rotation = 0, this.vertices = [new o(-0.5, -0.5, 0), new o(0.5, -0.5, 0), new o(0.5, 0.5, 0), new o(-0.5, 0.5, 0)]
  }, n.extend(n.Billboard, n.Element, {
    constructor: n.Billboard,
    className: 'TGL.Billboard',
    updateMatrix: function() {
      this.matrix.setPosition(this._position), this.rotation = this._rotation.z, this.rotation3d.set(0, 0, this.rotation), this.matrix.setRotationFromEuler(this.rotation3d), (this._scale.x !== 1 || this._scale.y !== 1) && this.matrix.scale(this._scale), this.matrixWorldNeedsUpdate = !0
    },
    clone: function(e) {
      return e === t && (e = new n.Billboard(this.material)), n.Element.prototype.clone.call(this, e), e
    },
    setMaterialStyle: function(e, t) {
      var n = this.material.clone()
      e = e.substr(e.indexOf('.') + 1), this._A97(n, e, t)
      var r = n.getUniqueCode(),
        i = ni.getMaterial(r)
      i != null ? (ni.unUseMaterial(this.material), this.material = i, ni.useMaterial(i)) : (ni.unUseMaterial(this.material), ni.setMaterial(r, n), this.material = n)
    }
  }), n.ShaderSprite = {
    sprite: {
      vertexShader: ['uniform int useScreenCoordinates;', 'uniform int sizeAttenuation;', 'uniform vec3 screenPosition;', 'uniform mat4 modelViewMatrix;', 'uniform mat4 projectionMatrix;', 'uniform float rotation;', 'uniform vec2 scale;', 'uniform vec2 alignment;', 'uniform vec2 uvOffset;', 'uniform vec2 uvScale;', 'uniform bool vertical;', 'attribute vec2 position;', 'attribute vec2 uv;', 'varying vec2 vUV;', 'void main() {', 'vUV = uvOffset + uv * uvScale;', 'vec2 alignedPosition = (position + alignment) * scale;', 'vec2 rotatedPosition;', 'rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;', 'rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;', 'vec4 finalPosition;', 'vec4 upPosition;', 'vec4 rightPosition = vec4(scale.x,0.0,0.0,1.0);', 'finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );', 'if(vertical){', 'upPosition =  modelViewMatrix * vec4( 0.0, 1.0, 0.0, 1.0 ) - finalPosition;', 'normalize(upPosition);', '}', 'if(vertical){', 'finalPosition.xyz += (rotatedPosition.x * rightPosition.xyz / scale.x) + (rotatedPosition.y * upPosition.xyz / scale.y);', '}else{', 'finalPosition.xy += rotatedPosition;', '}', 'finalPosition = projectionMatrix * finalPosition;', 'gl_Position = finalPosition;', '}'].join('\n'),
      fragmentShader: ['uniform vec3 color;', 'uniform int useMap;', 'uniform sampler2D map;', 'uniform float opacity;', 'uniform int fogType;', 'uniform vec3 fogColor;', 'uniform float fogDensity;', 'uniform float fogNear;', 'uniform float fogFar;', 'uniform float alphaTest;', 'varying vec2 vUV;', 'void main() {', 'if(useMap > 0){', 'vec4 texture = texture2D( map, vUV );', 'if ( texture.a < alphaTest ) discard;', 'gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );', '} else {', 'gl_FragColor = vec4( color, 1.0);', '}', 'if ( fogType > 0 ) {', 'float depth = gl_FragCoord.z / gl_FragCoord.w;', 'float fogFactor = 0.0;', 'if ( fogType == 1 ) {', 'fogFactor = smoothstep( fogNear, fogFar, depth );', '} else {', 'const float LOG2 = 1.442695;', 'float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );', 'fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );', '}', 'gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );', '}', '}'].join('\n')
    }
  }, n.BillboardRenderer = function() {
    function a(t, n) {
      var r = e.createProgram(),
        i = e.createShader(e.FRAGMENT_SHADER),
        s = e.createShader(e.VERTEX_SHADER),
        o = 'precision ' + n + ' float;\n'
      return e.shaderSource(i, o + t.fragmentShader), e.shaderSource(s, o + t.vertexShader), e.compileShader(i), e.compileShader(s), e.attachShader(r, i), e.attachShader(r, s), e.linkProgram(r), r
    }

    function f(e, t) {
      return e.z !== t.z ? t.z - e.z : 1
    }
    var e, t, r, i = {},
      s = new n.Billboard(),
      u = new n.BillboardMaterial({
        color: 255
      })
    this.init = function(s) {
      this.enable = !0, s._currentGroupHash = null, e = s._gl, t = s, r = s.getPrecision(), i.vertices = new Float32Array(16), i.faces = new Uint16Array(6), i.lines = new Uint16Array(8)
      var o = 0
      i.vertices[o++] = -0.5, i.vertices[o++] = -0.5, i.vertices[o++] = 0, i.vertices[o++] = 0, i.vertices[o++] = 0.5, i.vertices[o++] = -0.5, i.vertices[o++] = 1, i.vertices[o++] = 0, i.vertices[o++] = 0.5, i.vertices[o++] = 0.5, i.vertices[o++] = 1, i.vertices[o++] = 1, i.vertices[o++] = -0.5, i.vertices[o++] = 0.5, i.vertices[o++] = 0, i.vertices[o++] = 1, o = 0, i.faces[o++] = 0, i.faces[o++] = 1, i.faces[o++] = 2, i.faces[o++] = 0, i.faces[o++] = 2, i.faces[o++] = 3, o = 0, i.lines[o++] = 0, i.lines[o++] = 1, i.lines[o++] = 0, i.lines[o++] = 3, i.lines[o++] = 1, i.lines[o++] = 2, i.lines[o++] = 2, i.lines[o++] = 3, i.vertexBuffer = e.createBuffer(), i.elementBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, i.vertexBuffer), e.bufferData(e.ARRAY_BUFFER, i.vertices, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, i.faces, e.STATIC_DRAW), i.program = a(n.ShaderSprite.sprite, r), i.attributes = {}, i.uniforms = {}, i.attributes.position = e.getAttribLocation(i.program, 'position'), i.attributes.uv = e.getAttribLocation(i.program, 'uv'), i.uniforms.uvOffset = e.getUniformLocation(i.program, 'uvOffset'), i.uniforms.uvScale = e.getUniformLocation(i.program, 'uvScale'), i.uniforms.rotation = e.getUniformLocation(i.program, 'rotation'), i.uniforms.scale = e.getUniformLocation(i.program, 'scale'), i.uniforms.alignment = e.getUniformLocation(i.program, 'alignment'), i.uniforms.color = e.getUniformLocation(i.program, 'color'), i.uniforms.useMap = e.getUniformLocation(i.program, 'useMap'), i.uniforms.map = e.getUniformLocation(i.program, 'map'), i.uniforms.opacity = e.getUniformLocation(i.program, 'opacity'), i.uniforms.vertical = e.getUniformLocation(i.program, 'vertical'), i.uniforms.useScreenCoordinates = e.getUniformLocation(i.program, 'useScreenCoordinates'), i.uniforms.sizeAttenuation = e.getUniformLocation(i.program, 'sizeAttenuation'), i.uniforms.screenPosition = e.getUniformLocation(i.program, 'screenPosition'), i.uniforms.modelViewMatrix = e.getUniformLocation(i.program, 'modelViewMatrix'), i.uniforms.projectionMatrix = e.getUniformLocation(i.program, 'projectionMatrix'), i.uniforms.fogType = e.getUniformLocation(i.program, 'fogType'), i.uniforms.fogDensity = e.getUniformLocation(i.program, 'fogDensity'), i.uniforms.fogNear = e.getUniformLocation(i.program, 'fogNear'), i.uniforms.fogFar = e.getUniformLocation(i.program, 'fogFar'), i.uniforms.fogColor = e.getUniformLocation(i.program, 'fogColor'), i.uniforms.alphaTest = e.getUniformLocation(i.program, 'alphaTest'), this.inited = !0
    }, this.render = function(r, s, o, a, f) {
      this.inited || this.init(r)
      var l = new N(s),
        c = l.size()
      if (!c) return
      var h = i.attributes,
        p = i.uniforms,
        d = a * 0.5,
        v = f * 0.5,
        m = !1
      r.pm.currentProgram != i.program && (e.useProgram(i.program), r.pm.currentProgram = i.program, r._currentGroupHash = null, e.enableVertexAttribArray(h.position), e.enableVertexAttribArray(h.uv), e.disable(e.CULL_FACE), e.bindBuffer(e.ARRAY_BUFFER, i.vertexBuffer), e.vertexAttribPointer(h.position, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(h.uv, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), this.enable = !0, m = !0), e.uniformMatrix4fv(p.projectionMatrix, !1, o.projectionMatrix.elements), m && e.activeTexture(e.TEXTURE0), m && e.uniform1i(p.map, 0)
      var g = 0,
        y = 0,
        b = r.fog
      b ? (e.uniform3f(p.fogColor, b.color.r, b.color.g, b.color.b), b instanceof n.Fog ? (e.uniform1f(p.fogNear, b.near), e.uniform1f(p.fogFar, b.far), e.uniform1i(p.fogType, 1), g = 1, y = 1) : b instanceof n.FogExp2 && (e.uniform1f(p.fogDensity, b.density), e.uniform1i(p.fogType, 2), g = 2, y = 2)) : (g = 0, y = 0)
      var w, E, S, x, T, C, k = []
      for (w = 0; w < c; w++) {
        E = l.get(w), S = E.material
        if (!t.isVisible(E) || S.opacity === 0) continue
        E.updateWorldMatrix(!0, !1), S.useScreenCoordinates ? E.z = -E.position.z : (E._modelViewMatrix = new n.Mat4(), E._modelViewMatrix.multiplyMatrices(o.worldMatrixInverse, E.worldMatrix), E.z = -E._modelViewMatrix.elements[14])
      }
      for (w = 0; w < c; w++) E = l.get(w), this.renderBillboard(E, p, r, g, y), E._selected && (E._scale.x = E._scale.x * 1.01, E._scale.y = E._scale.y * 1.01, E.material.clone(u), u.map = null, u.color.set(65280), this.renderBillboard(E, p, r, g, y, u), E._scale.x = E._scale.x / 1.01, E._scale.y = E._scale.y / 1.01)
    }, this.disable = function() {
      if (this.enable) {
        var r = i.attributes,
          s = i.uniforms
        e.disableVertexAttribArray(r.position), e.disableVertexAttribArray(r.uv), t._oldDoubleSided || e.enable(e.CULL_FACE), t._oldBlending === n.NoBlending && e.disable(e.BLEND), I.setDepthWrite(!0, t), this.enable = !1, this.lastMaterialId = null, t.pm.currentProgram = null
      }
    }, this.renderBillboard = function(n, r, s, u, a, f) {
      var l, c, h, p, d = [],
        v = new o()
      l = f || n.material
      if (!t.isVisible(n) || l.opacity === 0) return
      var m = l.id,
        g = m != this.lastMaterialId
      g && e.uniform1f(r.alphaTest, l.alphaTest), g && (l.useScreenCoordinates === !0 ? (e.uniform1i(r.useScreenCoordinates, 1), e.uniform3f(r.screenPosition, (n.position.x * t.devicePixelRatio - halfViewportWidth) / halfViewportWidth, (halfViewportHeight - n.position.y * t.devicePixelRatio) / halfViewportHeight, Math.max(0, Math.min(1, n.position.z)))) : (e.uniform1i(r.useScreenCoordinates, 0), e.uniform1i(r.sizeAttenuation, l.sizeAttenuation ? 1 : 0))), l.useScreenCoordinates === !0 ? (d[0] = t.devicePixelRatio, d[1] = t.devicePixelRatio) : (e.uniformMatrix4fv(r.modelViewMatrix, !1, n._modelViewMatrix.elements), d[0] = 1, d[1] = 1), s.fog && l.fog ? p = a : p = 0, u !== p && (e.uniform1i(r.fogType, p), u = p), h = 1 / (l.scaleByViewport ? viewportHeight : 1), v.getScaleFromMatrix(n.worldMatrix), d[0] *= h * v.x, d[1] *= h * v.y, g && (e.uniform2f(r.uvScale, l.repeat.x, l.repeat.y), e.uniform2f(r.uvOffset, l.offset.x, l.offset.y), e.uniform2f(r.alignment, l.alignment.x, l.alignment.y), e.uniform1f(r.opacity, l.opacity), e.uniform1i(r.vertical, l.vertical), e.uniform3f(r.color, l.color.r, l.color.g, l.color.b), e.uniform1f(r.rotation, n.rotation)), e.uniform2fv(r.scale, d), g && (t.setBlending(l.blending, l.blendEquation, l.blendSrc, l.blendDst), t.setDepthTest(l.depthTest), t.setDepthWrite(l.depthMask)), l.map && l.map._image && t.pm.addTexture(l.map), g = g || l.map && t.pm.needsUpdateTexture(l.map), l.map && l.map._image && l.map._image.width ? (g && t.setTexture(l.map, 0), g && e.uniform1i(r.useMap, 1)) : g && e.uniform1i(r.useMap, 0), f ? (g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), g && e.bufferData(e.ELEMENT_ARRAY_BUFFER, i.lines, e.STATIC_DRAW), g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), e.drawElements(e.LINES, 8, e.UNSIGNED_SHORT, 0)) : (g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), g && e.bufferData(e.ELEMENT_ARRAY_BUFFER, i.faces, e.STATIC_DRAW), g && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, i.elementBuffer), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)), this.lastMaterialId = l.id
    }
  }
  var $ = function(e, r, i) {
    this.width = e, this.height = r, i = i || {}, this.wrapS = i.wrapS !== t ? i.wrapS : n.ClampToEdgeWrapping, this.wrapT = i.wrapT !== t ? i.wrapT : n.ClampToEdgeWrapping, this.magFilter = i.magFilter !== t ? i.magFilter : n.LinearFilter, this.minFilter = i.minFilter !== t ? i.minFilter : n.LinearMipMapLinearFilter, this.anisotropy = i.anisotropy !== t ? i.anisotropy : 1, this.offset = new n.Vec2(0, 0), this.repeat = new n.Vec2(1, 1), this.format = i.format !== t ? i.format : n.RGBAFormat, this.type = i.type !== t ? i.type : n.UnsignedByteType, this.depthBuffer = i.depthBuffer !== t ? i.depthBuffer : !0, this.stencilBuffer = i.stencilBuffer !== t ? i.stencilBuffer : !0, this.generateMipmaps = !0, this.shareDepthFrom = null
  }
  $.prototype = {
    constructor: $,
    clone: function() {
      var e = new $(this.width, this.height)
      return e.wrapS = this.wrapS, e.wrapT = this.wrapT, e.magFilter = this.magFilter, e.minFilter = this.minFilter, e.anisotropy = this.anisotropy, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.format = this.format, e.type = this.type, e.depthBuffer = this.depthBuffer, e.stencilBuffer = this.stencilBuffer, e.generateMipmaps = this.generateMipmaps, e.shareDepthFrom = this.shareDepthFrom, e
    },
    getUniqueCode: function() {
      return this._id
    },
    dispose: function() {
      this.dispatchEvent({
        type: 'dispose'
      })
    }
  }
  var J = function(e, t, n) {
    $.call(this, e, t, n), this.activeCubeFace = 0
  }
  n.extend(J, $, {})
  var G = 'l=1.0\ntype=1\ngis=0\n3d=1\nstart=2015-10-21\nend=2016-10-31\nnote=This license applies to the evaluation version of TWaver. The License is limited to noncommercial use. Noncommercial use relates only to educational, research, personal or evaluation purposes. Any other use is commercial use. You may not use the Software in connection with any business activities.And You are not permitted to modify the software or attempt to decipher, decompile, disassemble or reverse engineer this Software.\nsignature=69b57c46f9801b1ad4c0ec28e49fafd90df6bd4f63e42b019ff240736150c9a2070b4f2c7c1b2d94063a1402d811e757aa6aced3defef6ccafdf6f28b0dd4bc4e5ee9b033b9d9a12629329c76b5e22d608e561c8caa0dfeafb1cd9d1b1c988edf1b7a8d1d9520555f87e20626de98388c1bd30c0079ebacc6229b199648b774538a5abd45055658bcdf472770f1b7574d6ee17c0ec273ec2bcdd3053b24e7f547e93dbd4a180f9cd937541164297564dfa4d28ea4709ca165cbd515262976cc230459a86a7790be4f696b49f5b14e03b30abd94ca1f034c4376e1fad9ab7252c3e2930d2ac9383e84182683ac47ee29e109388c8165ea8001a0526dac643ac073edbb5038f065378dd77d69b22fc9716cc0a8c2adf4e090de8ebe24724d3a14ff73855193182c01cf7e5344e4400d9303f3e9a8d762862cab6ac4d8f37af59c1dcde69eb92a1b7b1a3493d63c1404b6f0c5c00975e9ab12daa68d7f4d3fe3b6863a72618ec0c6a6f6cb77a8476fd904cefcff326eaf2328c49b05c35898418ca2b974359d639f399a9a6f4cb14caf3af590753e67c52d44fed018fcb607a042ebecb4b6bb7d43ed364f76fbe47644c125e9cd97f393029e9cee49a910ae672041ec026ec55709c02662cccb62818dcd33e96a4c59d13995752636ae6ca2a7f961421adabf1277986ed03bdec170e1d00cb4c3668fb65bcc087996a7174163f63179507fc710fbf8697b7e8ddc5bbe5d54177a4dbe073ed1d90e6b842b42f04e6fd69f26a7dc3227f0189c21424b556ccdaa8d2b1829c35039670ea7663a8088220fffe99a530863fdff1ca18a468edd6adcc5a680e13c5a432096977d5b157ff5848f6bf464ca5dbf670f2cb090c3cbc4ccd8f8355b91505502e215b97646b86',
    Y, Z = 0xdeadbeefcafe,
    et = (Z & 16777215) == 15715070
  et && navigator.appName == 'Microsoft Internet Explorer' ? (tt.prototype.am = it, Y = 30) : et && navigator.appName != 'Netscape' ? (tt.prototype.am = rt, Y = 26) : (tt.prototype.am = st, Y = 28), tt.prototype.DB = Y, tt.prototype.DM = (1 << Y) - 1, tt.prototype.DV = 1 << Y
  var ot = 52
  tt.prototype.FV = Math.pow(2, ot), tt.prototype.F1 = ot - Y, tt.prototype.F2 = 2 * Y - ot
  var ut = '0123456789abcdefghijklmnopqrstuvwxyz',
    at = new Array(),
    ft, lt
  ft = '0'.charCodeAt(0)
  for (lt = 0; lt <= 9; ++lt) at[ft++] = lt
  ft = 'a'.charCodeAt(0)
  for (lt = 10; lt < 36; ++lt) at[ft++] = lt
  ft = 'A'.charCodeAt(0)
  for (lt = 10; lt < 36; ++lt) at[ft++] = lt
  Dt.prototype.convert = Pt, Dt.prototype.revert = Ht, Dt.prototype.reduce = Bt, Dt.prototype.mulTo = jt, Dt.prototype.sqrTo = Ft, qt.prototype.convert = Rt, qt.prototype.revert = Ut, qt.prototype.reduce = zt, qt.prototype.mulTo = Xt, qt.prototype.sqrTo = Wt, tt.prototype.copyTo = pt, tt.prototype.fromInt = dt, tt.prototype.fromString = mt, tt.prototype.clamp = gt, tt.prototype.dlShiftTo = Tt, tt.prototype.drShiftTo = Nt, tt.prototype.lShiftTo = Ct, tt.prototype.rShiftTo = kt, tt.prototype.subTo = Lt, tt.prototype.multiplyTo = At, tt.prototype.squareTo = Ot, tt.prototype.divRemTo = Mt, tt.prototype.invDigit = It, tt.prototype.isEven = Vt, tt.prototype.exp = $t, tt.prototype.toString = yt, tt.prototype.negate = bt, tt.prototype.abs = wt, tt.prototype.compareTo = Et, tt.prototype.bitLength = xt, tt.prototype.mod = _t, tt.prototype.modPowInt = Jt, tt.ZERO = vt(0), tt.ONE = vt(1), qn.prototype.convert = Rn, qn.prototype.revert = Rn, qn.prototype.mulTo = Un, qn.prototype.sqrTo = zn, $n.prototype.convert = Jn, $n.prototype.revert = Kn, $n.prototype.reduce = Qn, $n.prototype.mulTo = Yn, $n.prototype.sqrTo = Gn
  var rr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997],
    ir = (1 << 26) / rr[rr.length - 1]
  tt.prototype.chunkSize = Zt, tt.prototype.toRadix = tn, tt.prototype.fromRadix = nn, tt.prototype.fromNumber = rn, tt.prototype.bitwiseTo = fn, tt.prototype.changeBit = Cn, tt.prototype.addTo = On, tt.prototype.dMultiply = Fn, tt.prototype.dAddOffset = In, tt.prototype.multiplyLowerTo = Xn, tt.prototype.multiplyUpperTo = Vn, tt.prototype.modInt = tr, tt.prototype.millerRabin = or, tt.prototype.clone = Kt, tt.prototype.intValue = Qt, tt.prototype.byteValue = Gt, tt.prototype.shortValue = Yt, tt.prototype.signum = en, tt.prototype.toByteArray = sn, tt.prototype.equals = on, tt.prototype.min = un, tt.prototype.max = an, tt.prototype.and = cn, tt.prototype.or = pn, tt.prototype.xor = vn, tt.prototype.andNot = gn, tt.prototype.not = yn, tt.prototype.shiftLeft = bn, tt.prototype.shiftRight = wn, tt.prototype.getLowestSetBit = Sn, tt.prototype.bitCount = Tn, tt.prototype.testBit = Nn, tt.prototype.setBit = kn, tt.prototype.clearBit = Ln, tt.prototype.flipBit = An, tt.prototype.add = Mn, tt.prototype.subtract = _n, tt.prototype.multiply = Dn, tt.prototype.divide = Hn, tt.prototype.remainder = Bn, tt.prototype.divideAndRemainder = jn, tt.prototype.modPow = Zn, tt.prototype.modInverse = nr, tt.prototype.pow = Wn, tt.prototype.gcd = er, tt.prototype.isProbablePrime = sr, tt.prototype.square = Pn, ur.prototype.init = ar, ur.prototype.next = fr
  var cr = 256,
    hr, pr, dr
  if (pr == null) {
    pr = new Array(), dr = 0
    var gr
    if (navigator.appName == 'Netscape' && navigator.appVersion < '5' && e.crypto) {
      var yr = e.crypto.random(32)
      for (gr = 0; gr < yr.length; ++gr) pr[dr++] = yr.charCodeAt(gr) & 255
    }
    while (dr < cr) gr = Math.floor(65536 * Math.random()), pr[dr++] = gr >>> 8, pr[dr++] = gr & 255
    dr = 0, mr()
  }
  Er.prototype.nextBytes = wr
  var Sr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    xr = '='
  Or.prototype.doPublic = _r, Or.prototype.setPublic = Mr, Or.prototype.encrypt = Dr, Or.prototype.doPrivate = jr, Or.prototype.setPrivate = Hr, Or.prototype.setPrivateEx = Br, Or.prototype.decrypt = Fr
  var Ir = function() {
      qr.v(G)
    },
    qr = {},
    Rr = '6a384c1259bdb5e731ec96b3174683f48a2c56a85e52e7a5bb20b58711ce50c1a294bd5e1d1752e766085e9ae94bae6d217c25dbb5fcdb86a8a9a7e180fa066723d00fcb85fcf7c9d29f8cc8859f53244a49c0bc30dcc45156daf8843ce1d24fe8ebc9a3c186bb26e9d0714041aef160304c1db8cc5728cf4acb39d29755f319',
    Ur = '10001',
    zr = '61a921483dfa8f24e26204ace4d990b965d11e5bef5d8a5e768ebc5853a6bdd94b02369a3165207460fb91001d3fd83fbe69c6e51b8e40c8ae8a4e30a7c539dca98b44858bdc0b76f25af6803d4d13dacd9fa1a28f66cf561fa36309d4239a2cf50fe20ef0e99e01fc8701090f0685a524f411e00ca91f877d3b49d2d0052f9',
    Wr = 'b881f568eb43e7a60c256a8a90e08b7c7638fd66ce3cded9005c72e283ca4f2b8601e2edc687d7f898348a05723b515d9edeb626af7b499a56ddaea93b0c2047',
    Xr = '9360ab3d6b678727748ea004e85120f1823ec94e6116dc5fcd7b1c9ea231d38e5d7d2d23c00607912e1645835756b71290c6c3cc2bc656e93d9a4f6b0d55619f',
    Vr = '3e61c2259d15b26693c8bac2eac4e0a44e1c6aa0adae2af2578aea54e796293a5fee9759293c98aab65b5d27063e43fe514e9f6b68fd581f54ab52f868bc6ad5',
    $r = '4dac2913d9c35a6be4f63647dfd8c23006a0e89fb273c5f987e656931490861b0612aef3a48489006ef5b5f51ed6c8edb3f7cdc191609af59a4df5854a25b1a9',
    Jr = 'acd9837a1472711ff2b63ba0de667fa4a4a56a8b0f4cbb0a555f73d1bc529e9ecf865b709fd8235c3db05bcf1539de1e594d3a8275fe0784a9f5241d8895b328'
  qr.cross = function(e) {
    if (e) {
      var t = ''
      for (var n = 0; n < e.length;) n + 1 < e.length ? (t += e[n + 1], t += e[n]) : t += e[n], n += 2
      return t
    }
    return null
  }, qr.reverse = function(e) {
    if (e) {
      var t = ''
      for (var n = e.length; n > 0; n--) t += e[n - 1]
      return t
    }
    return null
  }, qr.v = function(e) {
    if (e) {
      var t = qr
      t.start = null, t.beginDate = null, t.end = null, t.endDate = null, t.gis = null, t['3D'] = null, t['3d'] = null, t.l = null, t.__li__ = null
      if (e.indexOf('signature=') > 0) {
        var n = e.split('signature='),
          r = n[0],
          i = n[1],
          s = new Or()
        s.setPublic(Rr, Ur)
        var o = i,
          u = o.length,
          a = 256,
          f = 0,
          l = '',
          c = ''
        while (f < u) l = o.substr(f, a), c += s.decrypt(l), f += a
        if (c === r) return t.i(e), !0
      }
    }
    return !1
  }, qr.i = function(e) {
    var n = qr
    n.__li__ = e
    var r = e.split('\n'),
      i, s, o, u, a
    for (i = 0; i < r.length; i++) s = r[i], a = s.split('='), o = a[0], u = a[1], n[o] = u
    n.start != t && (n.beginDate = new Date(Date.parse(n.start.replace(/-/g, '/')))), n.end != t && (n.endDate = new Date(Date.parse(n.end.replace(/-/g, '/'))))
    var f = n.gis
    f != t && (f = parseInt(f)), f && (n._isPermissionGIS = !0)
    var l = n['3D'] || n['3d']
    l != t && (l = parseInt(l)), l && (n._isPermission3D = !0), n.l != t && (n.version = n.l)
  }
  var Kr = function(e) {
      return e.__li__ !== t && e._isPermission3D
    },
    Qr = function(e) {
      if (!Kr(e)) return !0
      var t = new Date()
      return e.beginDate != null && e.beginDate.getTime() - t.getTime() >= 0 || e.endDate != null && e.endDate.getTime() - t.getTime() <= 0
    },
    Gr = function(e) {
      return e.type === 2 ? !0 : !1
    },
    Yr = function(e) {
      return Qr(e) ? !1 : e._isPermissionGIS
    }
  qr.$z = function(e) {
    var t = new Or()
    t.setPublic(Rr, Ur)
    var n = e,
      r = n.length,
      i = 256,
      s = 0,
      o = '',
      u = ''
    while (s < r) o = n.substr(s, i), u += t.decrypt(o), s += i
    return u
  }, qr.twm = function(e) {
    var n = qr,
      r = n.$z('4cd18113d0c7046bfe51f7a3fbd41c2b7cf14dd785d6ea7cec9da17710d3acfb8ce0cb9cf10839f4bd51e88819de19cdc0db09278584396156fcb65abe0353ac49d01326b30efa0ea98a07da9f8ceeb7572fc1b37b5965ba6103ccba4913b62e36e49425c6ff21a2f008830c59cff8f29058769f858c8a9f0bab3eaea7fb8a9e'),
      i = this.type,
      s = this.markText,
      o = n.$z('648be38cd61c870e95ffc1ea0676af40736c1365015abc326e891a4de67b4de3d4b05da70b9aebedc83ec26ecf71eb74c72f42f6d9a4be2d507d2f67d2860b7b66e3ba1d565e15923f2db335ff922eef17c01b59818b583d5656412d6cc9d9ba70001c2c88e3efd492c6b13a07fda5f325b333138a2036f4696542ec137cc341')
    e[o] = n.__li__
    var u = e
    u._xyz = null
    if (i === '3' && !Qr(qr) && s === t) return
    e.DEBUG && (console.log('license: ' + qr.__li__), console.log('license Type : ' + i), console.log('beginDate: ' + qr.beginDate), console.log('endDate: ' + qr.endDate), console.log('mark: ' + s)), e.__liLabel == t && (e.__liLabel = document.createElement('div')), n.startDate === t && (n.startDate = new Date())
    var a = (new Date()).getTime() - n.startDate.getTime(),
      f = i === '2' ? 7200 : 300
    if (a < 1e3 * f) return
    var l = Qr(n) && a > 1e3 * f,
      c = s
    l ? c = n.$z('0dd629dbd0ce341ecdd447e35ddc3135a0b46916f7571a687f38ae665cf0ae095fee885e14329caa75112d8787508da17285b0897845d8ccae73e6a2727dd19f1ca335fe139d0e60d240f9ececc78f81c2c5667f51aeed4135b9c4bb436b8acb7cd418eeeb404bc4f3bcdedb481ac0edff7644435ce2b9f2bda78c892bd56d73') : i != '2' || c !== t && c != '' ? i == '1' && !s && (c = r) : c = n.$z('644d54bf9c59afbd8a742a9e7e2731f23f149ccb7f04c3547548c50ac2d77faea108b55f1f6261e99869f1c06b84e8abdefdf45b5170048531421f3d528123972ba2f03d70f37c33f1341dc12f986e0089e42bab517e2a05b455d12d90991bbba9bc45c715a81943062ea5fa5408c8b1b9270d260cc5a67b38ecc4178ce512fc')
    if (c === t) return
    var h = u.__liLabel
    h.innerHTML = c, h.type = i, h.mark = s, h.expired = l, u._xyz = h, l && (u.getView().style.opacity = 0.1)
  }, P.validateLicense(G), n.Material = function(e) {
    n.PropertyChangeDispatcher.call(this), this.id = n.MaterialIdCount++, this.type = 'basic', this.shaderID = '', this.uniforms = t, this.vertexShader = '', this.fragmentShader = '', this.alarmColor = null, this.name = '', this.side = n.FrontSide, this.fog = !0, this.normalType = t, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.vertexColors = n.NoColors, this.blendMode = n.NormalBlending, this.blendSrc = n.SrcAlphaFactor, this.blendDst = n.OneMinusSrcAlphaFactor, this.blendEquation = n.AddEquation, this.depthTest = !0, this.depthMask = !0, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.alphaTest = 0, this.transparent = !1, this.opacity = 1, this.visible = !0, this.needsUpdate = !0, this.setValues(e), this.useCount = 0, this.styleMap = {}, this.offset = new s(0, 0), this.repeat = new s(1, 1), this.gradient = {}, this.gradientType = 1, this.gradientCenter = new s(0.5, 0.5), this.outline = 0
  }, n.extend(n.Material, n.PropertyChangeDispatcher, {
    generateKey: function() {},
    setMap: function(e, t) {
      t == null && (t = 'map')
      if (this[t] === e) return
      var n = this[t]
      this[t] = e, this.firePropertyChange(t, n, e), this.onMapChanged(n, e)
    },
    handleTextureChange: function(e) {
      if (e.property === 'image') {
        var t = this
        this.firePropertyChange('needsUpdate', !1, !0)
      } else e.property === 'disposed'
    },
    onPropertyChange: function(e, t, n) {},
    onMapChanged: function(e, t) {},
    setColor: function(e) {
      if (this.color === e) return
      var t = this.color.clone()
      e instanceof n.Color ? this.color.copy(e) : this.color.set(e), this.firePropertyChange('color', t, e)
    },
    setPropertyValue: function(e, t) {
      if (this[e] === t) return
      var r = this[e]
      if (r instanceof n.Color) t != null && (r = r.clone(), t instanceof n.Color ? this[e].copy(t) : this[e].set(t))
      else if (e == 'gradient') {
        var i = {}
        for (var s in t) t[s] instanceof n.Color ? i[s] = t[s] : i[s] = new n.Color(t[s])
        this[e] = i
      } else this[e] = t
      this._uniqueCode = null, this.firePropertyChange(e, r, t)
    },
    isTextureStyle: function(e) {
      return this._type === 'terrain' ? e.startsWith('texture1.') || e.startsWith('texture2.') || e.startsWith('textureb.') || e.startsWith('texturen.') || e.startsWith('texturebp.') : e.startsWith('texture.') || e.startsWith('lightmap') || e.startsWith('envmap') || e.startsWith('normalmap') || e.startsWith('specularmap')
    },
    setNeedsUpdate: function(e) {},
    getShaderID: function() {
      return this instanceof n.BasicMaterial && (this.shaderID = 'basic'), this.shaderID
    },
    setupMaterialShader: function() {
      var e = this.getShaderID(),
        t = n.ShaderLib[e]
      this.uniforms = n.UniformsUtils.clone(t.uniforms), this.vertexShader = t.vertexShader, this.fragmentShader = t.fragmentShader
    },
    refreshUniforms: function(e, t) {
      this.refreshUniformsCommon(e, t), this.refreshUniformsSpecific(e, t)
    },
    loadCameraPosition: function(e, t, r) {
      if (this instanceof n.ShaderMaterial || this instanceof n.PhongMaterial || this.envMap || this._type === 'phong') {
        if (e.cameraPosition != null) {
          var i = t.worldMatrix.getPosition()
          r.uniform3f(e.cameraPosition, i.x, i.y, i.z)
        }
      }
    },
    loadViewMatrix: function(e, t, n) {
      (this.type === 'lambert' || this.type === 'phong' || material.skinning) && e.viewMatrix !== null && n.uniformMatrix4fv(p_uniforms.viewMatrix, !1, t.worldMatrixInverse.elements)
    },
    refreshUniformsSpecific: function(e) {},
    refreshUniformsCommon: function(e) {
      var r = this.uniforms,
        i = this
      r.opacity.value = i.opacity
      var s = P.getObjectCount(this.gradient) > 0
      e ? r.diffuse.value.copyGammaToLinear(this.alarmColor ? this.alarmColor : this.color) : r.diffuse.value = this.alarmColor ? this.alarmColor : this.color
      if (s) {
        var o = [],
          u = []
        for (var a in this.gradient) o.push(a)
        o.sort()
        for (var f = 0; f < o.length; f++) u.push(this.gradient[o[f]])
        r.gradientColor.value = u, r.gradientStop.value = o, r.gradientType.value = this.gradientType
      }
      r.map.value = i.map, r.lightMap.value = i.lightMap, r.specularMap.value = i.specularMap, i.bumpMap && (r.bumpMap.value = i.bumpMap, r.bumpScale.value = i.bumpScale), i.normalMap && i._type === 'phong' && (r.normalMap.value = i.normalMap, r.normalScale.value.copy(i.normalScale))
      var l
      i.map ? l = i.map : i.specularMap ? l = i.specularMap : i.normalMap && i._type === 'phong' ? l = i.normalMap : i.bumpMap && i._type === 'phong' && (l = i.bumpMap)
      if (l != t) {
        var c = this.offset,
          h = this.repeat
        r.offsetRepeat.value.set(c.x, c.y, h.x, h.y), r.flipX.value = l.flipX ? 1 : 0, r.mapLoaded.value = 1, l._image && !l._image.loaded && r.offsetRepeat.value.set(0, 0, 1, 1)
      }
      r.envMap.value = i.envMap, r.flipEnvMap.value = 1, e ? r.reflectivity.value = i.reflectRatio * i.reflectRatio : r.reflectivity.value = i.reflectRatio, r.refractionRatio.value = i.refractionRatio, r.combine.value = i.combine, r.useRefract.value = i.envMap && i.envMap.mapping instanceof n.CubeRefractionMapping
    },
    loadGeneralUniforms: function() {},
    getNormalType: function() {
      var e = this && this.normalType !== t && this.normalType === n.NormalTypeSmooth
      return e ? n.SmoothShading : n.FlatShading
    },
    isVertexColor: function() {
      return this.vertexColors ? this.vertexColors : !1
    },
    needUV: function() {
      return this.map || this.lightMap || this.bumpMap || this.normalMap || this.specularMap ? !0 : !0
    },
    setValues: function(e) {
      if (e === t) return
      for (var r in e) {
        var i = e[r]
        if (i === t) {
          console.warn("TGL.Material: '" + r + "' parameter is undefined.")
          continue
        }
        if (r in this) {
          var s = this[r]
          s instanceof n.Color && i instanceof n.Color ? s.copy(i) : s instanceof n.Color ? s.set(i) : s instanceof n.Vec3 && i instanceof n.Vec3 ? s.copy(i) : this[r] = i
        }
      }
    },
    isCustomAttributesNeedUpdate: function() {
      if (!this.attributes) return !1
      for (var e in this.attributes) {
        if (this.attributes[e].needsUpdate) return !0
      }
      return !1
    },
    clearCustomAttributes: function() {
      if (this.attributes) {
        for (var e in this.attributes) this.attributes[e].needsUpdate = !1
      }
    },
    clone: function(e) {
      return e === t && (e = new n.Material()), e.name = this.name, e.side = this.side, e.blendMode = this.blendMode, e.blendSrc = this.blendSrc, e.blendDst = this.blendDst, e.blendEquation = this.blendEquation, e.depthTest = this.depthTest, e.depthMask = this.depthMask, e.polygonOffset = this.polygonOffset, e.polygonOffsetFactor = this.polygonOffsetFactor, e.polygonOffsetUnits = this.polygonOffsetUnits, e.alphaTest = this.alphaTest, e.transparent = this.transparent, e.opacity = this.opacity, e.visible = this.visible, e.normalType = this.normalType, e.wireframe = this.wireframe, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.wireframeLinewidth = this.wireframeLinewidth, e.gradient = this.gradient, e.gradientType = this.gradientType, e.outline = this.outline, e
    },
    dispose: function() {
      this.firePropertyChange('disposed', !1, !0)
    }
  }), n.MaterialIdCount = 0, n.EntityMaterial = function(e) {
    n.Material.call(this), this._type = 'basic', this.color = new n.Color(16777215), this.map = null, this.ambient = new n.Color(16777215), this.emissive = new n.Color(0), this.specular = new n.Color(1118481), this.specularStrength = 1, this.shininess = 30, this.wrapAround = !1, this.wrapRGB = new n.Vec3(1, 1, 1), this.lightMap = null, this.specularMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vec2(1, 1), this.envMap = null, this.combine = n.MultiplyOperation, this.reflectRatio = 1, this.refractionRatio = 0.98, this.fog = !0, this.shading = n.SmoothShading, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.metal = !1, this.perPixel = !0, this.map1 = null, this.map2 = null, this.blendMap = null, this.detailMap = null, this.specularMap = null, this.blendRange = new s(0, 1), this.setValues(e)
  }, n.extend(n.EntityMaterial, n.Material, {
    getShaderID: function() {
      return this.getType()
    },
    getUniqueCode: function() {
      if (this._uniqueCode != null) return this._uniqueCode
      var e = this._type + ' ' + this.color.r + this.color.g + this.color.b + ' ' + this.ambient.getUniqueCode() + ' ' + this.emissive.getUniqueCode() + this.specular.getUniqueCode() + ' ' + this.transparent + ' ' + this.visible + ' ' + this.opacity + ' ' + this.depthTest + '' + this.depthMask + ' ' + this.side + ' ' + this.wireframe + ' ' + this.wireframeLinewidth + ' ' + this.polygonOffset + ' ' + this.polygonOffsetFactor + ' ' + this.polygonOffsetUnits + ' ' + this.overdraw + ' ' + this.shininess + ' ' + this.metal + ' ' + this.specularStrength
      this.alphaTest && (e += this.alphaTest), e += ' ' + this.normalType + ' ', e += this.repeat.x + ' ' + this.repeat.y + this.offset.x + ' ' + this.offset.y, e += ' ' + this.blendRange.x + ' ' + this.blendRange.y, e += ' ' + this.normalScale.x + ' ' + this.normalScale.y, e += ' ' + this.reflectRatio, this.map && (e += this.map.getUniqueCode()), this.map1 && (e += this.map1.getUniqueCode()), this.map2 && (e += this.map2.getUniqueCode()), this.blendMap && (e += this.blendMap.getUniqueCode()), this.normalMap && (e += this.normalMap.getUniqueCode()), this.lightMap && (e += this.lightMap.getUniqueCode()), this.envMap && (e += this.envMap.getUniqueCode()), this.specularMap && (e += this.specularMap.getUniqueCode()), this.alarmColor && (e += ' ' + this.alarmColor.getUniqueCode())
      if (this.gradient) {
        for (var t in this.gradient) e += ' ' + t + ':' + this.gradient[t].getUniqueCode()
      }
      return e += ' ' + this.gradientType, e += ' ' + this.outline, e += this.combine, this._uniqueCode = e, e
    },
    loadViewMatrix: function(e, t, n) {
      (this._type === 'lambert' || this._type === 'phong' || material.skinning) && e.viewMatrix !== null && n.uniformMatrix4fv(p_uniforms.viewMatrix, !1, t.worldMatrixInverse.elements)
    },
    onMapChanged: function(e, t) {
      n.TexturePool.useTexture(t), n.TexturePool.unUseTexture(e)
      if (t) {
        var r = t.getUniqueCode()
        n.TexturePool.getTexture(r) == null && n.TexturePool.setTexture(r, t)
      }
    },
    setType: function(e) {
      if (this._type === e) return
      var t = this._type
      this._type = e, this.firePropertyChange('type', t, e), this.onTypeChanged(t, e)
    },
    onTypeChanged: function() {},
    getType: function() {
      return this._type
    },
    setStyle: function(e, t) {
      if (e == null) return
      this.styleMap == null && (this.styleMap = {})
      var r = this.styleMap[e]
      return t == null ? delete this.styleMap[e] : this.styleMap[e] = t, this.firePropertyChange(n.Styles.PREFIX_STYLE + e, r, t), this.onStyleChanged(e, r, t), this
    },
    getStyle: function(e, t) {
      t == null && (t = !0)
      var r
      return this.styleMap != null && (r = this.styleMap[e]), r == null && t && (r = n.Styles.getStyle(e)), r
    },
    clone: function(e) {
      return e = e || new n.EntityMaterial(), n.Material.prototype.clone.call(this, e), e._type = this._type, e.color.copy(this.color), e.setMap(this.map, 'map'), e.setMap(this.map1, 'map1'), e.setMap(this.map2, 'map2'), e.setMap(this.blendMap, 'blendMap'), e.setMap(this.normalMap, 'normalMap'), e.setMap(this.specularMap, 'specularMap'), e.setMap(this.envMap, 'envMap'), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.perPixel = this.perPixel, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.setMap(this.lightMap, 'lightMap'), e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalScale.copy(this.normalScale), e.combine = this.combine, e.reflectRatio = this.reflectRatio, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e.specularStrength = this.specularStrength, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.blendRange.copy(this.blendRange), e
    },
    refreshUniformsSpecific: function(e) {
      var t = this.uniforms
      this._type === 'lambert' ? (e ? (t.ambient.value.copyGammaToLinear(this.ambient), t.emissive.value.copyGammaToLinear(this.emissive)) : (t.ambient.value = this.ambient, t.emissive.value = this.emissive), this.wrapAround && t.wrapRGB.value.copy(this.wrapRGB)) : this._type === 'phong' && (t.shininess.value = this.shininess, e ? (t.ambient.value.copyGammaToLinear(this.alarmColor ? this.alarmColor : this.ambient), t.emissive.value.copyGammaToLinear(this.emissive), t.specular.value.copyGammaToLinear(this.specular)) : (t.ambient.value = this.alarmColor ? this.alarmColor : this.ambient, t.emissive.value = this.emissive, t.specular.value = this.specular), t.uspecularStrength.value = this.specularStrength, this.wrapAround && t.wrapRGB.value.copy(this.wrapRGB))
    },
    refreshUniformsCommon: function(e) {
      if (this._type === 'terrain') {
        var t = this.uniforms
        t.enableDiffuse1.value = this.map ? 1 : 0, t.tDiffuse1.value = this.map, t.enableDiffuse2.value = this.map1 ? 1 : 0, t.tDiffuse2.value = this.map1, t.enableDiffuse3.value = this.map2 ? 1 : 0, t.tDiffuse3.value = this.map2, t.enableDisplacement.value = this.blendMap ? 1 : 0, t.tDisplacement.value = this.blendMap, t.uRepeatOverlay.value = this.repeat, this.blendRangeArray == null && (this.blendRangeArray = [0, 1]), this.blendRangeArray[0] = this.blendRange.x, this.blendRangeArray[1] = this.blendRange.y, t.blendRange.value = this.blendRangeArray
      } else if (this._type === 'outline') {
        var t = this.uniforms
        t.diffuse.value = this.color, t.outline_offset.value = this.outline
      } else n.Material.prototype.refreshUniformsCommon.call(this, e)
    }
  }), n.BlurMaterial = function() {
    n.Material.call(this), this.orientation = 0, this.blurAmount = 5, this.blurScale = 1, this.blurStrength = 1, this.useBlur = 1, this.texelSize = new s(512, 512), this.blurGlobalAlpha = 1
  }, n.extend(n.BlurMaterial, n.Material, {
    refreshUniformsCommon: function(e) {
      var t = this.uniforms
      t.map.value = this.map, t.orientation.value = this.orientation, t.blurAmount.value = this.blurAmount, t.blurScale.value = this.blurScale, t.blurStrength.value = this.blurStrength, t.useBlur.value = this.useBlur, t.texelSize.value = this.texelSize, t.blurGlobalAlpha.value = this.blurGlobalAlpha
    },
    getShaderID: function() {
      return 'blur'
    }
  }), n.DeferredMaterial = function(e) {
    e = e || {}, n.Material.call(this, e), this.linearDepth = 30, this.isNormal = e.isNormal !== t ? e.isNormal : 0
  }, n.extend(n.DeferredMaterial, n.Material, {
    getShaderID: function() {
      return 'deferred'
    },
    refreshUniformsCommon: function(e) {
      var t = this.uniforms
      t.linearDepth.value = this.linearDepth, t.isNormal.value = this.isNormal
    }
  }), n.SSAOMaterial = function(e) {
    n.Material.call(this), this.map1 = null, this.map2 = null, this.occluderBias = 0.05, this.samplingRadius = 20, this.attenuation = new s(1, 0.02), this.texelSize = new s(1 / 512, 1 / 512)
  }, n.extend(n.SSAOMaterial, n.Material, {
    getShaderID: function() {
      return 'ssao'
    },
    refreshUniformsCommon: function(e) {
      var t = this.uniforms
      t.map0.value = this.map, t.map1.value = this.map1, t.map2.value = this.map2, t.occluderBias.value = this.occluderBias, t.samplingRadius.value = this.samplingRadius, t.attenuation.value = this.attenuation, t.texelSize.value = this.texelSize
    }
  }), n.BasicMaterial = function(e) {
    n.Material.call(this), this._type = 'basic', this.color = new n.Color(16777215), this.map = null, this.setValues(e), this.offset = new s(0, 0), this.repeat = new s(1, 1)
  }, n.extend(n.BasicMaterial, n.Material, {
    getShaderID: function() {
      return 'basic'
    },
    clone: function() {
      var e = new n.BasicMaterial()
      return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e
    },
    getUniqueCode: function() {
      var e = this.color.r + this.color.g + this.color.b + ' ' + this.transparent + ' ' + this.visible + ' ' + this.opacity + ' ' + this.depthTest + '' + this.depthMask + ' ' + this.side + ' ' + this.wireframe + ' ' + this.wireframeLinewidth
      return e += this.repeat.x + ' ' + this.repeat.y + this.offset.x + ' ' + this.offset.y, this.map && (e += this.map.getUniqueCode()), e
    }
  }), n.LambertMaterial = function(e) {
    n.Material.call(this), this._type = 'basic', this.color = new n.Color(16777215), this.ambient = new n.Color(16777215), this.emissive = new n.Color(0), this.wrapAround = !1, this.wrapRGB = new n.Vec3(1, 1, 1), this.map = null, this.lightMap = null, this.specularMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = 0.98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e)
  }, n.extend(n.LambertMaterial, n.Material, {
    clone: function() {
      var e = new n.LambertMaterial()
      return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    },
    getShaderID: function() {
      return 'lambert'
    },
    refreshUniformsSpecific: function(e) {
      var t = this.uniforms
      e ? (t.ambient.value.copyGammaToLinear(this.ambient), t.emissive.value.copyGammaToLinear(this.emissive)) : (t.ambient.value = this.ambient, t.emissive.value = this.emissive), this.wrapAround && t.wrapRGB.value.copy(this.wrapRGB)
    }
  }), n.PhongMaterial = function(e) {
    n.Material.call(this), this._type = 'basic', this.color = new n.Color(16777215), this.ambient = new n.Color(16777215), this.emissive = new n.Color(0), this.specular = new n.Color(1118481), this.shininess = 30, this.metal = !1, this.perPixel = !0, this.wrapAround = !1, this.wrapRGB = new n.Vec3(1, 1, 1), this.map = null, this.lightMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new n.Vec2(1, 1), this.specularMap = null, this.envMap = null, this.combine = n.MultiplyOperation, this.reflectivity = 1, this.refractionRatio = 0.98, this.fog = !0, this.shading = n.SmoothShading, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = 'round', this.wireframeLinejoin = 'round', this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(e), this.offset = new s(0, 0), this.repeat = new s(1, 1)
  }, n.extend(n.PhongMaterial, n.Material, {
    getUniqueCode: function() {
      var e = 'phong ' + this.color.r + this.color.g + this.color.b + ' ' + this.transparent + ' ' + this.visible + ' ' + this.opacity + ' ' + this.depthTest + '' + this.depthMask + ' ' + this.side + ' ' + this.wireframe + ' ' + this.wireframeLinewidth
      return e += this.repeat.x + ' ' + this.repeat.y + this.offset.x + ' ' + this.offset.y, this.map && (e += this.map.getUniqueCode()), e
    },
    clone: function() {
      var e = new n.PhongMaterial()
      return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.ambient.copy(this.ambient), e.emissive.copy(this.emissive), e.specular.copy(this.specular), e.shininess = this.shininess, e.metal = this.metal, e.perPixel = this.perPixel, e.wrapAround = this.wrapAround, e.wrapRGB.copy(this.wrapRGB), e.map = this.map, e.lightMap = this.lightMap, e.bumpMap = this.bumpMap, e.bumpScale = this.bumpScale, e.normalMap = this.normalMap, e.normalScale.copy(this.normalScale), e.specularMap = this.specularMap, e.envMap = this.envMap, e.combine = this.combine, e.reflectivity = this.reflectivity, e.refractionRatio = this.refractionRatio, e.fog = this.fog, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.wireframeLinecap = this.wireframeLinecap, e.wireframeLinejoin = this.wireframeLinejoin, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    },
    getShaderID: function() {
      return 'phong'
    },
    refreshUniformsSpecific: function(e) {
      var t = this.uniforms
      t.shininess.value = this.shininess, e ? (t.ambient.value.copyGammaToLinear(this.ambient), t.emissive.value.copyGammaToLinear(this.emissive), t.specular.value.copyGammaToLinear(this.specular)) : (t.ambient.value = this.ambient, t.emissive.value = this.emissive, t.specular.value = this.specular), this.wrapAround && t.wrapRGB.value.copy(material.wrapRGB)
    }
  }), n.LineMaterial = function(e) {
    n.Material.call(this), this.color = new n.Color(16777215), this.linewidth = 1, this.linecap = 'round', this.linejoin = 'round', this.dashed = !0, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
  }, n.extend(n.LineMaterial, n.Material, {
    getUniqueCode: function() {
      return this.color.getUniqueCode + ' ' + this.linewidth + ' ' + this.dashed
    },
    clone: function() {
      var e = new n.LineMaterial()
      return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.linewidth = this.linewidth, e.linecap = this.linecap, e.linejoin = this.linejoin, e.dashed = this.dashed, e.scale = this.scale, e.dashSize = this.dashSize, e.gapSize = this.gapSize, e.vertexColors = this.vertexColors, e.fog = this.fog, e
    },
    getShaderID: function() {
      return this.dashed ? 'dashed' : 'basic'
    },
    refreshUniforms: function(e) {
      Zr(this.uniforms, this), this.dashed && ei(this.uniforms, this)
    }
  }), n.ArrayMaterial = function(e) {
    this.materials = e || []
  }, n.extend(n.ArrayMaterial, Object, {
    clone: function() {
      var e = new n.ArrayMaterial()
      for (var t = 0; t < this.materials.length; t++) {
        var r = this.materials[t],
          i = this.materials.indexOf(r)
        e.materials[i] != null ? e.materials.push(e.materials[i]) : e.materials.push(r.clone())
      }
      return e
    }
  }), n.BillboardMaterial = function(e) {
    n.Material.call(this), this.alignment = n.BillboardAlignment.center.clone(), this.fog = !1, this.color = new n.Color(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.offset = new n.Vec2(0, 0), this.repeat = new n.Vec2(1, 1), this.transparent = !0, this.setValues(e), this.depthMask = !0, this.vertical = !1, this.alphaTest = 0
  }, n.extend(n.BillboardMaterial, n.Material, {
    clone: function(e) {
      return e = e || new n.BillboardMaterial(), n.Material.prototype.clone.call(this, e), e.alignment.copy(this.alignment), e.color.copy(this.color), e.map = this.map, e.rotation = this.rotation, e.offset.copy(this.offset), e.repeat.copy(this.repeat), e.fog = this.fog, e.vertical = this.vertical, e.transparent = this.transparent, e.alphaTest = this.alphaTest, e
    },
    getUniqueCode: function() {
      var e = 'Billboard ' + this.color.r + this.color.g + this.color.b + ' ' + this.transparent + ' ' + this.visible + ' ' + this.opacity + ' ' + this.depthTest + '' + this.depthMask + ' ' + this.side + ' ' + this.wireframe + ' ' + this.wireframeLinewidth
      return e += this.vertical + ' ' + this.alphaTest + ' ' + this.alignment.x + ' ' + this.alignment.y, e += this.repeat.x + ' ' + this.repeat.y, e += this.offset.x + ' ' + this.offset.y, this.map && (e += this.map.getUniqueCode()), e
    }
  }), n.BillboardAlignment = {}, n.BillboardAlignment.topLeft = new n.Vec2(0.5, -0.5), n.BillboardAlignment.topCenter = new n.Vec2(0, -0.5), n.BillboardAlignment.topRight = new n.Vec2(-0.5, -0.5), n.BillboardAlignment.centerLeft = new n.Vec2(0.5, 0), n.BillboardAlignment.center = new n.Vec2(0, 0), n.BillboardAlignment.centerRight = new n.Vec2(-0.5, 0), n.BillboardAlignment.bottomLeft = new n.Vec2(0.5, 0.5), n.BillboardAlignment.bottomCenter = new n.Vec2(0, 0.5), n.BillboardAlignment.bottomRight = new n.Vec2(-0.5, 0.5)
  var ti = function(e) {
    n.Material.call(this), this.fragmentShader = 'void main() {}', this.vertexShader = 'void main() {}', this.uniforms = {}, this.defines = {}, this.attributes = null, this.shaderID = e.shaderID || 'depth', this._type = 'shader', this.shading = n.SmoothShading, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.vertexColors = n.NoColors, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv2: [0, 0]
    }, this.index0AttributeName = 'position', this.setValues(e)
  }
  n.ShaderMaterial = ti, n.extend(n.ShaderMaterial, n.Material, {
    clone: function() {
      var e = new n.ShaderMaterial()
      return n.Material.prototype.clone.call(this, e), e.fragmentShader = this.fragmentShader, e.vertexShader = this.vertexShader, e.uniforms = n.UniformsUtils.clone(this.uniforms), e.attributes = this.attributes, e.defines = this.defines, e.shading = this.shading, e.wireframe = this.wireframe, e.wireframeLinewidth = this.wireframeLinewidth, e.fog = this.fog, e.lights = this.lights, e.vertexColors = this.vertexColors, e.skinning = this.skinning, e.morphTargets = this.morphTargets, e.morphNormals = this.morphNormals, e
    },
    needUV: function() {
      return !0
    },
    getShaderID: function() {
      return null
    },
    refreshUniformsCommon: function(e, t) {}
  }), n.TransformGizmoMaterial = function(e) {
    n.BasicMaterial.call(this), this.depthTest = !1, this.depthMask = !1, this.side = n.DoubleSide, this.transparent = !0, this.setValues(e)
  }, n.extend(n.TransformGizmoMaterial, n.BasicMaterial, {
    getUniqueCode: function() {
      var e = this.id + 'TransformGizmo ' + this.color.r + this.color.g + this.color.b + ' ' + this.transparent + ' ' + this.visible + ' ' + this.opacity + ' ' + this.depthTest + '' + this.depthMask + ' ' + this.side + ' ' + this.wireframe + ' ' + this.wireframeLinewidth
      return this.map && (e += this.map.getUniqueCode()), e
    }
  })
  var ni = {
    pools: {},
    useTimes: {},
    size: 0,
    getMaterial: function(e) {
      return ni.pools[e]
    },
    setMaterial: function(e, t) {
      ni.size++, ni.pools[e] = t
    },
    useMaterial: function(e) {
      if (e) {
        var t = e.id,
          n = ni.useTimes[t] || 0
        n++, ni.useTimes[t] = n
      }
    },
    unUseMaterial: function(e) {
      if (e) {
        var t = e.id,
          n = ni.useTimes[t] || 0
        n--, ni.useTimes[t] = n
        if (n <= 0) {
          var r = e.getUniqueCode()
          delete ni.pools[r], ni.size--, e.dispose()
        }
      }
    }
  }
  n.MaterialPool = ni, ni.DefaultMaterial = new n.EntityMaterial(), ni.TestMaterial = new n.EntityMaterial(), ni.DefaultBillBoardMaterial = new n.BillboardMaterial(), ni.DefaultLineMaterial = new n.LineMaterial()
  var ri = {
    pools: {},
    useTimes: {},
    size: 0,
    getMaterial: function(e) {
      return ni.pools[e]
    },
    setMaterial: function(e, t) {
      ri.size++, ri.pools[e] = t
    },
    useMaterial: function(e) {
      if (e) {
        var t = e.id,
          n = ri.useTimes[t] || 0
        n++, ri.useTimes[t] = n
      }
    },
    unUseMaterial: function(e) {
      if (e) {
        var t = e.id,
          n = ri.useTimes[t] || 0
        n--, ri.useTimes[t] = n
        if (n <= 0) {
          var r = e.getUniqueCode()
          delete ri.pools[r], ri.size--, e.dispose()
        }
      }
    }
  }
  n.ParticleMaterial = function(e) {
    n.Material.call(this), this.color = new n.Color(16777215), this.map = null, this.size = 2, this.sizeAttenuation = !1, this.vertexColors = !1, this.fog = !0, this.setValues(e)
  }, n.extend(n.ParticleMaterial, n.Material, {
    clone: function() {
      var e = new n.ParticleMaterial()
      return n.Material.prototype.clone.call(this, e), e.color.copy(this.color), e.map = this.map, e.size = this.size, e.sizeAttenuation = this.sizeAttenuation, e.vertexColors = this.vertexColors, e.fog = this.fog, e
    },
    getShaderID: function() {
      return this.shaderID = 'particle_basic', this.shaderID
    },
    refreshUniforms: function(e) {
      ii(this.uniforms, this)
    }
  }), n.Light = function(e, t) {
    n.Element.call(this, t), this.color = new n.Color(e), this.ambient = new n.Color(), this.diffuse = new n.Color(), this.specular = new n.Color(), this.castShadow = !1, this.onlyShadow = !1
  }, n.extend(n.Light, n.Element, {
    __accessor: ['color', 'ambient', 'diffuse', 'specular'],
    constructor: n.Light,
    className: 'TGL.Light',
    setCastShadow: function(e) {
      this.castShadow = e
    },
    setOnlyShadow: function(e) {
      this.onlyShadow = e
    },
    refreshShadowUniforms: function(e, t) {
      var r = this
      if (e.shadowMatrix && r.castShadow) {
        if (r instanceof n.SpotLight || r instanceof n.DirectionalLight && !r.shadowCascade) return e.shadowMap.value[t] = r.shadowMap, e.shadowMapSize.value[t] = r.shadowMapSize, e.shadowMatrix.value[t] = r.shadowMatrix, e.shadowDarkness.value[t] = r.shadowDarkness, e.shadowBias.value[t] = r.shadowBias, !0
      }
    },
    refreshUniformsPointShadow: function(e, t) {
      var r = this
      if (e.pShadowMap && r.castShadow && r instanceof n.PointLight) return e.pShadowMap.value[t] = r.shadowMap, e.pShadowMapSize.value[t] = r.shadowMapSize, e.pShadowDarkness.value[t] = r.shadowDarkness || 0.5, e.pPosition.value[t] = r.getPosition(), !0
    }
  }), n.PositionLight = function() {}, n.PointLight = function(e, r, i, s) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var o = arguments[0]
      e = o.hex, r = o.intensity, i = o.intensity, s = o.id
    }
    n.Light.call(this, e, s), this.position = new n.Vec3(0, 0, 0), this.intensity = r !== t ? r : 1, this.distance = i !== t ? i : 0, this.shadowCameraNear = 10, this.shadowCameraFar = 1e4, this.shadowMapWidth = 512, this.shadowMapHeight = 512
  }, n.extend(n.PointLight, n.Light, {
    constructor: n.PointLight,
    className: 'TGL.PointLight',
    __accessor: ['intensity', 'distance']
  }), n.SpotLight = function(e, r, i, s, o) {
    n.Light.call(this, e), this._position = new n.Vec3(0, 1, 0), this.target = new n.Element(), this.intensity = r !== t ? r : 1, this.distance = i !== t ? i : 0, this.angle = s !== t ? s : Math.PI / 2, this.exponent = o !== t ? o : 10, this.shadowCameraNear = 100, this.shadowCameraFar = 5e3, this.shadowCameraFov = 50, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = 0.5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
  }, n.extend(n.SpotLight, n.Light, {
    __accessor: ['color', 'ambient', 'diffuse', 'specular', 'intensity', 'distance', 'angle', 'exponent'],
    constructor: n.SpotLight,
    className: 'TGL.SpotLight'
  }), n.DirectionalLight = function(e, r, i) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var s = arguments[0]
      e = s.hex, r = s.intensity, i = s.id
    }
    n.Light.call(this, e, i), this.direction = new n.Vec3(0, 1, 0), this.position = new n.Vec3(0, 1, 0), this.target = new n.Element(), this.intensity = r !== t ? r : 1, this.shadowCameraNear = 50, this.shadowCameraFar = 5e3, this.shadowCameraLeft = -500, this.shadowCameraRight = 500, this.shadowCameraTop = 500, this.shadowCameraBottom = -500, this.shadowCameraVisible = !1, this.shadowBias = 0, this.shadowDarkness = 0.5, this.shadowMapWidth = 512, this.shadowMapHeight = 512, this.shadowCascade = !1, this.shadowCascadeOffset = new n.Vec3(0, 0, -1e3), this.shadowCascadeCount = 2, this.shadowCascadeBias = [0, 0, 0], this.shadowCascadeWidth = [512, 512, 512], this.shadowCascadeHeight = [512, 512, 512], this.shadowCascadeNearZ = [-1, 0.99, 0.998], this.shadowCascadeFarZ = [0.99, 0.998, 1], this.shadowCascadeArray = [], this.shadowMap = null, this.shadowMapSize = null, this.shadowCamera = null, this.shadowMatrix = null
  }, n.extend(n.DirectionalLight, n.Light, {
    className: 'TGL.DirectionalLight'
  }), n.AmbientLight = function(e, t) {
    if (arguments.length === 1 && arguments[0] instanceof Object && !Array.isArray(arguments[0])) {
      var r = arguments[0]
      e = r.hex, t = r.id
    }
    n.Light.call(this, e, t)
  }, n.extend(n.AmbientLight, n.Light, {
    constructor: n.AmbientLight,
    className: 'TGL.AmbientLight',
    clone: function() {
      var e = new n.AmbientLight()
      return n.Light.prototype.clone.call(this, e), e
    }
  }), n.Camera = function() {
    n.Element.call(this), this.projectionMatrix = new n.Mat4(), this.projectionMatrixInverse = new n.Mat4(), this.worldMatrixInverse = new n.Mat4(), this.target = new n.Vec3(), this.setPosition(0, 0, 500), this.lookat = this.lookAt
  }, n.extend(n.Camera, n.Element, {
    constructor: n.Camera,
    updateCameraMatrix: function(e) {
      var t = this.matrix.clone()
      this.matrix.lookAt(this._position, this.target, this.up), this.rotationAutoUpdate && this._rotation.setEulerFromRotationMatrix(this.matrix), !t.equals(this.matrix) && e && this.firePropertyChange('matrix', t, this.matrix)
    },
    lookAt: function(e, n) {
      arguments.length === 3 && e.x === t ? (e = new mono.Vec3(arguments[0], arguments[1], arguments[2]), n = t) : arguments.length === 4 && e.x === t && (e = new mono.Vec3(arguments[0], arguments[1], arguments[2]), n = arguments[4]), n === t && (n = !0), this.target = e, this.updateCameraMatrix(n)
    },
    look: function(e) {
      arguments.length === 3 && e.x === t && (e = new mono.Vec3(arguments[0], arguments[1], arguments[2])), this.lookAt(e, !0)
    },
    onUpChanged: function(e, t) {
      this.updateCameraMatrix()
    },
    getTarget: function() {
      return this.target
    },
    t: function() {
      return this.getTarget()
    },
    getDistance: function() {
      return (new o()).subVectors(this._position, this.target).length()
    },
    setDistance: function(e) {
      var t = this.getDistance()
      this.zoom(e / t)
    },
    lookAtElement: function(e, t, r) {
      t instanceof o ? (r = t, t = this.getDistance()) : r = r || new o(0, 0, 1), e instanceof n.Element && (t = t || this.getDistance(), this.setPosition(e.worldPosition(r, t)), this.look(e.getWorldPosition()))
    },
    zoomOut: function(e) {
      this.zoom(1.1, e)
    },
    zoomIn: function(e) {
      this.zoom(0.9, e)
    },
    zoom: function(e, t) {
      if (e > 0) {
        var n = t || this.getDistance()
        n *= e
        var r = (new o()).addVectors(this.target, (new o()).subVectors(this._position, this.target).setLength(n))
        this.setPosition(r)
      }
    }
  }), n.OrthoCamera = function(e, t, r, i) {
    n.Camera.call(this), this.width = e || 1, this.aspect = t || 1, this.near = r || 0.1, this.far = i || 1e4, this.updateProjectionMatrix()
  }, n.extend(n.OrthoCamera, n.Camera, {
    constructor: n.OrthoCamera,
    className: 'TGL.OrthoCamera',
    __accessor: ['width', 'aspect', 'near', 'far'],
    updateProjectionMatrix: function() {
      var e = this.getDistance(),
        t = e * this.width / 2,
        n = -t,
        r = e / this.aspect * this.width / 2,
        i = -r
      this.projectionMatrix.makeOrthographic(n, t, r, i, this.near, this.far)
    },
    onPropertyChange: function() {
      this.updateProjectionMatrix()
    },
    updateCameraMatrix: function(e) {
      n.Camera.prototype.updateCameraMatrix.call(this, e), this.updateProjectionMatrix()
    }
  }), n.PerspectiveCamera = function(e, r, i, s) {
    n.Camera.call(this), this.fov = e !== t ? e : 50, this.aspect = r !== t ? r : 1, this.near = i !== t ? i : 1, this.far = s !== t ? s : 5e4, this.updateProjectionMatrix()
  }, n.extend(n.PerspectiveCamera, n.Camera, {
    constructor: n.PerspectiveCamera,
    className: 'TGL.PerspectiveCamera',
    __accessor: ['fov', 'aspect', 'near', 'far'],
    updateProjectionMatrix: function() {
      this.projectionMatrix.makePerspective(this.fov, this.aspect, this.near, this.far)
    },
    onPropertyChange: function() {
      this.updateProjectionMatrix()
    }
  }), n.CameraHelper = function(e) {
    function c(e, t, n) {
      h(e, n), h(t, n)
    }

    function h(e, i) {
      r.vertices.push(new n.Vec3()), r.colors.push(new n.Color(i)), s[e] === t && (s[e] = []), s[e].push(r.vertices.length - 1)
    }
    var r = new n.Entity(),
      i = new n.LineMaterial({
        color: 16777215,
        vertexColors: n.FaceColors
      }),
      s = {},
      o = 16755200,
      u = 16711680,
      a = 43775,
      f = 16777215,
      l = 3355443
    c('n1', 'n2', o), c('n2', 'n4', o), c('n4', 'n3', o), c('n3', 'n1', o), c('f1', 'f2', o), c('f2', 'f4', o), c('f4', 'f3', o), c('f3', 'f1', o), c('n1', 'f1', o), c('n2', 'f2', o), c('n3', 'f3', o), c('n4', 'f4', o), c('p', 'n1', u), c('p', 'n2', u), c('p', 'n3', u), c('p', 'n4', u), c('u1', 'u2', a), c('u2', 'u3', a), c('u3', 'u1', a), c('c', 't', f), c('p', 'c', l), c('cn1', 'cn2', l), c('cn3', 'cn4', l), c('cf1', 'cf2', l), c('cf3', 'cf4', l), n.Line.call(this, r.vertices, r.colors, i, n.LinePieces), this.camera = e, this.worldMatrix = e.worldMatrix, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
  }, n.CameraHelper.prototype = Object.create(n.Line.prototype), n.CameraHelper.prototype.update = (function() {
    var e = new n.Vec3(),
      r = new n.Camera(),
      i = new n.Projector()
    return function() {
      function u(s, o, u, a) {
        e.set(o, u, a), i.unprojectVector(e, r)
        var f = n.pointMap[s]
        if (f !== t) {
          for (var l = 0, c = f.length; l < c; l++) n.vertices[f[l]].copy(e)
        }
      }
      var n = this,
        s = 1,
        o = 1
      r.projectionMatrix.copy(this.camera.projectionMatrix), u('c', 0, 0, -1), u('t', 0, 0, 1), u('n1', -s, -o, -1), u('n2', s, -o, -1), u('n3', -s, o, -1), u('n4', s, o, -1), u('f1', -s, -o, 1), u('f2', s, -o, 1), u('f3', -s, o, 1), u('f4', s, o, 1), u('u1', s * 0.7, o * 1.1, -1), u('u2', -s * 0.7, o * 1.1, -1), u('u3', 0, o * 2, -1), u('cf1', -s, 0, 1), u('cf2', s, 0, 1), u('cf3', 0, -o, 1), u('cf4', 0, o, 1), u('cn1', -s, 0, -1), u('cn2', s, 0, -1), u('cn3', 0, -o, -1), u('cn4', 0, o, -1), this.verticesNeedUpdate = !0
    }
  }())
  var si = function() {
    n.Element.call(this)
  }
  si.prototype = Object.create(n.Element.prototype), si.prototype.updateworldMatrix = function(e) {
    this.matrixAutoUpdate && this.updateMatrix()
    if (this.worldMatrixNeedsUpdate || e) this._parent ? (this.worldMatrix.multiplyMatrices(this._parent.worldMatrix, this.matrix), this.worldMatrix.decompose(this.translationWorld, this.QuatWorld, this.scaleWorld), this.matrix.decompose(this.translationObject, this.QuatObject, this.scaleObject), this.worldMatrix.compose(this.translationWorld, this.QuatObject, this.scaleWorld)) : this.worldMatrix.copy(this.matrix), this.worldMatrixNeedsUpdate = !1, e = !0
    for (var t = 0, n = this.getChildren().size(); t < n; t++) this.getChildren().get(t).updateworldMatrix(e)
  }, si.prototype.translationWorld = new n.Vec3(), si.prototype.translationObject = new n.Vec3(), si.prototype.QuatWorld = new n.Quat(), si.prototype.QuatObject = new n.Quat(), si.prototype.scaleWorld = new n.Vec3(), si.prototype.scaleObject = new n.Vec3()
  var oi = function() {
    function v(e, t) {
      var r = new n.DirectionalLight()
      r.isVirtual = !0, r.onlyShadow = !0, r.castShadow = !0, r.shadowCameraNear = e.shadowCameraNear, r.shadowCameraFar = e.shadowCameraFar, r.shadowCameraLeft = e.shadowCameraLeft, r.shadowCameraRight = e.shadowCameraRight, r.shadowCameraBottom = e.shadowCameraBottom, r.shadowCameraTop = e.shadowCameraTop, r.shadowCameraVisible = e.shadowCameraVisible, r.shadowDarkness = e.shadowDarkness, r.shadowBias = e.shadowCascadeBias[t], r.shadowMapWidth = e.shadowCascadeWidth[t], r.shadowMapHeight = e.shadowCascadeHeight[t], r.pointsWorld = [], r.pointsFrustum = []
      var i = r.pointsWorld,
        s = r.pointsFrustum
      for (var o = 0; o < 8; o++) i[o] = new n.Vec3(), s[o] = new n.Vec3()
      var u = e.shadowCascadeNearZ[t],
        a = e.shadowCascadeFarZ[t]
      return s[0].set(-1, -1, u), s[1].set(1, -1, u), s[2].set(-1, 1, u), s[3].set(1, 1, u), s[4].set(-1, -1, a), s[5].set(1, -1, a), s[6].set(-1, 1, a), s[7].set(1, 1, a), r
    }

    function m(e, t) {
      var n = e.shadowCascadeArray[t]
      n.position.copy(e.position), n.target.position.copy(e.target.position), n.lookAt(n.target), n.shadowCameraVisible = e.shadowCameraVisible, n.shadowDarkness = e.shadowDarkness, n.shadowBias = e.shadowCascadeBias[t]
      var r = e.shadowCascadeNearZ[t],
        i = e.shadowCascadeFarZ[t],
        s = n.pointsFrustum
      s[0].z = r, s[1].z = r, s[2].z = r, s[3].z = r, s[4].z = i, s[5].z = i, s[6].z = i, s[7].z = i
    }

    function g(e, t) {
      var n = t.shadowCamera,
        r = t.pointsFrustum,
        i = t.pointsWorld
      h.set(Infinity, Infinity, Infinity), p.set(-Infinity, -Infinity, -Infinity)
      for (var s = 0; s < 8; s++) {
        var o = i[s]
        o.copy(r[s]), oi.__projector.unprojectVector(o, e), o.applyMatrix4(n.worldMatrixInverse), o.x < h.x && (h.x = o.x), o.x > p.x && (p.x = o.x), o.y < h.y && (h.y = o.y), o.y > p.y && (p.y = o.y), o.z < h.z && (h.z = o.z), o.z > p.z && (p.z = o.z)
      }
      n.left = h.x, n.right = p.x, n.top = p.y, n.bottom = h.y, n.updateProjectionMatrix()
    }

    function y(e) {
      return e.material instanceof n.ArrayMaterial ? e.material.materials[0] : e.material
    }
    var e, r, i, u, a, f, l = new n.Frustum(),
      c = new n.Mat4(),
      h = new n.Vec3(),
      p = new n.Vec3(),
      d = new n.Vec3()
    this.init = function(t) {
      e = t._gl, r = t
      var s = n.ShaderLib.depthRGBA,
        o = n.UniformsUtils.clone(s.uniforms)
      i = new ti({
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
        uniforms: o
      }), _depthCubeMaterial = new ti({
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
        uniforms: o,
        refreshUniformsCommon: function(e) {
          this.uniforms.isCube.value = 1
        }
      }), u = new ti({
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
        uniforms: o,
        morphTargets: !0
      }), a = new ti({
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
        uniforms: o,
        skinning: !0
      }), f = new ti({
        fragmentShader: s.fragmentShader,
        vertexShader: s.vertexShader,
        uniforms: o,
        morphTargets: !0,
        skinning: !0
      }), i._shadowPass = !0, u._shadowPass = !0, a._shadowPass = !0, f._shadowPass = !0
    }, this.render = function(e, t) {
      if (!r._shadowMapEnable) return
      this.update(e, t)
    }, this.update = function(h, p) {
      var b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P = [],
        H = 0,
        B = null
      e.clearColor(1, 1, 1, 1), e.disable(e.BLEND), e.enable(e.CULL_FACE), e.frontFace(e.CCW), r.shadowMapCullFace === n.CullFaceFront ? e.cullFace(e.FRONT) : e.cullFace(e.BACK), r.setDepthTest(!0)
      var j = h.getLights()
      for (b = 0, w = j.size(); b < w; b++) {
        _ = j.get(b)
        if (!_.castShadow) continue
        if (_ instanceof n.DirectionalLight && _.shadowCascade) {
          for (x = 0; x < _.shadowCascadeCount; x++) {
            var F
            if (!_.shadowCascadeArray[x]) {
              F = v(_, x), F.originalCamera = p
              var I = new si()
              I.position = _.shadowCascadeOffset, I.add(F), I.add(F.target), p.add(I), _.shadowCascadeArray[x] = F
            } else F = _.shadowCascadeArray[x]
            m(_, x), P[H] = F, H++
          }
        } else P[H] = _, H++
      }
      for (b = 0, w = P.length; b < w; b++) {
        _ = P[b]
        if (!_.shadowMap) {
          var q = n.LinearFilter
          r.shadowMapType === n.PCFSoftShadowMap && (q = n.NearestFilter)
          var R = {
            minFilter: q,
            magFilter: q,
            format: n.RGBAFormat
          }
          _ instanceof n.PointLight ? (_.shadowMap = new J(_.shadowMapWidth, _.shadowMapHeight, R), _.shadowMapSize = new s(_.shadowMapWidth, _.shadowMapHeight), _.shadowMatrix = new n.Mat4()) : (_.shadowMap = new $(_.shadowMapWidth, _.shadowMapHeight, R), _.shadowMapSize = new s(_.shadowMapWidth, _.shadowMapHeight), _.shadowMatrix = new n.Mat4())
        }
        if (!_.shadowCamera) {
          if (_ instanceof n.SpotLight) _.shadowCamera = new n.PerspectiveCamera(_.shadowCameraFov, _.shadowMapWidth / _.shadowMapHeight, _.shadowCameraNear, _.shadowCameraFar)
          else if (_ instanceof n.DirectionalLight) _.shadowCamera = new n.OrthoCamera(_.shadowCameraLeft, _.shadowCameraRight, _.shadowCameraTop, _.shadowCameraBottom, _.shadowCameraNear, _.shadowCameraFar)
          else {
            if (!(_ instanceof n.PointLight)) {
              console.error('Unsupported light type for shadow')
              continue
            }
            _.shadowCamera = new n.PerspectiveCamera(90, 1, _.shadowCameraNear, _.shadowCameraFar)
          }
          _.shadowCamera.updateWorldMatrix()
          var U = h.getRoots(),
            z = U.size(),
            W
          for (var X = 0; X < z; X++) W = U.get(X), W.updateWorldMatrix()
        }
        _.shadowCameraVisible && !_.cameraHelper && (_.cameraHelper = new n.CameraHelper(_.shadowCamera), _.shadowCamera.addChild(_.cameraHelper), _.shadowCamera.updateWorldMatrix(!0), r.helperBox.add(_.shadowCamera), r.helperBox.add(_.cameraHelper)), _.isVirtual && F.originalCamera == p && g(p, _)
        var V = _ instanceof n.PointLight ? 6 : 1,
          K = [new o(1, 0, 0), new o(-1, 0, 0), new o(0, 1, 0), new o(0, -1, 0), new o(0, 0, 1), new o(0, 0, -1)]
        for (var H = 0; H < V; H++) {
          if (_.debugFace != null && H != _.debugFace) continue
          T = _.shadowMap, N = _.shadowMatrix, C = _.shadowCamera, C._position.setFromMatrixPosition(_.worldMatrix), _.target ? d.setFromMatrixPosition(_.target.worldMatrix) : d = C._position.clone().add(K[H]), C.lookAt(d), C.updateWorldMatrix(!0), C.worldMatrixInverse.getInverse(C.worldMatrix), _.cameraHelper && (_.cameraHelper.visible = _.shadowCameraVisible), _.shadowCameraVisible && _.cameraHelper.update(), N.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), N.multiply(C.projectionMatrix), N.multiply(C.worldMatrixInverse), c.multiplyMatrices(C.projectionMatrix, C.worldMatrixInverse), l.setFromMatrix(c), T.activeCubeFace = H, r.debugPointLight == t && r.setRenderTarget(T), r.clear(), D = r.glNodeList
          for (E = 0, S = D.length; E < S; E++) O = D[E], M = O.node, O.render = !1, M._visible && M.castShadow && (!(M instanceof n.Node || M instanceof n.Particle) || !M.frustumCulled || l.intersectsObject(M)) && (M._modelViewMatrix.multiplyMatrices(C.worldMatrixInverse, M.worldMatrix), O.render = !0)
          var Q, G, Y
          for (E = 0, S = D.length; E < S; E++) O = D[E], O.render && (M = O.node, L = O.group, Q = y(M), G = !1, Y = !1, M.customDepthMaterial ? A = M.customDepthMaterial : Y ? A = G ? f : a : G ? A = u : V == 1 ? A = i : A = _depthCubeMaterial, M instanceof n.BufferNode || r.renderGroup(C, h.getLights(), A, L, M))
        }
      }
      var Z = r.getClearColor(),
        et = r.getClearAlpha()
      e.clearColor(Z.r, Z.g, Z.b, et), e.enable(e.BLEND), r.shadowMapCullFace === n.CullFaceFront && e.cullFace(e.BACK)
    }
  }
  oi.__projector = new n.Projector(), n.Picking = function(e, t, r, i, s, o) {
    this.network = o, this.origin = e, this.cameraUp = r, this.direction = t, this.near = i || 0, this.far = s || Infinity, this.ray = new n.Ray(e, t), this.ray.direction.length > 0 && this.ray.direction.normalize()
  }, n.Picking.testPlane = new n.Plane(1, 1), n.Picking.prototype = {
    constructor: n.Picking,
    precision: 1e-4,
    linePrecision: 2,
    matrixPosition: new n.Vec3(),
    set: function(e, t) {
      this.origin = e, this.direction = t, this.ray.set(e, t), this.ray.direction.length > 0 && this.ray.direction.normalize()
    },
    intersectObject: function(e, t, n) {
      var r = []
      return t === !0 && di(e, this, r, n), pi(e, this, r, n), r.sort(hi), r
    },
    intersectObjects: function(e, t, n) {
      e._as && (e = e._as)
      var r = []
      for (var i = 0, s = e.length; i < s; i++) pi(e[i], this, r, n, this.network), t === !0 && di(e[i], this, r, n, this.network)
      return r.sort(hi), r
    }
  }
  var ui = new n.Ray(),
    ai = new n.Mat4(),
    fi = new n.math.Plane(),
    li = new n.Vec3(),
    ci = new n.BoundingSphere(),
    mi = function(e) {
      arguments.length > 0 && this.init(e)
    }
  mi.prototype.init = function(e) {
    this.status = e, this.points = new Array()
  }, mi.prototype.appendPoint = function(e) {
    this.points.push(e)
  }, mi.prototype.appendPoints = function(e) {
    this.points = this.points.concat(e)
  }, mi.intersectShapes = function(e, t) {
    var n = e.getIntersectionParams(),
      r = t.getIntersectionParams(),
      i
    if (n != null && r != null) {
      if (n.name == 'Path') i = mi.intersectPathShape(e, t)
      else if (r.name == 'Path') i = mi.intersectPathShape(t, e)
      else {
        var s, o
        n.name < r.name ? (s = 'intersect' + n.name + r.name, o = n.params.concat(r.params)) : (s = 'intersect' + r.name + n.name, o = r.params.concat(n.params))
        if (!(s in mi)) throw new Error('Intersection not available: ' + s)
        i = mi[s].apply(null, o)
      }
    } else i = new mi('No Intersection')
    return i
  }, mi.intersectPathShape = function(e, t) {
    return e.intersectShape(t)
  }, mi.intersectBezier2Bezier2 = function(e, t, n, r, i, o) {
    var u, a, f, l, c, h, p, d, v = new mi('No Intersection'),
      m
    u = t.multiply(-2), f = e.add(u.add(n)), u = e.multiply(-2), a = t.multiply(2), l = u.add(a), c = new s(e.x, e.y), u = i.multiply(-2), h = r.add(u.add(o)), u = r.multiply(-2), a = i.multiply(2), p = u.add(a), d = new s(r.x, r.y)
    if (f.y == 0) {
      var g = f.x * (c.y - d.y),
        y = g - l.x * l.y,
        b = g + y,
        w = l.y * l.y
      m = new Polynomial(f.x * h.y * h.y, 2 * f.x * p.y * h.y, f.x * p.y * p.y - h.x * w - h.y * g - h.y * y, -p.x * w - p.y * g - p.y * y, (c.x - d.x) * w + (c.y - d.y) * y)
    } else {
      var g = f.x * h.y - f.y * h.x,
        y = f.x * p.y - p.x * f.y,
        b = l.x * f.y - l.y * f.x,
        w = c.y - d.y,
        E = f.y * (c.x - d.x) - f.x * w,
        S = -l.y * b + f.y * E,
        x = b * b
      m = new Polynomial(g * g, 2 * g * y, (-h.y * x + f.y * y * y + f.y * g * E + g * S) / f.y, (-p.y * x + f.y * y * E + y * S) / f.y, (w * x + E * S) / f.y)
    }
    var T = m.getRoots()
    for (var N = 0; N < T.length; N++) {
      var C = T[N]
      if (C >= 0 && C <= 1) {
        var k = (new Polynomial(f.x, l.x, c.x - d.x - C * p.x - C * C * h.x)).getRoots(),
          L = (new Polynomial(f.y, l.y, c.y - d.y - C * p.y - C * C * h.y)).getRoots()
        if (k.length > 0 && L.length > 0) {
          var A = 1e-4
          e: for (var O = 0; O < k.length; O++) {
            var M = k[O]
            if (M >= 0 && M <= 1) {
              for (var _ = 0; _ < L.length; _++) {
                if (Math.abs(M - L[_]) < A) {
                  v.points.push(h.multiply(C * C).add(p.multiply(C).add(d)))
                  break e
                }
              }
            }
          }
        }
      }
    }
    return v.points.length > 0 && (v.status = '$Intersection'), v
  }, mi.intersectBezier2Bezier3 = function(e, t, n, r, i, o, u) {
    var a, f, l, c, h, p, d, v, m, g, y, b = new mi('No Intersection')
    a = t.multiply(-2), h = e.add(a.add(n)), a = e.multiply(-2), f = t.multiply(2), p = a.add(f), d = new s(e.x, e.y), a = r.multiply(-1), f = i.multiply(3), l = o.multiply(-3), c = a.add(f.add(l.add(u))), v = new Vector2D(c.x, c.y), a = r.multiply(3), f = i.multiply(-6), l = o.multiply(3), c = a.add(f.add(l)), m = new Vector2D(c.x, c.y), a = r.multiply(-3), f = i.multiply(3), l = a.add(f), g = new Vector2D(l.x, l.y), y = new Vector2D(r.x, r.y)
    var w = d.x * d.x,
      E = d.y * d.y,
      S = p.x * p.x,
      x = p.y * p.y,
      T = h.x * h.x,
      N = h.y * h.y,
      C = y.x * y.x,
      k = y.y * y.y,
      L = g.x * g.x,
      A = g.y * g.y,
      O = m.x * m.x,
      M = m.y * m.y,
      _ = v.x * v.x,
      D = v.y * v.y,
      P = new Polynomial(-2 * h.x * h.y * v.x * v.y + T * D + N * _, -2 * h.x * h.y * m.x * v.y - 2 * h.x * h.y * m.y * v.x + 2 * N * m.x * v.x + 2 * T * m.y * v.y, -2 * h.x * g.x * h.y * v.y - 2 * h.x * h.y * g.y * v.x - 2 * h.x * h.y * m.x * m.y + 2 * g.x * N * v.x + N * O + T * (2 * g.y * v.y + M), 2 * d.x * h.x * h.y * v.y + 2 * d.y * h.x * h.y * v.x + p.x * p.y * h.x * v.y + p.x * p.y * h.y * v.x - 2 * y.x * h.x * h.y * v.y - 2 * h.x * y.y * h.y * v.x - 2 * h.x * g.x * h.y * m.y - 2 * h.x * h.y * g.y * m.x - 2 * d.x * N * v.x - 2 * d.y * T * v.y + 2 * y.x * N * v.x + 2 * g.x * N * m.x - x * h.x * v.x - S * h.y * v.y + T * (2 * y.y * v.y + 2 * g.y * m.y), 2 * d.x * h.x * h.y * m.y + 2 * d.y * h.x * h.y * m.x + p.x * p.y * h.x * m.y + p.x * p.y * h.y * m.x - 2 * y.x * h.x * h.y * m.y - 2 * h.x * y.y * h.y * m.x - 2 * h.x * g.x * h.y * g.y - 2 * d.x * N * m.x - 2 * d.y * T * m.y + 2 * y.x * N * m.x - x * h.x * m.x - S * h.y * m.y + L * N + T * (2 * y.y * m.y + A), 2 * d.x * h.x * h.y * g.y + 2 * d.y * h.x * g.x * h.y + p.x * p.y * h.x * g.y + p.x * p.y * g.x * h.y - 2 * y.x * h.x * h.y * g.y - 2 * h.x * y.y * g.x * h.y - 2 * d.x * g.x * N - 2 * d.y * T * g.y + 2 * y.x * g.x * N - x * h.x * g.x - S * h.y * g.y + 2 * T * y.y * g.y, -2 * d.x * d.y * h.x * h.y - d.x * p.x * p.y * h.y - d.y * p.x * p.y * h.x + 2 * d.x * h.x * y.y * h.y + 2 * d.y * y.x * h.x * h.y + p.x * y.x * p.y * h.y + p.x * p.y * h.x * y.y - 2 * y.x * h.x * y.y * h.y - 2 * d.x * y.x * N + d.x * x * h.x + d.y * S * h.y - 2 * d.y * T * y.y - y.x * x * h.x - S * y.y * h.y + w * N + E * T + C * N + T * k),
      H = P.getRootsInInterval(0, 1)
    for (var B = 0; B < H.length; B++) {
      var j = H[B],
        F = (new Polynomial(h.x, p.x, d.x - y.x - j * g.x - j * j * m.x - j * j * j * v.x)).getRoots(),
        I = (new Polynomial(h.y, p.y, d.y - y.y - j * g.y - j * j * m.y - j * j * j * v.y)).getRoots()
      if (F.length > 0 && I.length > 0) {
        var q = 1e-4
        e: for (var R = 0; R < F.length; R++) {
          var U = F[R]
          if (U >= 0 && U <= 1) {
            for (var z = 0; z < I.length; z++) {
              if (Math.abs(U - I[z]) < q) {
                b.points.push(v.multiply(j * j * j).add(m.multiply(j * j).add(g.multiply(j).add(y))))
                break e
              }
            }
          }
        }
      }
    }
    return b.points.length > 0 && (b.status = 'Intersection'), b
  }, mi.intersectBezier2Circle = function(e, t, n, r, i) {
    return mi.intersectBezier2Ellipse(e, t, n, r, i, i)
  }, mi.intersectBezier2Ellipse = function(e, t, n, r, i, o) {
    var u, a, f, l, c, h = new mi('No Intersection')
    u = t.multiply(-2), f = e.add(u.add(n)), u = e.multiply(-2), a = t.multiply(2), l = u.add(a), c = new s(e.x, e.y)
    var p = i * i,
      d = o * o,
      v = (new Polynomial(d * f.x * f.x + p * f.y * f.y, 2 * (d * f.x * l.x + p * f.y * l.y), d * (2 * f.x * c.x + l.x * l.x) + p * (2 * f.y * c.y + l.y * l.y) - 2 * (d * r.x * f.x + p * r.y * f.y), 2 * (d * l.x * (c.x - r.x) + p * l.y * (c.y - r.y)), d * (c.x * c.x + r.x * r.x) + p * (c.y * c.y + r.y * r.y) - 2 * (d * r.x * c.x + p * r.y * c.y) - p * d)).getRoots()
    for (var m = 0; m < v.length; m++) {
      var g = v[m]
      g >= 0 && g <= 1 && h.points.push(f.multiply(g * g).add(l.multiply(g).add(c)))
    }
    return h.points.length > 0 && (h.status = 'Intersection'), h
  }, mi.intersectBezier2Line = function(e, t, n, r, i) {
    var o, u, a, f, l, c, h, p = r.min(i),
      d = r.max(i),
      v = new mi('No Intersection')
    o = t.multiply(-2), a = e.add(o.add(n)), o = e.multiply(-2), u = t.multiply(2), f = o.add(u), l = new s(e.x, e.y), h = new Vector2D(r.y - i.y, i.x - r.x), c = r.x * i.y - i.x * r.y, roots = (new Polynomial(h.dot(a), h.dot(f), h.dot(l) + c)).getRoots()
    for (var m = 0; m < roots.length; m++) {
      var g = roots[m]
      if (g >= 0 && g <= 1) {
        var y = e.lerp(t, g),
          b = t.lerp(n, g),
          w = y.lerp(b, g)
        r.x == i.x ? p.y <= w.y && w.y <= d.y && (v.status = 'Intersection', v.appendPoint(w)) : r.y == i.y ? p.x <= w.x && w.x <= d.x && (v.status = 'Intersection', v.appendPoint(w)) : w.gte(p) && w.lte(d) && (v.status = 'Intersection', v.appendPoint(w))
      }
    }
    return v
  }, mi.intersectBezier2Polygon = function(e, t, n, r) {
    var i = new mi('No Intersection'),
      s = r.length
    for (var o = 0; o < s; o++) {
      var u = r[o],
        a = r[(o + 1) % s],
        f = mi.intersectBezier2Line(e, t, n, u, a)
      i.appendPoints(f.points)
    }
    return i.points.length > 0 && (i.status = 'Intersection'), i
  }, mi.intersectBezier2Rectangle = function(e, t, n, r, i) {
    var o = r.min(i),
      u = r.max(i),
      a = new s(u.x, o.y),
      f = new s(o.x, u.y),
      l = mi.intersectBezier2Line(e, t, n, o, a),
      c = mi.intersectBezier2Line(e, t, n, a, u),
      h = mi.intersectBezier2Line(e, t, n, u, f),
      p = mi.intersectBezier2Line(e, t, n, f, o),
      d = new mi('No Intersection')
    return d.appendPoints(l.points), d.appendPoints(c.points), d.appendPoints(h.points), d.appendPoints(p.points), d.points.length > 0 && (d.status = 'Intersection'), d
  }, mi.intersectBezier3Bezier3 = function(e, t, n, r, i, s, o, u) {
    var a, f, l, c, h, p, d, v, m, g, y, b, w = new mi('No Intersection')
    a = e.multiply(-1), f = t.multiply(3), l = n.multiply(-3), c = a.add(f.add(l.add(r))), h = new Vector2D(c.x, c.y), a = e.multiply(3), f = t.multiply(-6), l = n.multiply(3), c = a.add(f.add(l)), p = new Vector2D(c.x, c.y), a = e.multiply(-3), f = t.multiply(3), l = a.add(f), d = new Vector2D(l.x, l.y), v = new Vector2D(e.x, e.y), a = i.multiply(-1), f = s.multiply(3), l = o.multiply(-3), c = a.add(f.add(l.add(u))), m = new Vector2D(c.x, c.y), a = i.multiply(3), f = s.multiply(-6), l = o.multiply(3), c = a.add(f.add(l)), g = new Vector2D(c.x, c.y), a = i.multiply(-3), f = s.multiply(3), l = a.add(f), y = new Vector2D(l.x, l.y), b = new Vector2D(i.x, i.y)
    var E = v.x * v.x,
      S = v.x * v.x * v.x,
      x = v.y * v.y,
      T = v.y * v.y * v.y,
      N = d.x * d.x,
      C = d
        .x * d.x * d.x,
      k = d.y * d.y,
      L = d.y * d.y * d.y,
      A = p.x * p.x,
      O = p.x * p.x * p.x,
      M = p.y * p.y,
      _ = p.y * p.y * p.y,
      D = h.x * h.x,
      P = h.x * h.x * h.x,
      H = h.y * h.y,
      B = h.y * h.y * h.y,
      j = b.x * b.x,
      F = b.x * b.x * b.x,
      I = b.y * b.y,
      q = b.y * b.y * b.y,
      R = y.x * y.x,
      U = y.x * y.x * y.x,
      z = y.y * y.y,
      W = g.x * g.x,
      X = g.x * g.x * g.x,
      V = g.y * g.y,
      $ = m.x * m.x,
      J = m.x * m.x * m.x,
      K = m.y * m.y,
      Q = m.y * m.y * m.y,
      G = new Polynomial(-P * Q + B * J - 3 * h.x * H * $ * m.y + 3 * D * h.y * m.x * K, -6 * h.x * g.x * H * m.x * m.y + 6 * D * h.y * g.y * m.x * m.y + 3 * g.x * B * $ - 3 * P * g.y * K - 3 * h.x * H * g.y * $ + 3 * D * g.x * h.y * K, -6 * y.x * h.x * H * m.x * m.y - 6 * h.x * g.x * H * g.y * m.x + 6 * D * g.x * h.y * g.y * m.y + 3 * y.x * B * $ + 3 * W * B * m.x + 3 * y.x * D * h.y * K - 3 * h.x * y.y * H * $ - 3 * h.x * W * H * m.y + D * h.y * m.x * (6 * y.y * m.y + 3 * V) + P * (-y.y * K - 2 * V * m.y - m.y * (2 * y.y * m.y + V)), d.x * p.y * h.x * h.y * m.x * m.y - d.y * p.x * h.x * h.y * m.x * m.y + 6 * y.x * g.x * B * m.x + 3 * d.x * p.x * h.x * h.y * K + 6 * v.x * h.x * H * m.x * m.y - 3 * d.x * p.x * H * m.x * m.y - 3 * d.y * p.y * h.x * h.y * $ - 6 * v.y * D * h.y * m.x * m.y - 6 * b.x * h.x * H * m.x * m.y + 3 * d.y * p.y * D * m.x * m.y - 2 * p.x * M * h.x * m.x * m.y - 6 * y.x * h.x * g.x * H * m.y - 6 * y.x * h.x * H * g.y * m.x - 6 * h.x * y.y * g.x * H * m.x + 6 * y.x * D * h.y * g.y * m.y + 2 * A * p.y * h.y * m.x * m.y + X * B - 3 * v.x * B * $ + 3 * v.y * P * K + 3 * b.x * B * $ + _ * h.x * $ - O * h.y * K - 3 * v.x * D * h.y * K + 3 * v.y * h.x * H * $ - 2 * d.x * p.y * D * K + d.x * p.y * H * $ - d.y * p.x * D * K + 2 * d.y * p.x * H * $ + 3 * b.x * D * h.y * K - p.x * M * h.y * $ - 3 * b.y * h.x * H * $ + A * p.y * h.x * K - 3 * h.x * W * H * g.y + D * h.y * m.x * (6 * b.y * m.y + 6 * y.y * g.y) + D * g.x * h.y * (6 * y.y * m.y + 3 * V) + P * (-2 * y.y * g.y * m.y - b.y * K - g.y * (2 * y.y * m.y + V) - m.y * (2 * b.y * m.y + 2 * y.y * g.y)), 6 * d.x * p.x * h.x * h.y * g.y * m.y + d.x * p.y * h.x * g.x * h.y * m.y + d.x * p.y * h.x * h.y * g.y * m.x - d.y * p.x * h.x * g.x * h.y * m.y - d.y * p.x * h.x * h.y * g.y * m.x - 6 * d.y * p.y * h.x * g.x * h.y * m.x - 6 * v.x * g.x * B * m.x + 6 * b.x * g.x * B * m.x + 6 * v.y * P * g.y * m.y + 2 * _ * h.x * g.x * m.x - 2 * O * h.y * g.y * m.y + 6 * v.x * h.x * g.x * H * m.y + 6 * v.x * h.x * H * g.y * m.x + 6 * v.y * h.x * g.x * H * m.x - 3 * d.x * p.x * g.x * H * m.y - 3 * d.x * p.x * H * g.y * m.x + 2 * d.x * p.y * g.x * H * m.x + 4 * d.y * p.x * g.x * H * m.x - 6 * v.x * D * h.y * g.y * m.y - 6 * v.y * D * g.x * h.y * m.y - 6 * v.y * D * h.y * g.y * m.x - 4 * d.x * p.y * D * g.y * m.y - 6 * b.x * h.x * g.x * H * m.y - 6 * b.x * h.x * H * g.y * m.x - 2 * d.y * p.x * D * g.y * m.y + 3 * d.y * p.y * D * g.x * m.y + 3 * d.y * p.y * D * g.y * m.x - 2 * p.x * M * h.x * g.x * m.y - 2 * p.x * M * h.x * g.y * m.x - 2 * p.x * M * g.x * h.y * m.x - 6 * b.y * h.x * g.x * H * m.x - 6 * y.x * h.x * y.y * H * m.x - 6 * y.x * h.x * g.x * H * g.y + 6 * b.x * D * h.y * g.y * m.y + 2 * A * p.y * h.x * g.y * m.y + 2 * A * p.y * g.x * h.y * m.y + 2 * A * p.y * h.y * g.y * m.x + 3 * y.x * W * B + 3 * R * B * m.x - 3 * h.x * y.y * W * H - 3 * R * h.x * H * m.y + D * g.x * h.y * (6 * b.y * m.y + 6 * y.y * g.y) + D * h.y * m.x * (6 * b.y * g.y + 3 * z) + y.x * D * h.y * (6 * y.y * m.y + 3 * V) + P * (-2 * b.y * g.y * m.y - m.y * (2 * b.y * g.y + z) - y.y * (2 * y.y * m.y + V) - g.y * (2 * b.y * m.y + 2 * y.y * g.y)), d.x * y.x * p.y * h.x * h.y * m.y + d.x * p.y * h.x * y.y * h.y * m.x + d.x * p.y * h.x * g.x * h.y * g.y - d.y * p.x * y.x * h.x * h.y * m.y - d.y * p.x * h.x * y.y * h.y * m.x - d.y * p.x * h.x * g.x * h.y * g.y - 6 * d.y * y.x * p.y * h.x * h.y * m.x - 6 * v.x * y.x * B * m.x + 6 * b.x * y.x * B * m.x + 2 * y.x * _ * h.x * m.x + 6 * v.x * y.x * h.x * H * m.y + 6 * v.x * h.x * y.y * H * m.x + 6 * v.x * h.x * g.x * H * g.y + 6 * v.y * y.x * h.x * H * m.x - 3 * d.x * p.x * y.x * H * m.y - 3 * d.x * p.x * y.y * H * m.x - 3 * d.x * p.x * g.x * H * g.y + 2 * d.x * y.x * p.y * H * m.x + 4 * d.y * p.x * y.x * H * m.x - 6 * v.y * y.x * D * h.y * m.y - 6 * v.y * D * y.y * h.y * m.x - 6 * v.y * D * g.x * h.y * g.y - 6 * b.x * y.x * h.x * H * m.y - 6 * b.x * h.x * y.y * H * m.x - 6 * b.x * h.x * g.x * H * g.y + 3 * d.y * y.x * p.y * D * m.y - 3 * d.y * p.y * h.x * W * h.y + 3 * d.y * p.y * D * y.y * m.x + 3 * d.y * p.y * D * g.x * g.y - 2 * p.x * y.x * M * h.x * m.y - 2 * p.x * y.x * M * h.y * m.x - 2 * p.x * M * h.x * y.y * m.x - 2 * p.x * M * h.x * g.x * g.y - 6 * b.y * y.x * h.x * H * m.x - 6 * y.x * h.x * y.y * g.x * H + 6 * b.y * D * y.y * h.y * m.x + 2 * A * y.x * p.y * h.y * m.y + 2 * A * p.y * y.y * h.y * m.x + 2 * A * p.y * g.x * h.y * g.y - 3 * v.x * W * B + 3 * b.x * W * B + 3 * R * g.x * B + _ * h.x * W + 3 * v.y * h.x * W * H + d.x * p.y * W * H + 2 * d.y * p.x * W * H - p.x * M * W * h.y - 3 * b.y * h.x * W * H - 3 * R * h.x * H * g.y + A * p.y * h.x * (2 * y.y * m.y + V) + d.x * p.x * h.x * h.y * (6 * y.y * m.y + 3 * V) + y.x * D * h.y * (6 * b.y * m.y + 6 * y.y * g.y) + O * h.y * (-2 * y.y * m.y - V) + v.y * P * (6 * y.y * m.y + 3 * V) + d.y * p.x * D * (-2 * y.y * m.y - V) + d.x * p.y * D * (-4 * y.y * m.y - 2 * V) + v.x * D * h.y * (-6 * y.y * m.y - 3 * V) + D * g.x * h.y * (6 * b.y * g.y + 3 * z) + b.x * D * h.y * (6 * y.y * m.y + 3 * V) + P * (-2 * b.y * y.y * m.y - g.y * (2 * b.y * g.y + z) - b.y * (2 * y.y * m.y + V) - y.y * (2 * b.y * m.y + 2 * y.y * g.y)), -v.x * d.x * p.y * h.x * h.y * m.y + v.x * d.y * p.x * h.x * h.y * m.y + 6 * v.x * d.y * p.y * h.x * h.y * m.x - 6 * v.y * d.x * p.x * h.x * h.y * m.y - v.y * d.x * p.y * h.x * h.y * m.x + v.y * d.y * p.x * h.x * h.y * m.x + d.x * d.y * p.x * p.y * h.x * m.y - d.x * d.y * p.x * p.y * h.y * m.x + d.x * b.x * p.y * h.x * h.y * m.y + d.x * b.y * p.y * h.x * h.y * m.x + d.x * y.x * p.y * h.x * h.y * g.y + d.x * p.y * h.x * y.y * g.x * h.y - b.x * d.y * p.x * h.x * h.y * m.y - 6 * b.x * d.y * p.y * h.x * h.y * m.x - d.y * p.x * b.y * h.x * h.y * m.x - d.y * p.x * y.x * h.x * h.y * g.y - d.y * p.x * h.x * y.y * g.x * h.y - 6 * d.y * y.x * p.y * h.x * g.x * h.y - 6 * v.x * b.x * B * m.x - 6 * v.x * y.x * g.x * B - 2 * v.x * _ * h.x * m.x + 6 * b.x * y.x * g.x * B + 2 * b.x * _ * h.x * m.x + 2 * y.x * _ * h.x * g.x + 2 * v.y * O * h.y * m.y - 6 * v.x * v.y * h.x * H * m.x + 3 * v.x * d.x * p.x * H * m.y - 2 * v.x * d.x * p.y * H * m.x - 4 * v.x * d.y * p.x * H * m.x + 3 * v.y * d.x * p.x * H * m.x + 6 * v.x * v.y * D * h.y * m.y + 6 * v.x * b.x * h.x * H * m.y - 3 * v.x * d.y * p.y * D * m.y + 2 * v.x * p.x * M * h.x * m.y + 2 * v.x * p.x * M * h.y * m.x + 6 * v.x * b.y * h.x * H * m.x + 6 * v.x * y.x * h.x * H * g.y + 6 * v.x * h.x * y.y * g.x * H + 4 * v.y * d.x * p.y * D * m.y + 6 * v.y * b.x * h.x * H * m.x + 2 * v.y * d.y * p.x * D * m.y - 3 * v.y * d.y * p.y * D * m.x + 2 * v.y * p.x * M * h.x * m.x + 6 * v.y * y.x * h.x * g.x * H - 3 * d.x * b.x * p.x * H * m.y + 2 * d.x * b.x * p.y * H * m.x + d.x * d.y * M * h.x * m.x - 3 * d.x * p.x * b.y * H * m.x - 3 * d.x * p.x * y.x * H * g.y - 3 * d.x * p.x * y.y * g.x * H + 2 * d.x * y.x * p.y * g.x * H + 4 * b.x * d.y * p.x * H * m.x + 4 * d.y * p.x * y.x * g.x * H - 2 * v.x * A * p.y * h.y * m.y - 6 * v.y * b.x * D * h.y * m.y - 6 * v.y * b.y * D * h.y * m.x - 6 * v.y * y.x * D * h.y * g.y - 2 * v.y * A * p.y * h.x * m.y - 2 * v.y * A * p.y * h.y * m.x - 6 * v.y * D * y.y * g.x * h.y - d.x * d.y * A * h.y * m.y - 2 * d.x * k * h.x * h.y * m.x + 3 * b.x * d.y * p.y * D * m.y - 2 * b.x * p.x * M * h.x * m.y - 2 * b.x * p.x * M * h.y * m.x - 6 * b.x * b.y * h.x * H * m.x - 6 * b.x * y.x * h.x * H * g.y - 6 * b.x * h.x * y.y * g.x * H + 3 * d.y * b.y * p.y * D * m.x + 3 * d.y * y.x * p.y * D * g.y + 3 * d.y * p.y * D * y.y * g.x - 2 * p.x * b.y * M * h.x * m.x - 2 * p.x * y.x * M * h.x * g.y - 2 * p.x * y.x * M * g.x * h.y - 2 * p.x * M * h.x * y.y * g.x - 6 * b.y * y.x * h.x * g.x * H - k * p.x * p.y * h.x * m.x + 2 * b.x * A * p.y * h.y * m.y + 6 * b.y * D * y.y * g.x * h.y + 2 * N * d.y * h.x * h.y * m.y + N * p.x * p.y * h.y * m.y + 2 * A * b.y * p.y * h.y * m.x + 2 * A * y.x * p.y * h.y * g.y + 2 * A * p.y * y.y * g.x * h.y + U * B + 3 * E * B * m.x - 3 * x * P * m.y + 3 * j * B * m.x + L * D * m.x - C * H * m.y - d.x * k * D * m.y + N * d.y * H * m.x - 3 * E * h.x * H * m.y + 3 * x * D * h.y * m.x - N * M * h.x * m.y + k * A * h.y * m.x - 3 * R * h.x * y.y * H - 3 * j * h.x * H * m.y + 3 * I * D * h.y * m.x + d.x * p.x * h.x * h.y * (6 * b.y * m.y + 6 * y.y * g.y) + O * h.y * (-2 * b.y * m.y - 2 * y.y * g.y) + v.y * P * (6 * b.y * m.y + 6 * y.y * g.y) + d.y * p.x * D * (-2 * b.y * m.y - 2 * y.y * g.y) + A * p.y * h.x * (2 * b.y * m.y + 2 * y.y * g.y) + d.x * p.y * D * (-4 * b.y * m.y - 4 * y.y * g.y) + v.x * D * h.y * (-6 * b.y * m.y - 6 * y.y * g.y) + b.x * D * h.y * (6 * b.y * m.y + 6 * y.y * g.y) + y.x * D * h.y * (6 * b.y * g.y + 3 * z) + P * (-2 * b.y * y.y * g.y - I * m.y - y.y * (2 * b.y * g.y + z) - b.y * (2 * b.y * m.y + 2 * y.y * g.y)), -v.x * d.x * p.y * h.x * h.y * g.y + v.x * d.y * p.x * h.x * h.y * g.y + 6 * v.x * d.y * p.y * h.x * g.x * h.y - 6 * v.y * d.x * p.x * h.x * h.y * g.y - v.y * d.x * p.y * h.x * g.x * h.y + v.y * d.y * p.x * h.x * g.x * h.y + d.x * d.y * p.x * p.y * h.x * g.y - d.x * d.y * p.x * p.y * g.x * h.y + d.x * b.x * p.y * h.x * h.y * g.y + d.x * b.y * p.y * h.x * g.x * h.y + d.x * y.x * p.y * h.x * y.y * h.y - b.x * d.y * p.x * h.x * h.y * g.y - 6 * b.x * d.y * p.y * h.x * g.x * h.y - d.y * p.x * b.y * h.x * g.x * h.y - d.y * p.x * y.x * h.x * y.y * h.y - 6 * v.x * b.x * g.x * B - 2 * v.x * _ * h.x * g.x + 2 * b.x * _ * h.x * g.x + 2 * v.y * O * h.y * g.y - 6 * v.x * v.y * h.x * g.x * H + 3 * v.x * d.x * p.x * H * g.y - 2 * v.x * d.x * p.y * g.x * H - 4 * v.x * d.y * p.x * g.x * H + 3 * v.y * d.x * p.x * g.x * H + 6 * v.x * v.y * D * h.y * g.y + 6 * v.x * b.x * h.x * H * g.y - 3 * v.x * d.y * p.y * D * g.y + 2 * v.x * p.x * M * h.x * g.y + 2 * v.x * p.x * M * g.x * h.y + 6 * v.x * b.y * h.x * g.x * H + 6 * v.x * y.x * h.x * y.y * H + 4 * v.y * d.x * p.y * D * g.y + 6 * v.y * b.x * h.x * g.x * H + 2 * v.y * d.y * p.x * D * g.y - 3 * v.y * d.y * p.y * D * g.x + 2 * v.y * p.x * M * h.x * g.x - 3 * d.x * b.x * p.x * H * g.y + 2 * d.x * b.x * p.y * g.x * H + d.x * d.y * M * h.x * g.x - 3 * d.x * p.x * b.y * g.x * H - 3 * d.x * p.x * y.x * y.y * H + 4 * b.x * d.y * p.x * g.x * H - 2 * v.x * A * p.y * h.y * g.y - 6 * v.y * b.x * D * h.y * g.y - 6 * v.y * b.y * D * g.x * h.y - 6 * v.y * y.x * D * y.y * h.y - 2 * v.y * A * p.y * h.x * g.y - 2 * v.y * A * p.y * g.x * h.y - d.x * d.y * A * h.y * g.y - 2 * d.x * k * h.x * g.x * h.y + 3 * b.x * d.y * p.y * D * g.y - 2 * b.x * p.x * M * h.x * g.y - 2 * b.x * p.x * M * g.x * h.y - 6 * b.x * b.y * h.x * g.x * H - 6 * b.x * y.x * h.x * y.y * H + 3 * d.y * b.y * p.y * D * g.x + 3 * d.y * y.x * p.y * D * y.y - 2 * p.x * b.y * M * h.x * g.x - 2 * p.x * y.x * M * h.x * y.y - k * p.x * p.y * h.x * g.x + 2 * b.x * A * p.y * h.y * g.y - 3 * d.y * R * p.y * h.x * h.y + 6 * b.y * y.x * D * y.y * h.y + 2 * N * d.y * h.x * h.y * g.y + N * p.x * p.y * h.y * g.y + 2 * A * b.y * p.y * g.x * h.y + 2 * A * y.x * p.y * y.y * h.y - 3 * v.x * R * B + 3 * b.x * R * B + 3 * E * g.x * B - 3 * x * P * g.y + 3 * j * g.x * B + R * _ * h.x + L * D * g.x - C * H * g.y + 3 * v.y * R * h.x * H - d.x * k * D * g.y + d.x * R * p.y * H + 2 * d.y * p.x * R * H + N * d.y * g.x * H - p.x * R * M * h.y - 3 * b.y * R * h.x * H - 3 * E * h.x * H * g.y + 3 * x * D * g.x * h.y - N * M * h.x * g.y + k * A * g.x * h.y - 3 * j * h.x * H * g.y + 3 * I * D * g.x * h.y + A * p.y * h.x * (2 * b.y * g.y + z) + d.x * p.x * h.x * h.y * (6 * b.y * g.y + 3 * z) + O * h.y * (-2 * b.y * g.y - z) + v.y * P * (6 * b.y * g.y + 3 * z) + d.y * p.x * D * (-2 * b.y * g.y - z) + d.x * p.y * D * (-4 * b.y * g.y - 2 * z) + v.x * D * h.y * (-6 * b.y * g.y - 3 * z) + b.x * D * h.y * (6 * b.y * g.y + 3 * z) + P * (-2 * b.y * z - I * g.y - b.y * (2 * b.y * g.y + z)), -v.x * d.x * p.y * h.x * y.y * h.y + v.x * d.y * p.x * h.x * y.y * h.y + 6 * v.x * d.y * y.x * p.y * h.x * h.y - 6 * v.y * d.x * p.x * h.x * y.y * h.y - v.y * d.x * y.x * p.y * h.x * h.y + v.y * d.y * p.x * y.x * h.x * h.y - d.x * d.y * p.x * y.x * p.y * h.y + d.x * d.y * p.x * p.y * h.x * y.y + d.x * b.x * p.y * h.x * y.y * h.y + 6 * d.x * p.x * b.y * h.x * y.y * h.y + d.x * b.y * y.x * p.y * h.x * h.y - b.x * d.y * p.x * h.x * y.y * h.y - 6 * b.x * d.y * y.x * p.y * h.x * h.y - d.y * p.x * b.y * y.x * h.x * h.y - 6 * v.x * b.x * y.x * B - 2 * v.x * y.x * _ * h.x + 6 * v.y * b.y * P * y.y + 2 * b.x * y.x * _ * h.x + 2 * v.y * O * y.y * h.y - 2 * O * b.y * y.y * h.y - 6 * v.x * v.y * y.x * h.x * H + 3 * v.x * d.x * p.x * y.y * H - 2 * v.x * d.x * y.x * p.y * H - 4 * v.x * d.y * p.x * y.x * H + 3 * v.y * d.x * p.x * y.x * H + 6 * v.x * v.y * D * y.y * h.y + 6 * v.x * b.x * h.x * y.y * H - 3 * v.x * d.y * p.y * D * y.y + 2 * v.x * p.x * y.x * M * h.y + 2 * v.x * p.x * M * h.x * y.y + 6 * v.x * b.y * y.x * h.x * H + 4 * v.y * d.x * p.y * D * y.y + 6 * v.y * b.x * y.x * h.x * H + 2 * v.y * d.y * p.x * D * y.y - 3 * v.y * d.y * y.x * p.y * D + 2 * v.y * p.x * y.x * M * h.x - 3 * d.x * b.x * p.x * y.y * H + 2 * d.x * b.x * y.x * p.y * H + d.x * d.y * y.x * M * h.x - 3 * d.x * p.x * b.y * y.x * H + 4 * b.x * d.y * p.x * y.x * H - 6 * v.x * b.y * D * y.y * h.y - 2 * v.x * A * p.y * y.y * h.y - 6 * v.y * b.x * D * y.y * h.y - 6 * v.y * b.y * y.x * D * h.y - 2 * v.y * A * y.x * p.y * h.y - 2 * v.y * A * p.y * h.x * y.y - d.x * d.y * A * y.y * h.y - 4 * d.x * b.y * p.y * D * y.y - 2 * d.x * k * y.x * h.x * h.y + 3 * b.x * d.y * p.y * D * y.y - 2 * b.x * p.x * y.x * M * h.y - 2 * b.x * p.x * M * h.x * y.y - 6 * b.x * b.y * y.x * h.x * H - 2 * d.y * p.x * b.y * D * y.y + 3 * d.y * b.y * y.x * p.y * D - 2 * p.x * b.y * y.x * M * h.x - k * p.x * y.x * p.y * h.x + 6 * b.x * b.y * D * y.y * h.y + 2 * b.x * A * p.y * y.y * h.y + 2 * N * d.y * h.x * y.y * h.y + N * p.x * p.y * y.y * h.y + 2 * A * b.y * y.x * p.y * h.y + 2 * A * b.y * p.y * h.x * y.y + 3 * E * y.x * B - 3 * x * P * y.y + 3 * j * y.x * B + L * y.x * D - C * y.y * H - 3 * I * P * y.y - d.x * k * D * y.y + N * d.y * y.x * H - 3 * E * h.x * y.y * H + 3 * x * y.x * D * h.y - N * M * h.x * y.y + k * A * y.x * h.y - 3 * j * h.x * y.y * H + 3 * I * y.x * D * h.y, v.x * v.y * d.x * p.y * h.x * h.y - v.x * v.y * d.y * p.x * h.x * h.y + v.x * d.x * d.y * p.x * p.y * h.y - v.y * d.x * d.y * p.x * p.y * h.x - v.x * d.x * b.y * p.y * h.x * h.y + 6 * v.x * b.x * d.y * p.y * h.x * h.y + v.x * d.y * p.x * b.y * h.x * h.y - v.y * d.x * b.x * p.y * h.x * h.y - 6 * v.y * d.x * p.x * b.y * h.x * h.y + v.y * b.x * d.y * p.x * h.x * h.y - d.x * b.x * d.y * p.x * p.y * h.y + d.x * d.y * p.x * b.y * p.y * h.x + d.x * b.x * b.y * p.y * h.x * h.y - b.x * d.y * p.x * b.y * h.x * h.y - 2 * v.x * b.x * _ * h.x + 2 * v.y * O * b.y * h.y - 3 * v.x * v.y * d.x * p.x * H - 6 * v.x * v.y * b.x * h.x * H + 3 * v.x * v.y * d.y * p.y * D - 2 * v.x * v.y * p.x * M * h.x - 2 * v.x * d.x * b.x * p.y * H - v.x * d.x * d.y * M * h.x + 3 * v.x * d.x * p.x * b.y * H - 4 * v.x * b.x * d.y * p.x * H + 3 * v.y * d.x * b.x * p.x * H + 6 * v.x * v.y * b.y * D * h.y + 2 * v.x * v.y * A * p.y * h.y + 2 * v.x * d.x * k * h.x * h.y + 2 * v.x * b.x * p.x * M * h.y + 6 * v.x * b.x * b.y * h.x * H - 3 * v.x * d.y * b.y * p.y * D + 2 * v.x * p.x * b.y * M * h.x + v.x * k * p.x * p.y * h.x + v.y * d.x * d.y * A * h.y + 4 * v.y * d.x * b.y * p.y * D - 3 * v.y * b.x * d.y * p.y * D + 2 * v.y * b.x * p.x * M * h.x + 2 * v.y * d.y * p.x * b.y * D + d.x * b.x * d.y * M * h.x - 3 * d.x * b.x * p.x * b.y * H - 2 * v.x * A * b.y * p.y * h.y - 6 * v.y * b.x * b.y * D * h.y - 2 * v.y * b.x * A * p.y * h.y - 2 * v.y * N * d.y * h.x * h.y - v.y * N * p.x * p.y * h.y - 2 * v.y * A * b.y * p.y * h.x - 2 * d.x * b.x * k * h.x * h.y - d.x * d.y * A * b.y * h.y + 3 * b.x * d.y * b.y * p.y * D - 2 * b.x * p.x * b.y * M * h.x - b.x * k * p.x * p.y * h.x + 3 * x * d.x * p.x * h.x * h.y + 3 * d.x * p.x * I * h.x * h.y + 2 * b.x * A * b.y * p.y * h.y - 3 * E * d.y * p.y * h.x * h.y + 2 * N * d.y * b.y * h.x * h.y + N * p.x * b.y * p.y * h.y - 3 * j * d.y * p.y * h.x * h.y - S * B + T * P + F * B - q * P - 3 * v.x * j * B - v.x * L * D + 3 * E * b.x * B + v.y * C * H + 3 * v.y * I * P + b.x * L * D + E * _ * h.x - 3 * x * b.y * P - x * O * h.y + j * _ * h.x - C * b.y * H - O * I * h.y - v.x * N * d.y * H + v.y * d.x * k * D - 3 * v.x * x * D * h.y - v.x * k * A * h.y + v.y * N * M * h.x - d.x * k * b.y * D + 3 * E * v.y * h.x * H + E * d.x * p.y * H + 2 * E * d.y * p.x * H - 2 * x * d.x * p.y * D - x * d.y * p.x * D + N * b.x * d.y * H - 3 * v.x * I * D * h.y + 3 * v.y * j * h.x * H + d.x * j * p.y * H - 2 * d.x * I * p.y * D + b.x * k * A * h.y - d.y * p.x * I * D - E * p.x * M * h.y - 3 * E * b.y * h.x * H + 3 * x * b.x * D * h.y + x * A * p.y * h.x - N * b.y * M * h.x + 2 * j * d.y * p.x * H + 3 * b.x * I * D * h.y - j * p.x * M * h.y - 3 * j * b.y * h.x * H + A * I * p.y * h.x),
      Y = G.getRootsInInterval(0, 1)
    for (var Z = 0; Z < Y.length; Z++) {
      var et = Y[Z],
        tt = (new Polynomial(h.x, p.x, d.x, v.x - b.x - et * y.x - et * et * g.x - et * et * et * m.x)).getRoots(),
        nt = (new Polynomial(h.y, p.y, d.y, v.y - b.y - et * y.y - et * et * g.y - et * et * et * m.y)).getRoots()
      if (tt.length > 0 && nt.length > 0) {
        var rt = 1e-4
        e: for (var it = 0; it < tt.length; it++) {
          var st = tt[it]
          if (st >= 0 && st <= 1) {
            for (var ot = 0; ot < nt.length; ot++) {
              if (Math.abs(st - nt[ot]) < rt) {
                w.points.push(m.multiply(et * et * et).add(g.multiply(et * et).add(y.multiply(et).add(b))))
                break e
              }
            }
          }
        }
      }
    }
    return w.points.length > 0 && (w.status = 'Intersection'), w
  }, mi.intersectBezier3Circle = function(e, t, n, r, i, s) {
    return mi.intersectBezier3Ellipse(e, t, n, r, i, s, s)
  }, mi.intersectBezier3Ellipse = function(e, t, n, r, i, s, o) {
    var u, a, f, l, c, h, p, d, v = new mi('No Intersection')
    u = e.multiply(-1), a = t.multiply(3), f = n.multiply(-3), l = u.add(a.add(f.add(r))), c = new Vector2D(l.x, l.y), u = e.multiply(3), a = t.multiply(-6), f = n.multiply(3), l = u.add(a.add(f)), h = new Vector2D(l.x, l.y), u = e.multiply(-3), a = t.multiply(3), f = u.add(a), p = new Vector2D(f.x, f.y), d = new Vector2D(e.x, e.y)
    var m = s * s,
      g = o * o,
      y = new Polynomial(c.x * c.x * g + c.y * c.y * m, 2 * (c.x * h.x * g + c.y * h.y * m), 2 * (c.x * p.x * g + c.y * p.y * m) + h.x * h.x * g + h.y * h.y * m, 2 * c.x * g * (d.x - i.x) + 2 * c.y * m * (d.y - i.y) + 2 * (h.x * p.x * g + h.y * p.y * m), 2 * h.x * g * (d.x - i.x) + 2 * h.y * m * (d.y - i.y) + p.x * p.x * g + p.y * p.y * m, 2 * p.x * g * (d.x - i.x) + 2 * p.y * m * (d.y - i.y), d.x * d.x * g - 2 * d.y * i.y * m - 2 * d.x * i.x * g + d.y * d.y * m + i.x * i.x * g + i.y * i.y * m - m * g),
      b = y.getRootsInInterval(0, 1)
    for (var w = 0; w < b.length; w++) {
      var E = b[w]
      v.points.push(c.multiply(E * E * E).add(h.multiply(E * E).add(p.multiply(E).add(d))))
    }
    return v.points.length > 0 && (v.status = 'Intersection'), v
  }, mi.intersectBezier3Line = function(e, t, n, r, i, s) {
    var o, u, a, f, l, c, h, p, d, v, m = i.min(s),
      g = i.max(s),
      y = new mi('No Intersection')
    o = e.multiply(-1), u = t.multiply(3), a = n.multiply(-3), f = o.add(u.add(a.add(r))), l = new Vector2D(f.x, f.y), o = e.multiply(3), u = t.multiply(-6), a = n.multiply(3), f = o.add(u.add(a)), c = new Vector2D(f.x, f.y), o = e.multiply(-3), u = t.multiply(3), a = o.add(u), h = new Vector2D(a.x, a.y), p = new Vector2D(e.x, e.y), v = new Vector2D(i.y - s.y, s.x - i.x), d = i.x * s.y - s.x * i.y, roots = (new Polynomial(v.dot(l), v.dot(c), v.dot(h), v.dot(p) + d)).getRoots()
    for (var b = 0; b < roots.length; b++) {
      var w = roots[b]
      if (w >= 0 && w <= 1) {
        var E = e.lerp(t, w),
          S = t.lerp(n, w),
          x = n.lerp(r, w),
          T = E.lerp(S, w),
          N = S.lerp(x, w),
          C = T.lerp(N, w)
        i.x == s.x ? m.y <= C.y && C.y <= g.y && (y.status = 'Intersection', y.appendPoint(C)) : i.y == s.y ? m.x <= C.x && C.x <= g.x && (y.status = 'Intersection', y.appendPoint(C)) : C.gte(m) && C.lte(g) && (y.status = 'Intersection', y.appendPoint(C))
      }
    }
    return y
  }, mi.intersectBezier3Polygon = function(e, t, n, r, i) {
    var s = new mi('No Intersection'),
      o = i.length
    for (var u = 0; u < o; u++) {
      var a = i[u],
        f = i[(u + 1) % o],
        l = mi.intersectBezier3Line(e, t, n, r, a, f)
      s.appendPoints(l.points)
    }
    return s.points.length > 0 && (s.status = 'Intersection'), s
  }, mi.intersectBezier3Rectangle = function(e, t, n, r, i, o) {
    var u = i.min(o),
      a = i.max(o),
      f = new s(a.x, u.y),
      l = new s(u.x, a.y),
      c = mi.intersectBezier3Line(e, t, n, r, u, f),
      h = mi.intersectBezier3Line(e, t, n, r, f, a),
      p = mi.intersectBezier3Line(e, t, n, r, a, l),
      d = mi.intersectBezier3Line(e, t, n, r, l, u),
      v = new mi('No Intersection')
    return v.appendPoints(c.points), v.appendPoints(h.points), v.appendPoints(p.points), v.appendPoints(d.points), v.points.length > 0 && (v.status = 'Intersection'), v
  }, mi.intersectCircleCircle = function(e, t, n, r) {
    var i, o = t + r,
      u = Math.abs(t - r),
      a = e.distanceFrom(n)
    if (a > o) i = new mi('Outside')
    else if (a < u) i = new mi('Inside')
    else {
      i = new mi('Intersection')
      var f = (t * t - r * r + a * a) / (2 * a),
        l = Math.sqrt(t * t - f * f),
        c = e.lerp(n, f / a),
        h = l / a
      i.points.push(new s(c.x - h * (n.y - e.y), c.y + h * (n.x - e.x))), i.points.push(new s(c.x + h * (n.y - e.y), c.y - h * (n.x - e.x)))
    }
    return i
  }, mi.intersectCircleEllipse = function(e, t, n, r, i) {
    return mi.intersectEllipseEllipse(e, t, t, n, r, i)
  }, mi.intersectCircleLine = function(e, t, n, r) {
    var i, s = (r.x - n.x) * (r.x - n.x) + (r.y - n.y) * (r.y - n.y),
      o = 2 * ((r.x - n.x) * (n.x - e.x) + (r.y - n.y) * (n.y - e.y)),
      u = e.x * e.x + e.y * e.y + n.x * n.x + n.y * n.y - 2 * (e.x * n.x + e.y * n.y) - t * t,
      a = o * o - 4 * s * u
    if (a < 0) i = new mi('Outside')
    else if (a == 0) i = new mi('Tangent')
    else {
      var f = Math.sqrt(a),
        l = (-o + f) / (2 * s),
        c = (-o - f) / (2 * s);
      (l < 0 || l > 1) && (c < 0 || c > 1) ? l < 0 && c < 0 || l > 1 && c > 1 ? i = new mi('Outside') : i = new mi('Inside') : (i = new mi('Intersection'), l >= 0 && l <= 1 && i.points.push(n.lerp(r, l)), c >= 0 && c <= 1 && i.points.push(n.lerp(r, c)))
    }
    return i
  }, mi.intersectCirclePolygon = function(e, t, n) {
    var r = new mi('No Intersection'),
      i = n.length,
      s
    for (var o = 0; o < i; o++) {
      var u = n[o],
        a = n[(o + 1) % i]
      s = mi.intersectCircleLine(e, t, u, a), r.appendPoints(s.points)
    }
    return r.points.length > 0 ? r.status = 'Intersection' : r.status = s.status, r
  }, mi.intersectCircleRectangle = function(e, t, n, r) {
    var i = n.min(r),
      o = n.max(r),
      u = new s(o.x, i.y),
      a = new s(i.x, o.y),
      f = mi.intersectCircleLine(e, t, i, u),
      l = mi.intersectCircleLine(e, t, u, o),
      c = mi.intersectCircleLine(e, t, o, a),
      h = mi.intersectCircleLine(e, t, a, i),
      p = new mi('No Intersection')
    return p.appendPoints(f.points), p.appendPoints(l.points), p.appendPoints(c.points), p.appendPoints(h.points), p.points.length > 0 ? p.status = 'Intersection' : p.status = f.status, p
  }, mi.intersectEllipseEllipse = function(e, t, n, r, i, o) {
    var u = [n * n, 0, t * t, -2 * n * n * e.x, -2 * t * t * e.y, n * n * e.x * e.x + t * t * e.y * e.y - t * t * n * n],
      a = [o * o, 0, i * i, -2 * o * o * r.x, -2 * i * i * r.y, o * o * r.x * r.x + i * i * r.y * r.y - i * i * o * o],
      f = mi.bezout(u, a),
      l = f.getRoots(),
      c = 0.001,
      h = (u[0] * u[0] + 2 * u[1] * u[1] + u[2] * u[2]) * c,
      p = (a[0] * a[0] + 2 * a[1] * a[1] + a[2] * a[2]) * c,
      d = new mi('No Intersection')
    for (var v = 0; v < l.length; v++) {
      var m = new Polynomial(u[0], u[3] + l[v] * u[1], u[5] + l[v] * (u[4] + l[v] * u[2])),
        g = m.getRoots()
      for (var y = 0; y < g.length; y++) {
        var b = (u[0] * g[y] + u[1] * l[v] + u[3]) * g[y] + (u[2] * l[v] + u[4]) * l[v] + u[5]
        Math.abs(b) < h && (b = (a[0] * g[y] + a[1] * l[v] + a[3]) * g[y] + (a[2] * l[v] + a[4]) * l[v] + a[5], Math.abs(b) < p && d.appendPoint(new s(g[y], l[v])))
      }
    }
    return d.points.length > 0 && (d.status = 'Intersection'), d
  }, mi.intersectEllipseLine = function(e, t, n, r, i) {
    var s, o = new Vector2D(r.x, r.y),
      u = Vector2D.fromPoints(r, i),
      a = new Vector2D(e.x, e.y),
      f = o.subtract(a),
      l = new Vector2D(u.x / (t * t), u.y / (n * n)),
      c = new Vector2D(f.x / (t * t), f.y / (n * n)),
      h = u.dot(l),
      p = u.dot(c),
      e = f.dot(c) - 1,
      d = p * p - h * e
    if (d < 0) s = new mi('Outside')
    else if (d > 0) {
      var v = Math.sqrt(d),
        m = (-p - v) / h,
        g = (-p + v) / h;
      (m < 0 || m > 1) && (g < 0 || g > 1) ? m < 0 && g < 0 || m > 1 && g > 1 ? s = new mi('Outside') : s = new mi('Inside') : (s = new mi('Intersection'), m >= 0 && m <= 1 && s.appendPoint(r.lerp(i, m)), g >= 0 && g <= 1 && s.appendPoint(r.lerp(i, g)))
    } else {
      var y = -p / h
      y >= 0 && y <= 1 ? (s = new mi('Intersection'), s.appendPoint(r.lerp(i, y))) : s = new mi('Outside')
    }
    return s
  }, mi.intersectEllipsePolygon = function(e, t, n, r) {
    var i = new mi('No Intersection'),
      s = r.length
    for (var o = 0; o < s; o++) {
      var u = r[o],
        a = r[(o + 1) % s],
        f = mi.intersectEllipseLine(e, t, n, u, a)
      i.appendPoints(f.points)
    }
    return i.points.length > 0 && (i.status = 'Intersection'), i
  }, mi.intersectEllipseRectangle = function(e, t, n, r, i) {
    var o = r.min(i),
      u = r.max(i),
      a = new s(u.x, o.y),
      f = new s(o.x, u.y),
      l = mi.intersectEllipseLine(e, t, n, o, a),
      c = mi.intersectEllipseLine(e, t, n, a, u),
      h = mi.intersectEllipseLine(e, t, n, u, f),
      p = mi.intersectEllipseLine(e, t, n, f, o),
      d = new mi('No Intersection')
    return d.appendPoints(l.points), d.appendPoints(c.points), d.appendPoints(h.points), d.appendPoints(p.points), d.points.length > 0 && (d.status = 'Intersection'), d
  }, mi.intersectLineLine = function(e, t, n, r) {
    var i, o = (r.x - n.x) * (e.y - n.y) - (r.y - n.y) * (e.x - n.x),
      u = (t.x - e.x) * (e.y - n.y) - (t.y - e.y) * (e.x - n.x),
      a = (r.y - n.y) * (t.x - e.x) - (r.x - n.x) * (t.y - e.y)
    if (a != 0) {
      var f = o / a,
        l = u / a
      f >= 0 && f <= 1 && l >= 0 && l <= 1 ? (i = new mi('Intersection'), i.points.push(new s(e.x + f * (t.x - e.x), e.y + f * (t.y - e.y)))) : i = new mi('No Intersection')
    } else o == 0 || u == 0 ? i = new mi('Coincident') : i = new mi('Parallel')
    return i
  }, mi.intersectLinePolygon = function(e, t, n) {
    var r = new mi('No Intersection'),
      i = n.length
    for (var s = 0; s < i; s++) {
      var o = n[s],
        u = n[(s + 1) % i],
        a = mi.intersectLineLine(e, t, o, u)
      r.appendPoints(a.points)
    }
    return r.points.length > 0 && (r.status = 'Intersection'), r
  }, mi.intersectLineRectangle = function(e, t, n, r) {
    var i = n.min(r),
      o = n.max(r),
      u = new s(o.x, i.y),
      a = new s(i.x, o.y),
      f = mi.intersectLineLine(i, u, e, t),
      l = mi.intersectLineLine(u, o, e, t),
      c = mi.intersectLineLine(o, a, e, t),
      h = mi.intersectLineLine(a, i, e, t),
      p = new mi('No Intersection')
    return p.appendPoints(f.points), p.appendPoints(l.points), p.appendPoints(c.points), p.appendPoints(h.points), p.points.length > 0 && (p.status = 'Intersection'), p
  }, mi.intersectPolygonPolygon = function(e, t) {
    var n = new mi('No Intersection'),
      r = e.length
    for (var i = 0; i < r; i++) {
      var s = e[i],
        o = e[(i + 1) % r],
        u = mi.intersectLinePolygon(s, o, t)
      n.appendPoints(u.points)
    }
    return n.points.length > 0 && (n.status = 'Intersection'), n
  }, mi.intersectPolygonRectangle = function(e, t, n) {
    var r = t.min(n),
      i = t.max(n),
      o = new s(i.x, r.y),
      u = new s(r.x, i.y),
      a = mi.intersectLinePolygon(r, o, e),
      f = mi.intersectLinePolygon(o, i, e),
      l = mi.intersectLinePolygon(i, u, e),
      c = mi.intersectLinePolygon(u, r, e),
      h = new mi('No Intersection')
    return h.appendPoints(a.points), h.appendPoints(f.points), h.appendPoints(l.points), h.appendPoints(c.points), h.points.length > 0 && (h.status = 'Intersection'), h
  }, mi.intersectRayRay = function(e, t, n, r) {
    var i, o = (r.x - n.x) * (e.y - n.y) - (r.y - n.y) * (e.x - n.x),
      u = (t.x - e.x) * (e.y - n.y) - (t.y - e.y) * (e.x - n.x),
      a = (r.y - n.y) * (t.x - e.x) - (r.x - n.x) * (t.y - e.y)
    if (a != 0) {
      var f = o / a
      i = new mi('Intersection'), i.points.push(new s(e.x + f * (t.x - e.x), e.y + f * (t.y - e.y)))
    } else o == 0 || u == 0 ? i = new mi('Coincident') : i = new mi('Parallel')
    return i
  }, mi.intersectRectangleRectangle = function(e, t, n, r) {
    var i = e.min(t),
      o = e.max(t),
      u = new s(o.x, i.y),
      a = new s(i.x, o.y),
      f = mi.intersectLineRectangle(i, u, n, r),
      l = mi.intersectLineRectangle(u, o, n, r),
      c = mi.intersectLineRectangle(o, a, n, r),
      h = mi.intersectLineRectangle(a, i, n, r),
      p = new mi('No Intersection')
    return p.appendPoints(f.points), p.appendPoints(l.points), p.appendPoints(c.points), p.appendPoints(h.points), p.points.length > 0 && (p.status = 'Intersection'), p
  }, mi.bezout = function(e, t) {
    var n = e[0] * t[1] - t[0] * e[1],
      r = e[0] * t[2] - t[0] * e[2],
      i = e[0] * t[3] - t[0] * e[3],
      s = e[0] * t[4] - t[0] * e[4],
      o = e[0] * t[5] - t[0] * e[5],
      u = e[1] * t[2] - t[1] * e[2],
      a = e[1] * t[4] - t[1] * e[4],
      f = e[1] * t[5] - t[1] * e[5],
      l = e[2] * t[3] - t[2] * e[3],
      c = e[3] * t[4] - t[3] * e[4],
      h = e[3] * t[5] - t[3] * e[5],
      p = f + c,
      d = a - l
    return new Polynomial(n * u - r * r, n * d + i * u - 2 * r * s, n * p + i * d - s * s - 2 * r * o, n * h + i * p - 2 * s * o, i * h - o * o)
  }, n.Intersection = mi, n.AreaPicking = function(e, t) {
    this.network = e, this.bounding = t, this.cache = {}
  }, n.extend(n.AreaPicking, Object, {
    intersectObjects: function(e) {
      var t = []
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        this.intersectObject(r, t)
      }
      return t
    },
    getViewPoint: function(e, t) {
      var n = t.vertices[e].clone(),
        r = this.cache[t.getId()][n.x + ' ' + n.y + ' ' + n.z]
      return r || (n.applyMatrix4(t.worldMatrix), r = this.network.getViewPosition(n), r.y = r.h - r.y, r)
    },
    intersectObject: function(e, t) {
      if (e instanceof n.Entity) {
        this.cache[e.getId()] = {}
        for (var r = 0; r < e.vertices.length; r++) {
          var i = e.vertices[r].clone()
          i.applyMatrix4(e.worldMatrix)
          var s = this.network.getViewPosition(i)
          s.y = s.h - s.y, this.cache[e.getId()][i.x + ' ' + i.y + ' ' + i.z] = s
          if (s.x > this.bounding.x && s.y > this.bounding.y && s.x < this.bounding.x + this.bounding.w && s.y < this.bounding.y + this.bounding.h) {
            var o = {
              element: e
            }
            t.push(o)
            return
          }
        }
      }
    }
  }), n.BaseInteraction = function(e) {
    this.network = e, this.view = e.getView() || document
  }, n.addEventListener = function(e, t, n, r) {
    var i = '_' + e + '_'
    if (r[i]) return
    var s = function(e) {
      r[t](e)
    }
    r[i] = s, n.addEventListener(e, s, !1)
  }, n.removeEventListener = function(e, t, n) {
    var r = '_' + e + '_',
      i = n[r]
    i && (t.removeEventListener(e, i, !1), delete n[r])
  }, n.extend(n.BaseInteraction, Object, {
    onPropertyChange: function() {},
    firePropertyChange: function() {},
    setUp: function() {},
    tearDown: function() {},
    update: function() {},
    addListener: function() {
      for (var e = 0; e < arguments.length; e++) {
        var t = arguments[e]
        n.addEventListener(t, 'handle_' + t, this.network.getRootView(), this)
      }
    },
    removeListener: function() {
      for (var e = 0; e < arguments.length; e++) {
        var t = arguments[e]
        n.removeEventListener(arguments[e], this.network.getRootView(), this)
      }
    },
    isCtrlDown: function(e) {
      return e.ctrlKey || e.metaKey
    },
    isFinished: function() {
      return !0
    }
  }), n.DefaultInteraction = function(t) {
    n.BaseInteraction.call(this, t), this.screen = {
      width: 0,
      height: 0,
      offsetLeft: 0,
      offsetTop: 0
    }, this.radius = this.screen.width / 4, this.domElement = this.network.getRootView(), this.rotateSpeed = 1, this.zoomSpeed = 1.2, this.panSpeed = 0.3, this.noRotate = !1, this.noZoom = !1, this.noPan = !1, this.easing = !0, this.dynamicDampingFactor = 0.05, this.timeInterval = 2e3, this.minDistance = 0, this.maxDistance = Infinity, this.keys = [65, 83, 68], this.lastPosition = new n.Vec3()
    var r = this.STATE.NONE,
      i = this.STATE.NONE,
      s = new n.Vec3(),
      u = new n.Vec3(),
      a = new n.Vec3(),
      f = new n.Vec2(),
      c = new n.Vec2(),
      p = 0,
      d = 0,
      v = new n.Vec2(),
      m = new n.Vec2()
    Rr
    var g = 0,
      y, b
    this.object = this.network._camera, this.object.target || (this.object.target = new n.Vec3()), this.movementSpeed = 1, this.lookSpeed = 0.005, this.verticalLookRatio = 0.1, this.keyboardEnable = !0, this.lookVertical = !0, this.autoForward = !1, this.fpsMode = !1, this.dragMode = !0, this.activeLook = !1, this.heightSpeed = !1, this.heightCoef = 1, this.heightMin = 0, this.heightMax = 1, this.constrainVertical = !1, this.verticalFixed = !1, this.verticalMin = 0, this.verticalMax = Math.PI, this.autoSpeedFactor = 0, this.mouseX = 0, this.mouseY = 0, this.lat = 0, this.lon = 0, this.phi = 0, this.theta = 0, this.moveForward = !1, this.moveBackward = !1, this.moveLeft = !1, this.moveRight = !1, this.freeze = !1, this.mouseDragOn = !1, this.viewHalfX = 0, this.viewHalfY = 0, this.lastX = 0, this.lastY = 0, this.touchSeq = [1, 2, 3], this.network.getRootView().addEventListener('contextmenu', function(e) {
      e.preventDefault()
    }, !1), this.yRistrict = !0, this.yLowerLimitAngle = -Math.PI / 2, this.yUpLimitAngle = Math.PI / 2, this.updateIntervalTime = 0
    var w = null
    this.handleResize = function() {
      this.screen.width = e.innerWidth, this.screen.height = e.innerHeight, this.screen.offsetLeft = 0, this.screen.offsetTop = 0, this.radius = (this.screen.width + this.screen.height) / 4
    }, this.handleResize(), this.handle_mousedown = function(e) {
      if (h.isCtrlDown(e)) return
      e.preventDefault()
      if (this.fpsMode) {
        this.domElement !== document && this.domElement.focus()
        if (this.activeLook) {
          switch (e.button) {
            case 0:
              this.moveForward = !0
              break
            case 2:
              this.moveBackward = !0
          }
        }
        this.lastX = e.pageX, this.lastY = e.pageY, this.mouseDragOn = !0
      } else r === this.STATE.NONE && (r = e.button), r === this.STATE.ROTATE && !this.noRotate ? (u = a = this.getMouseProjectionOnBall(e.clientX, e.clientY), y = b = this.getRotateY(e.clientX, e.clientY)) : this.state === this.STATE.ZOOM && !this.noZoom ? f = c = this.getMouseOnScreen(e.clientX, e.clientY) : r === this.STATE.PAN && !this.noPan && (v = m = this.getMouseOnScreen(e.clientX, e.clientY))
      this.beforeUpdate(), this.addListener('mousemove', 'mouseup')
    }, this.handle_mousemove = function(e) {
      if (e.stop) return
      e.preventDefault(), this.fpsMode ? this.dragMode ? this.mouseDragOn ? (this.mouseX = (e.pageX - this.lastX) * 300, this.mouseY = (e.pageY - this.lastY) * 300, this.lastX = e.pageX, this.lastY = e.pageY) : (this.mouseX = 0, this.mouseY = 0) : this.domElement === document ? (this.mouseX = e.pageX - this.viewHalfX, this.mouseY = e.pageY - this.viewHalfY) : (this.mouseX = e.pageX - this.domElement.offsetLeft - this.viewHalfX, this.mouseY = e.pageY - this.domElement.offsetTop - this.viewHalfY) : r === this.STATE.ROTATE && !this.noRotate ? (a = this.getMouseProjectionOnBall(e.clientX, e.clientY), b = this.getRotateY(e.clientX, e.clientY)) : r === this.STATE.ZOOM && !this.noZoom ? c = this.getMouseOnScreen(e.clientX, e.clientY) : r === this.STATE.PAN && !this.noPan && (m = this.getMouseOnScreen(e.clientX, e.clientY))
      var t = (new Date()).getTime()
      if (this._lt == null) this.update()
      else {
        if (t - this._lt < this.updateIntervalTime) return
        this.update()
      }
      this._lt = t
    }, this.handle_mouseup = function(e) {
      e.preventDefault()
      if (this.fpsMode) {
        if (this.activeLook) {
          switch (e.button) {
            case 0:
              this.moveForward = !1
              break
            case 2:
              this.moveBackward = !1
          }
        }
        this.lastX = 0, this.lastY = 0, this.dragMode && (this.mouseX = 0, this.mouseY = 0), this.mouseDragOn = !1
      } else r = this.STATE.NONE
      this.removeListener('mousemove', 'mouseup'), this.update()
    }, this.handle_touchstart = function(e) {
      if (this.enabled === !1) return
      switch (e.touches.length) {
        case this.touchSeq[0]:
          r = this.STATE.TOUCH_ROTATE, u = this.getMouseProjectionOnBall(e.touches[0].pageX, e.touches[0].pageY), y = b = this.getRotateY(e.touches[0].pageX, e.touches[0].pageY), a.copy(u)
          break
        case this.touchSeq[1]:
          r = this.STATE.TOUCH_ZOOM
          var t = e.touches[0].pageX - e.touches[1].pageX,
            n = e.touches[0].pageY - e.touches[1].pageY
          d = p = Math.sqrt(t * t + n * n)
          break
        case this.touchSeq[2]:
          r = this.STATE.TOUCH_PAN, v.copy(this.getMouseOnScreen(e.touches[0].pageX, e.touches[0].pageY)), m.copy(v)
          break
        default:
          r = this.STATE.NONE
      }
      this.update()
    }, this.handle_touchmove = function(e) {
      if (this.enabled === !1) return
      e.preventDefault()
      switch (e.touches.length) {
        case this.touchSeq[0]:
          a = this.getMouseProjectionOnBall(e.touches[0].pageX, e.touches[0].pageY, a), b = this.getRotateY(e.touches[0].pageX, e.touches[0].pageY)
          break
        case this.touchSeq[1]:
          var t = e.touches[0].pageX - e.touches[1].pageX,
            n = e.touches[0].pageY - e.touches[1].pageY
          d = Math.sqrt(t * t + n * n)
          break
        case this.touchSeq[2]:
          m = this.getMouseOnScreen(e.touches[0].pageX, e.touches[0].pageY, m)
          break
        default:
          r = this.STATE.NONE
      }
      this.update()
    }, this.handle_touchend = function(e) {
      if (this.enabled === !1) return
      switch (e.touches.length) {
        case this.touchSeq[0]:
          u.copy(this.getMouseProjectionOnBall(e.touches[0].pageX, e.touches[0].pageY, a))
          break
        case this.touchSeq[1]:
          p = d = 0
          break
        case this.touchSeq[2]:
          m.copy(this.getMouseOnScreen(e.touches[0].pageX, e.touches[0].pageY)), v.copy(m)
      }
      r = this.STATE.NONE, this.update()
    }, this.handle_DOMMouseScroll = function(e) {
      this.handle_mousewheel(e)
    }, this.handle_mousewheel = function(e) {
      e.preventDefault()
      var t = 0
      e.wheelDelta ? e.wheelDelta % 120 === 0 ? t = e.wheelDelta / 40 : t = e.wheelDelta : e.detail && (t = -e.detail / 3), t && (f.y += 1 / t * 0.01), this.mouseMoving = !0, this.update()
    }, this.handle_dblclick = function(e) {
      if (!this.isCtrlDown(e)) return
      var t = this.network.getElementsByMouseEvent(e)
      t.length > 0 && (w = t[0]), this.update()
    }, this.getMouseOnScreen = function(e, t) {
      return new n.Vec2((e - this.screen.offsetLeft) / this.radius * 0.5, (t - this.screen.offsetTop) / this.radius * 0.5)
    }, this.getRotateY = function(e, t) {
      if (this.yRistrict) {
        var n = (this.screen.height * 0.5 + this.screen.offsetTop - t) / this.screen.height * 2
        return n
      }
    }, this.handle_keydown = function(e) {
      if (!this.keyboardEnable) return
      switch (e.keyCode) {
        case 38:
        case 87:
          this.moveForward = !0
          break
        case 37:
        case 65:
          this.moveLeft = !0
          break
        case 40:
        case 83:
          this.moveBackward = !0
          break
        case 39:
        case 68:
          this.moveRight = !0
          break
        case 82:
          this.moveUp = !0
          break
        case 70:
          this.moveDown = !0
          break
        case 81:
          this.freeze = !this.freeze
      }
      this.update()
    }, this.handle_keyup = function(e) {
      if (!this.keyboardEnable) return
      switch (e.keyCode) {
        case 38:
        case 87:
          this.moveForward = !1
          break
        case 37:
        case 65:
          this.moveLeft = !1
          break
        case 40:
        case 83:
          this.moveBackward = !1
          break
        case 39:
        case 68:
          this.moveRight = !1
          break
        case 82:
          this.moveUp = !1
          break
        case 70:
          this.moveDown = !1
      }
      this.update()
    }, this.getMouseProjectionOnBall = function(e, t) {
      if (this.yRistrict) {
        var r = new n.Vec3((e - this.screen.width * 0.5 - this.screen.offsetLeft) / (this.screen.width * 0.5), 0, 0),
          i = r.length()
        return i > 1 ? r.normalize() : r.z = Math.sqrt(1 - i * i), r.normalize()
      }
      var r = new n.Vec3((e - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - t) / this.radius, 0),
        i = r.length()
      i > 1 ? r.normalize() : r.z = Math.sqrt(1 - i * i), s.copy(this.object._position).sub(this.object.target)
      var o = this.object.up.clone().setLength(r.y)
      return o.add(this.object.up.clone().cross(s).setLength(r.x)), o.add(s.setLength(r.z)), o
    }, this.rotateCamera = function() {
      var e = u.dot(a) / u.length() / a.length(),
        t = Math.acos(e),
        r = !this.easing || Math.abs(t) < 1e-4,
        i = !1
      if (t) {
        var o = (new n.Vec3()).crossVectors(u, a).normalize(),
          f = new n.Quat()
        f.setFromAxisAngle(o, -t * this.dynamicDampingFactor * this.rotateSpeed), r ? (f.setFromAxisAngle(o, -t * this.rotateSpeed), s.applyQuaternion(f), this.object.up.applyQuaternion(f), u.copy(a)) : (f.setFromAxisAngle(o, -t * this.dynamicDampingFactor * this.rotateSpeed), s.applyQuaternion(f), this.object.up.applyQuaternion(f), f.setFromAxisAngle(o, t * this.dynamicDampingFactor), u.applyQuaternion(f), i = !0)
      }
      var r = !this.easing || Math.abs(b - y) < 1e-4,
        l = (b - y) * s.length()
      if (!P.isNaN(l)) {
        if (r) l && this.yRistrict && this.limitY(l), y = b
        else {
          var l = l * this.dynamicDampingFactor
          l && this.yRistrict && this.limitY(l), y += (b - y) * this.dynamicDampingFactor, i = !0
        }
      }
      i && this.network.dirtyNetwork()
    }, this.limitY = function(e) {
      var t = s.length()
      Math.abs(s.x) <= 0.1 * t && Math.abs(s.z) <= 0.1 * t && (s.x = 0.1 * t)
      var n = s.x,
        r = s.z,
        i = Math.sqrt(n * n + r * r),
        o = Math.tan(this.yLowerLimitAngle) * i,
        u = Math.tan(this.yUpLimitAngle) * i
      s.y -= e, s.y > u ? s.y = u : s.y < o && (s.y = o)
    }, this.getValueByTime = function(e, t) {
      var n = (new Date()).getTime(),
        r = n - this._timeStart
      return r > this.timeInterval ? t : e + (t - e) * r / this.timeInterval
    }, this.zoomCamera = function() {
      if (r === this.STATE.TOUCH_ZOOM) {
        var e = p / d
        p = d, s.multiplyScalar(e)
      } else {
        var t = this.zoomSpeed
        this.easing || (t *= 5)
        var e
        e = 1 + (c.y - f.y) * t, e !== 1 && e > 0 && (s.multiplyScalar(e), !this.easing || Math.abs(c.y - f.y) < 0.001 ? f.copy(c) : (f.y += (c.y - f.y) * this.dynamicDampingFactor, this.network.dirtyNetwork()))
      }
    }, this.panCamera = function() {
      var e = m.clone().sub(v)
      if (e.lengthSq()) {
        e.multiplyScalar(s.length() * this.panSpeed)
        var t = s.clone().cross(this.object.up).setLength(e.x),
          n = (new l()).extractRotation(this.object.matrix),
          r = this.object.up.clone().applyMatrix4(n)
        t.add(r.setLength(e.y))
        var i = this.object.p().add(t)
        this.object.checkPosition(i) && (this.object.p(i), this.object.target.add(t)), v = m, this.network.dirtyNetwork()
      }
    }, this.checkAngles = function() {}, this.checkDistances = function() {
      if (!this.noZoom || !this.noPan) s.lengthSq() > this.maxDistance * this.maxDistance && this.object._position.addVectors(this.object.target, s.setLength(this.maxDistance)), s.lengthSq() < this.minDistance * this.minDistance && this.object._position.addVectors(this.object.target, s.setLength(this.minDistance))
    }, this.updateFPS = function() {
      var e = 2
      if (this.freeze) return
      if (this.heightSpeed) {
        var t = n.Math.clamp(this.object._position.y, this.heightMin, this.heightMax),
          r = t - this.heightMin
        this.autoSpeedFactor = e * r * this.heightCoef
      } else this.autoSpeedFactor = 0
      var i = e * this.movementSpeed
      if (this.moveForward || this.autoForward && !this.moveBackward) {
        var u = this.object._position.clone()
        this.object.translateZ(-(i + this.autoSpeedFactor))
        var a = this.object.target
        this.verticalFixed && this.object.setY(u.y)
        var f = this.object._position,
          l = new o(),
          c = new o()
        l.subVectors(f, a), c.subVectors(u, a), l.z * c.z <= this.minDistance * this.minDistance && this.object.target.subVectors(this.object._position, s)
      }
      if (this.moveBackward) {
        var u = this.object._position.clone()
        this.object.translateZ(i), this.verticalFixed && this.object.setY(u.y)
      }
      this.moveLeft && (this.object.translateX(-i), this.object.target.subVectors(this.object._position, s)), this.moveRight && (this.object.translateX(i), this.object.target.subVectors(this.object._position, s)), this.moveUp && (this.object.translateY(i), this.object.target.subVectors(this.object._position, s)), this.moveDown &&
        (this.object.translateY(-i), this.object.target.subVectors(this.object._position, s))
      var h = e * this.lookSpeed
      !this.activeLook && !this.dragMode && (h = 0)
      var p = this.verticalLookRatio
      this.constrainVertical && (p = Math.PI / (this.verticalMax - this.verticalMin)), this.lon += this.mouseX * h, this.dragMode && (this.mouseX = 0), this.lookVertical && (this.lat -= this.mouseY * h * p), this.lat = Math.max(-85, Math.min(85, this.lat)), this.phi = n.Math.degToRad(90 - this.lat), this.theta = n.Math.degToRad(this.lon), this.constrainVertical && (this.phi = n.Math.mapLinear(this.phi, 0, Math.PI, this.verticalMin, this.verticalMax))
      if (this.fpsMode) {
        var d = this.object.target,
          f = this.object._position
        d.x = f.x + 100 * Math.sin(this.phi) * Math.sin(this.theta), d.y = f.y + 100 * Math.cos(this.phi), d.z = f.z - 100 * Math.sin(this.phi) * Math.cos(this.theta), this.object.look(d)
      }
    }, this.update = function() {
      s.subVectors(this.object._position, this.object.target), !this.noRotate && !this.fpsMode && this.rotateCamera(), this.noZoom || this.zoomCamera(), !this.noPan && !this.fpsMode && this.panCamera()
      if (w && w.element && this.network.doubleClickToLookAtFunction(w.element)) {
        this.object.target = w.point
        var e = this.object._position.distanceTo(this.object.target),
          t = w.face.normal.clone()
        t = t.applyMatrix4((new n.Mat4()).extractRotation(w.element.worldMatrix)), t.normalize(), s = t.multiplyScalar(e), w = null
      }
      this.object.setPosition(this.object._position.clone().addVectors(this.object.target, s)), this.updateFPS(), this.fpsMode || (this.checkDistances(), this.object.look(this.object.target)), this.lastPosition.distanceToSquared(this.object._position) > 0 && this.lastPosition.copy(this.object._position)
    }
  }, n.extend(n.DefaultInteraction, n.BaseInteraction, {
    STATE: {
      NONE: -1,
      ROTATE: 0,
      ZOOM: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_ZOOM: 4,
      TOUCH_PAN: 5
    },
    __accessor: ['rotateSpeed', 'zoomSpeed', 'panSpeed', 'yLowerLimitAngle', 'yUpLimitAngle', 'minDistance', 'maxDistance', 'easing', 'touchSeq'],
    setUp: function() {
      this.addListener('mousedown', 'touchstart', 'touchend', 'touchmove', 'mousewheel', 'DOMMouseScroll', 'dblclick', 'keydown', 'keyup')
    },
    tearDown: function() {
      this.removeListener('mousedown', 'touchstart', 'touchend', 'touchmove', 'mousewheel', 'DOMMouseScroll', 'dblclick', 'keydown', 'keyup')
    },
    beforeUpdate: function() {},
    setUpdateIntervalTime: function(e) {
      this.updateIntervalTime = e
    }
  }), n.SelectionInteraction = function(e) {
    n.BaseInteraction.call(this, e), this.selectUnVisible = !0, this.ctrlDown = !1, this.deleteTimeoutId = null, this._areaPickingLevel = 1
  }, n.extend(n.SelectionInteraction, n.BaseInteraction, {
    constructor: n.SelectionInteraction,
    setAreaPickingLevel: function(e) {
      this._areaPickingLevel = e
    },
    getAreaPickingLevel: function() {
      return this._areaPickingLevel
    },
    setUp: function() {
      this.addListener('mousedown')
    },
    tearDown: function() {
      this.removeListener('mousedown')
    },
    setFocus: function(e) {
      if (document.activeElement === e) return
      var t, n, r = document.documentElement,
        i = document.body,
        s
      r && (p.isIE || p.isOpera || r.scrollLeft || r.scrollTop) && (t = r.scrollLeft, n = r.scrollTop, s = r), e.focus(), s && (s.scrollLeft = t, s.scrollTop = n)
    },
    handle_mousedown: function(e) {
      if (e.stop == 1) return
      if (h.isRightClick(e)) return
      this.setFocus(this.network.getView()), this.isCtrlDown(e) ? (this.addListener('mousemove', 'mouseup'), this.ctrlDownEvent = e) : this.network.getDataBox().clearSelection()
      var t = this.network.getElementsByMouseEvent(e, !0),
        n = this.network.getFirstSelectElement(t)
      this.network.getDataBox().getSelectionModel().appendSelection(n), this.network.onSelect(n)
    },
    handle_mousemove: function(e) {
      var t = this.getBoundingByMouseEvent(e, this.ctrlDownEvent, this.network.devicePixelRatio)
      this.mousemoved = !0, this.network.areaPickingRect = t, this.network.paintTopCanvas()
    },
    handle_mouseup: function(e) {
      this.network.areaPickingRect = null, this.network.paintTopCanvas()
      var t = this.getBoundingByMouseEvent(e, this.ctrlDownEvent)
      this.removeListener('mousemove', 'mouseup'), this.ctrlDownEvent = null
      if (t && this.mousemoved) {
        var n = this.network.getElementsByBounding(t, !0, this._areaPickingLevel),
          r = new N()
        if (n.length > 0) {
          for (var i = 0; i < n.length; i++) {
            var s = n[i].element
            this.network.selectable(n[i]) && r.add(s)
          }
        }
        r.size() > 0 && this.network.getDataBox().getSelectionModel().appendSelection(r)
      }
    },
    getBoundingByMouseEvent: function(e, t, n) {
      if (!e || !t) return
      var r = this.network.getView().getBoundingClientRect(),
        i = e.clientX - r.left,
        s = e.clientY - r.top,
        o = t.clientX - r.left,
        u = t.clientY - r.top,
        a = n || 1,
        f = Math.min(i, o) * a,
        l = Math.min(s, u) * a,
        c = Math.abs(i - o) * a,
        h = Math.abs(s - u) * a
      return c === 0 && h === 0 ? null : {
        x: f,
        y: l,
        w: c,
        h: h
      }
    }
  }), n.TransformGizmo = function() {
    var e = new n.TransformGizmoMaterial({
        color: 16711680
      }),
      r = new n.TransformGizmoMaterial({
        color: 65280
      }),
      i = new n.TransformGizmoMaterial({
        color: 255
      })
    this.handleGizmos = {
      X: [new n.Cylinder(e, 0.005, 0.005, 1, 4, 1, !1, !1), new o(0.5, 0, 0), new o(0, 0, -Math.PI / 2)],
      Y: [new n.Cylinder(r, 0.005, 0.005, 1, 4, 1, !1, !1), new o(0, 0.5, 0)],
      Z: [new n.Cylinder(i, 0.005, 0.005, 1, 4, 1, !1, !1), new o(0, 0, 0.5), new o(Math.PI / 2, 0, 0)]
    }
    var s = !1,
      u = !1
    this.showHelpers = !0, this.showable = !0, this.init = function() {
      n.Element.call(this), this.handles = new n.Element(), this.pickers = new n.Element(), this.planes = new n.Element(), this.addChild(this.handles), this.addChild(this.pickers), this.addChild(this.planes)
      var e = new n.BasicMaterial({
          wireframe: !1,
          color: 65535,
          side: n.DoubleSide
        }),
        t = new n.Plane(e, 5e4, 5e4, 2, 2),
        r = {
          XY: new n.Plane(e, 5e4, 5e4, 2, 2),
          YZ: new n.Plane(e, 5e4, 5e4, 2, 2),
          XZ: new n.Plane(e, 5e4, 5e4, 2, 2),
          XYZE: new n.Plane(e, 5e4, 5e4, 2, 2)
        }
      r.YZ._rotation.set(0, Math.PI / 2, 0), r.XZ._rotation.set(-Math.PI / 2, 0, 0)
      for (var i in r) r[i].name = i, this.planes.addChild(r[i]), this.planes[i] = r[i], r[i]._visible = !0
      for (var i in this.handleGizmos) {
        var s = this.handleGizmos[i][0]
        s.name = i, this.handleGizmos[i][1] && s._position.set(this.handleGizmos[i][1].x, this.handleGizmos[i][1].y, this.handleGizmos[i][1].z), this.handleGizmos[i][2] && s._rotation.set(this.handleGizmos[i][2].x, this.handleGizmos[i][2].y, this.handleGizmos[i][2].z), s.mode = this.mode, this.handles.addChild(s)
        if (this.pickerGizmos && this.pickerGizmos[i]) {
          var o = this.pickerGizmos[i][0]
          this.pickerGizmos[i][1] && o._position.set(this.pickerGizmos[i][1].x, this.pickerGizmos[i][1].y, this.pickerGizmos[i][1].z), this.pickerGizmos[i][2] && o._rotation.set(this.pickerGizmos[i][2].x, this.pickerGizmos[i][2].y, this.pickerGizmos[i][2].z)
        } else var o = s.clone()
        o.mode = this.mode, o.name = i, this.pickers.addChild(o)
      }
      this.iterator(function(e) {
        e instanceof n.Entity && n.Utils.transformElement(e)
      })
    }, this.hide = function() {
      this.handles.getChildren().forEach(function(e) {
        e._visible = !1
      }), this.pickers.getChildren().forEach(function(e) {
        e._visible = !1
      }), this.planes.getChildren().forEach(function(e) {
        e._visible = !1
      })
    }, this.show = function() {
      var e = this
      this.handles.getChildren().forEach(function(t) {
        t._visible = e.showHelpers && e.showable
      }), this.pickers.getChildren().forEach(function(e) {
        e._visible = s
      }), this.activePlane && (this.activePlane._visible = u)
    }, this.highlight = function(e) {
      var r
      for (var i in this.handleGizmos) r = this.handleGizmos[i][0], r.oldColor && (r.material instanceof n.ArrayMaterial ? (r.material.materials[0].color.copy(r.oldColor), r.material.materials[0].opacity = r.oldOpacity) : (r.material.color.copy(r.oldColor), r.material.opacity = r.oldOpacity), r.oldColor = null)
      this.handleGizmos[e] && (r = this.handleGizmos[e][0], r.material instanceof n.ArrayMaterial ? (r.oldColor = r.oldColor || r.material.materials[0].color.clone(), r.oldOpacity = r.oldOpacit !== t ? r.oldOpacity : r.material.materials[0].opacity, r.material.materials[0].opacity = 1) : (r.oldColor = r.oldColor || r.material.color.clone(), r.oldOpacity = r.material.opacity, r.setStyle('material.opacity', 1)))
    }, this.init()
  }, n.TransformGizmo.prototype = Object.create(n.Element.prototype), n.TransformGizmo.prototype.update = function(e, t) {
    var n = new o(0, 0, 0),
      r = new o(0, 1, 0),
      i = new l()
    for (var s = 0; s < this.getChildren().size(); s++) {
      for (var u = 0; u < this.getChildren().get(s).getChildren().size(); u++) {
        var a = this.getChildren().get(s).getChildren().get(u)
        a.name.search('E') != -1 ? (a.quaternion.setFromRotationMatrix(i.lookAt(t, n, r)), a._rotation.setEulerFromQuaternion(a.quaternion)) : (a.quaternion.setFromEuler(e), a._rotation.setEulerFromQuaternion(a.quaternion))
      }
    }
  }, n.TransformGizmoTranslate = function() {
    n.TransformGizmo.call(this)
    var e = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.2
      }),
      t = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.2
      }),
      r = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.2
      }),
      i = new n.Arrow(e, 1, 0.03, 0.2, 0.05, 30),
      s = new n.Arrow(t, 1, 0.03, 0.2, 0.05, 30),
      u = new n.Arrow(r, 1, 0.03, 0.2, 0.05, 30),
      a = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.5
      }),
      f = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.5
      }),
      c = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.5
      }),
      h = new n.TransformGizmoMaterial({
        color: 16777215,
        opacity: 0.5
      }),
      p = new n.Circle(a, 0.5, 10, 0, Math.PI / 2),
      d = new n.Circle(f, 0.5, 10, 0, Math.PI / 2),
      v = new n.Circle(c, 0.5, 10, 0, Math.PI / 2),
      m = new n.Octahedron(h, 1e-4, 0)
    this.handleGizmos = {
      X: [i, new o(1.6, 0, 0), new o(0, 0, -Math.PI / 2)],
      Y: [s, new o(0, 1.6, 0)],
      Z: [u, new o(0, 0, 1.6), new o(Math.PI / 2, 0, 0)],
      XYZ: [m],
      XY: [p, new o(0, 0, 0)],
      YZ: [d, new o(0, 0, 0), new o(Math.PI / 2, Math.PI / 2, 0)],
      XZ: [v, new o(0, 0, 0), new o(Math.PI / 2, 0, 0)]
    }
    var h = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.25
      }),
      g = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.25
      }),
      y = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.25
      }),
      b = new n.Cylinder(h, 0.075, 0, 1.2, 4, 1, !1),
      w = new n.Cylinder(g, 0.075, 0, 1.2, 4, 1, !1),
      E = new n.Cylinder(y, 0.075, 0, 1.2, 4, 1, !1),
      m = new n.Octahedron(h, 1e-4, 0)
    this.pickerGizmos = {
      X: [b, new o(1.6, 0, 0), new o(0, 0, -Math.PI / 2)],
      Y: [w, new o(0, 1.6, 0)],
      Z: [E, new o(0, 0, 1.6), new o(Math.PI / 2, 0, 0)],
      XYZ: [m]
    }, this.setActivePlane = function(e, t) {
      var n = new l()
      t.applyProjection(n.getInverse(n.extractRotation(this.planes.XY.worldMatrix))), e == 'X' && (this.activePlane = this.planes.XY, Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)), e == 'Y' && (this.activePlane = this.planes.XY, Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)), e == 'Z' && (this.activePlane = this.planes.XZ, Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)), e == 'XYZ' && (this.activePlane = this.planes.XYZE), e == 'XY' && (this.activePlane = this.planes.XY), e == 'YZ' && (this.activePlane = this.planes.YZ), e == 'XZ' && (this.activePlane = this.planes.XZ), this.hide(), this.show()
    }, this.init()
  }, n.TransformGizmoTranslate.prototype = Object.create(n.TransformGizmo.prototype), n.TransformGizmoTranslate.prototype.mode = 'translate', n.TransformGizmoRotate = function() {
    n.TransformGizmo.call(this)
    var e = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.2
      }),
      t = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.2
      }),
      r = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.2
      }),
      i = new n.TransformGizmoMaterial({
        color: 16776960
      }),
      s = new n.TransformGizmoMaterial({
        color: 7895160,
        opacity: 0.25
      }),
      s = new n.TransformGizmoMaterial({
        color: 16711680
      }),
      u = new n.Torus(e, 1, 0.02, 4, 32, Math.PI),
      a = new n.Torus(t, 1, 0.02, 4, 32, Math.PI),
      f = new n.Torus(r, 1, 0.02, 4, 32, Math.PI),
      c = new n.Torus(i, 1.25, 0.01, 4, 64),
      h = new n.Torus(s, 1, 0.01, 4, 64)
    this.handleGizmos = {
      X: [u, new o(0, 0, 0), new o(0, -Math.PI / 2, -Math.PI / 2)],
      Y: [a, new o(0, 0, 0), new o(Math.PI / 2, 0, 0)],
      Z: [f, new o(0, 0, 0), new o(0, 0, -Math.PI / 2)]
    }
    var p = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.25
      }),
      d = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.25
      }),
      v = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.25
      }),
      m = new n.TransformGizmoMaterial({
        color: 983040,
        opacity: 0.25
      }),
      g = new n.Torus(p, 1, 0.05, 4, 12, Math.PI),
      y = new n.Torus(d, 1, 0.05, 4, 12, Math.PI),
      b = new n.Torus(v, 1, 0.05, 4, 12, Math.PI),
      w = new n.Torus(m, 1, 0.05, 2, 24)
    this.pickerGizmos = {
      X: [g, new o(0, 0, 0), new o(0, -Math.PI / 2, -Math.PI / 2)],
      Y: [y, new o(0, 0, 0), new o(Math.PI / 2, 0, 0)],
      Z: [b, new o(0, 0, 0), new o(0, 0, -Math.PI / 2)]
    }, this.setActivePlane = function(e) {
      e == 'E' && (this.activePlane = this.planes.XYZE), e == 'X' && (this.activePlane = this.planes.YZ), e == 'Y' && (this.activePlane = this.planes.XZ), e == 'Z' && (this.activePlane = this.planes.XY), this.hide(), this.show()
    }, this.update = function(e, t) {
      n.TransformGizmo.prototype.update.apply(this, arguments)
      var r = {
          handles: this.handles,
          pickers: this.pickers
        },
        i = new l(),
        s = new n.Euler(0, 0, 1),
        u = new n.Quat(),
        a = new o(1, 0, 0),
        f = new o(0, 1, 0),
        c = new o(0, 0, 1),
        h = new n.Quat(),
        p = new n.Quat(),
        d = new n.Quat(),
        v = t.clone()
      s.copy(this.planes.XY._rotation), u.setFromEuler(s), i.makeRotationFromQuaternion(u).getInverse(i), v.applyProjection(i)
      for (var m in r) {
        for (var g = 0; g < r[m].getChildren().size; g++) {
          var y = r[m].getChildren().get(g)
          u.setFromEuler(s), y.name == 'X' && (h.setFromAxisAngle(a, Math.atan2(-v.y, v.z)), u.multiplyQuaternions(u, h), y.quaternion.copy(u)), y.name == 'Y' && (p.setFromAxisAngle(f, Math.atan2(v.x, v.z)), u.multiplyQuaternions(u, p), y.quaternion.copy(u)), y.name == 'Z' && (d.setFromAxisAngle(c, Math.atan2(v.y, v.x)), u.multiplyQuaternions(u, d), y.quaternion.copy(u))
        }
      }
    }, this.init()
  }, n.TransformGizmoRotate.prototype = Object.create(n.TransformGizmo.prototype), n.TransformGizmoRotate.prototype.mode = 'rotate', n.TransformGizmoScale = function() {
    n.TransformGizmo.call(this)
    var e = new n.TransformGizmoMaterial({
        color: 11184810,
        opacity: 1
      }),
      t = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.2
      }),
      r = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.2
      }),
      i = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.2
      }),
      s = new n.Cube(e, 0.25, 0.25, 0.25),
      u = new n.Cylinder(null, 0.1, 0.1, 1, 4, 1, !1),
      a = new n.Cube(e, 0.225, 0.225, 0.225),
      f = new n.Cylinder(null, 0.1, 0, 1, 20, 1, !0)
    f._position.y = 0.05
    var f = n.Utils.createElement(u, f, t),
      c = n.Utils.createElement(u, f, r),
      h = n.Utils.createElement(u, f, i),
      p = new n.Cylinder(t, 0.08, 0, 1, 4, 1, !1),
      d = new n.Cylinder(r, 0.08, 0, 1, 4, 1, !1),
      v = new n.Cylinder(i, 0.08, 0, 1, 4, 1, !1),
      m = new n.Element()
    m.material = new n.BasicMaterial()
    var g = new n.Element()
    g.material = new n.BasicMaterial()
    var y = new n.Element()
    y.material = new n.BasicMaterial(), this.handleGizmos = {
      X: [p, new o(0.5, 0, 0), new o(0, 0, -Math.PI / 2)],
      Y: [d, new o(0, 0.5, 0)],
      Z: [v, new o(0, 0, 0.5), new o(Math.PI / 2, 0, 0)],
      XY: [m],
      YZ: [g],
      XZ: [y],
      XYZ: [s]
    }
    var b = new n.TransformGizmoMaterial({
        color: 16711680,
        opacity: 0.25
      }),
      w = new n.TransformGizmoMaterial({
        color: 65280,
        opacity: 0.25
      }),
      E = new n.TransformGizmoMaterial({
        color: 255,
        opacity: 0.25
      }),
      S = new n.Cylinder(b, 0.125, 0, 1, 4, 1, !1),
      x = new n.Cylinder(w, 0.125, 0, 1, 4, 1, !1),
      T = new n.Cylinder(E, 0.125, 0, 1, 4, 1, !1)
    this.pickerGizmos = {
      X: [S, new o(0.6, 0, 0), new o(Math.PI / 4, 0, -Math.PI / 2)],
      Y: [x, new o(0, 0.6, 0), new o(0, Math.PI / 4, 0)],
      Z: [T, new o(0, 0, 0.6), new o(Math.PI / 2, Math.PI / 4, 0)],
      XYZ: [a]
    }, this.setActivePlane = function(e, t) {
      var n = new l()
      t.applyProjection(n.getInverse(n.extractRotation(this.planes.XY.worldMatrix))), e == 'X' ? (this.activePlane = this.planes.XY, Math.abs(t.y) > Math.abs(t.z) && (this.activePlane = this.planes.XZ)) : e == 'Y' ? (this.activePlane = this.planes.XY, Math.abs(t.x) > Math.abs(t.z) && (this.activePlane = this.planes.YZ)) : e == 'Z' ? (this.activePlane = this.planes.XZ, Math.abs(t.x) > Math.abs(t.y) && (this.activePlane = this.planes.YZ)) : e == 'XYZ' ? this.activePlane = this.planes.XYZE : this.activePlane = this.planes[e], this.hide(), this.show()
    }, this.init()
  }, n.TransformGizmoScale.prototype = Object.create(n.TransformGizmo.prototype), n.TransformGizmoScale.prototype.mode = 'scale', n.EditInteraction = function(r) {
    function $(t) {
      if (f.network._keyboardRemoveEnabled && t.keyCode == 46 && r.getDataBox().getSelectionModel().size() > 0) {
        var n = 'Delete?'
        e.confirm(n) && r.getDataBox().removeSelection()
      }
    }

    function J(t) {
      t.touches.length === 1 && (f.deleteTimeoutId = setTimeout(function() {
        var n = f.network.getElementsByMouseEvent(t, f.selectUnVisible)
        if (n.length > 0) {
          var r = n[0],
            i = 'Delete?'
          e.confirm(i) && f.network.getDataBox().remove(r.element)
        }
      }, 300))
    }

    function K(e) {
      clearTimeout(f.deleteTimeoutId)
    }

    function Q(e) {
      clearTimeout(f.deleteTimeoutId)
    }

    function G(e) {
      f.update()
    }

    function Y(e) {
      if (!f.object || c) return
      e.preventDefault(), e.stopPropagation()
      var t = e.touches ? e.touches[0] : e,
        n = at(t, f.filterIntersectPicker(f.pickers))
      if (n) f.axis = n.object.name, f.setMode(n.object.mode)
      else {
        var r = rt(e)
        r === f.object || r != null && r.editTransformToParent && r.isDescendantOf(f.object) ? (f.axis = f.getAxis(), f.setMode(f.getMode())) : f.axis = !1
      }
      f.update(!0)
    }

    function tt(e) {
      if (e.stop) return
      et.set(e.clientX, e.clientY)
      if (!f.showHelpers || !f.axis) ut(e), Y(e)
      if (!f.object || c) {
        f.network.dirtyNetwork()
        return
      }
      e.preventDefault(), e.stopPropagation()
      var n = e.touches ? e.touches[0] : e
      if (n.button === 0 || n.button == t) {
        var i = f.filterIntersectPicker(f.pickers),
          s = at(n, i),
          o = rt(e)
        s || (o === f.object || o != null && o.editTransformToParent && o.isDescendantOf(f.object)) && f.getDefaultPickers() && (s = {
          object: f.getDefaultPickers()
        })
        if (s) {
          f.axis = s.object.name, N.copy(X).sub(U).normalize(), f.gizmo[h].setActivePlane(f.axis, N)
          var u = at(n, [f.gizmo[h].activePlane])
          !u && o && (u = at(n, [o]))
          if (u) {
            j.copy(f.object._position), F.copy(f.object._scale), I.extractRotation(f.object.matrix), W.extractRotation(f.object.worldMatrix)
            var a = f.object.getParent()
            a == t && (a = r), q.extractRotation(a.worldMatrix), R.getScaleFromMatrix(C.getInverse(a.worldMatrix)), w.copy(u.point)
          }
        }
      }
      f.update(!0), c = !0
    }

    function nt(e) {
      if (!f.object || !f.axis || !c) return
      e.preventDefault(), e.stopPropagation(), e.stop = !0
      var t = e.touches ? e.touches[0] : e,
        n = at(t, [f.gizmo[h].activePlane])
      n || (n = at(t, [f.object]))
      if (n) {
        f.moving ? r.fireInteractionEvent({
          kind: 'liveMoveBetween',
          event: Ur
        }) : (r.fireInteractionEvent({
          kind: 'liveMoveStart',
          event: Ur
        }), f.moving = !0), b.copy(n.point)
        if (h == 'translate' && f.translateable) {
          b.sub(w), b.multiply(R), f.space == 'local' && (b.applyMatrix4(C.getInverse(W)), f.axis.search('X') == -1 && (b.x = 0), f.axis.search('Y') == -1 && (b.y = 0), f.axis.search('Z') == -1 && (b.z = 0), b.applyMatrix4(I), f.object.setPosition(j.clone().add(b)))
          if (f.space == 'world' || f.axis.search('XYZ') != -1) {
            f.axis.search('X') == -1 && (b.x = 0), f.axis.search('Y') == -1 && (b.y = 0), f.axis.search('Z') == -1 && (b.z = 0), b.applyMatrix4(C.getInverse(q)), f.object._position.copy(j)
            var i = f.object._position.clone().add(b)
            f.snap && (f.axis.search('X') != -1 && (i.x = Math.round(f.object._position.x / f.snap) * f.snap), f.axis.search('Y') != -1 && (i.y = Math.round(f.object._position.y / f.snap) * f.snap), f.axis.search('Z') != -1 && (i.z = Math.round(f.object._position.z / f.snap) * f.snap)), f.object.setPosition(i)
          }
        } else if (h == 'scale' && f.scaleable) {
          b.sub(w), b.multiply(R)
          var s = f.object._scale.clone(),
            o = (f.scaleRate || 1) / 10
          if (f.axis == 'XYZ') l = 1 + b.y * o, s.x = F.x * l, s.y = F.y * l, s.z = F.z * l
          else if (f.axis === 'XY') {
            var u = 1 + b.x * o,
              a = 1 + b.y * o
            if (f.forceSameScale) {
              var l = Math.max(u, a)
              s.x = F.x * l, s.y = F.y * l
            } else s.x = F.x * u, s.y = F.y * a
          } else if (f.axis === 'YZ') {
            var p = 1 + b.z * o,
              a = 1 + b.y * o
            if (f.forceSameScale) {
              var l = Math.max(p, a)
              s.z = F.z * l, s.y = F.y * l
            } else s.z = F.z * p, s.y = F.y * a
          } else if (f.axis === 'XZ') {
            var u = 1 + b.x * o,
              p = 1 + b.z * o
            if (f.forceSameScale) {
              var l = Math.max(u, a)
              s.x = F.x * l, s.z = F.z * l
            } else s.x = F.x * u, s.z = F.z * p
          } else b.applyMatrix4(C.getInverse(W)), f.axis == 'X' && (s.x = F.x * (1 + b.x * o)), f.axis == 'Y' && (s.y = F.y * (1 + b.y * o)), f.axis == 'Z' && (s.z = F.z * (1 + b.z * o))
          f.object.setScale(s)
        } else if (h == 'rotate' && f.rotateable) {
          b.sub(U), b.multiply(R), k.copy(w).sub(U), k.multiply(R)
          if (f.axis == 'E') b.applyMatrix4(C.getInverse(T)), k.applyMatrix4(C.getInverse(T)), E.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), S.set(Math.atan2(k.z, k.y), Math.atan2(k.x, k.z), Math.atan2(k.y, k.x)), L.setFromRotationMatrix(C.getInverse(q)), B.setFromAxisAngle(N, E.z - S.z), _.setFromRotationMatrix(W), L.multiplyQuaternions(L, B), L.multiplyQuaternions(L, _), f.object.quaternion.copy(L)
          else if (f.axis == 'XYZE') B.setFromEuler(b.clone().cross(k).normalize()), L.setFromRotationMatrix(C.getInverse(q)), D.setFromAxisAngle(B, -b.clone().angleTo(k)), _.setFromRotationMatrix(W), L.multiplyQuaternions(L, D), L.multiplyQuaternions(L, _), f.object.quaternion.copy(L)
          else if (f.space == 'local') {
            b.applyMatrix4(C.getInverse(W)), k.applyMatrix4(C.getInverse(W)), E.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), S.set(Math.atan2(k.z, k.y), Math.atan2(k.x, k.z), Math.atan2(k.y, k.x)), _.setFromRotationMatrix(I), D.setFromAxisAngle(A, E.x - S.x), P.setFromAxisAngle(O, E.y - S.y), H.setFromAxisAngle(M, E.z - S.z), f.axis == 'X' && _.multiplyQuaternions(_, D), f.axis == 'Y' && _.multiplyQuaternions(_, P), f.axis == 'Z' && _.multiplyQuaternions(_, H), f.object.quaternion.copy(_)
            var d = f.object._rotation.clone()
            d.setEulerFromQuaternion(_), f.object.setRotation(d)
          } else if (f.space == 'world') {
            E.set(Math.atan2(b.z, b.y), Math.atan2(b.x, b.z), Math.atan2(b.y, b.x)), S.set(Math.atan2(k.z, k.y), Math.atan2(k.x, k.z), Math.atan2(k.y, k.x)), L.setFromRotationMatrix(C.getInverse(q)), D.setFromAxisAngle(A, E.x - S.x), P.setFromAxisAngle(O, E.y - S.y), H.setFromAxisAngle(M, E.z - S.z), _.setFromRotationMatrix(W), f.axis == 'X' && L.multiplyQuaternions(L, D), f.axis == 'Y' && L.multiplyQuaternions(L, P), f.axis == 'Z' && L.multiplyQuaternions(L, H), L.multiplyQuaternions(L, _), f.object.quaternion.copy(L)
            var d = f.object._rotation.clone()
            d.setEulerFromQuaternion(L), f.object.setRotation(d)
          }
        }
        f.changed = !0
      }
      f.update(!0), f.updateTextNote(e, f.object)
    }

    function rt(e) {
      var t = f.network.getElementsByMouseEvent(e)
      return r.getFirstEditElement(t)
    }

    function it(e) {
      if (e instanceof n.ArrayMaterial) {
        var t = m.materials
        for (var r in t) it(t[r])
      } else e.orignalDepthTest = e.depthTest, e.orignalDepthMask = e.depthMask, e.depthTest = !1, e.depthMask = !1
    }

    function st(e) {
      if (e instanceof n.ArrayMaterial) {
        var t = m.materials
        for (var r in t) st(t[r])
      } else e.depthTest = e.orignalDepthTest, e.depthMask = e.orignalDepthMask
    }

    function ot(e) {
      return e && e.editTransformToParent && e.getParent() ? ot(e.getParent()) : e
    }

    function ut(e) {
      Z === null && (Z = new s()), Z.set(e.clientX, e.clientY), r.getDataBox().clearEditing()
      if (Z.distanceTo(et) === 0) {
        var t = f.network.getElementsByMouseEvent(e),
          n = r.getFirstEditElement(t)
        n && (n !== f.object, f.object = n, f.translateable && f.gizmo.translate.show(), f.rotateable && f.gizmo.rotate.show(), f.scaleable && f.gizmo.scale.show()), n || (f.gizmo[h].hide(), f.gizmo.translate.hide(), f.gizmo.rotate.hide(), f.gizmo.scale.hide(), f.object = null)
      } else {
        f.changed && f.onElementPropertyChanged && (f.changed = !1, f.moving = !1, f.onElementPropertyChanged(e, f.object), r.fireInteractionEvent({
          kind: 'liveMoveEnd',
          event: {
            e: e,
            source: f.object,
            time: (new Date()).getTime()
          }
        }))
      }
      f.axis = !1, c = !1, f.update(!0), f.hideTextNote()
    }

    function at(e, t) {
      if (!t) return null
      var n = f.network.getPickingByEvent(e),
        r = n.intersectObjects(t, !0, !0)
      return r[0] ? r[0] : !1
    }
    n.BaseInteraction.call(this, r)
    var i = new n.Element(),
      u = r.getCamera(),
      a = r.getRootView()
    a = a !== t ? a : document, this.domElement = a, this.gizmo = {}, this.gizmo.translate = new n.TransformGizmoTranslate(), this.gizmo.rotate = new n.TransformGizmoRotate(), this.gizmo.scale = new n.TransformGizmoScale(), i.addChild(this.gizmo.translate), i.addChild(this.gizmo.rotate), i.addChild(this.gizmo.scale), this.gizmo.translate.hide(), this.gizmo.rotate.hide(), this.gizmo.scale.hide(), this.object = !1, this.snap = !1, this.space = 'local', this.size = 1, this.axis = !1
    var f = this
    this.scaleable = !0, this.rotateable = !0, this.translateable = !0, this.setShowHelpers(!0)
    var c = !1,
      h = 'translate',
      p = 'XY',
      d = {
        type: 'change'
      },
      v = new n.Picking(),
      g = new n.Projector(),
      y = new o(),
      b = new o(),
      w = new o(),
      E = new o(),
      S = new o(),
      x = 1,
      T = new l(),
      N = new o(),
      C = new l(),
      k = new o(),
      L = new n.Quat(),
      A = new o(1, 0, 0),
      O = new o(0, 1, 0),
      M = new o(0, 0, 1),
      _ = new n.Quat(),
      D = new n.Quat(),
      P = new n.Quat(),
      H = new n.Quat(),
      B = new n.Quat(),
      j = new o(),
      F = new o(),
      I = new l(),
      q = new l(),
      R = new o(),
      U = new o(),
      z = new n.Euler(),
      W = new l(),
      X = new o(),
      V = new n.Euler()
    this.showNote = !0, this.handleDataBoxChange = function(e) {
      e.kind == 'remove' ? e.data == f.object && (f.gizmo.translate.hide(), f.gizmo.rotate.hide(), f.gizmo.scale.hide()) : e.kind == 'clear' && (f.gizmo.translate.hide(), f.gizmo.rotate.hide(), f.gizmo.scale.hide())
    }, this.network.getDataBox().addDataBoxChangeListener(this.handleDataBoxChange, this), this.network.addPropertyChangeListener(function(e) {
      if (e.property == 'dataBox') {
        var t = e.oldValue,
          n = e.value
        t.removeDataBoxChangeListener(this.handleDataBoxChange), n.addDataBoxChangeListener(this.handleDataBoxChange, this)
      }
    }), this.defaultMode = 'TranslateXY', this.pickers = [], this.gizmo.translate.pickers.getChildren().forEach(function(e) {
      f.pickers.push(e)
    }), this.gizmo.rotate.pickers.getChildren().forEach(function(e) {
      f.pickers.push(e)
    }), this.gizmo.scale.pickers.getChildren().forEach(function(e) {
      f.pickers.push(e)
    }), this.attach = function(e) {
      f.object = e, this.gizmo.translate.hide(), this.gizmo.rotate.hide(), this.gizmo.scale.hide(), this.gizmo[h].show(), f.update()
    }, this.detach = function(e) {
      f.object = !1, this.axis = !1, this.gizmo.translate.hide(), this.gizmo.rotate.hide(), this.gizmo.scale.hide()
    }, this.setMode = function(e) {
      h = e || h, this.update()
    }, this.setUp = function() {
      a.addEventListener('mousedown', tt, !1), a.addEventListener('touchstart', tt, !1), a.addEventListener('mousemove', Y, !1), a.addEventListener('touchmove', Y, !1), a.addEventListener('mousemove', nt, !1), a.addEventListener('touchmove', nt, !1), a.addEventListener('mouseup', ut, !1), a.addEventListener('mouseout', ut, !1), a.addEventListener('touchend', ut, !1), a.addEventListener('touchcancel', ut, !1), a.addEventListener('touchleave', ut, !1), a.addEventListener('keydown', $, !1), a.addEventListener('touchstart', J, !1), a.addEventListener('touchmove', K, !1), a.addEventListener('touchend', Q, !1), a.addEventListener('mousewheel', G, !1), f.network.helperBox.addByDescendant(i)
    }, this.tearDown = function() {
      a.removeEventListener('mousedown', tt, !1), a.removeEventListener('touchstart', tt, !1), a.removeEventListener('mousemove', Y, !1), a.removeEventListener('touchmove', Y, !1), a.removeEventListener('mousemove', nt, !1), a.removeEventListener('touchmove', nt, !1), a.removeEventListener('mouseup', ut, !1), a.removeEventListener('mouseout', ut, !1), a.removeEventListener('touchend', ut, !1), a.removeEventListener('touchcancel', ut, !1), a.removeEventListener('touchleave', ut, !1), a.removeEventListener('keydown', $, !1), a.removeEventListener('touchstart', J, !1), a.removeEventListener('touchmove', K, !1), a.removeEventListener('touchend', Q, !1), a.removeEventListener('mousewheel', G, !1), f.gizmo.translate.hide(), f.gizmo.rotate.hide(), f.gizmo.scale.hide(), f.network.helperBox.removeByDescendant(i)
    }, this.setSnap = function(e) {
      f.snap = e
    }, this.setSize = function(e) {
      f.size = e, f.dispatchEvent(d), this.update()
    }, this.setSpace = function(e) {
      f.space = e, this.update()
    }, this.update = function(e) {
      if (!f.object) return
      f.object.updateWorldMatrix(), U.getPositionFromMatrix(f.object.worldMatrix), z.setFromRotationMatrix(C.extractRotation(f.object.worldMatrix)), u.updateWorldMatrix(), X.getPositionFromMatrix(u.worldMatrix), V.setFromRotationMatrix(C.extractRotation(u.worldMatrix)), x = U.distanceTo(X) / 12 * f.size, i.setPosition(U), i.setScale(x, x, x), N.copy(X).sub(U).normalize(), this.gizmo.scale.update(z, N), f.space == 'local' ? (this.gizmo.translate.update(z, N), this.gizmo.rotate.update(z, N)) : (this.gizmo.translate.update(new n.Euler(), N), this.gizmo.rotate.update(new n.Euler(), N)), this.gizmo.translate.highlight(null), this.gizmo.rotate.highlight(null), this.gizmo.scale.highlight(null), this.gizmo[h].highlight(f.axis), i.updateWorldMatrix(!0), e && f.network.dirtyNetwork()
    }, this.getDefaultPickers = function() {
      return this.defaultMode === 'TranslateX' ? f.gizmo.translate.pickers.getChildren().get(0) : this.defaultMode === 'TranslateY' ? f.gizmo.translate.pickers.getChildren().get(1) : this.defaultMode === 'TranslateZ' ? f.gizmo.translate.pickers.getChildren().get(2) : this.defaultMode === 'TranslateXY' ? f.gizmo.translate.pickers.getChildren().get(4) : this.defaultMode === 'TranslateYZ' ? f.gizmo.translate.pickers.getChildren().get(5) : this.defaultMode === 'TranslateXZ' ? f.gizmo.translate.pickers.getChildren().get(6) : this.defaultMode === 'TranslateXYZ' ? f.gizmo.translate.pickers.getChildren().get(3) : this.defaultMode === 'RotateX' ? f.gizmo.rotate.pickers.getChildren().get(0) : this.defaultMode === 'RotateY' ? f.gizmo.rotate.pickers.getChildren().get(1) : this.defaultMode === 'RotateZ' ? f.gizmo.rotate.pickers.getChildren().get(2) : this.defaultMode === 'ScaleX' ? f.gizmo.scale.pickers.getChildren().get(0) : this.defaultMode === 'ScaleY' ? f.gizmo.scale.pickers.getChildren().get(1) : this.defaultMode === 'ScaleZ' ? f.gizmo.scale.pickers.getChildren().get(2) : this.defaultMode === 'ScaleXYZ' ? f.gizmo.scale.pickers.getChildren().get(6) : this.defaultMode === 'ScaleXY' ? f.gizmo.scale.pickers.getChildren().get(3) : this.defaultMode === 'ScaleYZ' ? f.gizmo.scale.pickers.getChildren().get(4) : this.defaultMode === 'ScaleXZ' ? f.gizmo.scale.pickers.getChildren().get(5) : null
    }, this.getMode = function() {
      var e = this.defaultMode
      return e.startsWith('Translate') ? 'translate' : e.startsWith('Rotate') ? 'rotate' : e.startsWith('Scale') ? 'scale' : 'translate'
    }, this.getAxis = function() {
      var e = this.defaultMode
      return e.endsWith('XYZ') ? 'XYZ' : e.endsWith('XY') ? 'XY' : e.endsWith('YZ') ? 'YZ' : e.endsWith('XZ') ? 'XZ' : e.endsWith('Y') ? 'X' : e.endsWith('Y') ? 'Y' : e.endsWith('Z') ? 'Z' : ''
    }
    var Z = null,
      et = new s()
    this.filterIntersectPicker = function(e) {
      var t = []
      if (!this.showHelpers) return t
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        r.getParent() === this.gizmo.translate.pickers && this.translateable && t.push(r), r.getParent() === this.gizmo.rotate.pickers && this.rotateable && t.push(r), r.getParent() === this.gizmo.scale.pickers && this.scaleable && t.push(r)
      }
      return t
    }
  }, n.extend(n.EditInteraction, n.BaseInteraction, {
    setShowHelpers: function(e) {
      this.showHelpers = e, this.gizmo.translate.showHelpers = e, this.gizmo.rotate.showHelpers = e, this.gizmo.scale.showHelpers = e, this.resetHelpers()
    },
    onElementPropertyChanged: function(e, t) {},
    resetHelpers: function() {
      this.showHelpers && this.translateable && this.object ? this.gizmo.translate.show() : this.gizmo.translate.hide(), this.showHelpers && this.rotateable && this.object ? this.gizmo.rotate.show() : this.gizmo.rotate.hide(), this.showHelpers && this.scaleable && this.object ? this.gizmo.scale.show() : this.gizmo.scale.hide(), this.update(!0)
    },
    setShowNote: function(e) {
      this.showNote = e
    },
    setScaleable: function(e) {
      this.scaleable = e, this.gizmo.scale.showable = e, this.resetHelpers()
    },
    setRotateable: function(e) {
      this.rotateable = e, this.gizmo.rotate.showable = e, this.resetHelpers()
    },
    setTranslateable: function(e) {
      this.translateable = e, this.gizmo.translate.showable = e, this.resetHelpers()
    },
    setDefaultMode: function(e) {
      this.defaultMode = e
    },
    setScaleRate: function(e) {
      this.scaleRate = e || 1
    },
    setForceSameScale: function(e) {
      this.forceSameScale = e
    },
    setSpaceMode: function(e) {
      e == 'world' ? this.space = 'world' : this.space = 'local', this.update()
    },
    createTextNote: function() {
      this.textNote = document.createElement('div'), this.textNote.style.position = 'relative', this.textNote.style.color = 'black', this.textNote.style.height = '0px', this.textNote.style.zIndex = '1000', this.domElement.appendChild(this.textNote)
      var e = document.createElement('table')
      this.noteTable = e, this.textNote.appendChild(this.noteTable)
      var t = e.createTHead()
      e.style.borderLeft = '1px solid #ffa500', e.style.borderTop = '1px solid #ffa500', e.style.fontSize = '14px', e.style.backgroundColor = 'rgba(255, 170, 13, 0.5)', e.setAttribute('border', 0), e.setAttribute('cellspacing', 0), e.setAttribute('cellpadding', 0)
      for (var n = 0; n < 4; n++) {
        var r = document.createElement('tr')
        for (var i = 0; i < 4; i++) {
          var s = document.createElement('td')
          s.style.borderRight = '1px solid #ffa500', s.style.borderBottom = '1px solid #ffa500', s.style.paddingLeft = '5px', s.style.paddingRight = '5px', s.style.paddingTop = '2px', s.style.paddingBottom = '2px', n == 0 && i > 0 || n > 0 && i == 0 ? (s.style.textAlign = 'center', s.style.fontWeight = 'bold') : s.style.textAlign = 'right', r.appendChild(s)
        }
        e.appendChild(r)
      }
    },
    showTextNote: function() {
      if (!this.showNote) return
      this.textNote == null && this.createTextNote(), this.textNote.style.display = ''
    },
    hideTextNote: function() {
      this.textNote && (this.textNote.style.display = 'none')
    },
    updateTextNote: function(e, t) {
      if (t == null || !this.showNote) return
      var n = this.network.getRootView().getBoundingClientRect()
      this.showTextNote(), this.textNote.style.top = e.clientY - n.top + 20 + 'px', this.textNote.style.left = e.clientX - n.left + 20 + 'px'
      var r = t.getRotation(),
        i = t.getPosition(),
        s = t.getScale(),
        o = [
          [' ', 'x', 'y', 'z'],
          ['p', i.x, i.y, i.z],
          ['r', r.x, r.y, r.z],
          ['s', s.x, s.y, s.z]
        ],
        u = this.noteTable
      for (var a = 0; a < 4; a++) {
        for (var f = 0; f < 4; f++) {
          var l = o[a][f]
          a > 0 && f > 0 && (a == 2 ? l = (l * 180 / Math.PI).toFixed(0) + '&deg;' : l = l.toFixed(2)), u.rows[a].cells[f].innerHTML = '' + l
        }
      }
    }
  })
  var gi = 1e-5,
    yi = 0,
    bi = 1,
    wi = 2,
    Ei = 3
  n.CSG = function(e) {
    var t, r, i, o, u, a, f, c = [],
      h
    if (!(e instanceof n.Element)) {
      if (e instanceof Ti) return this.tree = e, this.matrix = new l(), this
      throw 'TGL.CSG: Given geometry is unsupported'
    }
    e.computeNodeData && e.computeNodeData(), e.updateWorldMatrix(!0), this.matrix = e.worldMatrix.clone()
    for (t = 0, r = e.faces.length; t < r; t++) {
      i = e.faces[t], u = e.uvs[t], a = e.uv2s[t], f = new Si()
      if (i instanceof O) o = e.vertices[i.a], o = new xi(o.x, o.y, o.z, i.vertexNormals[0], new s(u[0].x, u[0].y), a[0].clone()), o.materialIndex = i.materialIndex, o.applyMatrix4(this.matrix), f.vertices.push(o), o = e.vertices[i.b], o = new xi(o.x, o.y, o.z, i.vertexNormals[1], new s(u[1].x, u[1].y), a[1].clone()), o.materialIndex = i.materialIndex, o.applyMatrix4(this.matrix), f.vertices.push(o), o = e.vertices[i.c], o = new xi(o.x, o.y, o.z, i.vertexNormals[2], new s(u[2].x, u[2].y), a[2].clone()), o.applyMatrix4(this.matrix), o.materialIndex = i.materialIndex, f.vertices.push(o)
      else {
        if (!(i instanceof M)) throw 'Invalid face type at index ' + t
        o = e.vertices[i.a], o = new xi(o.x, o.y, o.z, i.vertexNormals[0], new s(u[0].x, u[0].y), a[0].clone()), o.materialIndex = i.materialIndex, o.applyMatrix4(this.matrix), f.vertices.push(o), o = e.vertices[i.b], o = new xi(o.x, o.y, o.z, i.vertexNormals[1], new s(u[1].x, u[1].y), a[1].clone()), o.materialIndex = i.materialIndex, o.applyMatrix4(this.matrix), f.vertices.push(o), o = e.vertices[i.c], o = new xi(o.x, o.y, o.z, i.vertexNormals[2], new s(u[2].x, u[2].y), a[2].clone()), o.materialIndex = i.materialIndex, o.applyMatrix4(this.matrix), f.vertices.push(o), o = e.vertices[i.d], o = new xi(o.x, o.y, o.z, i.vertexNormals[3], new s(u[3].x, u[3].y), a[3].clone()), o.applyMatrix4(this.matrix), o.materialIndex = i.materialIndex, f.vertices.push(o)
      }
      isNaN(f.calculateProperties().w) ? console.log('Not right polygon') : c.push(f)
    }
    this.tree = new Ti(c), this.tree.materialSize = e.getMaterialSize ? e.getMaterialSize() : 0
    if (e.material instanceof n.ArrayMaterial) this.tree.material = e.material
    else {
      var p = new n.ArrayMaterial()
      this.tree.material = p
      for (var t = 0; t < this.tree.materialSize; t++) p.push(e.material)
    }
  }, n.CSG.prototype.substract = function(e) {
    var t = this.tree.clone(),
      r = e.tree.clone()
    return t.sumMateriaSize(r), t.invert(), t.clipTo(r), r.clipTo(t), r.invert(), r.clipTo(t), r.invert(), t.build(r.allPolygons()), t.invert(), t = new n.CSG(t), t.matrix = this.matrix, t
  }, n.CSG.prototype.union = function(e) {
    var t = this.tree.clone(),
      r = e.tree.clone()
    return t.sumMateriaSize(r), t.clipTo(r), r.clipTo(t), r.invert(), r.clipTo(t), r.invert(), t.build(r.allPolygons()), t = new n.CSG(t), t.matrix = this.matrix, t
  }, n.CSG.prototype.intersect = function(e) {
    var t = this.tree.clone(),
      r = e.tree.clone()
    return t.sumMateriaSize(r), t.invert(), r.clipTo(t), r.invert(), t.clipTo(r), r.clipTo(t), t.build(r.allPolygons()), t.invert(), t = new n.CSG(t), t.matrix = this.matrix, t
  }, n.CSG.prototype.inverse = function() {
    var e = this.tree.clone()
    return e.polygons.map(function(e) {
      e.flip()
    }), e = new n.CSG(e), e
  }, n.CSG.prototype.toGeometry = function(e) {
    var t, r, i = (new l()).getInverse(this.matrix),
      u = new n.Entity(this.tree.material, e),
      a = this.tree.allPolygons(),
      f = a.length,
      c, h, p = {},
      d, v, m, g, y, b, w
    for (t = 0; t < f; t++) {
      c = a[t], h = c.vertices.length
      for (r = 2; r < h; r++) {
        b = [], w = [], g = c.vertices[0], b.push(new s(g.uv.x, g.uv.y)), w.push(g.uv2.clone())
        var E = g.materialIndex
        g = new o(g.x, g.y, g.z), typeof p[g.x + ',' + g.y + ',' + g.z] !== 'undefined' ? d = p[g.x + ',' + g.y + ',' + g.z] : (u.vertices.push(g), d = p[g.x + ',' + g.y + ',' + g.z] = u.vertices.length - 1), g = c.vertices[r - 1], b.push(new s(g.uv.x, g.uv.y)), w.push(g.uv2.clone()), g = new o(g.x, g.y, g.z), typeof p[g.x + ',' + g.y + ',' + g.z] !== 'undefined' ? v = p[g.x + ',' + g.y + ',' + g.z] : (u.vertices.push(g), v = p[g.x + ',' + g.y + ',' + g.z] = u.vertices.length - 1), g = c.vertices[r], b.push(new s(g.uv.x, g.uv.y)), w.push(g.uv2.clone()), g = new o(g.x, g.y, g.z), typeof p[g.x + ',' + g.y + ',' + g.z] !== 'undefined' ? m = p[g.x + ',' + g.y + ',' + g.z] : (u.vertices.push(g), m = p[g.x + ',' + g.y + ',' + g.z] = u.vertices.length - 1), y = new O(d, v, m, new o(c.normal.x, c.normal.y, c.normal.z)), y.materialIndex = E || 0, u.faces.push(y), u.uvs.push(b), u.uv2s.push(w)
      }
    }
    return u
  }, n.CSG.prototype.toMesh = function(e) {
    var t = this.toGeometry(e)
    return t.computeBoundingBox(), t
  }
  var Si = function(e, n, r) {
    e instanceof Array || (e = []), this.vertices = e, e.length > 0 ? this.calculateProperties() : this.normal = this.w = t
  }
  Si.prototype.calculateProperties = function() {
    var e = this.vertices[0],
      t = this.vertices[1],
      n = this.vertices[2],
      r = t.clone().subtract(e),
      i = n.clone().subtract(e)
    return this.normal = r.cross(i).normalize(), this.w = this.normal.clone().dot(e), this
  }, Si.prototype.clone = function() {
    var e, t, n = new Si()
    for (e = 0, t = this.vertices.length; e < t; e++) n.vertices.push(this.vertices[e].clone())
    return n.calculateProperties(), n
  }, Si.prototype.flip = function() {
    var e, t = []
    this.normal.multiplyScalar(-1), this.w *= -1
    for (e = this.vertices.length - 1; e >= 0; e--) t.push(this.vertices[e])
    return this.vertices = t, this
  }, Si.prototype.classifyVertex = function(e) {
    var t = this.normal.dot(e) - this.w
    return t < -gi ? wi : t > gi ? bi : yi
  }, Si.prototype.classifySide = function(e) {
    var t, n, r, i = 0,
      s = 0,
      o = e.vertices.length
    for (t = 0; t < o; t++) n = e.vertices[t], r = this.classifyVertex(n), r === bi ? i++ : r === wi && s++
    return i > 0 && s === 0 ? bi : i === 0 && s > 0 ? wi : i === 0 && s === 0 ? yi : Ei
  }, Si.prototype.splitPolygon = function(e, t, n, r, i) {
    var s = this.classifySide(e)
    if (s === yi)(this.normal.dot(e.normal) > 0 ? t : n).push(e)
    else if (s === bi) r.push(e)
    else if (s === wi) i.push(e)
    else {
      var o, u, a, f, l, c, h, p, d, v = [],
        m = []
      for (u = 0, o = e.vertices.length; u < o; u++) a = (u + 1) % o, c = e.vertices[u], h = e.vertices[a], f = this.classifyVertex(c), l = this.classifyVertex(h), f != wi && v.push(c), f != bi && m.push(c), (f | l) === Ei && (p = (this.w - this.normal.dot(c)) / this.normal.dot(h.clone().subtract(c)), d = c.interpolate(h, p), v.push(d), m.push(d))
      v.length >= 3 && r.push((new Si(v)).calculateProperties()), m.length >= 3 && i.push((new Si(m)).calculateProperties())
    }
  }, n.CSG.Polygon = Si
  var xi = function(e, t, n, r, i, u) {
    this.x = e, this.y = t, this.z = n, this.normal = r || new o(), this.uv = i || new s(), this.uv2 = u || new s()
  }
  xi.prototype.length = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
  }, xi.prototype.clone = function() {
    var e = new xi(this.x, this.y, this.z, this.normal.clone(), this.uv.clone(), this.uv2.clone())
    return e.materialIndex = this.materialIndex, e
  }, xi.prototype.add = function(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this
  }, xi.prototype.subtract = function(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this
  }, xi.prototype.multiplyScalar = function(e) {
    return this.x *= e, this.y *= e, this.z *= e, this
  }, xi.prototype.cross = function(e) {
    var t = this.x,
      n = this.y,
      r = this.z
    return this.x = n * e.z - r * e.y, this.y = r * e.x - t * e.z, this.z = t * e.y - n * e.x, this
  }, xi.prototype.normalize = function() {
    var e = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    return this.x /= e, this.y /= e, this.z /= e, this
  }, xi.prototype.dot = function(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z
  }, xi.prototype.lerp = function(e, t) {
    return this.add(e.clone().subtract(this).multiplyScalar(t)), this.normal.add(e.normal.clone().sub(this.normal).multiplyScalar(t)), this.uv.add(e.uv.clone().sub(this.uv).multiplyScalar(t)), this.uv2.add(e.uv2.clone().sub(this.uv2).multiplyScalar(t)), this
  }, xi.prototype.interpolate = function(e, t) {
    return this.clone().lerp(e, t)
  }, xi.prototype.applyMatrix4 = function(e) {
    var t = this.x,
      n = this.y,
      r = this.z,
      i = e.elements
    return this.x = i[0] * t + i[4] * n + i[8] * r + i[12], this.y = i[1] * t + i[5] * n + i[9] * r + i[13], this.z = i[2] * t + i[6] * n + i[10] * r + i[14], this
  }, n.CSG.Vertex = xi
  var Ti = function(e) {
    var n, r, i = [],
      s = []
    this.polygons = [], this.front = this.back = t
    if (!(e instanceof Array && e.length !== 0)) return
    this.divider = e[0].clone()
    for (n = 0, r = e.length; n < r; n++) this.divider.splitPolygon(e[n], this.polygons, this.polygons, i, s)
    i.length > 0 && (this.front = new Ti(i)), s.length > 0 && (this.back = new Ti(s))
  }
  Ti.isConvex = function(e) {
    var t, n
    for (t = 0; t < e.length; t++) {
      for (n = 0; n < e.length; n++) {
        if (t !== n && e[t].classifySide(e[n]) !== wi) return !1
      }
    }
    return !0
  }, Ti.prototype.build = function(e) {
    var t, n, r = [],
      i = []
    this.divider || (this.divider = e[0].clone())
    for (t = 0, n = e.length; t < n; t++) this.divider.splitPolygon(e[t], this.polygons, this.polygons, r, i)
    r.length > 0 && (this.front || (this.front = new Ti()), this.front.build(r)), i.length > 0 && (this.back || (this.back = new Ti()), this.back.build(i))
  }, Ti.prototype.allPolygons = function() {
    var e = this.polygons.slice()
    return this.front && (e = e.concat(this.front.allPolygons())), this.back && (e = e.concat(this.back.allPolygons())), e
  }, Ti.prototype.clone = function() {
    var e = new Ti()
    this.divider && (e.divider = this.divider.clone()), e.polygons = this.polygons.map(function(e) {
      return e.clone()
    }), e.front = this.front && this.front.clone(), e.back = this.back && this.back.clone(), e.materialSize = this.materialSize, e.material = new n.ArrayMaterial()
    if (this.material) {
      for (var t = 0; t < this.material.materials.length; t++) e.material.materials.push(this.material.materials[t])
    }
    return e
  }, Ti.prototype.invert = function() {
    var e, t, n
    for (e = 0, t = this.polygons.length; e < t; e++) this.polygons[e].flip()
    return this.divider && this.divider.flip(), this.front && this.front.invert(), this.back && this.back.invert(), n = this.front, this.front = this.back, this.back = n, this
  }, Ti.prototype.clipPolygons = function(e) {
    var t, n, r, i
    if (!this.divider) return e.slice()
    r = [], i = []
    for (t = 0, n = e.length; t < n; t++) this.divider.splitPolygon(e[t], r, i, r, i)
    return this.front && (r = this.front.clipPolygons(r)), this.back ? i = this.back.clipPolygons(i) : i = [], r.concat(i)
  }, Ti.prototype.clipTo = function(e) {
    this.polygons = e.clipPolygons(this.polygons), this.front && this.front.clipTo(e), this.back && this.back.clipTo(e)
  }, Ti.prototype.sumMateriaSize = function(e) {
    e.changeMaterialIndex(this.materialSize), this.materialSize = this.materialSize + e.materialSize
    for (var t = 0; t < e.material.materials.length; t++) this.material.materials.push(e.material.materials[t])
  }, Ti.prototype.changeMaterialIndex = function(e) {
    for (var t = 0; t < this.polygons.length; t++) {
      var n = this.polygons[t]
      for (var r = 0; r < n.vertices.length; r++) {
        var i = n.vertices[r]
        i.materialIndex = i.materialIndex + e
      }
    }
    this.front && this.front.changeMaterialIndex(e), this.back && this.back.changeMaterialIndex(e)
  }, n.CSG.Node = Ti, n.XmlSerializer = function(e, t, r) {
    this.dataBox = e, this.settings = t || new n.SerializationSettings(), this.filterFunction = r, this.ref = 0, this.refMap = {}, this.idMap = {}, this.xmlString = ''
  }, n.extend(n.XmlSerializer, Object, {
    serialize: function() {
      return this.xmlString = "<TGL version='" + n.version + "' platform='html5'>\n", this.serializeBody(), this.xmlString += '</TGL>\n', this.xmlString
    },
    serializeBody: function() {
      this.ref = 0, this.dataBox.getRoots().forEach(this.initRefs, this), this.settings.isDataBoxSerializable && (this.xmlString += "<dataBox class='" + this.dataBox.getClassName() + "'>\n", this.dataBox.serializeXml(this, this.dataBox.newInstance()), this.xmlString += '</dataBox>\n'), this.dataBox.getRoots().forEach(this.serializeData, this)
    },
    initRefs: function(e) {
      this.refMap[e.getId()] = this.ref++, e.getChildren().forEach(this.initRefs, this)
    },
    isSerializable: function(e) {
      return this.dataBox.contains(e) ? this.filterFunction && !this.filterFunction(e) ? !1 : !0 : !1
    },
    getPropertyType: function(e, t) {
      var n = this.settings.getPropertyType(t)
      return n || e.__SizePropeties && e.__SizePropeties.indexOf(t) != -1 && (n = 'number'), n
    },
    serializeData: function(e) {
      if (this.isSerializable(e)) {
        var t = e.newInstance(),
          n = this.refMap[e.getId()]
        this.xmlString += "<data class='" + e.getClassName() + "' ref='" + n + "'", this.settings.getPropertyType('id') != null && (this.xmlString += " id='" + e.getId() + "'"), this.xmlString += '>\n', e.serializeXml(this, t), this.xmlString += '</data>\n'
      }
      e.getChildren().forEach(this.serializeData, this)
    },
    serializePropertyXml: function(e, t, r) {
      var i = this.getPropertyType(e, t)
      if (i) {
        var s = n.getValue(e, t, i),
          o = n.getValue(r, t, i)
        s !== o && this.serializeValue('p', t, s, o, i)
      }
    },
    serializeStyleXml: function(e, t, n) {
      var r = this.settings.getStyleType(t)
      if (r) {
        var i = e.getStyle(t),
          s = n.getStyle(t)
        i != s && this.serializeValue('s', t, i, s, r)
      }
    },
    serializeClientXml: function(e, t, n) {
      var r = this.settings.getClientType(t)
      if (r != null) {
        var i = e.getClient(t),
          s = n.getClient(t)
        i != s && this.serializeValue('c', t, i, s, r)
      }
    },
    serializeValue: function(e, t, n, r, i) {
      e === 's' && (n = this.flattenArray(n), n instanceof Array && i !== 'string' && i !== 'color' && i !== 'number' && (i = 'list.' + i, n = new N(n)))
      if (n == null) this.xmlString += '	<' + e + " n='" + t + "' none=''/>\n"
      else if (i === 'cdata') this.xmlString += '	<' + e + " n='" + t + "'><![CDATA[" + n + ']]></' + e + '>\n'
      else if (i === 'data') {
        var s = this.refMap[n.getId()]
        s != null && (this.xmlString += '	<' + e + " n='" + t + "' ref='" + s + "'/>\n")
      } else if (i === 'vec2') {
        if (!r || n.x !== r.x || n.y !== r.y) this.xmlString += '	<' + e + " n='" + t + "' x='" + n.x + "' y='" + n.y + "'/>\n"
      } else if (i === 'vec3') {
        if (!r || n.x !== r.x || n.y !== r.y || n.z != r.z) this.xmlString += '	<' + e + " n='" + t + "' x='" + n.x + "' y='" + n.y + "' z='" + n.z + "'/>\n"
      } else {
        i === 'list.vec2' ? (this.xmlString += '	<' + e + " n='" + t + "'>\n", n instanceof Array && (n = new N(n)), n.forEach(function(t) {
          if (t instanceof Array) {
            this.xmlString += '	<' + e + '>\n'
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              this.xmlString += "		<p x='" + r.x + "' y='" + r.y + "'/>\n"
            }
            this.xmlString += '	</' + e + '>\n'
          } else this.xmlString += "		<p x='" + t.x + "' y='" + t.y + "'/>\n"
        }, this), this.xmlString += '	</' + e + '>\n') : i === 'list.vec3' ? (this.xmlString += '	<' + e + " n='" + t + "'>\n", n instanceof Array && (n = new N(n)), n.forEach(function(t) {
          if (t instanceof Array) {
            this.xmlString += '	<' + e + '>\n'
            for (var n = 0; n < t.length; n++) {
              var r = t[n]
              this.xmlString += '	<' + e + "' x='" + r.x + "' y='" + r.y + "' z='" + r.z + "'/>\n"
            }
            this.xmlString += '	</' + e + '>\n'
          } else this.xmlString += '		<' + e + "' x='" + t.x + "' y='" + t.y + "' z='" + t.z + "'/>\n"
        }, this), this.xmlString += '	</' + e + '>\n') : i === 'list.string' || i === 'list.number' || i === 'list.color' ? (this.xmlString += '	<' + e + " n='" + t + "'>\n", n.forEach(function(e) {
          this.xmlString += '		<s>' + e + '</s>\n'
        }, this), this.xmlString += '	</' + e + '>\n') : this.xmlString += '	<' + e + " n='" + t + "'>" + n + '</' + e + '>\n'
      }
    },
    flattenArray: function(e) {
      if (e instanceof Array) {
        for (var t = 0; t < e.length - 1; t++) {
          if (e[t] != e[t + 1]) {
            if (!e[t] || !e[t].equals) return e
            if (!e[t].equals(e[t + 1])) return e
          }
        }
        return e[0]
      }
      return e
    },
    deserialize: function(e, t) {
      n.isDeserializing = !0, this.xmlString = e
      var r = n.xml(e).documentElement
      this.refMap = {}, this.idMap = {}
      var i = new N(),
        s = new N(),
        o, u, a, f = r.getElementsByTagName('data'),
        l = f.length
      for (a = 0; a < l; a++) {
        u = f[a]
        var c = u.getAttribute('class'),
          h = this.settings.getPropertyType('id')
        if (h && u.hasAttribute('id')) {
          var p = null
          if (h === 'string') p = u.getAttribute('id')
          else if (h === 'int') p = parseInt(u.getAttribute('id'))
          else {
            if (h !== 'number') throw "Unsupported id type '" + h + "'"
            p = parseFloat(u.getAttribute('id'))
          }
          if (u.getAttribute('action') === 'remove') {
            this.dataBox.removeById(p)
            continue
          }
          o = this.dataBox.getDataById(p), o || (o = n.newInstance(c, p))
        } else o = n.newInstance(c)
        if (u.hasAttribute('ref')) {
          var d = u.getAttribute('ref')
          this.refMap[d] = o
        }
        i.add(o), s.add(u), this.idMap[o.getId()] = o
      }
      this.dataBox.forEach(function(e) {
        this.idMap[e.getId()] = e
      }, this), l = i.size()
      for (a = 0; a < l; a++) {
        o = i.get(a)
        if (this.dataBox.containsById(o.getId())) continue
        t && !o.getParent() && o.setParent(t), this.dataBox.add(o)
      }
      for (a = 0; a < l; a++) o = i.get(a), u = s.get(a), o.deserializeXml(this, u)
      this.settings.isDataBoxSerializable && r.getElementsByTagName('dataBox').length === 1 && this.dataBox.deserializeXml(this, r.getElementsByTagName('dataBox')[0]), n.isDeserializing = !1
    },
    deserializePropertyXml: function(e, t, r) {
      var i = this.getPropertyType(e, r)
      i && n.setValue(e, r, this.deserializeValue(t, i))
    },
    deserializeStyleXml: function(e, t, n) {
      var r = this.settings.getStyleType(n)
      r && e.setStyle(n, this.deserializeValue(t, r))
    },
    deserializeClientXml: function(e, t, n) {
      var r = this.settings.getClientType(n)
      r && e.setClient(n, this.deserializeValue(t, r))
    },
    deserializePoint: function(e) {
      var t = e.getAttribute('x') ? parseFloat(e.getAttribute('x')) : null,
        r = e.getAttribute('a') ? parseFloat(e.getAttribute('a')) : null
      if (t != null) {
        var i = e.getAttribute('y') ? parseFloat(e.getAttribute('y')) : null,
          s = e.getAttribute('z') ? parseFloat(e.getAttribute('z')) : null,
          o = e.getAttribute('w') ? parseFloat(e.getAttribute('w')) : null
        return o != null ? new n.Vec4(t, i, s, o) : s != null ? new n.Vec3(t, i, s) : new n.Vec2(t, i)
      }
      if (r != null) {
        var u = e.getAttribute('b') ? parseFloat(e.getAttribute('b')) : null,
          a = e.getAttribute('c') ? parseFloat(e.getAttribute('c')) : null,
          f = e.getAttribute('d') ? parseFloat(e.getAttribute('d')) : null
        return f != null ? new n.Face4(r, u, a, f) : new n.Face3(r, u, a)
      }
      return null
    },
    arrayStyleValue: function(e, t) {
      var r = []
      if (e.indexOf(',')) {
        r = e.split(',')
        if (t === 'string') return r
        if (t === 'number') {
          var i = []
          for (var s = 0; s < r.length; s++) i.push(parseFloat(r[s]))
          return i
        }
        if (t === 'color') {
          var o = []
          for (var s = 0; s < r.length; s++) o.push(new n.Color(r[s]))
          return o
        }
      }
    },
    deserializeValue: function(e, t, r) {
      if (e.hasAttribute('@none')) return null
      var i = e.nodeName === 's',
        s = i && e.textContent.indexOf(',') !== -1
      if (t === 'string') return s ? this.arrayStyleValue(e.textContent, t) : e.textContent
      if (t === 'color') return s ? this.arrayStyleValue(e.textContent, t) : e.textContent
      if (t === 'number') return s ? this.arrayStyleValue(e.textContent, t) : parseFloat(e.textContent)
      if (t === 'boolean') return e.textContent === 'true'
      if (t === 'int') return parseInt(e.textContent)
      if (t === 'point') return this.deserializePoint(e)
      if (t === 'vec2') {
        var o = parseFloat(e.getAttribute('x')),
          u = parseFloat(e.getAttribute('y'))
        if (!isNaN(o) && !isNaN(u) || !i) return new n.Vec2(o, u)
        t = 'list.point'
      }
      if (t === 'vec3') {
        var o = parseFloat(e.getAttribute('x')),
          u = parseFloat(e.getAttribute('y')),
          a = parseFloat(e.getAttribute('z'))
        return new n.Vec3(o, u, a)
      }
      if (t === 'data') {
        var f = e.getAttribute('ref'),
          l = this.refMap[f]
        return l || this.idMap[f]
      }
      var c, h, p, d
      if (t === 'list.point') {
        var v = new N(),
          m = e.getElementsByTagName('p')
        c = m.length
        for (d = 0; d < c; d++) {
          var g = m[d]
          v.add(this.deserializePoint(g))
        }
        return i ? v._as : v
      }
      if (t === 'list.string') {
        var y = new N()
        p = e.getElementsByTagName('s'), c = p.length
        for (d = 0; d < c; d++) y.add(p[d].textContent)
        return y
      }
      if (t === 'list.number') {
        h = new N(), p = e.getElementsByTagName('s'), c = p.length
        for (d = 0; d < c; d++) h.add(parseFloat(p[d].textContent))
        return h
      }
      if (t === 'array.string') return e.textContent.split(',')
      if (t === 'array.number') {
        h = e.textContent.split(','), c = h.length
        for (d = 0; d < c; d++) h[d] = parseFloat(h[d])
        return h
      }
      return t === 'rectangle' ? {
        x: parseFloat(e.getAttribute('x')),
        y: parseFloat(e.getAttribute('y')),
        width: parseFloat(e.getAttribute('w')),
        height: parseFloat(e.getAttribute('h'))
      } : e.textContent
    }
  }), n.addMethod(n.Data, {
    serializeXml: function(e, t) {
      if (this.__SizePropeties && this.__SizePropeties.length) {
        var n, r
        for (n = 0, r = this.__SizePropeties.length; n < r; n++) this.serializePropertyXml(e, this.__SizePropeties[n], t)
      } else this.serializePropertyXml(e, 'materialSize', t), this.vertices && this.vertices.length && this.serializePropertyXml(e, 'vertices', t), this.faces && this.faces.length && this.serializePropertyXml(e, 'faces', t), this.uvs && this.uvs.length && this.serializePropertyXml(e, 'uvs', t)
      if (e.settings.isClientSerializable && this._clientMap) {
        for (var i in this._clientMap) this.serializeClientXml(e, i, t)
      }
      this.serializePropertyXml(e, 'name', t), this.serializePropertyXml(e, 'parent', t)
    },
    serializePropertyXml: function(e, t, n) {
      e.serializePropertyXml(this, t, n)
    },
    serializeClientXml: function(e, t, n) {
      e.serializeClientXml(this, t, n)
    },
    deserializeXml: function(e, t) {
      var n = t.getElementsByTagName('p'),
        r = n.length,
        i, s, o, u
      for (i = 0; i < r; i++) s = n[i], s.hasAttribute('n') && this.deserializePropertyXml(e, s, s.getAttribute('n'))
      if (e.settings.isClientSerializable) {
        o = t.getElementsByTagName('c'), r = o.length
        for (i = 0; i < r; i++) u = o[i], u.hasAttribute('n') && this.deserializeClientXml(e, u, u.getAttribute('n'))
      }
    },
    deserializePropertyXml: function(e, t, n) {
      e.deserializePropertyXml(this, t, n)
    },
    deserializeClientXml: function(e, t, n) {
      e.deserializeClientXml(this, t, n)
    }
  }), n.addMethod(n.Element, {
    serializeXml: function(e, t) {
      if (e.settings.isStyleSerializable && this.styleMap) {
        for (var r in this.styleMap) this.isSideStyle(r) || this.serializeStyleXml(e, r, t)
      }
      this.serializePropertyXml(e, 'position', t), this.serializePropertyXml(e, 'rotation', t), this.serializePropertyXml(e, 'scale', t), n.Element.superClass.serializeXml.call(this, e, t), this._alarmState.getHighestNativeAlarmSeverity() && e.settings.getPropertyType('alarmState') === 'alarmstate' && (e.xmlString += "	<p n='alarmState'>\n", n.AlarmSeverity.forEach(function(t) {
        var n = this.getNewAlarmCount(t)
        n > 0 && (e.xmlString += "		<n n='" + t.name + "' c='" + n + "'/>\n")
      }, this._alarmState), n.AlarmSeverity.forEach(function(t) {
          var n = this.getAcknowledgedAlarmCount(t)
          n > 0 && (e.xmlString += "		<a n='" + t.name + "' c='" + n + "'/>\n")
        }, this._alarmState), e.xmlString += '	</p>\n')
    },
    serializeStyleXml: function(e, t, n) {
      e.serializeStyleXml(this, t, n)
    },
    deserializeXml: function(e, t) {
      n.Element.superClass.deserializeXml.call(this, e, t)
      if (e.settings.isStyleSerializable) {
        var r = t.getElementsByTagName('s'),
          i = r.length,
          s, o
        for (s = 0; s < i; s++) o = r[s], o.hasAttribute('n') && this.deserializeStyleXml(e, o, o.getAttribute('n'))
      }
    },
    deserializeStyleXml: function(e, t, n) {
      e.deserializeStyleXml(this, t, n)
    },
    deserializePropertyXml: function(e, t, r) {
      if (r === 'alarmState') {
        if (e.settings.getPropertyType('alarmState') === 'alarmstate') {
          var i, s, o, u, a = t.getElementsByTagName('n')
          for (o = 0; o < a.length; o++) u = a[o], s = twaver.AlarmSeverity.getByName(u.getAttribute('n')), this._alarmState.setNewAlarmCount(s, parseInt(u.getAttribute('c')))
          a = t.getElementsByTagName('a')
          for (o = 0; o < a.length; o++) u = a[o], s = twaver.AlarmSeverity.getByName(u.getAttribute('n')), this._alarmState.setAcknowledgedAlarmCount(s, parseInt(u.getAttribute('c')))
        }
      } else n.Element.superClass.deserializePropertyXml.call(this, e, t, r)
    }
  }), n.addMethod(n.DataBox, {
    serializeXml: function(e, t) {
      if (e.settings.isClientSerializable && this._clientMap) {
        for (var n in this._clientMap) this.serializeClientXml(e, n, t)
      }
      this.serializePropertyXml(e, 'name', t)
    },
    serializePropertyXml: function(e, t, n) {
      e.serializePropertyXml(this, t, n)
    },
    serializeClientXml: function(e, t, n) {
      e.serializeClientXml(this, t, n)
    },
    deserializeXml: function(e, t) {
      var n = t.getElementsByTagName('p'),
        r = n.length,
        i, s, o, u
      for (i = 0; i < r; i++) s = n[i], s.hasAttribute('n') && this.deserializePropertyXml(e, s, s.getAttribute('n'))
      if (e.settings.isClientSerializable) {
        o = t.getElementsByTagName('c'), r = o.length
        for (i = 0; i < r; i++) u = o[i], u.hasAttribute('n') && this.deserializeClientXml(e, u, u.getAttribute('n'))
      }
    },
    deserializePropertyXml: function(e, t, n) {
      e.deserializePropertyXml(this, t, n)
    },
    deserializeClientXml: function(e, t, n) {
      e.deserializeClientXml(this, t, n)
    }
  }), n.JsonSerializer = function(e, t, r) {
    this.dataBox = e, this.settings = t || new n.SerializationSettings(), this.filterFunction = r, this.ref = 0, this.refMap = {}, this.idMap = {}, this.jsonObject = {}
  }, n.extend(n.JsonSerializer, Object, {
    constructor: n.JsonSerializer,
    className: 'TGL.JsonSerializer',
    serialize: function() {
      return this.jsonObject = {
        v: n.version,
        platform: 'html5'
      }, this.serializeBody(), JSON.stringify(this.jsonObject)
    },
    serializeBody: function() {
      this.ref = 0, this.dataBox.getRoots().forEach(this.initRefs, this)
      if (this.settings.isDataBoxSerializable) {
        var e = {
          'class': this.dataBox.getClassName(),
          p: {},
          s: {},
          c: {}
        }
        this.jsonObject.dataBox = e, this.dataBox.serializeJson(this, this.dataBox.newInstance(), e), P.isEmptyObject(e.p) && delete e.p, P.isEmptyObject(e.s) && delete e.s, P.isEmptyObject(e.c) && delete e.c
      }
      this.jsonObject.datas = [], this.dataBox.getRoots().forEach(this.serializeData, this)
    },
    initRefs: function(e) {
      this.refMap[e.getId()] = this.ref++, e.getChildren().forEach(this.initRefs, this)
      if (e instanceof n.ComboNode) {
        for (var t = 0; t < e.combos.length; t++) {
          var r = e.combos[t]
          this.refMap[r.getId()] || (this.refMap[r.getId()] = this.ref++)
        }
      }
    },
    isSerializable: function(e) {
      return this.dataBox.contains(e) ? this.filterFunction && !this.filterFunction(e) ? !1 : !0 : !1
    },
    serializeData: function(e) {
      if (this.isSerializable(e)) {
        var t = e.newInstance(),
          n = this.refMap[e.getId()],
          r = {
            'class': e.getClassName(),
            ref: n,
            p: {},
            s: {},
            c: {}
          }
        this.settings.getPropertyType('id') && (this.jsonObject.id = e.getId()), this.jsonObject.datas.push(r), e.serializeJson(this, t, r), P.isEmptyObject(r.p) && delete r.p, P.isEmptyObject(r.s) && delete r.s, P.isEmptyObject(r.c) && delete r.c
      }
      e.getChildren().forEach(this.serializeData, this)
    },
    serializeDataValue: function(e) {
      var t = e.newInstance(),
        n = this.refMap[e.getId()],
        r = {
          'class': e.getClassName(),
          ref: n,
          p: {},
          s: {},
          c: {}
        }
      return e.serializeJson(this, t, r), P.isEmptyObject(r.p) && delete r.p, P.isEmptyObject(r.s) && delete r.s, P.isEmptyObject(r.c) && delete r.c, r
    },
    getPropertyType: function(e, t) {
      var n = this.settings.getPropertyType(t)
      return n || (e.__bool && e.__bool.indexOf(t) != -1 ? n = 'boolean' : e.__SizePropeties && e.__SizePropeties.indexOf(t) != -1 && (n = 'number')), n
    },
    getStyleType: function(e, t) {
      e.isSideStyle(t) && (t = t.substr(t.indexOf('.') + 1))
      var n = this.settings.getStyleType(t)
      return n
    },
    serializePropertyJson: function(e, t, r, i) {
      var s = this.getPropertyType(e, t)
      if (s) {
        var o = n.getValue(e, t, s),
          u = n.getValue(r, t, s)
        o !== u && (o && o.equals ? !o.equals(u) && this.serializeValue(t, o, u, s, i.p) : this.serializeValue(t, o, u, s, i.p))
      }
    },
    serializeStyleJson: function(e, t, n, r) {
      var i = this.getStyleType(e, t)
      if (i) {
        var s = e.getStyle(t),
          o = n.getStyle(t)
        t.startsWith('m.') && (s = this.flattenArray(s), o = this.flattenArray(o)), t.endsWith('.image') && (s = this.encodeURI(s), o = this.encodeURI(o)), s != o && (s && s.equals ? !s.equals(o) && this.serializeValue(t, s, o, i, r.s) : this.serializeValue(t, s, o, i, r.s))
      }
    },
    serializeClientJson: function(e, t, n, r) {
      var i = this.settings.getClientType(t)
      if (i != null) {
        var s = e.getClient(t),
          o = n.getClient(t)
        s != o && (s && s.equals ? !s.equals(o) && this.serializeValue(t, s, o, i, r.c) : this.serializeValue(t, s, o, i, r.c))
      }
    },
    serializeValue: function(e, t, n, r, i) {
      if (t == null) i[e] = null
      else if (t instanceof N) i[e] = t._as
      else if (r === 'data') {
        var s = this.refMap[t.getId()]
        s != null && (i[e] = s)
      } else if (r === 'data.list') {
        var o = []
        for (var u = 0; u < t.length; u++) o.push(this.serializeDataValue(t[u]))
        i[e] = o
      } else if (r === 'serializeabe.list') {
        var o = []
        for (var u = 0; u < t.length; u++) o.push(t[u].serializeJsonValue())
        i[e] = o
      } else t.serializeJsonValue ? i[e] = t.serializeJsonValue() : i[e] = t
    },
    deserialize: function(e, t) {
      n.isDeserializing = !0, this.jsonObject = JSON.parse(e), this.refMap = {}, this.idMap = {}
      var r = new N(),
        i = new N(),
        s, o = this.jsonObject.datas.length
      this.deserializeStartCreateData != null && this.deserializeStartCreateData(o)
      for (var u = 0; u < o; u++) {
        var a = this.jsonObject.datas[u],
          f = a['class'],
          l = this.settings.getPropertyType('id')
        if (l && a.id != null) {
          if (a.action === 'remove') {
            this.dataBox.removeById(a.id)
            continue
          }
          s = this.dataBox.getDataById(a.id), s || (s = n.newInstance(f, a.id))
        } else {
          var c = {}
          s = n.newInstance(f)
        }
        a.ref != null && (this.refMap[a.ref] = s), r.add(s), i.add(a), this.idMap[s.getId()] = s, this.deserializeCreateData && this.deserializeCreateData(u, o)
      }
      this.dataBox.forEach(function(e) {
        this.idMap[e.getId()] = e
      }, this), o = r.size(), this.deserializeStartFillData && this.deserializeStartFillData(o)
      for (u = 0; u < o; u++) s = r.get(u), s.deserializeJson(this, i.get(u)), this.deserializeFillData && this.deserializeFillData(u, o)
      this.deserializeStartAddData && this.deserializeStartAddData(o)
      for (u = 0; u < o; u++) {
        s = r.get(u)
        if (this.dataBox.containsById(s.getId())) continue
        t && !s.getParent() && s.setParent(t), s.getClassName() === 'TGL.Entity' && (s.computed = !1, s.computeNodeData()), this.dataBox.add(s), this.deserializeAddData && this.deserializeAddData(u, o)
      }
      this.settings.isDataBoxSerializable && this.jsonObject.dataBox && this.dataBox.deserializeJson(this, this.jsonObject.dataBox), n.isDeserializing = !1
    },
    deserializePropertyJson: function(e, t, r) {
      var i = this.getPropertyType(e, r)
      i && n.setValue(e, r, this.deserializeValue(t, i))
    },
    deserializeStyleJson: function(e, t, n) {
      var r = this.getStyleType(e, n)
      if (r) {
        var i = this.deserializeValue(t, r)
        i._as && (i = i._as), e.setStyle(n, i)
      }
    },
    deserializeClientJson: function(e, t, n) {
      var r = this.settings.getClientType(n)
      r && e.setClient(n, this.deserializeValue(t, r))
    },
    getClassName: function(e) {
      if (e == null) return
      if (e.class) return e.class
      if (e.w !== t && e.x !== t && e.y !== t && e.z !== t) return 'TGL.Vec4'
      if (e.x !== t && e.y !== t && e.z !== t) return 'TGL.Vec3'
      if (e.x !== t && e.y !== t) return 'TGL.Vec2'
      if (e.a !== t && e.b !== t && e.c !== t && e.d !== t) return 'TGL.Face4'
      if (e.a !== t && e.b !== t && e.c !== t) return 'TGL.Face3'
    },
    translateJson: function(e) {
      if (e == null) return
      if (this.getClassName(e) != null) {
        var t = n.newInstance(this.getClassName(e))
        if (t.deserializeJsonValue) t.deserializeJsonValue(e)
        else {
          for (var r in e) t[r] = e[r]
        }
        return t
      }
      if (e instanceof Array) {
        for (var i = 0; i < e.length; i++) e[i] = this.translateJson(e[i])
      }
      return e
    },
    isChinese: function(e) {
      return e = e || '', escape(e).indexOf('%u') > 0
    },
    encodeURI: function(e) {
      if (e instanceof Array) {
        for (var t = 0; t < e.length; t++) e[t] = this.encodeURI(e[t])
        return e
      }
      return typeof e === 'string' && this.isChinese(e) ? encodeURI(e) : e
    },
    flattenArray: function(e) {
      if (e instanceof Array) {
        for (var t = 0; t < e.length - 1; t++) {
          if (e[t] != e[t + 1]) {
            if (!e[t] || !e[t].equals) return e
            if (!e[t].equals(e[t + 1])) return e
          }
        }
        return e[0]
      }
      return e
    },
    deserializeValue: function(e, r) {
      if (r === 'data') {
        var i = this.refMap[e]
        return i || this.idMap[e]
      }
      if (r === 'data.list') {
        var s = [],
          o, u
        for (var a = 0; a < e.length; a++) o = e[a], u = n.newInstance(o.class), o.ref != null && (this.refMap[o.ref] = u), u.deserializeJson(this, o), s.push(u)
        return s
      }
      if (r === 'color' && e.r != t) {
        var f = new n.Color()
        return f.setRGB(e.r, e.g, e.b), f
      }
      if (e.class === 'TGL.Path') {
        var l = new n.Path()
        return l.deserializeJsonValue(e), l
      }
      if (e instanceof Array) {
        for (var a = 0; a < e.length; a++) e[a] = this.translateJson(e[a])
        return e
      }
      return this.getClassName(e) != null ? this.translateJson(e) : e
    }
  }), n.addMethod(n.DataBox, {
    serializeJson: function(e, t, n) {
      if (e.settings.isClientSerializable && this._clientMap) {
        for (var r in this._clientMap) this.serializeClientJson(e, r, t, n)
      }
      this.serializePropertyJson(e, 'name', t, n)
    },
    serializePropertyJson: function(e, t, n, r) {
      e.serializePropertyJson(this, t, n, r)
    },
    serializeClientJson: function(e, t, n, r) {
      e.serializeClientJson(this, t, n, r)
    },
    deserializeJson: function(e, t) {
      var n
      for (n in t.p) this.deserializePropertyJson(e, t.p[n], n)
      if (e.settings.isClientSerializable) {
        for (n in t.c) this.deserializeClientJson(e, t.c[n], n)
      }
    },
    deserializePropertyJson: function(e, t, n) {
      e.deserializePropertyJson(this, t, n)
    },
    deserializeClientJson: function(e, t, n) {
      e.deserializeClientJson(this, t, n)
    }
  }), n.addMethod(n.Data, {
    serializeJson: function(e, t, r) {
      if (this.__SizePropeties && this.__SizePropeties.length) {
        var i, s
        for (i = 0, s = this.__SizePropeties.length; i < s; i++) this.serializePropertyJson(e, this.__SizePropeties[i], t, r)
      } else this.materialSize && this.serializePropertyJson(e, 'materialSize', t, r), this instanceof n.Entity && (this.vertices && this.vertices.length && this.serializePropertyJson(e, 'vertices', t, r), this.faces && this.faces.length && this.serializePropertyJson(e, 'faces', t, r), this.uvs && this.uvs.length && this.serializePropertyJson(e, 'uvs', t, r), this.uv2s && this.uv2s.length && this.serializePropertyJson(e, 'uv2s', t, r))
      if (e.settings.isClientSerializable && this._clientMap) {
        for (var o in this._clientMap) this.serializeClientJson(e, o, t, r)
      }
      this.serializePropertyJson(e, 'name', t, r), this.serializePropertyJson(e, 'parent', t, r)
    },
    serializePropertyJson: function(e, t, n, r) {
      e.serializePropertyJson(this, t, n, r)
    },
    serializeClientJson: function(e, t, n, r) {
      e.serializeClientJson(this, t, n, r)
    },
    deserializeJson: function(e, t) {
      var n
      for (n in t.p) this.deserializePropertyJson(e, t.p[n], n)
      if (e.settings.isClientSerializable) {
        for (n in t.c) this.deserializeClientJson(e, t.c[n], n)
      }
    },
    deserializePropertyJson: function(e, t, n) {
      e.deserializePropertyJson(this, t, n)
    },
    deserializeClientJson: function(e, t, n) {
      e.deserializeClientJson(this, t, n)
    }
  }), n.addMethod(n.Element, {
    serializeJson: function(e, t, r) {
      if (e.settings.isStyleSerializable && this.styleMap) {
        for (var i in this.styleMap) this.isSideStyle(i) || this.serializeStyleJson(e, i, t, r)
      }
      n.Element.superClass.serializeJson.call(this, e, t, r), this.serializePropertyJson(e, 'position', t, r), this.serializePropertyJson(e, 'rotation', t, r), this.serializePropertyJson(e, 'scale', t, r)
      if (this._alarmState.getHighestNativeAlarmSeverity() && e.settings.getPropertyType('alarmState') === 'alarmstate') {
        var s = {
          n: {},
          a: {}
        }
        r.p.alarmState = s, n.AlarmSeverity.forEach(function(e) {
          var t = this.getNewAlarmCount(e)
          t > 0 && (s.n[e.name] = t)
        }, this._alarmState), n.AlarmSeverity.forEach(function(e) {
          var t = this.getAcknowledgedAlarmCount(e)
          t > 0 && (s.a[e.name] = t)
        }, this._alarmState), P.isEmptyObject(s.n) && delete s.n, P.isEmptyObject(s.a) && delete s.a, P.isEmptyObject(s) && delete r.p.alarmState
      }
    },
    serializeStyleJson: function(e, t, n, r) {
      e.serializeStyleJson(this, t, n, r)
    },
    deserializeJson: function(e, t) {
      n.Element.superClass.deserializeJson.call(this, e, t)
      if (e.settings.isStyleSerializable) {
        for (var r in t.s) this.deserializeStyleJson(e, t.s[r], r)
      }
    },
    deserializeStyleJson: function(e, t, n) {
      e.deserializeStyleJson(this, t, n)
    },
    deserializePropertyJson: function(e, t, r) {
      if (r === 'alarmState') {
        if (e.settings.getPropertyType('alarmState') === 'alarmstate') {
          var i
          for (i in t.n) this._alarmState.setNewAlarmCount(twaver.AlarmSeverity.getByName(i), t.n[i])
          for (i in t.a) this._alarmState.setAcknowledgedAlarmCount(twaver.AlarmSeverity.getByName(i), t.a[i])
        }
      } else n.Element.superClass.deserializePropertyJson.call(this, e, t, r)
    }
  }), n.addMethod(n.Light, {
    serializeJson: function(e, t, r) {
      n.Light.superClass.serializeJson.call(this, e, t, r), this.serializePropertyJson(e, 'color', t, r), this.serializePropertyJson(e, 'ambient', t, r), this.serializePropertyJson(e, 'diffuse', t, r), this.serializePropertyJson(e, 'specular', t, r), this.serializePropertyJson(e, 'castShadow', t, r), this.serializePropertyJson(e, 'onlyShadow', t, r)
      if (t.__accessor && t.__accessor.length) {
        for (var i = 0; i < t.__accessor.length; i++) this.serializePropertyJson(e, t.__accessor[i], t, r)
      }
    }
  })
  var Ni = n.Animate = function(e) {
    var t = this
    t.type = e.type == null ? 'number' : e.type, t.delay = e.delay == null ? 0 : e.delay, t.dur = e.dur == null ? 1e3 : e.dur, t.interval = e.interval == null ? 0 : e.interval, t.finish = e.finish == null ? t.delay + t.dur + t.interval : e.finish, t.repeat = e.repeat == null ? 1 : e.repeat, t.reverse = e.reverse == null ? !0 : e.reverse, t.easing = e.easing == null ? 'easeNone' : e.easing, t.onUpdate = e.onUpdate, t.onDone = e.onDone, t.onStop = e.onStop, t.onPlay = e.onPlay, t.attr = e.attr, t.source = e.source, t.filter = e.filter, t.from = e.from, t.to = e.to, t.start = null, t.time = 0, t.total = 0, t.count = 0, t.started = !1, t.stopped = !1, t.id = Hi++
  }
  n.extend(n.Animate, Object, {
    play: function() {
      return Ci(this)
    },
    stop: function(e) {
      return Ai(this, e)
    },
    clone: function() {
      return new Ni(this)
    },
    chain: function(e) {
      var t = this,
        n
      return t.onDone ? (n = t.onDone, t.onDone = function() {
        n.call(t), e.play()
      }) : t.onDone = function() {
        e.play()
      }, t
    }
  })
  var Pi = {},
    Hi = 1,
    Bi = !1;
  (function ji(e) {
    requestAnimationFrame(ji), Bi && (Bi = !1, Mi(e))
  })(0)
})(window)
